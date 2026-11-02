import js from '@eslint/js'

export default [
  { ignores: ['dist/**', '.out/**', 'coverage/**', '**/*.ts', '**/*.tsx'] },
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        URL: 'readonly',
        window: 'readonly',
        document: 'readonly',
        performance: 'readonly'
      }
    }
  },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } }
]
