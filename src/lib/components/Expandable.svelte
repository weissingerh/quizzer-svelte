<script lang="ts">
	import { slide } from 'svelte/transition';
	export let title: string;
	let isOpen: boolean = true;
</script>

<div class="my-2">
	<button
		class="w-full flex justify-between bg-backgroundLight text-textDarker px-4 py-2 border border-textDarker hover:cursor-pointer"
		class:rounded-t-lg={!isOpen}
		class:rounded-lg={isOpen}
		on:click={() => (isOpen = !isOpen)}
	>
		<span class="title">{title}</span>
		<svg
			class:rotate-180={isOpen}
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			class="bi bi-caret-up-fill"
			viewBox="0 0 16 16"
		>
			<path
				d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
			/>
		</svg>
	</button>
	<p
		transition:slide={{ axis: 'y' }}
		class="border-textDarker border rounded-b-lg px-4 py-2"
		class:hidden={isOpen}
	>
		<slot />
	</p>
</div>
