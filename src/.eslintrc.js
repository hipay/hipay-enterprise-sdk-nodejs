module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true,
        jest: true
    },
    extends: ['eslint:recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module'
    },
    rules: {
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: 'next|req|res'
            }
        ]
    }
};
