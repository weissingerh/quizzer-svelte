<script lang="ts">
	import { goto } from '$app/navigation';
	import { correctAnswers } from '$lib/store';

	correctAnswers.subscribe((value) => {
		value;
	});

	let correctAnswersHeading: string = '';
	let correctAnswersText: string = '';
	getCorrectAnswersText();

	function getCorrectAnswersText() {
		switch ($correctAnswers) {
			case 0:
				correctAnswersHeading = 'Oops! 😬 ';
				correctAnswersText = 'You have answered none of the questions correctly.';
				break;
			case 1:
				correctAnswersHeading = "It's a start! 🚀";
				correctAnswersText = 'You have answered 1 question correctly.';
				break;
			case 5:
				correctAnswersHeading = 'Wow! 🤩';
				correctAnswersText = 'You have answered all questions correctly!';
				break;
			default:
				correctAnswersHeading = 'Not bad! 🙂‍↕️';
				correctAnswersText = `You have answered ${$correctAnswers} out of 5 questions correctly.`;
		}
	}
</script>

<div>
	<h1>{correctAnswersHeading}</h1>
	<p>{correctAnswersText}</p>
	<button class="btn bg-accentOne" on:click={() => goto('/quizzer/1')}>Try Again?</button>
	<a href="/" class="btn bg-accentOne">Go (Big or Go) Home 🏡</a>
</div>
