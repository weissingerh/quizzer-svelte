<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from '../$types';
	export let data: PageData;
</script>

<div>
	<h1 class="text-lg font-semibold">{data.correctAnswersHeading}</h1>
	<p>{data.correctAnswersText}</p>
	<button class="btn bg-accentOne" on:click={() => goto('/quizzer/1')}>Try Again?</button>
	<a href="/" class="btn bg-accentOne">Go (Big or Go) Home 🏡</a>
</div>
