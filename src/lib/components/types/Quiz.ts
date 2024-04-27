export type Question = {
	category: string;
	type: string;
	difficulty: string;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
};

export type ApiResult = {
	response_code: number;
	results: Question[];
};
