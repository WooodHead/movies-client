/* eslint-disable max-len */
module.exports = {
  // Configuration for JavaScript files
  extends: ['airbnb-base', 'next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 150,
        tabWidth: 2,
        semi: true,
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    // Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint', 'unused-imports', 'react-func'],
      extends: ['airbnb-typescript', 'next/core-web-vitals', 'plugin:prettier/recommended'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'no-restricted-syntax': ['off', 'FunctionExpression', 'WithStatement', "BinaryExpression[operator='in']"],
        'no-param-reassign': 0,
        '@typescript-eslint/naming-convention': 'warn',
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            printWidth: 150,
            tabWidth: 2,
            semi: true,
            endOfLine: 'auto',
          },
        ],
        'no-underscore-dangle': 'off',
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'jsx-a11y/anchor-is-valid': 'off', // Next.js use his own internal link system
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
        '@next/next/no-img-element': 'off', // We currently not using next/image because it isn't supported with SSG mode
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
        'class-methods-use-this': 'off', // _document.tsx use render method without `this` keyword
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'import/no-anonymous-default-export': 'off',
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'warn',
        'max-lines': [
          2,
          {
            max: 300,
            skipBlankLines: true,
            skipComments: true,
          },
        ],
        'react-func/max-lines-per-function': [
          'error',
          {
            max: 200,
            skipBlankLines: true,
            skipComments: true,
            IIFEs: true,
          },
        ],
      },
    },
  ],
};
