<script lang="ts">
	import { goto } from '$app/navigation';
	import { correctAnswers, questionNumber } from '$lib/store';
	correctAnswers.subscribe((value) => {
		value;
	});

	function resetGame() {
		questionNumber.set(0);
		correctAnswers.set(0);
		goto('/quizzer/1');
	}
</script>

<div>
	<h1>Congrats! 🥳</h1>
	<div>You have answered {$correctAnswers} out of 5 correctly.</div>
	<button class="btn bg-accentOne" on:click={() => resetGame()}>Try Again?</button>
</div>
