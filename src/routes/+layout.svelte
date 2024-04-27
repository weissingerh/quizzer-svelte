<script lang="ts">
	import '../app.css';
	import ThemeToggle, { type Theme } from '$lib/components/ThemeToggle.svelte';
	let theme = $state('dark' as Theme);
</script>

<div data-theme={theme}>
	<header class="w-full bg-backgroundLight h-10 flex justify-between">
		<a href="/">🏡</a>
		<ThemeToggle bind:theme />
	</header>
	<main class="bg-background h-screen w-full text-text">
		<div class="px-10 py-6">
			<slot />
		</div>
	</main>
</div>
