# Changelog

> NOTE : Le format est basé sur [Keep a Changelog], et ce projet respecte [Semantic Versioning].

Tous les changements notables de ce projet seront documentés dans ce fichier.

## [Unreleased]

### Ajouté

- Script CLI de base pour la collecte de données météo avec options personnalisables.
- Génération automatique d'un fichier de configuration utilisateur (`config.json`) lors de la première exécution.

### Modifié

### Corrigé

## [1.0.0] - 2025-01-27

### Ajouté

- Initialisation des outils de qualité de code :
  - ESLint pour le linting.
  - Prettier pour assurer un style de code cohérent.
  - SonarCloud pour l'analyse de la qualité et de la sécurité.
- Mise en place des tests :
  - Jest pour les tests unitaires, avec configuration de la collecte et du rapport de couverture.
  - Définition des seuils de couverture dans la configuration Jest.
- Ajout d'un fichier `.nvmrc` pour spécifier la version de Node.js.

### 🚀 CI/CD

- 🛠 Ajout d'un pipeline CI pour exécuter les tests, linting et analyse SonarCloud (`ci.yml`).
- ⚡ Optimisation des builds avec mise en cache des dépendances `npm`.

### 🛠 Maintenance

- 🔄 Mise à jour automatique des dépendances `npm` via Dependabot (`chore(deps)`)
- 🔄 Nettoyage automatique des caches GitHub Actions à la fermeture des pull requests (`cleanup caches by a branch`)

<!-- liens -->

[Keep a Changelog]: https://keepachangelog.com/fr/1.0.0/ 'CHANGELOG Template et bonnes pratiques'
[Semantic Versioning]: https://semver.org/lang/fr/ 'Bonnes pratique de la Gestion de Version'
[Unreleased]: https://github.com/bdelion/weather-harvest/compare/1.0.0...develop 'Comparaison de la dernière version avec la future'
[1.0.0]: https://github.com/bdelion/weather-harvest/releases/tag/1.0.0
