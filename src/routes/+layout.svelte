<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		autoModeWatcher,
		Drawer,
		drawerStore,
		localStorageStore,
		LightSwitch,
		modalStore
	} from '@skeletonlabs/skeleton';
	import Navigation from '$lib/Navigation.svelte';
	import InkBottle from '$lib/InkBottle.svelte';

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<svelte:head>
	{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
</svelte:head>
<Drawer rounded="rounded-bl-full" width="w-64" position={'right'}>
	<Navigation />
</Drawer>
<!-- App Shell -->
<AppShell
	slotSidebarLeft="bg-surface-500/5 w-0 lg:w-56"
	slotSidebarRight="bg-surface-500/5 w-0 lg:w-56"
	slotFooter="bg-surface-500/20 hidden lg:block"
>
	<svelte:fragment slot="header">
		<AppBar background="bg-surface-700/5 dark:bg-surface-200/5" regionRowMain="text-center">
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<a href="/" class="lg:hidden">
						<InkBottle size={36} classes={'text-primary-400 mx-auto'} />
					</a>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="default">
				<a href="/">
					<strong class="text-2xl uppercase gradient-heading">Ink Well</strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-1" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="96" height="16" />
								<rect y="48" width="96" height="16" />
							</svg>
						</span>
					</button>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- <LeftSidebear /> -->
	</svelte:fragment>
	<svelte:fragment slot="sidebarRight">
		<!-- <RightSidebar /> -->
	</svelte:fragment>
	<div class="container mx-auto p-8 space-y-8">
		<slot />
	</div>
	<svelte:fragment slot="footer">
		<Navigation horiz />
		<!-- <Footer /> -->
	</svelte:fragment>
</AppShell>
