<script lang="ts">
	import { correctAnswers, quizQuestions, questionNumber } from '../store';
	import { readonly } from 'svelte/store';
	import type { Question } from './types/Quiz';
	import { goto } from '$app/navigation';

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
	function getNewQuestionNumber(number: number) {
		return number + 1;
	}
	function nextQuestion() {
		questionNumber.update((n) => n + 1);
		goto('/quizzer/{questionNumber}');
		answerGiven = false;
		correctIndication = '';
	}
</script>

{#if $questions && $questionNumber != null}
	<h1 class="text-xl">Question #{$questionNumber + 1}</h1>
	<h2>{$questions[$questionNumber].question}</h2>
	{#each getAnswersInRandomOrder($questions[$questionNumber]) as answer}
		<button
			class:bg-correct={answerGiven && isCorrectAnswer($questions[$questionNumber], answer)}
			class:bg-incorrect={answerGiven && !isCorrectAnswer($questions[$questionNumber], answer)}
			class="btn bg-accentOne"
			class:hover:opacity-100={answerGiven}
			disabled={answerGiven}
			on:click={() => checkIfAnswerIsCorrect($questions[$questionNumber], answer)}>{answer}</button
		>
	{/each}
	<p>{correctIndication}</p>
	{#if answerGiven}
		{$questionNumber}
		{#if $questionNumber + 1 == $questions.length}
			<a href="/quizzer/results" class="btn bg-accentOneLight">Show Results</a>
		{:else}
			<button class="btn bg-accentOneLight" on:click={() => nextQuestion()}>Next question</button>
		{/if}
	{/if}
{/if}
