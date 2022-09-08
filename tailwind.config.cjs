// importujemy paletę kolorów
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		// https://tailwindcss.com/docs/theme
		extend: {
			// możemy dodać własne zmienne np bg-primary, text-secondary
			colors: {
				secondary: '#5865f2',
				primary: '#202225',
				gray: colors.neutral,
				gray: {
					900: '#202225',
					800: '#2f3136',
					700: '#36393f',
					600: '#4f545c',
					400: '#d4d7dc',
					300: '#e3e5e8',
					200: '#ebedef',
					100: '#f2f3f5',
				},
				spacing: {
					88: '22rem',
				},
			},
		},
	},
	plugins: [require('daisyui')],
};
