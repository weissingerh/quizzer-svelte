import { createThemes } from 'tw-colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				correct: '#61bc84',
				incorrect: '#FF3D3D'
			}
		}
	},
	plugins: [
		createThemes({
			light: {
				accentOne: '#d4eaf7',
				accentOneLight: '#b6ccd8',
				accentOneLightest: '#3b3c3d',
				accentTwo: '#71c4ef',
				accentTwoLight: '#00668c',
				text: '#1d1c1c',
				textDarker: '#313d44',
				background: '#fffefb',
				backgroundLight: '#f5f4f1',
				backgroundLightest: '#cccbc8'
			},
			dark: {
				accentOne: '#0085ff',
				accentOneLight: '#69b4ff',
				accentOneLightest: '#e0ffff',
				accentTwo: '#006fff',
				accentTwoLight: '#e1ffff',
				text: '#FFFFFF',
				textDarker: '#9e9e9e',
				background: '#1E1E1E',
				backgroundLight: '#2d2d2d',
				backgroundLightest: '#454545'
			}
		})
	]
};
