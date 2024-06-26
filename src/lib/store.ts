import { writable, type Writable } from 'svelte/store';
import { type QuizQuestion } from './types';

export const quizQuestions: Writable<QuizQuestion[]> = writable([]);
export const correctAnswers: Writable<number> = writable(0);
export const questionNumber: Writable<number> = writable(0);
