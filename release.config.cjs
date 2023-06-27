// eslint-disable-next-line no-undef
module.exports = {
  branches: ['main', 'next'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
        preset: 'angular',
        releaseRules: [
          {
            release: false,
            scope: 'wip',
          },
          {
            release: false,
            scope: 'WIP',
          },
          {
            release: false,
            scope: 'no-release',
          },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
        preset: 'angular',
        writerOpts: {
          commitsSort: ['subject', 'scope'],
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'pnpm-lock.yaml', 'docs/CHANGELOG.md'],
      },
    ],
    '@semantic-release/github',
  ],
  publishConfig: {
    access: 'restricted',
  },
};
