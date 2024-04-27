import { quizQuestions } from '$lib/store';
import { type Question, type ApiResult } from '$lib/components/types/Quiz';
// import { writable } from 'svelte/store';

const apiUrl: string = 'https://opentdb.com/api.php?amount=5';

export async function load(event) {
	const apiResult: ApiResult = await fetchQuestionEndpoint(event);

	quizQuestions.set(apiResult.results);

	return apiResult;
}

async function fetchQuestionEndpoint(event): Question[] {
	const apiResult: ApiResult = await event
		.fetch(apiUrl)
		.then((response) => response.json())
		.then((data: ApiResult) => {
			return data;
		})
		.catch((error) => {
			console.log('error here');
			// handle error here
			return 'error';
		});
	return apiResult;
}
