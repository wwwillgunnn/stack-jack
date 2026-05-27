<script lang="ts">
	type Props = {
		title: string;
		value: string;
		code?: string;
		suit?: string;
		icon?: string;
	};

	let {
		title,
		value,
		code = title.slice(0, 2).toUpperCase(),
		suit = '♠',
		icon = '⬡'
	}: Props = $props();

	let cardEl: HTMLDivElement;
	let shineEl: HTMLDivElement;
	let raf: number;

	const TILT = 15;

	function onMouseMove(e: MouseEvent) {
		cancelAnimationFrame(raf);
		raf = requestAnimationFrame(() => {
			const rect = cardEl.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			const px = x / rect.width;
			const py = y / rect.height;
			const rotX = (py - 0.5) * -TILT * 2;
			const rotY = (px - 0.5) * TILT * 2;

			cardEl.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.05,1.05,1.05)`;
			cardEl.style.boxShadow = `${-rotY * 1.2}px ${rotX * 1.2}px 40px rgba(0,0,0,0.35), 0 24px 48px rgba(0,0,0,0.3)`;
			shineEl.style.opacity = '0.15';
			shineEl.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.85) 0%, transparent 60%)`;
		});
	}

	function onMouseLeave() {
		cancelAnimationFrame(raf);
		cardEl.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
		cardEl.style.boxShadow =
			'0 8px 24px rgba(0,0,0,0.4),0 2px 6px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.8)';
		shineEl.style.opacity = '0';
	}
</script>

<!-- Onclick change to button and maybe go to the docs page? -->
<div
	role="tab"
	tabindex="0"
	aria-label={`${title}: ${value}`}
	bind:this={cardEl}
	onmousemove={onMouseMove}
	onmouseleave={onMouseLeave}
	aria-roledescription="kk"
	class="relative flex h-80 w-54 cursor-default items-center justify-center rounded-xl border border-white bg-white px-3 py-4 text-black shadow-[0_8px_24px_rgba(0,0,0,0.4),0_2px_6px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.8)] transition-[box-shadow,transform] duration-100 ease-out"
	style="transform-style: preserve-3d; will-change: transform;"
>
	<!-- Shine overlay -->
	<div
		bind:this={shineEl}
		class="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
		style="opacity: 0; z-index: 10;"
	></div>

	<!-- Suit info -->
	<div
		class="absolute top-2.5 left-2.5 text-sm leading-none font-bold tracking-wider text-black/55 uppercase md:text-2xl"
	>
		<span>{code}</span>
		<span class="text-md mt-0.5 block text-black/70">{suit}</span>
	</div>

	<div
		class="text-md absolute right-2.5 bottom-2.5 rotate-180 leading-none font-bold tracking-wider text-[#783c14]/55 uppercase md:text-2xl"
	>
		<span>{code}</span>
		<span class="text-md mt-0.5 block text-black/70">{suit}</span>
	</div>

	<!-- Middle Section -->
	<div class="flex flex-col items-center justify-center gap-3 text-center">
		<div class="flex size-28 items-center justify-center overflow-hidden rounded-xl md:size-36">
			{@html icon}
		</div>
		<div>
			<h3 class="m-0 text-lg font-bold tracking-wider text-black/65 uppercase">
				{title}
			</h3>
			<p class="mt-1 text-xl leading-tight font-bold text-black/80">
				{value}
			</p>
		</div>
	</div>
</div>
