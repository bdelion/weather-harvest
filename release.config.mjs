// Pour plus d'informations: https://semantic-release.gitbook.io/semantic-release/usage/configuration
/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: [
    { name: 'feature/add-semantic-version-configuration', prerelease: 'alpha' },
    { name: 'develop', prerelease: 'snapshot' },
    { name: 'release/*', prerelease: 'rc' },
    { name: 'bugfix/*', prerelease: 'bfc' },
    'main',
    'support/*',
    { name: 'hotfix/**', prerelease: 'hc' },
  ],
  tagFormat: '${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG-beta.md',
        changelogTitle: '# Changelog',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json', 'CHANGELOG-beta.md'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
  dryRun: false, // Par défaut : 'false' si exécuté dans un environnement CI, true sinon.
  ci: false, // Par défaut : 'true' si exécuté dans un environnement CI, false sinon.
  debug: true, // Par défaut : 'false',
  preset: 'conventionalcommits',
  // Par défaut : https://github.com/semantic-release/commit-analyzer/blob/master/lib/default-release-rules.js
  releaseRules: [
    { type: 'chore', release: 'patch' },
    { type: 'docs', release: 'patch' },
    { type: 'feat', release: 'minor' },
    { type: 'fix', release: 'patch' },
    { type: 'style', release: 'patch' },
    { type: 'refactor', release: 'patch' },
    { type: 'perf', release: 'patch' },
    { type: 'test', release: 'patch' },
    { type: 'build', release: 'patch' },
    { type: 'ci', release: 'patch' },
    { type: 'revert', release: 'patch' },
    { type: 'BREAKING CHANGE', release: 'major' },
  ],
};
