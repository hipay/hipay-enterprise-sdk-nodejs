module.exports = {
    mutate: ['src/**/*.js', '!**/*.test.js', '!src/Enum/**', '!src/Data/**'],
    ignorePatterns: ['**', '!src/**', '!package.json', '!node_modules'],
    packageManager: 'yarn',
    reporters: ['html', 'clear-text', 'progress'],
    testRunner: 'jest',
    coverageAnalysis: 'off',
    concurrency: 4,
    maxTestRunnerReuse: 20
};
