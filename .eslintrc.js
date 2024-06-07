module.exports = {
    root: true,
    extends: '@react-native',
    rules: {
        indent: ['error', 4],
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'all',
                bracketSpacing: false,
                tabWidth: 4,
                arrowParens: 'avoid',
                bracketSameLine: true,
            },
        ],
    },
};
