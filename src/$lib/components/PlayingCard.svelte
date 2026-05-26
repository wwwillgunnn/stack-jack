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
</script>

<div
	class="relative flex h-80 w-54 cursor-default items-center justify-center rounded-xl border border-white bg-white px-3 py-4 text-black shadow-[0_8px_24px_rgba(0,0,0,0.4),0_2px_6px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-300 ease-out hover:-translate-y-2.5 hover:scale-105 hover:-rotate-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.5),0_4px_12px_rgba(220,60,10,0.3)]"
>
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
