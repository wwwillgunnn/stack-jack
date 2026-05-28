<script lang="ts">
	import PlayingCard from '../$lib/components/PlayingCard.svelte';
	import Balatro from '../$lib/components/svelte-bits/Balatro.svelte';

	const techIcons = {
		React: {
			bg: '#e8f4fc',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e8f4fc"/><g transform="translate(20,20)"><ellipse cx="0" cy="0" rx="14" ry="5.5" stroke="#61DAFB" stroke-width="2" fill="none"/><ellipse cx="0" cy="0" rx="14" ry="5.5" stroke="#61DAFB" stroke-width="2" fill="none" transform="rotate(60)"/><ellipse cx="0" cy="0" rx="14" ry="5.5" stroke="#61DAFB" stroke-width="2" fill="none" transform="rotate(120)"/><circle cx="0" cy="0" r="2.5" fill="#61DAFB"/></g></svg>`
		},
		'Next.js': {
			bg: '#f0f0f0',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#f0f0f0"/><text x="20" y="28" text-anchor="middle" font-size="22" font-weight="800" fill="#000" font-family="monospace">N</text></svg>`
		},
		'Vue 3': {
			bg: '#e8f5e9',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e8f5e9"/><polygon points="20,8 32,8 20,28 8,8" fill="#42b883"/><polygon points="20,8 26,8 20,20 14,8" fill="#35495e"/></svg>`
		},
		SvelteKit: {
			bg: '#fff3e0',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#fff3e0"/><text x="20" y="28" text-anchor="middle" font-size="22" font-weight="800" fill="#FF3E00" font-family="serif">S</text></svg>`
		},
		'Solid.js': {
			bg: '#e8f5e9',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e8f5e9"/><rect x="8" y="12" width="24" height="5" rx="2.5" fill="#2C4F7C"/><rect x="8" y="20" width="18" height="5" rx="2.5" fill="#446B9E"/><rect x="8" y="28" width="14" height="4" rx="2" fill="#599ED1"/></svg>`
		},
		Astro: {
			bg: '#f3e8ff',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#f3e8ff"/><text x="20" y="28" text-anchor="middle" font-size="22" font-weight="800" fill="#7c3aed" font-family="serif">A</text></svg>`
		},

		Tailwind: {
			bg: '#e0f7fa',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e0f7fa"/><path d="M20 12c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.285 1.96 1.11 2.87 2.04C22.1 19.36 23.74 21 27.5 21c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.285-1.96-1.11-2.87-2.04C25.4 13.64 23.76 12 20 12zM12.5 21c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.285 1.96 1.11 2.87 2.04C14.6 28.36 16.24 30 20 30c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.285-1.96-1.11-2.87-2.04C17.9 22.64 16.26 21 12.5 21z" fill="#06b6d4"/></svg>`
		},
		'shadcn/ui': {
			bg: '#f0f0f0',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#f0f0f0"/><rect x="10" y="10" width="8" height="8" rx="2" fill="#000"/><rect x="22" y="10" width="8" height="8" rx="2" fill="#666"/><rect x="10" y="22" width="8" height="8" rx="2" fill="#666"/><rect x="22" y="22" width="8" height="8" rx="2" fill="#000"/></svg>`
		},
		UnoCSS: {
			bg: '#fce4ec',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#fce4ec"/><text x="20" y="27" text-anchor="middle" font-size="14" font-weight="800" fill="#e91e63">UNO</text></svg>`
		},
		'Pico CSS': {
			bg: '#e8eaf6',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e8eaf6"/><circle cx="20" cy="20" r="10" stroke="#3f51b5" stroke-width="2.5" fill="none"/><circle cx="20" cy="20" r="4" fill="#3f51b5"/></svg>`
		},
		'Radix UI': {
			bg: '#f3e8ff',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#f3e8ff"/><circle cx="17" cy="15" r="6" fill="#6d28d9"/><rect x="11" y="22" width="12" height="12" rx="2" fill="#7c3aed"/><path d="M23 15 L32 15 L32 32 L23 32 Q17 32 17 26.5 Q17 21 23 21 Z" fill="#8b5cf6"/></svg>`
		},
		'Vanilla CSS': {
			bg: '#fff8e1',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#fff8e1"/><text x="20" y="28" text-anchor="middle" font-size="20" font-weight="800" fill="#f59e0b">CSS</text></svg>`
		},
		'Open Props': {
			bg: '#e0f2f1',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e0f2f1"/><circle cx="20" cy="20" r="10" fill="none" stroke="#00897b" stroke-width="2.5"/><circle cx="20" cy="20" r="4" fill="#00897b"/></svg>`
		},

		'Node.js': {
			bg: '#e8f5e9',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e8f5e9"/><polygon points="20,7 32,14 32,26 20,33 8,26 8,14" fill="none" stroke="#339933" stroke-width="2"/><text x="20" y="25" text-anchor="middle" font-size="11" font-weight="700" fill="#339933">NODE</text></svg>`
		},
		'Python/FastAPI': {
			bg: '#e3f2fd',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e3f2fd"/><path d="M20 8c-4.4 0-5.5 2-5.5 4.5v2h11v1.5H11.5S8 16.3 8 21.5s2.8 5 5.5 5h2.5v-3c0-3.2 2.8-4.5 5.5-4.5h6.5s4.5-.3 4.5-4.5-3.5-6.5-7.5-6.5H20zM17 11c.83 0 1.5.67 1.5 1.5S17.83 14 17 14s-1.5-.67-1.5-1.5S16.17 11 17 11z" fill="#3776ab"/><path d="M20 32c4.4 0 5.5-2 5.5-4.5v-2H14.5V24H28.5s3.5.2 3.5-5-2.8-5-5.5-5h-2.5v3c0 3.2-2.8 4.5-5.5 4.5H12s-4.5.3-4.5 4.5 3.5 6.5 7.5 6.5H20zM23 29c-.83 0-1.5-.67-1.5-1.5S22.17 26 23 26s1.5.67 1.5 1.5S23.83 29 23 29z" fill="#ffd343"/></svg>`
		},
		Go: {
			bg: '#e0f7fa',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e0f7fa"/><text x="20" y="27" text-anchor="middle" font-size="18" font-weight="800" fill="#00add8" font-family="monospace">Go</text></svg>`
		},
		'Bun/Hono': {
			bg: '#fff3e0',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#fff3e0"/><ellipse cx="20" cy="22" rx="12" ry="10" fill="#fbf0df" stroke="#f1a10d" stroke-width="2"/><circle cx="16" cy="18" r="2" fill="#2d2d2d"/><circle cx="24" cy="18" r="2" fill="#2d2d2d"/><path d="M16 25 Q20 28 24 25" stroke="#d4822a" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`
		},
		'Elixir/Phoenix': {
			bg: '#f3e8ff',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#f3e8ff"/><path d="M20 5 C10 12 8 20 12 27 C16 34 24 34 28 27 C32 20 30 12 20 5Z" fill="#6d28d9" opacity="0.8"/><path d="M20 12 C16 16 15 21 17 25 C19 29 21 29 23 25 C25 21 24 16 20 12Z" fill="#c4b5fd"/></svg>`
		},
		'Supabase Edge': {
			bg: '#e8f5e9',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e8f5e9"/><path d="M28 8H15L10 22h10L14 36l18-18H22z" fill="#3ECF8E"/></svg>`
		},
		'Deno/Oak': {
			bg: '#f0f0f0',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#f0f0f0"/><circle cx="20" cy="20" r="12" fill="#1a1a1a"/><circle cx="17" cy="18" r="2" fill="white"/><circle cx="20" cy="28" r="1.5" fill="#444"/><circle cx="26" cy="22" r="1.5" fill="#444"/><circle cx="14" cy="24" r="1.5" fill="#444"/></svg>`
		},
		'Node/Fastify': {
			bg: '#e8f5e9',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e8f5e9"/><polygon points="20,7 32,14 32,26 20,33 8,26 8,14" fill="none" stroke="#339933" stroke-width="2"/><path d="M14 20h12M20 14v12" stroke="#339933" stroke-width="2" stroke-linecap="round"/></svg>`
		},

		PostgreSQL: {
			bg: '#e3f2fd',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e3f2fd"/><ellipse cx="20" cy="14" rx="11" ry="5" fill="#336791" opacity="0.9"/><rect x="9" y="14" width="22" height="14" fill="#336791" opacity="0.7"/><ellipse cx="20" cy="28" rx="11" ry="5" fill="#336791"/><path d="M30 19 Q32 22 30 25" stroke="#5b9bd5" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`
		},
		Redis: {
			bg: '#ffebee',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#ffebee"/><path d="M8 22l12 5 12-5-12-5z" fill="#D82C20"/><path d="M8 17l12 5 12-5-12-5z" fill="#D82C20" opacity="0.7"/><path d="M8 12l12 5 12-5-12-5z" fill="#D82C20" opacity="0.4"/></svg>`
		},
		MongoDB: {
			bg: '#e8f5e9',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e8f5e9"/><path d="M20 6 C20 6 27 14 27 22 C27 30 23.5 34 20 34 C16.5 34 13 30 13 22 C13 14 20 6 20 6Z" fill="#4DB33D"/><rect x="19" y="26" width="2" height="8" rx="1" fill="#3F9142"/></svg>`
		},
		SQLite: {
			bg: '#e3f2fd',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e3f2fd"/><text x="20" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#0f4c81">SQLite</text><path d="M12 30 Q20 34 28 30" stroke="#0f4c81" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`
		},
		CockroachDB: {
			bg: '#fff3e0',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#fff3e0"/><ellipse cx="20" cy="20" rx="9" ry="11" fill="none" stroke="#6933FF" stroke-width="2"/><line x1="20" y1="9" x2="16" y2="6" stroke="#6933FF" stroke-width="1.5" stroke-linecap="round"/><line x1="20" y1="9" x2="24" y2="6" stroke="#6933FF" stroke-width="1.5" stroke-linecap="round"/><line x1="20" y1="31" x2="16" y2="34" stroke="#6933FF" stroke-width="1.5" stroke-linecap="round"/><line x1="20" y1="31" x2="24" y2="34" stroke="#6933FF" stroke-width="1.5" stroke-linecap="round"/><circle cx="20" cy="20" r="3" fill="#6933FF"/></svg>`
		},
		Supabase: {
			bg: '#e8f5e9',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e8f5e9"/><path d="M28 8H15L10 22h10L14 36l18-18H22z" fill="#3ECF8E"/></svg>`
		},
		PlanetScale: {
			bg: '#f0f0f0',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#f0f0f0"/><circle cx="20" cy="20" r="11" fill="none" stroke="#000" stroke-width="2"/><path d="M11 28 Q20 14 29 12" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`
		},
		Turso: {
			bg: '#f0faf0',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#f0faf0"/><text x="20" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#36b34a">turso</text></svg>`
		},

		Vercel: {
			bg: '#f0f0f0',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#f0f0f0"/><polygon points="20,10 33,30 7,30" fill="#000"/></svg>`
		},
		Railway: {
			bg: '#fce4ec',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#fce4ec"/><rect x="10" y="14" width="20" height="4" rx="2" fill="#d63384"/><rect x="13" y="20" width="3" height="12" rx="1.5" fill="#d63384"/><rect x="24" y="20" width="3" height="12" rx="1.5" fill="#d63384"/></svg>`
		},
		'Fly.io': {
			bg: '#e8eaf6',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e8eaf6"/><path d="M20 8 L28 16 L28 28 Q20 34 12 28 L12 16 Z" fill="none" stroke="#4f46e5" stroke-width="2"/><circle cx="20" cy="20" r="3" fill="#4f46e5"/></svg>`
		},
		Cloudflare: {
			bg: '#fff3e0',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#fff3e0"/><path d="M30 22.5c.2-.5.3-1 .3-1.5 0-2.8-2.3-5-5-5-.5 0-1 .1-1.5.2-1-2.5-3.3-4.2-6-4.2-3.6 0-6.5 2.9-6.5 6.5 0 .1 0 .2 0 .3C9.3 19.5 8 21 8 22.8c0 2 1.6 3.5 3.5 3.5h18c1.9 0 3.5-1.5 3.5-3.5 0-.1 0-.2 0-.3z" fill="#F6821F"/></svg>`
		},
		Render: {
			bg: '#e8f5e9',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e8f5e9"/><path d="M12 14 L20 10 L28 14 L28 26 L20 30 L12 26 Z" fill="none" stroke="#46E3B7" stroke-width="2.5"/></svg>`
		},
		Netlify: {
			bg: '#e0f7fa',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#e0f7fa"/><path d="M20 8 L32 20 L20 32 L8 20 Z" fill="none" stroke="#00C7B7" stroke-width="2.5"/><circle cx="20" cy="20" r="3" fill="#00C7B7"/></svg>`
		},
		'Deno Deploy': {
			bg: '#f0f0f0',
			svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#f0f0f0"/><circle cx="20" cy="20" r="12" fill="#1a1a1a"/><circle cx="17" cy="18" r="2" fill="white"/></svg>`
		}
	};

	const ideas: {
		name: string;
		desc: string;
		frontend: string;
		styling: string;
		backend: string;
		db: string;
		deploy: string;
	}[] = [
		{
			name: 'HabitForge',
			desc: 'AI-powered habit tracker with streak analytics',
			frontend: 'React',
			styling: 'Tailwind',
			backend: 'Node.js',
			db: 'PostgreSQL',
			deploy: 'Vercel'
		},
		{
			name: 'CodeBrief',
			desc: 'Auto-generate pull request summaries with AI',
			frontend: 'Next.js',
			styling: 'shadcn/ui',
			backend: 'Python/FastAPI',
			db: 'Redis',
			deploy: 'Railway'
		},
		{
			name: 'Moodboard+',
			desc: 'Collaborative design inspiration boards',
			frontend: 'Vue 3',
			styling: 'UnoCSS',
			backend: 'Go',
			db: 'MongoDB',
			deploy: 'Fly.io'
		},
		{
			name: 'DevDiary',
			desc: 'Daily dev journal with automatic git summaries',
			frontend: 'SvelteKit',
			styling: 'Pico CSS',
			backend: 'Bun/Hono',
			db: 'SQLite',
			deploy: 'Cloudflare'
		},
		{
			name: 'LinkPulse',
			desc: 'Smart bookmark manager with auto-tagging',
			frontend: 'React',
			styling: 'Radix UI',
			backend: 'Elixir/Phoenix',
			db: 'CockroachDB',
			deploy: 'Render'
		},
		{
			name: 'RetroBoard',
			desc: 'Real-time team retrospective tool',
			frontend: 'Next.js',
			styling: 'Tailwind',
			backend: 'Supabase Edge',
			db: 'Supabase',
			deploy: 'Vercel'
		},
		{
			name: 'FocusFlow',
			desc: 'Pomodoro timer synced across all your devices',
			frontend: 'Solid.js',
			styling: 'Vanilla CSS',
			backend: 'Deno/Oak',
			db: 'PlanetScale',
			deploy: 'Deno Deploy'
		},
		{
			name: 'SnippetBox',
			desc: 'Beautiful code snippet sharing & discovery',
			frontend: 'Astro',
			styling: 'Open Props',
			backend: 'Node/Fastify',
			db: 'Turso',
			deploy: 'Netlify'
		}
	];

	// Start with placeholder values shown before first generate
	let appName = $state('App Name');
	let appDesc = $state('Generate random app ideas with a matching tech stack.');
	let frontend = $state('');
	let styling = $state('');
	let backend = $state('');
	let db = $state('');
	let deploy = $state('');

	function getIcon(name: string) {
		return techIcons[name as keyof typeof techIcons]?.svg ?? '⬡';
	}

	let dealKey = $state(0);
	let hasDealt = $state(false);

	function generate() {
		const idea = ideas[Math.floor(Math.random() * ideas.length)];

		appName = idea.name;
		appDesc = idea.desc;
		frontend = idea.frontend;
		styling = idea.styling;
		backend = idea.backend;
		db = idea.db;
		deploy = idea.deploy;

		hasDealt = true;
		dealKey++;
	}
