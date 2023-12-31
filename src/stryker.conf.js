module.exports = {
    mutate: ['Error/**/*.js', 'Gateway/**/*.js', 'HiPay.js'],
    ignorePatterns: ['test/integration/**/*.test.js', '.stryker-tmp', 'coverage'],
    packageManager: 'yarn',
    reporters: ['html', 'clear-text', 'progress'],
    htmlReporter: { fileName: 'reports/mutation/html/index.html' },
    testRunner: 'jest',
    coverageAnalysis: 'off',
    concurrency: 4,
    maxTestRunnerReuse: 20
};
