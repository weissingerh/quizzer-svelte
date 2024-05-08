<script lang="ts">
	import { correctAnswers, quizQuestions, questionNumber } from '../store';
	import { readonly } from 'svelte/store';
	import type { Question, QuizQuestion } from '../types';
	import { goto } from '$app/navigation';

	const questions = readonly(quizQuestions);

	let correctIndication = $state('');
	let answerGiven = $state(false);

	questions.subscribe(() => {});
	questionNumber.subscribe((value: number) => {
		console.log(value);
		return value;
	});
	correctAnswers.subscribe((value: number) => value);

	function getAnswersInRandomOrder(question: QuizQuestion) {
		return [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5);
	}
	function addCorrectAnswer() {
		correctAnswers.update((c) => c + 1);
	}

	function checkIfAnswerIsCorrect(question: QuizQuestion, answer: string) {
		answerGiven = true;
		const isCorrect: boolean = isCorrectAnswer(question, answer);
		correctIndication = setCorrectIndicationText(isCorrect);
		if (isCorrect) {
			addCorrectAnswer();
		}
	}

	function isCorrectAnswer(question: QuizQuestion, answer: string): boolean {
		return question.correct_answer === answer;
	}

	function setCorrectIndicationText(isCorrectAnswer: boolean) {
		return isCorrectAnswer ? 'Correct!' : 'Incorrect!';
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
		{#if $questionNumber + 1 == $questions.length}
			<a href="/quizzer/results" class="btn bg-accentOneDarker text-white">Show Results</a>
		{:else}
			<button class="btn bg-accentTwoDarker text-white" on:click={() => nextQuestion()}
				>Next question</button
			>
		{/if}
	{/if}
{/if}
