# 📌 weather-harvest

| Service             |                Main                |              Develop               |
| :------------------ | :--------------------------------: | :--------------------------------: |
| CI Status           |    [![Build Status][bmb]][bml]     |    [![Build Status][bdb]][bdl]     |
| Quality Gate Status | [![Quality Gate Status][qmb]][qml] | [![Quality Gate Status][qdb]][qdl] |

[![Cache Cleanup][cclnpb]][cclnpl]

> **Note** : Ce format est basé sur [Make a README].

---

## 🚀 Description

`weather-harvest` est un outil CLI en Node.js permettant de récupérer et traiter des données météo depuis diverses sources via la ligne de commande.

---

## 🛠️ Technologies utilisées

- [Node.js] (>=18.x)
- [npm] (>=10.x) (gestionnaire de paquets)
- [Git]
- [ESLint] (analyse statique du code)
- [Prettier] (formatage du code)
- [SonarCloud] (analyse de la qualité du code)
- [GitHub Actions] (CI/CD)

---

## ✅ Intégration Continue (CI/CD) avec GitHub Actions

Ce projet utilise **GitHub Actions** pour automatiser le linting, les tests et l'analyse de code à chaque `push` ou `pull request`.

### 📜 **Pipeline CI**

Chaque exécution du workflow inclut les étapes suivantes :

1. **Installation des dépendances** via `npm ci` (avec mise en cache pour accélérer les builds).
2. **Analyse du code** :
   - ✅ **ESLint** : Analyse statique du code.
   - ✅ **Prettier** : Validation du formatage.
3. **Exécution des tests** avec `npm test` (incluant un rapport de couverture).
4. **Analyse de qualité** via **SonarCloud**.

### ⚡ **Optimisations**

- Cache des dépendances via `actions/cache@v4`.
- Suppression automatique du cache à la fermeture d'une pull request (`cleanup-caches.yml`).

---

## 📌 Développement

### 📂 **Branching Strategy**

- `main` : Code stable pour la production.
- `develop` : Branche principale de développement.
- `feature/<feature-name>` : Branche pour développement d'une fonctionnalité.
- `release/<version-number>` : Préparation d'une nouvelle version.
- `hotfix/<fix-name>` : Correctifs urgents en production.

### 📏 **Règles de contribution**

1. Les PR doivent être soumises uniquement vers `main`, `develop` ou `release/*`.
2. Toutes les PR doivent passer les tests et vérifications de qualité.
3. Messages de commit conformes à [![Conventional Commits][ccmmtb]][ccmmtl].

---

## 🛠️ Commandes utiles

### 🔍 **Linting**

```sh
npm run lint        # Exécuter ESLint et produire un rapport
npm run lint:fix    # Corriger les erreurs de linting
```

### 🎨 **Formatage du code**

```sh
npm run prettier         # Formater le code
npm run prettier:check   # Vérifier le formatage
```

### 🔍 **Linting** & 🎨 **Formatage du code**

```sh
npm run format           # Formater le code et Corriger les erreurs de linting
```

### 🧪 **Tests**

```sh
npm test                # Exécuter les tests
npm test:watch          # Mode watch
npm run test:coverage   # Rapport de couverture
npm run validate        # Lint + tests
```

### 🚀 **Exécution du script**

```sh
npm run start
```

---

## 🛠️ **Configuration**

### SonarCloud

1. Créez un compte sur [SonarCloud].
2. Configurez un projet et récupérez le `SONAR_TOKEN`.
3. Ajoutez le `SONAR_TOKEN` comme secret dans votre dépôt GitHub.
4. Mettez à jour le fichier `sonar-project.properties` dans votre projet :

```plaintext
sonar.organization=<your_organization>
sonar.projectKey=<your_project_key>
sonar.projectName=weather-harvest=<your_project_name>
sonar.language=js
sonar.sources=src/
sonar.tests=tests/
sonar.coverage.jacoco.xmlReportPaths=
sonar.eslint.reportPaths=eslint-report.json
sonar.prettier.reportPaths=prettier-report.json
sonar.javascript.lcov.reportPaths=coverage/lcov.info
sonar.exclusions=**/node_modules/**
```

---

## 📥 Installation

1. Créer un dossier et s'y positionner :

   ```sh
   mkdir weather-harvest && cd weather-harvest
   ```

2. Installer le script globalement :

   ```sh
   npm install -g weather-harvest

   ```

3. Vérifier l'installation et générer la config par défaut :

   ```sh
   weather-harvest -v
   ```

4. La commande ci-dessus crée le fichier de configuration [config.json] dans votre home directory (C:\users\[matricule] sous Windows) nommé `~/.weather-harvest/` et retourne le numéro de version du script. Pour ajuster la configuration, consultez la page de documentation [Configuration].

---

## 📌 Utilisation

### 🔍 **Aide**

```sh
weather-harvest --help
```

### 📝 **Récupérer des données météo**

