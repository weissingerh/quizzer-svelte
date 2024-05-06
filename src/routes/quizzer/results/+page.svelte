<script lang="ts">
	import { goto } from '$app/navigation';
	import { correctAnswers, questionNumber } from '$lib/store';

	correctAnswers.subscribe((value) => {
		value;
	});

	let correctAnswersHeading: string = '';
	let correctAnswersText: string = '';
	getCorrectAnswersText();
	function resetGame() {
		questionNumber.set(0);
		correctAnswers.set(0);
		goto('/quizzer/1');
	}

	function getCorrectAnswersText() {
		if ($correctAnswers === 5) {
			correctAnswersHeading = 'Wow! 🤩';
			correctAnswersText = 'You have answered all questions correctly!';
		} else if ($correctAnswers === 0) {
			correctAnswersHeading = 'Oops! 😬 ';
			correctAnswersText = 'You have answered none of the questions correctly.';
		} else {
			correctAnswersHeading = 'Not bad! 🙂‍↕️';
			correctAnswersText = `You have answered ${$correctAnswers} out of 5 questions correctly.`;
		}
	}
</script>

<div>
	<h1>{correctAnswersHeading}</h1>
	<p>{correctAnswersText}</p>
	<button class="btn bg-accentOne" on:click={() => resetGame()}>Try Again?</button>
</div>
