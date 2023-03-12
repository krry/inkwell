<script>
	import InkBottle from '$lib/InkBottle.svelte';
</script>

<div
	class="grid grid-flow-row md:grid-cols-2 md:grid-rows-2 grid-rows-4 gap-8 lg:gap-16 relative text-center lg:mt-8"
>
	<a href="/how-to?step=1" class="quadrant-card card card-hover variant-glass-warning">
		<h2 class="quadrant-prompt card-header unstyled">Free what's stuck</h2>
		<div class="text-4xl badge-icon self-center -scale-x-100 mt-4">🌬️</div>
		<p class="p-4">Write the word that is stuck in your mind. Leave it behind, adorned.</p>
	</a>
	<a href="/how-to?step=2" class="quadrant-card card card-hover variant-glass-surface">
		<h2 class="quadrant-prompt card-header unstyled">Face your feels</h2>
		<div class="text-4xl badge-icon self-center">🌊</div>
		<p class="p-4">Draw a face that feels like you feel.</p>
	</a>
	<a href="/how-to?step=3" class="quadrant-card card card-hover variant-glass-success">
		<h2 class="quadrant-prompt card-header unstyled">Greet your need</h2>
		<div class="text-4xl badge-icon self-center">🕳️</div>
		<p class="p-4">Draw the empty shape of your unmet need. Then fill it in.</p>
	</a>
	<a href="/how-to?step=4" class="quadrant-card card card-hover variant-glass-error">
		<h2 class="quadrant-prompt card-header unstyled">Burn your burden</h2>
		<div class="text-4xl badge-icon self-center mt-4">🔥</div>
		<p class="p-4">Draw whatever is weighing you down … on fire.</p>
	</a>
	<a
		href="/how-to?step=5"
		class="card card-hover md:absolute bg-primary-300-500-token z-1 opacity-75 hover:z-10 hover:opacity-100 cursor-default inset-0 m-auto rounded-full h-64 w-64 flex flex-col justify-center items-center border-2 border-secondary-200 dark:border-secondary-700 transition-opacity duration-300 ease-in-out reveal-link-on-focus"
	>
		<InkBottle size={64} classes={'text-secondary-400 -mt-16'} />
		<h1 class="gradient-heading font-bold">Ink Well</h1>
		<div
			class="hidden-link mt-4 absolute bottom-8 inset-x-0 mx-auto bg-transparent opacity-0 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center"
		>
			<div class="px-12">
				<p class="text-sm">Get the template</p>
				<div class="flex justify-center items-center">
					<a href="/inkwell-template.pdf" download>pdf</a>
					<span class="badge-icon text-2xl mx-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
							/>
						</svg>
					</span>
					<a href="/inkwell-template.png" download>png</a>
				</div>
			</div>
		</div>
	</a>
</div>
