https://semantic-release.gitbook.io/semantic-release

https://keltio.fr/blog/mettre-en-place-versioning-semantic-release
https://www.liip.ch/fr/blog/development-workflow-with-semantic-release
https://www.retengr.com/le-blog/semantic-release-springboot-docker-and-gitlab
https://community.jeedom.com/t/semantic-release-et-le-versioning-automatique/112008
https://www.codeheroes.fr/2020/06/29/git-comment-nommer-ses-branches-et-ses-commits/
https://blog.iamludal.fr/automatisez-vos-montees-de-versions-grace-a-semantic-release
https://www.aukfood.fr/versioning-releases-semantic-release-est-la-premiere-partie/

https://medium.com/@OVHUXLabs/la-puissance-des-workflows-git-12e195cafe44




// Importation des modules nécessaires
const { readFileSync } = require('fs');
const { join } = require('path');

const changelogTemplate = readFileSync(
  join('config', 'changelog-template.hbs'),
  'utf-8'
);

module.exports = {
  branches: [
    'main',
    { name: 'develop', prerelease: 'beta' },
    { name: 'support/**', prerelease: false },
  ],
  plugins: [
    // Plugins définis avec importation dynamique pour les modules ESM
    function () {
      return import('@semantic-release/commit-analyzer').then(({ analyzeCommits }) => analyzeCommits);
    },
    function () {
      return import('@semantic-release/release-notes-generator').then(({ releaseNotesGenerator }) => releaseNotesGenerator);
    },
    function () {
      return import('@semantic-release/changelog').then(({ changelog }) => [
        changelog,
        {
          changelogTitle:
            '# Changelog\n\n> NOTE : Le format est basé sur [Keep a Changelog], et ce projet respecte [Semantic Versioning].\n\nTous les changements notables de ce projet seront documentés dans ce fichier.\n',
          changelogFile: 'CHANGELOG.md',
          preset: 'conventionalcommits',
          writerOpts: {
            transform: (commit, context) => {
              // Exclure les commits de merge
              if (
                commit.message.startsWith('Merge branch') ||
                commit.message.startsWith('Merge pull request')
              ) {
                return false;
              }

              const types = {
                feat: '### Ajouté',
                fix: '### Corrigé',
                perf: '### 🚀 Performance',
                docs: '### 📖 Documentation',
                style: '### 🎨 Style',
                refactor: '### 🔄 Refactoring',
                test: '### 🧪 Tests',
                chore: '### 🛠 Maintenance',
                ci: '### 🚀 CI/CD',
                build: '### 🏗️ Build',
              };

              if (!commit.type || !types[commit.type]) {
                return false;
              }

              commit.type = types[commit.type];

              return commit;
            },
            mainTemplate: changelogTemplate,
          },
        },
      ]);
    },
    function () {
      return import('@semantic-release/npm').then(({ npm }) => npm);
    },
    function () {
      return import('@semantic-release/github').then(({ default: github }) => github);
    },
    function () {
      return import('@semantic-release/git').then(({ git }) => git);
    },
  ],
};
