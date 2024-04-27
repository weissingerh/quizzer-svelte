import { writable, type Writable } from 'svelte/store';
import { type Question } from './components/types/Quiz';

export const quizQuestions: Writable<Question[]> = writable([]);
export const correctAnswers: Writable<number> = writable(0);
export const questionNumber: Writable<number> = writable(0);
