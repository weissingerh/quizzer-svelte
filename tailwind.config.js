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
				accentOne: '#B0E3E3',
				accentOneDarker: '#7FC9C9',
				accentTwo: '#8C66FF',
				accentTwoDarker: '#5D3FA3',
				text: '#2D2D2D',
				textDarker: '#1E1E1E',
				background: '#FFFFFF',
				backgroundLight: '#F6F6F6'
			},
			dark: {
				accentOne: '#297A7A',
				accentOneDarker: '#1E5757',
				accentTwo: '#6633CC',
				accentTwoDarker: '#3F267A',
				text: '#FFFFFF',
				textDarker: '#E6E6E6',
				background: '#2D2D2D',
				backgroundLight: '#1A1A1A'
			}
		})
	]
};
