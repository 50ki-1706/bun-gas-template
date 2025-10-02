import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  { ignores: ['dist/**'] },
  eslint.configs.recommended,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        // GAS global objects
        SpreadsheetApp: 'readonly',
        DriveApp: 'readonly',
        DocumentApp: 'readonly',
        FormApp: 'readonly',
        GmailApp: 'readonly',
        CalendarApp: 'readonly',
        ScriptApp: 'readonly',
        Session: 'readonly',
        UrlFetchApp: 'readonly',
        Utilities: 'readonly',
        Logger: 'readonly',
        PropertiesService: 'readonly',
        HtmlService: 'readonly',
        ContentService: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      // '@typescript-eslint/no-unused-vars': [
      //   'error',
      //   {
      //     argsIgnorePattern: '^_',
      //     varsIgnorePattern: '^_',
      //   },
      // ],
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/strict-boolean-expressions': 'off',

      // Code quality rules
      'no-console': 'off', // GAS uses Logger instead, but console is allowed
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'warn',
      'no-throw-literal': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'brace-style': ['error', '1tbs'],

      // Best practices for GAS
      'no-undef': 'off', // GAS has many global objects defined in globals above
      'no-unused-expressions': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'prefer-template': 'warn',
      'no-duplicate-imports': 'error',

      // Code style
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'comma-dangle': ['error', 'always-multiline'],
      indent: ['error', 2],
      'max-len': [
        'warn',
        {
          code: 120,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
    },
  },
];