</script>

<div class="relative h-screen w-full overflow-hidden">
	<Balatro
		isRotate={false}
		mouseInteraction={true}
		pixelFilter={1000}
		color1="#FF3E00"
		color2="#FF8A4C"
		color3="#14110E"
	/>

	<div
		class="pixel-font pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-between px-4 py-8 text-center text-white sm:px-10 sm:py-12 md:py-30 lg:px-20"
	>
		<div class="flex flex-col items-center gap-4">
			<h1 class="text-6xl leading-none tracking-wide sm:text-7xl lg:text-8xl">{appName}</h1>
			<span class="max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">{appDesc}</span>
		</div>

		{#key dealKey}
			<div
				class="pointer-events-auto grid grid-cols-6 justify-center gap-3 sm:flex sm:gap-6"
				class:deal-active={hasDealt}
			>
				<div
					class="deal-card sm:col-span-auto col-span-3 justify-self-end [--delay:0ms] [--r:-28deg] [--x:-420px] [--y:260px]"
				>
					<PlayingCard
						title="Frontend"
						value={frontend}
						code="FE"
						suit="♠"
						icon={getIcon(frontend)}
					/>
				</div>

				<div
					class="deal-card sm:col-span-auto col-span-3 justify-self-start [--delay:90ms] [--r:-16deg] [--x:-260px] [--y:300px]"
				>
					<PlayingCard title="Styling" value={styling} code="ST" suit="♥" icon={getIcon(styling)} />
				</div>

				<div
					class="deal-card sm:col-span-auto col-span-2 justify-self-center [--delay:180ms] [--r:4deg] [--x:0px] [--y:340px]"
				>
					<PlayingCard title="Backend" value={backend} code="BE" suit="♣" icon={getIcon(backend)} />
				</div>

				<div
					class="deal-card sm:col-span-auto col-span-2 justify-self-center [--delay:270ms] [--r:16deg] [--x:260px] [--y:300px]"
				>
					<PlayingCard title="Database" value={db} code="DB" suit="♦" icon={getIcon(db)} />
				</div>

				<div
					class="deal-card sm:col-span-auto col-span-2 justify-self-center [--delay:360ms] [--r:28deg] [--x:420px] [--y:260px]"
				>
					<PlayingCard title="Deploy" value={deploy} code="DP" suit="♠" icon={getIcon(deploy)} />
				</div>
			</div>
		{/key}

		<div class="flex w-full max-w-3xl flex-col items-center gap-4">
			<button
				class="pointer-events-auto w-full rounded-2xl bg-linear-to-b from-[#ff4a16] via-[#ef3208] to-[#b82305] px-8 py-5 text-2xl leading-relaxed font-thin tracking-wider text-white shadow-[0_18px_45px_rgba(232,58,10,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(232,58,10,0.65)] hover:brightness-110 focus:ring-4 focus:ring-orange-300/40 focus:outline-none active:translate-y-0 active:scale-[0.98] sm:text-3xl"
				onclick={generate}
			>
				Generate Idea!
			</button>

			<span class="max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
				Press to get a random app idea and matching tech stack.
			</span>
		</div>
	</div>
</div>

<style>
	.deal-active .deal-card {
		opacity: 0;
		transform-origin: bottom center;
		animation: deal-card 650ms cubic-bezier(0.16, 1, 0.3, 1) var(--delay) forwards;
	}

	@keyframes deal-card {
		0% {
			opacity: 0;
			transform: translate(var(--x), var(--y)) rotate(var(--r)) scale(0.75);
		}

		65% {
			opacity: 1;
			transform: translate(0, -10px) rotate(0deg) scale(1.04);
		}

		100% {
			opacity: 1;
			transform: translate(0, 0) rotate(0deg) scale(1);
		}
	}
</style>
