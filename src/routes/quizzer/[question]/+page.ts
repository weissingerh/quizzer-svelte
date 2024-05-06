import { quizQuestions, questionNumber, correctAnswers } from '$lib/store';
import { type Question, type ApiResult, type QuizQuestion } from '$lib/components/types/Quiz';

const APIURL: string = 'https://opentdb.com/api.php?amount=5';

export async function load(event: any) {
	questionNumber.set(0);
	correctAnswers.set(0);
	const apiResult: ApiResult = await fetchQuestionEndpoint(event);
	let questions: QuizQuestion[] = transformToQuizQuestions(apiResult.results);
	quizQuestions.set(questions);
}

function transformToQuizQuestions(questions: Question[]): QuizQuestion[] {
	return questions.map((question: Question) => {
		return {
			question: replaceHtmlEntities(question.question),
			correct_answer: replaceHtmlEntities(question.correct_answer),
			incorrect_answers: question.incorrect_answers.map((answer: any) =>
				replaceHtmlEntities(answer)
			)
		};
	});
}

function replaceHtmlEntities(str: string) {
	return str
		.replaceAll('&quot;', '"')
		.replaceAll('&#039;', "'")
		.replaceAll('&amp;', '&')
		.replaceAll('&oacute;', 'ó')
		.replaceAll('&eacute;', 'é')
		.replaceAll('&aacute;', 'á')
		.replaceAll('&ntilde;', 'ñ')
		.replaceAll('&uuml;', 'ü')
		.replaceAll('&ldquo;', '"')
		.replaceAll('&iacute;', 'í')
		.replaceAll('&divide;', '/')
		.replaceAll('&rsquo;', "'")
		.replaceAll('&sup2;', '²');
}

async function fetchQuestionEndpoint(event: any): Promise<ApiResult> {
	const apiResult: ApiResult = await event
		.fetch(APIURL)
		.then((response: { json: () => any }) => response.json())
		.then((data: ApiResult) => {
			return data;
		})
		.catch((error: any) => {
			console.log('error here');
			error.status === 429 ? error(429) : console.log('error');
			return 'error';
		});
	return apiResult;
}
