// Pour plus d'informations: https://semantic-release.gitbook.io/semantic-release/usage/configuration
module.exports = {
  branches: ['main', 'feature'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: './CHANGELOG.md',
      },
    ],
    '@semantic-release/git',
    '@semantic-release/github',
  ],
  dryRun: false, // Par défaut : 'false' si exécuté dans un environnement CI, true sinon.
};
