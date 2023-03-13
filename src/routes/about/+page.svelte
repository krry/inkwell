<script>
	import SkeletonLogo from '$lib/assets/SkeletonLogo.svelte';
	import SvelteLogo from '$lib/assets/SvelteLogo.svelte';
	import VercelLogo from '$lib/assets/VercelLogo.svelte';
</script>

<div class="prose lg:prose-lg xl:prose-xl  mx-auto">
	<h1 class="gradient-heading font-extrabold">About Ink Well™</h1>
	<div class="italic font-bold text-2xl">
		What a way, once-a-day, to draw our shadows into the light!
	</div>
	<hr />
	<div class="text-surface-800 dark:text-surface-300">
		<h2 class="gradient-heading">Deep within us sits a well.</h2>
		<p>
			At the bottom of the well lies the Source. Love bubbles up infinite and pure as our shadow
			oozes down to pool on the surface.
		</p>
		<p>
			Left untended our shadow can taint anything we try to create, any choice we make, any words we
			say.
		</p>
		<p>
			To clear the way from the Source to the World, each day we can dip our psychic quills in that
			inky syrup and draw our shadow into the light.
		</p>
	</div>
	<hr />
	<h2 class="gradient-heading">Gratitude! Gratitude! Gratitude!</h2>
	<div>
		A extra special thanks to the creators of
		<a href="https://skeleton.dev" class="btn variant-soft-surface no-underline btn-sm">
			<span>
				<SkeletonLogo size={16} />
			</span>
			<span>Skeleton</span></a
		>
		<a href="https://kit.svelte.dev" class="btn variant-soft no-underline btn-sm">
			<span>
				<SvelteLogo size={16} />
			</span>
			<span>SvelteKit</span>
		</a>
		<a href="https://vercel.com" class="btn variant-soft no-underline btn-sm">
			<span>
				<VercelLogo size={16} />
			</span>
			<span>Vercel</span>
		</a> and countless other designers and devs who made this site possible in less than a day's work.
	</div>
</div>

<slot name="pageFooter">
	<div class="prosy mx-auto">
		<p class="text-center text-sm text-surface-800/50 cursor-default">
			Made with 💓 • 🧿 by <a href="https://krry.dev" class="!text-inherit !no-underline">Kerry</a>
			<span class="inline-block -scale-x-100">©</span>
			{new Date().getFullYear()}
		</p>
	</div>
</slot>
