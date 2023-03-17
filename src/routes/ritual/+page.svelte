<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { localStorageStore, Step, Stepper } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';
	const stepParam = $page.url.searchParams.get('step');
	export let startOnStep = stepParam ? +stepParam : 0;
	const remindedAboutMethod = localStorageStore('remindedAboutMethod', false);
	let hasAdvanced = false;
	export function checkStep(event: CustomEvent) {
		console.log('state', event.detail.state.current);
		if (event.detail.state.current > 0) {
			hasAdvanced = true;
		}
	}
</script>

{#if !hasAdvanced}<h1
		class="gradient-heading font-extrabold max-w-2xl mx-auto text-center mb-12"
		transition:fade|local={{ duration: 200 }}
	>
		The Ritual
	</h1>{/if}
{#if !$remindedAboutMethod}
	<aside
		class="alert variant-ghost-primary mx-auto lg:max-w-lg"
		transition:fade|local={{ duration: 200 }}
	>
		<div class="alert-message">
			<h3>Have you <a href="/setup">set up</a> a canvas?</h3>
		</div>
		<div class="alert-actions">
			<button
				type="button"
				class="btn variant-filled-success"
				on:click={() => remindedAboutMethod.set(true)}>Yes</button
			>
			<button
				type="button"
				class="btn variant-filled-primary"
				on:click={() => goto('/setup#canvases')}>Huh?</button
			>
		</div>
	</aside>
{/if}
<Stepper
	on:complete={() => goto('/')}
	on:next={checkStep}
	on:back={checkStep}
	buttonBackLabel="← Back"
	buttonNextLabel="Continue →"
	start={startOnStep}
	class="max-w-2xl mx-auto"
>
	<Step class="prose lg:prose-lg xl:prose-xl">
		<svelte:fragment slot="header">
			<h3 class="gradient-heading">Bring your focus to breathing…</h3>
		</svelte:fragment>
		<ul class="list not-prose">
			<li class="list-option text-xl"><span>💨</span><span>first, exhaling fully</span></li>
			<li class="list-option text-xl"><span>😐</span><span>pausing for a beat</span></li>
			<li class="list-option text-xl">
				<span class="-scale-x-100">💨</span><span>inhaling slowly</span>
			</li>
			<li class="list-option text-xl"><span>😐</span><span>pausing again</span></li>
		</ul>
		<p>
			As we find an easy rhythm, emptying from the center out, refilling from every direction toward
			the center, <em
				>we let our thoughts <strong>come</strong>, let them <strong>be</strong>, and let them
				<strong>go</strong></em
			>.
		</p>
	</Step>
	<Step class="prose lg:prose-lg xl:prose-xl">
		<svelte:fragment slot="header">
			<h3 class="gradient-heading mt-8">What thoughts are sticking?</h3>
		</svelte:fragment>
		<p>
			As we allow our mind to settle, one thought will prove to be the most persistent, the hardest
			to shake.
		</p>
		<p>
			Reducing this thought to a word, we write it in the upper right, the active, ethereal realm of
			Air, thought and language.
		</p>
		<p>
			We commit this worn thought to the canvas, to dry up, to die. For writing is a process of
			sacrifice as ideas that live within us become static and still.
		</p>
		<blockquote>
			<p>Why do I repeat this thought so much? Where did it come from?</p>
		</blockquote>
		<p>
			We waft over this word, allowing the winds of change to brush it away. Then we evolve to the
			left.
		</p>
	</Step>
	<Step class="prose lg:prose-lg xl:prose-xl">
		<svelte:fragment slot="header">
			<h3 class="gradient-heading mt-8">What feelings am I not facing?</h3>
		</svelte:fragment>
		<p>Hopefully our mind is now clear enough to feel our feels.</p>
		<p>
			As we notice sensations in our body, our attention flows to the upper left quadrant, the
			receptive, ethereal realm of Water, emotion and intuition.
		</p>
		<p>
			Here we draw a face that feels how we feel, taking care to eschew appearances and
			resemblances.
		</p>
		<blockquote>
			<p>What does this face say to me? How is it hurting? How is it glowing?</p>
		</blockquote>
		<p>
			With our hand, we wash our face with ink and grace. When we have made ourself feel seen and
			heard, we continue.
		</p>
	</Step>
	<Step class="prose lg:prose-lg xl:prose-xl">
		<svelte:fragment slot="header">
			<h3 class="gradient-heading mt-8">What unmet need am I suffering?</h3>
		</svelte:fragment>
		<p>
			Tracing our buried emotions back to their roots, we may find unmet needs. As we examine those
			zones of suffering, we lower our gaze to the bottom left quadrant, the receptive, material
			realm of Earth, needs and resources.
		</p>
		<p>
			Here we draw an empty space shaped like what we are missing, and as we observe our hand
			digging this hole, we may see this story of scarcity in a new light.
		</p>
		<blockquote><p>Why is this need unmet? How could I fill it myself?</p></blockquote>
		<p>When the emptiness starts to subside, we continue.</p>
	</Step>
	<Step class="prose lg:prose-lg xl:prose-xl">
		<svelte:fragment slot="header">
			<h3 class="gradient-heading mt-8">What burden is weighing me down?</h3>
		</svelte:fragment>
		<p>
			As we consider our unmet needs, we may notice obstacles, usually agreements or boundaries,
			that prevent us from meeting our needs. If these agreements or boundaries are not serving us,
			or if they are being violated, they will burden us.
		</p>
		<p>
			As we examine these burdens, our gaze traverses to the bottom right quadrant, the active,
			material realm of Fire, intention and will.
		</p>
		<p>
			Here we recklessly sketch our burden. Then we surround it with a ring of rocks, and arrange
			enough tinder, kindling, and fuel to burn this burden up, figuratively speaking.
		</p>
		<blockquote>
			<p>Where does this boundary belong? To what best we agree?</p>
		</blockquote>
		<p>When we are feeling a bit clearer and lighter, we continue.</p>
	</Step>
	<Step class="prose lg:prose-lg xl:prose-xl">
		<svelte:fragment slot="header">
			<h3 class="gradient-heading mt-8">What is my intention?</h3>
		</svelte:fragment>
		<p>
			Now we review: a sticky thought, the face we wore here, a need to meet, and a burdensome
			boundary.
		</p>
		<p>
			Returning to the center, we inscribe a new intention for the day, one that leads us through
			these obstacles toward healing and harmony.
		</p>
		<blockquote>
			<p>What is my intention for the day? How might I draw my shadow into the light?</p>
		</blockquote>
		<p>When we feel propelled toward the day ahead, we conclude.</p>
	</Step>
</Stepper>
