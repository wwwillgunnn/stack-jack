import { json } from '@sveltejs/kit';
import { OPENAI_API_KEY } from '$env/static/private';

const fallbackIdeas = [
	{
		name: 'HabitForge',
		desc: 'AI-powered habit tracker with streak analytics',
		frontend: 'React',
		styling: 'Tailwind',
		backend: 'Node.js',
		db: 'PostgreSQL',
		deploy: 'Vercel'
	}
];

export async function POST() {
	try {
		const response = await fetch('https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${OPENAI_API_KEY}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				model: 'gpt-4o-mini',
				messages: [
					{
						role: 'system',
						content: `
						You generate fun, practical app ideas for developers.

						Return only valid JSON.
						No markdown.
						No extra text.

						The JSON must match this shape:
						{
						"name": "string",
						"desc": "string",
						"frontend": "string",
						"styling": "string",
						"backend": "string",
						"db": "string",
						"deploy": "string"
						}

						Keep the app name short.
						Keep the description under 12 words.
						Choose realistic modern tech stacks.
						`
					},
					{
						role: 'user',
						content: 'Generate one unique app idea with a matching tech stack.'
					}
				],
				temperature: 1
			})
		});

		if (!response.ok) {
			return json(fallbackIdeas[0]);
		}

		const data = await response.json();
		const content = data.choices?.[0]?.message?.content;

		if (!content) {
			return json(fallbackIdeas[0]);
		}

		const idea = JSON.parse(content);

		return json({
			name: idea.name,
			desc: idea.desc,
			frontend: idea.frontend,
			styling: idea.styling,
			backend: idea.backend,
			db: idea.db,
			deploy: idea.deploy
		});
	} catch {
		return json(fallbackIdeas[0]);
	}
}
