/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: ['drizzle'],
  extends: ['next/core-web-vitals', '@rocketseat/eslint-config/next'],
  rules: {
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    'drizzle/enforce-delete-with-where': [
      'error',
      {
        drizzleObjectName: ['db'],
      },
    ],
    'drizzle/enforce-update-with-where': [
      'error',
      {
        drizzleObjectName: ['db'],
      },
    ],
  },
}
module.exports = config
