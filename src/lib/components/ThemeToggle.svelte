<script lang="ts" context="module">
	export const themes = ['light', 'dark'] as const;
	export type Theme = (typeof themes)[number];
</script>

<script lang="ts">
	import { slide } from 'svelte/transition';
	let { theme } = $props<{ theme: Theme }>();

	function toggleTheme() {
		const currentIndex = themes.indexOf(theme);
		theme = themes[(currentIndex + 1) % themes.length];
	}
	let icon = $derived.by(() => {
		if (theme === 'light') return '🌞';
		if (theme === 'dark') return '🌚';
	});
</script>

{#key theme}
	<div>
		<button
			class="absolute top-0 right-0 text-3xl cursor-pointer"
			transition:slide={{ axis: 'x' }}
			onclick={toggleTheme}
		>
			{icon}
		</button>
	</div>
{/key}

<slot />
