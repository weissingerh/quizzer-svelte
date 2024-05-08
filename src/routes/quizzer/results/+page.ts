import { correctAnswers } from '$lib/store';

let correctAnswersHeading: string = '';
let correctAnswersText: string = '';

export async function load(event: any) {
	return { correctAnswersHeading, correctAnswersText, correctAnswers };
}

correctAnswers.subscribe((value) => {
	switch (value) {
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
			correctAnswersText = `You have answered ${value} out of 5 questions correctly.`;
	}
	value;
});