```sh
weather-harvest harvest --start 2023-01-01 --end 2023-01-31
```

### 📜 **Lister les sources météo disponibles**

```sh
weather-harvest list
```

---

## 👥 Auteurs & Contributeurs

:bust_in_silhouette: **Bertrand DELION** - [@bdelion]

Consultez la liste des [contributeurs] pour voir toutes les personnes ayant participé à ce projet.

---

## 📌 Journal des modifications

Pour voir les dernières modifications, consultez le [CHANGELOG].

---

## 🎯 Contributions

Les contributions sont les bienvenues !
N'hésitez pas à consulter la page des [issues], et à ouvrir une `issue` afin de discuter de ce que vous souhaitez modifier.

1. Forkez le projet.
2. Créez une branche `feature/<nom>`.
3. Commitez vos modifications (`git commit -m "feat: add <feature>"`).
4. Poussez la branche (`git push origin feature/<nom>`).
5. Ouvrez une **Pull Request**.

---

## 📌 Versioning

Ce projet utilise [SemVer] pour le versioning.

Pour les versions disponibles, voir [les tags de ce projet].

---

## 📌 Liens utiles

- **Documentation** : [GitHub Pages]
- **CI/CD** : [Github Actions weather-harvest]
- **Qualité du Code** : [SonarCloud weather-harvest]
- **Repository** : [GitHub Package Registry]

---

## 📦 Dépendances

- [Dependencies] : Liste des dépendances du projet.
- [Dependents] : Projets utilisant `weather-harvest`.

<!-- liens -->

[bmb]: https://github.com/bdelion/weather-harvest/actions/workflows/ci.yml/badge.svg?branch=main 'Jenkins main Build Status Icon'
[bml]: https://github.com/bdelion/weather-harvest/actions/workflows/ci.yml 'Jenkins main Job'
[bdb]: https://github.com/bdelion/weather-harvest/actions/workflows/ci.yml/badge.svg?branch=develop 'Jenkins develop Build Status Icon'
[bdl]: https://github.com/bdelion/weather-harvest/actions/workflows/ci.yml 'Jenkins develop Job'
[qmb]: https://sonarcloud.io/api/project_badges/measure?project=bdelion_weather-harvest&branch=main&metric=alert_status 'Sonar main Quality Gate Status Badge'
[qml]: https://sonarcloud.io/summary/new_code?id=bdelion_weather-harvest&branch=main 'Sonar main Dashboard'
[qdb]: https://sonarcloud.io/api/project_badges/measure?project=bdelion_weather-harvest&branch=develop&metric=alert_status 'Sonar develop Quality Gate Status Badge'
[qdl]: https://sonarcloud.io/summary/new_code?id=bdelion_weather-harvest&branch=develop 'Sonar develop Dashboard'
[cclnpb]: https://github.com/bdelion/weather-harvest/actions/workflows/cleanup-cache.yml/badge.svg
[cclnpl]: https://github.com/bdelion/weather-harvest/actions/workflows/cleanup-cache.yml
[Make a README]: https://www.makeareadme.com/#template-1 'README Template et bonnes pratiques'
[Node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[Git]: https://git-scm.com/
[ESLint]: https://eslint.org/
[Prettier]: https://prettier.io/
[SonarCloud]: https://sonarcloud.io
[GitHub Actions]: https://github.com/features/actions
[ccmmtb]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white
[ccmmtl]: https://www.conventionalcommits.org/fr/v1.0.0/
[config.json]: https://github.com/bdelion/weather-harvest/blob/main/src/assets/config.json 'Lien vers le fichier de configuration de référence'
[Configuration]: https://bdelion.github.io/weather-harvest/Installation-&-configuration/Configuration 'Documentation pour configurer weather-harvest'
[@bdelion]: https://github.com/bdelion
[contributeurs]: https://github.com/bdelion/weather-harvest/graphs/contributors 'Liste des contributeurs au projet'
[CHANGELOG]: CHANGELOG.md 'CHANGELOG du projet'
[issues]: https://github.com/bdelion/weather-harvest/issues 'Liste des issues ouvertes'
[SemVer]: https://semver.org/lang/fr/ 'Bonnes pratique de la Gestion de Version'
[les tags de ce projet]: https://github.com/bdelion/weather-harvest/tags 'Liste des tags du projet'
[GitHub Pages]: https://bdelion.github.io/weather-harvest/
[Github Actions weather-harvest]: https://github.com/bdelion/weather-harvest/actions 'Workflows GitHub Actions du projet'
[SonarCloud weather-harvest]: https://sonarcloud.io/project/overview?id=bdelion_weather-harvest 'Dashboard Sonar du projet'
[GitHub Package Registry]: https://github.com/bdelion/weather-harvest/packages
[Dependencies]: https://github.com/bdelion/weather-harvest/network/dependencies
[Dependents]: https://github.com/bdelion/weather-harvest/network/dependents
