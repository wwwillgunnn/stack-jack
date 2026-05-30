<script lang="ts">
	import PlayingCard from '../$lib/components/PlayingCard.svelte';
	import Balatro from '../$lib/components/svelte-bits/Balatro.svelte';
	import { techIcon, techUrl, randomStack } from '../lib/stacks';
	import card from '$lib/assets/card1.png';

	let appName = $state('App Name');
	let appDesc = $state('Generate random app ideas with a matching tech stack.');
	let frontend = $state('');
	let styling = $state('');
	let backend = $state('');
	let db = $state('');
	let deploy = $state('');
	let dealKey = $state(0);
	let hasDealt = $state(false);
	let loading = $state(false);
	let errorMsg = $state('');

	async function generate() {
		loading = true;
		errorMsg = '';

		const stack = randomStack();
		({ frontend, styling, backend, db, deploy } = stack);
		appName = 'StackJack';
		appDesc = 'Your randomly dealt tech stack';
		hasDealt = true;
		dealKey++;

		try {
			const res = await fetch('/api/generate-idea', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(stack)
			});
			const idea = await res.json();

			if (idea.error) {
				errorMsg = idea.error;
			} else {
				appName = idea.name;
				appDesc = idea.desc;
				frontend = idea.frontend;
				styling = idea.styling;
				backend = idea.backend;
				db = idea.db;
				deploy = idea.deploy;
			}
		} catch {
			errorMsg = 'Network error — could not reach the server.';
		}

		loading = false;
	}

	function icon(name: string) {
		return techIcon(name);
	}
	function url(name: string) {
		return techUrl(name);
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
		class="pixel-font pointer-events-none absolute inset-0 z-10 flex flex-col items-center px-4 py-8 text-center text-white sm:px-10 sm:py-12 md:py-30 lg:px-20"
		class:justify-between={hasDealt}
		class:justify-center={!hasDealt}
	>
		{#if hasDealt}
			<div class="flex flex-col items-center gap-4">
				<h1 class="text-6xl leading-none tracking-wide sm:text-7xl lg:text-8xl">{appName}</h1>
				<span class="max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">{appDesc}</span>
				{#if errorMsg}
					<div class="max-w-lg rounded-lg bg-red-900/70 px-4 py-2 text-sm text-red-200 shadow-lg">
						{errorMsg}
					</div>
				{/if}
			</div>

			{#key dealKey}
				<div
					class="deal-active pointer-events-auto grid grid-cols-6 justify-center gap-3 sm:flex sm:gap-6"
				>
					{#each [{ title: 'Frontend', value: frontend, code: 'FE', suit: '♠', delay: '0ms', r: '-28deg', x: '-420px', y: '260px' }, { title: 'Styling', value: styling, code: 'ST', suit: '♥', delay: '90ms', r: '-16deg', x: '-260px', y: '300px' }, { title: 'Backend', value: backend, code: 'BE', suit: '♣', delay: '180ms', r: '4deg', x: '0px', y: '340px' }, { title: 'Database', value: db, code: 'DB', suit: '♦', delay: '270ms', r: '16deg', x: '260px', y: '300px' }, { title: 'Deploy', value: deploy, code: 'DP', suit: '♠', delay: '360ms', r: '28deg', x: '420px', y: '260px' }] as card, i (card)}
						<div
							class={`deal-card
								${i < 2 ? 'col-span-3' : 'col-span-2'}
								${i === 0 ? 'justify-self-end' : ''}
								${i === 1 ? 'justify-self-start' : ''}
								${i >= 2 ? 'justify-self-center' : ''}
								sm:col-span-auto
							`}
							style="--delay:{card.delay}; --r:{card.r}; --x:{card.x}; --y:{card.y}"
						>
							<PlayingCard
								title={card.title}
								value={card.value}
								code={card.code}
								suit={card.suit}
								icon={icon(card.value)}
								url={url(card.value)}
							/>
						</div>
					{/each}
				</div>
			{/key}
		{:else}
			<div class="group pointer-events-auto relative mx-auto h-80 w-54 md:h-96 md:w-64">
				{#each Array(5) as _, i (i)}
					<img
						src={card}
						alt="card"
						class={[
							'absolute top-0 left-0 aspect-5/7 w-full rounded-xl object-cover transition-all duration-300 ease-out',
							i === 0 && 'group-hover:-translate-x-10 group-hover:-rotate-12',
							i === 1 && 'group-hover:-translate-x-5 group-hover:-rotate-6',
							i === 2 && 'group-hover:translate-x-0 group-hover:rotate-0',
							i === 3 && 'group-hover:translate-x-5 group-hover:rotate-6',
							i === 4 && 'group-hover:translate-x-10 group-hover:rotate-12'
						]}
						data-empty={_}
						style={`
							transform: translate(${i * 3}px, ${i * 3}px);
							z-index: ${5 - i};
						`}
					/>
				{/each}
			</div>
		{/if}

		<div class="flex w-full max-w-3xl flex-col items-center gap-4">
			<button
				class="pointer-events-auto w-full rounded-2xl bg-linear-to-b from-[#ff4a16] via-[#ef3208] to-[#b82305] px-8 py-5 text-2xl leading-relaxed font-thin tracking-wider text-white shadow-[0_18px_45px_rgba(232,58,10,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(232,58,10,0.65)] hover:brightness-110 focus:ring-4 focus:ring-orange-300/40 focus:outline-none active:translate-y-0 active:scale-[0.98] sm:text-3xl"
				disabled={loading}
				onclick={generate}
			>
				{loading ? 'Dealing...' : 'Generate Idea!'}
			</button>

			<span class="max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
				Press to get a random app idea and matching tech stack. <br />
				<a
					href="https://startups.vercel.app"
					class="pointer-events-auto duration-150 ease-in-out hover:text-[#ff4a16]"
					>For startup ideas click Here</a
				>
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
