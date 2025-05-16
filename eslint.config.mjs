import js from 'eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    plugins: {
      js,
    },
    extends: ['eslint:recommended'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    //  Jest-specific globals for test files
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]);
