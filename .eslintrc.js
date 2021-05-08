module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier/prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': 0,
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true,
      },
    ],
  },
};
