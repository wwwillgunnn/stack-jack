export interface IdeaRequest {
	frontend: string;
	styling: string;
	backend: string;
	db: string;
	deploy: string;
}

export interface IdeaResponse {
	name: string;
	desc: string;
	error?: string;
}

const SYSTEM_PROMPT = `You invent creative app ideas that use the EXACT tech stack provided.

Return only valid JSON. No markdown. No extra text.

The JSON must match this shape:
{
  "name": "string",
  "desc": "string"
}

Rules:
- App name: short (1-3 words), clever, memorable
- Description: 1 sentence explaining what the app does and what makes it interesting
- Make it feel specific and original — avoid generic boilerplate like "app that helps users..."
- Do not mention the techstack in your answer just talk about what the app does`;

type ProviderId = 'openai' | 'groq' | 'openrouter' | 'gemini';

interface ProviderDef {
	name: string;
	baseUrl: string;
	model: string;
	apiKeyEnvVar: string;
}

const PROVIDERS: Record<ProviderId, ProviderDef> = {
	openai: {
		name: 'OpenAI',
		baseUrl: 'https://api.openai.com/v1',
		model: 'gpt-4o-mini',
		apiKeyEnvVar: 'OPENAI_API_KEY'
	},
	groq: {
		name: 'Groq',
		baseUrl: 'https://api.groq.com/openai/v1',
		model: 'llama-3.3-70b-versatile',
		apiKeyEnvVar: 'GROQ_API_KEY'
	},
	openrouter: {
		name: 'OpenRouter',
		baseUrl: 'https://openrouter.ai/api/v1',
		model: 'openai/gpt-4o-mini',
		apiKeyEnvVar: 'OPENROUTER_API_KEY'
	},
	gemini: {
		name: 'Gemini',
		baseUrl: 'https://generativelanguage.googleapis.com/v1beta',
		model: 'gemini-2.0-flash',
		apiKeyEnvVar: 'GEMINI_API_KEY'
	}
};

function buildUserPrompt(stack: IdeaRequest): string {
	return `Generate one app idea using this exact tech stack:
- Frontend: ${stack.frontend}
- Styling: ${stack.styling}
- Backend: ${stack.backend}
- Database: ${stack.db}
- Deploy: ${stack.deploy}`;
}

function stripMarkdown(text: string): string {
	return text
		.replace(/```(?:json)?\s*/gi, '')
		.replace(/```\s*$/g, '')
		.trim();
}

async function callOpenAICompatible(
	def: ProviderDef,
	apiKey: string,
	stack: IdeaRequest
): Promise<IdeaResponse | null> {
	const headers: Record<string, string> = {
		Authorization: `Bearer ${apiKey}`,
		'Content-Type': 'application/json'
	};

	if (def.name === 'OpenRouter') {
		headers['HTTP-Referer'] = 'https://stack-jack.vercel.app';
		headers['X-Title'] = 'StackJack';
	}

	const res = await fetch(`${def.baseUrl}/chat/completions`, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			model: def.model,
			messages: [
				{ role: 'system', content: SYSTEM_PROMPT },
				{ role: 'user', content: buildUserPrompt(stack) }
			],
			temperature: 0.9
		})
	});

	if (!res.ok) {
		const body = await res.text();
		console.error(`[${def.name}] ${res.status} ${res.statusText}: ${body}`);
		return null;
	}

	const data = await res.json();
	const content: string | undefined = data.choices?.[0]?.message?.content;
	if (!content) {
		console.error(`[${def.name}] Unexpected response shape:`, JSON.stringify(data));
		return null;
	}

	return JSON.parse(stripMarkdown(content));
}

async function callGemini(
	def: ProviderDef,
	apiKey: string,
	stack: IdeaRequest
): Promise<IdeaResponse | null> {
	const res = await fetch(`${def.baseUrl}/models/${def.model}:generateContent?key=${apiKey}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			contents: [
				{
					parts: [{ text: `${SYSTEM_PROMPT}\n\n${buildUserPrompt(stack)}` }]
				}
			],
			generationConfig: { temperature: 0.9 }
		})
	});

	if (!res.ok) {
		const body = await res.text();
		console.error(`[${def.name}] ${res.status} ${res.statusText}: ${body}`);
		return null;
	}

	const data = await res.json();
	const text: string | undefined = data.candidates?.[0]?.content?.parts?.[0]?.text;
	if (!text) {
		console.error(`[${def.name}] Unexpected response shape:`, JSON.stringify(data));
		return null;
	}

	return JSON.parse(stripMarkdown(text));
}

export function getActiveProvider(env: Record<string, string | undefined>): {
	def: ProviderDef;
	apiKey: string | undefined;
} {
	const id = (env.AI_PROVIDER || 'openai') as ProviderId;
	const def = PROVIDERS[id] ?? PROVIDERS.openai;
	const apiKey = env[def.apiKeyEnvVar];
	return { def, apiKey };
}

export function getFallbackIdea(): IdeaResponse {
	return {
		name: 'StackJack',
		desc: 'Your randomly dealt tech stack'
	};
}

export async function generateIdea(
	env: Record<string, string | undefined>,
	stack: IdeaRequest
): Promise<IdeaResponse> {
	const { def, apiKey } = getActiveProvider(env);

	if (!apiKey) {
		const msg = `Missing API key for "${def.name}". Set ${def.apiKeyEnvVar} in your .env file.`;
		console.error(msg);
		return { ...getFallbackIdea(), error: msg };
	}

	try {
		const result =
			def.name === 'Gemini'
				? await callGemini(def, apiKey, stack)
				: await callOpenAICompatible(def, apiKey, stack);

		if (!result) {
			return {
				...getFallbackIdea(),
				error: `${def.name} returned an error — check the server terminal for details.`
			};
		}

		return { name: result.name, desc: result.desc };
	} catch (e) {
		const msg = `${def.name} request failed: ${e instanceof Error ? e.message : 'unknown error'}`;
		console.error(msg);
		return { ...getFallbackIdea(), error: msg };
	}
}
