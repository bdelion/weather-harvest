import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginN from 'eslint-plugin-n';
// Si tu utilises TypeScript, décommente les lignes suivantes
// import pluginTs from '@typescript-eslint/eslint-plugin';
// import parserTs from '@typescript-eslint/parser';
import pluginMarkdown from 'eslint-plugin-markdown';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Configuration générale pour tous les fichiers JavaScript
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest', // Utilisation de la dernière version ECMAScript
      sourceType: 'module', // Permet l'utilisation des imports/export ES6
      globals: globals.node, // Ajout des variables globales Node.js
    },
    plugins: {
      js: pluginJs, // Plugin pour la configuration ESLint de base
      prettier: pluginPrettier, // Plugin pour l'intégration de Prettier avec ESLint
      n: pluginN, // Règles recommandées pour les projets Node.js
      // Si tu utilises TypeScript, ajoute les lignes suivantes :
      // ts: pluginTs,
      // Si tu utilises Markdown, ajoute cette ligne :
      // markdown: pluginMarkdown,
    },
    rules: {
      ...pluginJs.configs.recommended.rules, // Active les règles ESLint recommandées
      ...pluginN.configs['recommended-module'].rules, // Règles recommandées pour les modules ESM
      'prettier/prettier': 'error', // Fait en sorte que Prettier soit appliqué comme une erreur ESLint
      'no-console': 'warn', // Génère un avertissement si console.log est utilisé
      eqeqeq: 'error', // Oblige l'utilisation de === et !== au lieu de == et !=
      // Si tu utilises TypeScript, active ces règles supplémentaires :
      // '@typescript-eslint/no-unused-vars': 'warn', // Règles spécifiques TypeScript
    },
  },
  {
    // Désactivation de la règle pour eslint.config.mjs uniquement
    files: ['eslint.config.mjs'],
    rules: {
      'n/no-unpublished-import': 'off', // Désactive la règle pour ce fichier
    },
  },
  {
    // Configuration spécifique pour les fichiers de test (ex : Jest)
    files: ['tests/**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest', // Dernière version ECMAScript pour les tests
      sourceType: 'module', // Utilisation des imports pour les tests
      globals: { ...globals.node, ...globals.jest }, // Ajout des variables globales Jest pour les tests
    },
    rules: {
      'no-unused-vars': 'off', // Désactive cette règle pour éviter les faux positifs dans les tests
    },
  },
  {
    // Configuration pour ignorer certains fichiers et dossiers
    ignores: ['coverage/**', 'node_modules/**'], // Ignorer les répertoires de couverture et node_modules
  },
  {
    files: ['**/*.md'],
    processor: pluginMarkdown.processors.markdown, // Utilise le processeur Markdown pour l'analyse
    rules: {
      'no-undef': 'off', // Désactive les erreurs de variables non définies dans les extraits de code
      'no-unused-vars': 'off', // Désactive la règle des variables inutilisées dans Markdown
    },
  },
];
