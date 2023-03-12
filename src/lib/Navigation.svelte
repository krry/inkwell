<script lang="ts">
	import { drawerStore, LightSwitch } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import InkBottle from '$lib/InkBottle.svelte';

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
			href: '/about',
			label: 'About'
		},
		{
			href: '/how-to',
			label: 'How to Ink Well'
		},
		{
			href: '/diy',
			label: 'D.I.Y.'
		}
	];

	$: classesActive = (href: string) =>
		href === $page.url.pathname ? '!variant-ghost-primary' : '';
</script>

<nav class="list-nav p-4">
	<ul class={horiz ? 'horiz-list' : ''}>
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
		<div class={horiz ? 'inline-block py-2' : 'py-2 px-4 text-center w-full'}>
			<LightSwitch />
		</div>
	</ul>
</nav>
