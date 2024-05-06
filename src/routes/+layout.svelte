<script lang="ts">
	import '../app.css';
	import ThemeToggle, { type Theme } from '$lib/components/ThemeToggle.svelte';
	let theme = $state('dark' as Theme);
	let { data } = $props();
</script>

<div data-theme={theme} class="relative w-full h-screen flex flex-col bg-background">
	<header class="w-full bg-backgroundLight h-10 flex justify-between flex-none">
		<a class="inline-block h-full py-1 px-2 text-2xl" href="/">🏡</a>
		{#if data.name}
			<span>Hello {data.name}</span>
		{/if}
		<ThemeToggle bind:theme />
	</header>
	<main class="bg-background w-full text-text">
		<div class="px-10 py-6">
			<slot />
		</div>
	</main>
	<footer
		class="absolute bottom-10 bg-backgroundLightest text-textDarker w-full text-center py-2 -mb-10 flex-none"
	>
		From Vienna with ❤️‍🔥
	</footer>
</div>
