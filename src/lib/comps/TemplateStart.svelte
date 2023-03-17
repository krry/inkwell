<script>
	import InkBottle from '$lib/assets/InkBottle.svelte';
	import InkWellTemplateImage from '$lib/assets/inkwell-template.jpg';
</script>

<div
	class="text-center m-auto lg:h-[77vh] flex justify-center items-center relative mb-24 lg:mb-48 snap-start"
>
	<a
		href="/ritual?step=0"
		class="card card-hover absolute bg-white z-10 inset-0 m-auto rounded-full h-60 w-60 flex flex-col justify-center items-center border-[3px] hover:border-secondary-400 hover:dark:border-secondary-500 transition-opacity duration-300 ease-in-out reveal-link-on-focus no-underline"
	>
		<InkBottle size={64} classes={'text-secondary-400'} />
		<h1 class="gradient-heading font-bold">Ink Well</h1>
		<button class="btn variant-filled-primary my-3">Show me how</button>
	</a>
	<a
		href={'/inkwell-template.pdf'}
		download
		class="block hover:[&>figure>img]:border-secondary-400-500-token !no-underline"
	>
		<figure class="relative">
			<img
				src={InkWellTemplateImage}
				alt="A blank Ink Well template"
				class="image p-0 m-0 rounded-xl border-transparent border-[3px] max-h-[61vh] max-w-[92vw]"
			/>
			<figcaption
				class="text-sm py-2 text-surface-800-100-token absolute inset-x-0 -bottom-[3.75em]"
			>
				First, get the template 👆
				<div class="flex justify-center items-center">
					<a href="/inkwell-template.pdf" download>PDF</a>
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
					<a href="/inkwell-template.jpg" download>JPEG</a>
				</div>
			</figcaption>
		</figure>
	</a>
</div>
