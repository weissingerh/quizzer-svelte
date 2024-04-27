<script lang="ts">
	import { correctAnswers, quizQuestions, questionNumber } from '../store';
	import { readonly } from 'svelte/store';
	import type { Question } from './types/Quiz';

	const questions = readonly(quizQuestions);

	let correctIndication = $state('');
	let answerGiven = $state(false);

	questions.subscribe(() => {});
	questionNumber.subscribe(() => {});
	correctAnswers.subscribe((value: number) => value);

	function getAnswersInRandomOrder(question: Question) {
		return [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5);
	}
	function addCorrectAnswer() {
		correctAnswers.update((c) => c + 1);
	}

	function checkIfAnswerIsCorrect(question: Question, answer: string) {
		answerGiven = true;
		const isCorrect: boolean = isCorrectAnswer(question, answer);
		correctIndication = setCorrectIndicationText(isCorrect);
		if (isCorrect) {
			addCorrectAnswer();
		}
	}

	function isCorrectAnswer(question: Question, answer: string): boolean {
		return question.correct_answer === answer;
	}

	function setCorrectIndicationText(isCorrectAnswer: boolean) {
		return isCorrectAnswer ? 'Correct!' : 'Incorrect!';
	}
</script>

<div>
	<span>{$correctAnswers}</span>
	{@render QuestionItem($questionNumber)}
</div>

{#snippet QuestionItem(number)}
	{#if $questions && $questionNumber != null}
		<h1 class="text-xl">Question #{number}</h1>
		<h2>{$questions[number].question}</h2>
		{#each getAnswersInRandomOrder($questions[number]) as answer}
			<button
				class:bg-correct={answerGiven && isCorrectAnswer($questions[number], answer)}
				class="btn bg-accentOne"
				class:hover:opacity-100={answerGiven}
				disabled={answerGiven}
				on:click={() => checkIfAnswerIsCorrect($questions[number], answer)}>{answer}</button
			>
		{/each}
		<p>{correctIndication}</p>
		{#if answerGiven}
			{#if $questionNumber === $questions.length}
				<a
					href="/quizzer/results"
					class="btn bg-accentOneLight"
					on:click={() => ($questionNumber = 0)}>Show Results</a
				>
			{:else}
				<a class="btn bg-accentOneLight" href="/quizzer/{$questionNumber++}">Next question</a>
			{/if}
		{/if}
	{/if}
{/snippet}
