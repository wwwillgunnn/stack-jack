export const frontends = [
	'React',
	'Next.js',
	'Vue 3',
	'SvelteKit',
	'Solid.js',
	'Astro',
	'Nuxt',
	'Angular',
	'Remix',
	'Ripple',
	'Alpine.js',
	'HTMX'
];

export const stylings = [
	'Tailwind',
	'shadcn/ui',
	'Vanilla CSS'
	// TODO: add cool component libs here!
	// 'Open Props',
	// 'Bootstrap',
	// 'Bulma',
	// 'Material UI',
	// 'Chakra UI',
	// 'Ant Design',
	// 'DaisyUI',
	// 'Windi CSS',
	// 'Panda CSS',
	// 'Stitches'
];

export const backends = [
	'Node.js',
	'FastAPI',
	'Go',
	'Hono',
	'Phoenix',
	'Supabase Edge',
	'Deno',
	'Fastify',
	'Django',
	'Flask',
	'Ruby on Rails',
	'Spring',
	'ASP.NET',
	'Rocket',
	'Laravel',
	'NestJS',
	'Express',
	'Firebase',
	'Ktor'
];

export const dbs = [
	'PostgreSQL',
	'Redis',
	'MongoDB',
	'SQLite',
	'CockroachDB',
	'Supabase',
	'PlanetScale',
	'Turso',
	'MySQL',
	'MariaDB',
	'DynamoDB',
	'Firestore',
	'Cassandra',
	'Neon',
	'DuckDB',
	'ScyllaDB'
];

export const deploys = [
	'Vercel',
	'Railway',
	'Fly.io',
	'Cloudflare',
	'Render',
	'Netlify',
	'Deno Deploy',
	'AWS',
	'Google Cloud',
	'Azure',
	'Heroku',
	'DigitalOcean'
];

const techUrls: Record<string, string> = {
	React: 'https://react.dev',
	'Next.js': 'https://nextjs.org',
	'Vue 3': 'https://vuejs.org',
	SvelteKit: 'https://kit.svelte.dev',
	'Solid.js': 'https://solidjs.com',
	Astro: 'https://astro.build',
	Nuxt: 'https://nuxt.com',
	Angular: 'https://angular.dev',
	Remix: 'https://remix.run',
	Ripple: 'https://www.ripple-ts.com',
	'Alpine.js': 'https://alpinejs.dev',
	HTMX: 'https://htmx.org',
	Tailwind: 'https://tailwindcss.com',
	'shadcn/ui': 'https://ui.shadcn.com',
	'Vanilla CSS': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
	'Open Props': 'https://open-props.style',
	Bootstrap: 'https://getbootstrap.com',
	Bulma: 'https://bulma.io',
	'Material UI': 'https://mui.com',
	'Chakra UI': 'https://chakra-ui.com',
	'Ant Design': 'https://ant.design',
	DaisyUI: 'https://daisyui.com',
	'Windi CSS': 'https://windicss.org',
	'Panda CSS': 'https://panda-css.com',
	Stitches: 'https://stitches.dev',
	'Node.js': 'https://nodejs.org',
	FastAPI: 'https://fastapi.tiangolo.com',
	Go: 'https://go.dev',
	Hono: 'https://hono.dev',
	Phoenix: 'https://phoenixframework.org',
	'Supabase Edge': 'https://supabase.com/docs/guides/functions',
	Deno: 'https://deno.com',
	Fastify: 'https://fastify.dev',
	Django: 'https://djangoproject.com',
	Flask: 'https://flask.palletsprojects.com',
	'Ruby on Rails': 'https://rubyonrails.org',
	Spring: 'https://spring.io',
	'ASP.NET': 'https://dotnet.microsoft.com',
	Rocket: 'https://rocket.rs',
	Laravel: 'https://laravel.com',
	NestJS: 'https://nestjs.com',
	Express: 'https://expressjs.com',
	Firebase: 'https://firebase.google.com',
	Ktor: 'https://ktor.io',
	PostgreSQL: 'https://postgresql.org',
	Redis: 'https://redis.io',
	MongoDB: 'https://mongodb.com',
	SQLite: 'https://sqlite.org',
	CockroachDB: 'https://cockroachlabs.com',
	Supabase: 'https://supabase.com',
	PlanetScale: 'https://planetscale.com',
	Turso: 'https://turso.tech',
	MySQL: 'https://mysql.com',
	MariaDB: 'https://mariadb.org',
	DynamoDB: 'https://aws.amazon.com/dynamodb',
	Firestore: 'https://firebase.google.com/docs/firestore',
	Cassandra: 'https://cassandra.apache.org',
	Neon: 'https://neon.com',
	ClickHouse: 'https://clickhouse.com',
	DuckDB: 'https://duckdb.org',
	ScyllaDB: 'https://scylladb.com',
	Vercel: 'https://vercel.com',
	Railway: 'https://railway.app',
	'Fly.io': 'https://fly.io',
	Cloudflare: 'https://cloudflare.com',
	Render: 'https://render.com',
	Netlify: 'https://netlify.com',
	'Deno Deploy': 'https://deno.com/deploy',
	AWS: 'https://aws.amazon.com',
	'Google Cloud': 'https://cloud.google.com',
	Azure: 'https://azure.microsoft.com',
	Heroku: 'https://heroku.com',
	DigitalOcean: 'https://digitalocean.com'
};

export function techUrl(name: string): string {
	return techUrls[name] ?? '';
}

export function techIcon(name: string): string {
	const slug = name
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
	return `/icons/${slug}.svg`;
}

export function pick<StackItem>(arr: StackItem[]): StackItem {
	return arr[Math.floor(Math.random() * arr.length)];
}

export function randomStack() {
	return {
		frontend: pick(frontends),
		styling: pick(stylings),
		backend: pick(backends),
		db: pick(dbs),
		deploy: pick(deploys)
	};
}
