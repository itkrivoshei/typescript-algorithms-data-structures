import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';

const runtimeGlobals = {
  console: 'readonly',
  document: 'readonly',
  window: 'readonly',
  performance: 'readonly',
  HTMLElement: 'readonly',
  Event: 'readonly',
};

const testGlobals = {
  afterAll: 'readonly',
  afterEach: 'readonly',
  beforeAll: 'readonly',
  beforeEach: 'readonly',
  describe: 'readonly',
  expect: 'readonly',
  it: 'readonly',
  jest: 'readonly',
  test: 'readonly',
};

export default [
  {
    ignores: ['node_modules/**', 'dist/**', 'coverage/**'],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.ts', 'demo/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.demo.json'],
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
      globals: runtimeGlobals,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
    languageOptions: {
      globals: {
        ...runtimeGlobals,
        ...testGlobals,
      },
    },
  },
  eslintConfigPrettier,
];
