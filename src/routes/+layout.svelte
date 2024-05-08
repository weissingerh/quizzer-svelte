<script lang="ts">
	import '../app.css';
	import ThemeToggle, { type Theme } from '$lib/components/ThemeToggle.svelte';
	let theme = $state('light' as Theme);
	let { data } = $props();
</script>

<div data-theme={theme} class="relative w-full h-screen flex flex-col bg-background align-middle">
	<header class="w-full relative bg-backgroundLight h-10 flex justify-between flex-none">
		<a class="inline-block h-full py-1 px-2 text-2xl" href="/">🏡</a>
		{#if data.name}
			<span class="absolute left-12 flex items-center h-full text-sm text-accentTwoDarker"
				>Hey there, {data.name}!</span
			>
		{/if}
		<ThemeToggle bind:theme />
	</header>
	<main class="bg-background max-w-md w-full self-center text-text">
		<div class="px-10 py-6">
			<slot />
		</div>
	</main>
	<footer
		class="absolute bottom-10 bg-backgroundLight text-textDarker w-full text-center py-2 -mb-10 flex-none"
	>
		From Vienna with ❤️‍🔥
	</footer>
</div>
