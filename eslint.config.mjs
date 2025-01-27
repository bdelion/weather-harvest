import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Configuration générale pour tous les fichiers JavaScript
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest', // Support de la dernière version ECMAScript
      sourceType: 'module', // Permet d'utiliser les imports/exports ES6
      globals: globals.node, // Remplace `env: { node: true }`
    },
    plugins: {
      js: pluginJs,
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginJs.configs.recommended.rules, // Équivaut à "eslint:recommended"
      'prettier/prettier': 'error', // Applique Prettier comme une erreur ESLint
      'no-console': 'warn', // Génère un avertissement si console.log est utilisé
      eqeqeq: 'error', // Exige l'utilisation de === et !== au lieu de == et !=
    },
  },
  {
    // Configuration spécifique pour les fichiers de test
    files: ['tests/**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.node, ...globals.jest }, // Remplace `env: { jest: true }`
    },
    rules: {
      'no-unused-vars': 'off', // Désactive pour éviter les faux positifs dans les tests
    },
  },
  {
    // Ignorer certains fichiers et dossiers
    ignores: ['coverage/**', 'node_modules/**'],
  },
];
