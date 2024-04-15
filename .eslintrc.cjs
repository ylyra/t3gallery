/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: ['drizzle'],
  extends: ['next/core-web-vitals', '@rocketseat/eslint-config/next'],
  rules: {
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
