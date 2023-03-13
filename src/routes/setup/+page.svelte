<script>
	import Canvases from '$lib/comps/Canvases.svelte';
	import Diy from '$lib/comps/Diy.svelte';
	import Why from '$lib/comps/Why.svelte';
	import InkWellPromptsImage from '$lib/assets/inkwell-prompts.jpg';
</script>

<div class="mx-auto prose lg:prose-lg xl:prose-xl text-surface-800 dark:text-surface-300">
	<h1 class="gradient-heading font-extrabold text-center">How to set up for Ink Well</h1>
	<img
		src={InkWellPromptsImage}
		alt="Ink Well template with prompts"
		class="image p-0 m-0 rounded-xl border-secondary-400-500-token border-4"
	/>
	<p>
		First, you will need somewhere to draw. A pen and paper will do, or watercolors, markers,
		whatever you like. I love to use Procreate on my iPad with <a
			href="https://paperlike.com/collections/ipad-accessories"
			class="text-surface-500">Paperlike's</a
		> screen cover and magic pencil grip. As the artist, you of course choose the canvas, the muse, and
		the tools you will use. You will also need at least 5 minutes. On some days we find that completing
		this ritual takes half an hour. You will know when to proceed and when the ritual is complete by
		a subtle feeling of relief somewhere within you.
	</p>
	<blockquote class="italic font-bold text-2xl text-secondary-600-300-token">
		<p>It's my shadow. I'll draw it out however I like.</p>
	</blockquote>

	<Canvases />

	<Diy />

	<h3 class="gradient-heading mb-20">
		With your canvas set up, you are ready for <a href="/ritual" class="text-primary-500"
			>the ritual</a
		>.
	</h3>
	<hr class="!border-t-2 opacity-50" />

	<Why />
</div>
