module.exports = {
	preset: '@vue/cli-plugin-unit-jest',
	testMatch: ['**/*.spec.js'],
	transformIgnorePatterns: ['<rootDir>/node_modules'],
	collectCoverageFrom: [
		'src/**/*.{js,vue}',
		'!src/main.js',
		'!src/store/**/index.js',
		'!src/router/index.js',
	],
};
