<script>
	import Dinkus from '$lib/comps/Dinkus.svelte';
	import ElementGrid from '$lib/comps/ElementGrid.svelte';
	import TemplateStart from '$lib/comps/TemplateStart.svelte';
	import Why from '$lib/comps/Why.svelte';
</script>

<div class="snap-always snap-y snap-proximity">
	<TemplateStart />
	<ElementGrid />
	<Dinkus />
	<div class="mx-auto w-fit flex flex-col">
		<Why />
	</div>
</div>
