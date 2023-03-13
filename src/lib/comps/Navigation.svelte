<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import InkBottle from '$lib/assets/InkBottle.svelte';

	function drawerClose(): void {
		drawerStore.close();
	}

	export let horiz = false;

	let links = [
		{
			href: '/',
			label: 'Home'
		},
		{
			href: '/setup',
			label: 'Setup'
		},
		{
			href: '/ritual',
			label: 'The Ritual'
		},
		{
			href: '/about',
			label: 'About'
		}
	];

	$: classesActive = (href: string) =>
		href === $page.url.pathname ? '!variant-ghost-primary' : '';
</script>

<nav class="list-nav p-4">
	<ul class={horiz ? 'horiz-list' : 'flex flex-col items-end'}>
		{#each links as { href, label }}
			<li>
				<a {href} on:click={drawerClose} class={classesActive(href)}
					>{#if href === '/'}
						<InkBottle size={36} classes={'text-surface-900 dark:text-surface-50 mx-auto'} />
					{:else}<span>{label}</span>
					{/if}</a
				>
			</li>
		{/each}
	</ul>
</nav>
