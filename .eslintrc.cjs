module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard',
		'prettier',
		'plugin:react/jsx-runtime',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks'],
	rules: { 'react/prop-types': 0, 'react-hooks/rules-of-hooks': 'error' },
};
