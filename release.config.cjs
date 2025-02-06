module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    {
      releaseRules: [
        { type: 'refactor', release: 'patch' },
        { type: 'chore', release: 'patch' },
      ],
    },
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: [
          'CHANGELOG.md',
          'dist/*',
          'src/components/*',
          'src/styles/*',
          'package.json',
          'pnpm-lock.yaml',
        ],
        message:
                    'chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}', // eslint-disable-line no-template-curly-in-string
      },
    ],
  ],
}
