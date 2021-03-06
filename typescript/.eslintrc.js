module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['google'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'require-jsdoc': 'warn',
    'no-unused-vars': 'warn',
  },
};
