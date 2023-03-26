<script lang="ts">
	import ElementGrid from '$lib/comps/ElementGrid.svelte';
	import TemplateStart from '$lib/comps/TemplateStart.svelte';
	import What from '$lib/comps/What.svelte';
	import Why from '$lib/comps/Why.svelte';
</script>

<svelte:head>
	<title>Ink Well</title>
	<meta
		name="description"
		content="When we Ink Well, we draw our shadow into the light. Here this practice is presented as a
	meditative ritual, repeatable daily. You may find that this practice fits well at the start of your day, like Julia Cameron’s morning pages from The Artist's Way."
	/>
</svelte:head>
<div class="snap-always snap-y snap-proximity">
	<TemplateStart />
	<ElementGrid />
	<div class="mx-auto w-fit flex flex-col prose lg:prose-lg xl:prose-xl">
		<What />
		<Why />
	</div>
</div>
