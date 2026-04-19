import nextPlugin from '@next/eslint-plugin-next'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'

const eslintConfig = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@next/next': nextPlugin,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...nextPlugin.configs['core-web-vitals'].rules,
      'no-console': ['warn'],
      'no-unused-vars': ['warn'],
    },
  },
]

export default eslintConfig
