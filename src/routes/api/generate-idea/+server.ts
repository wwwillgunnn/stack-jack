import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { generateIdea } from '$lib/providers.js';

export async function POST({ request }) {
	const stack = await request.json();

	const idea = await generateIdea(env, {
		frontend: stack.frontend,
		styling: stack.styling,
		backend: stack.backend,
		db: stack.db,
		deploy: stack.deploy
	});

	return json({ ...idea, ...stack });
}
