module.exports = {
    branches: [
        "main",
        {
            name: "vue3.x",
            prerelease: true,
            channel: "next",
        },
    ],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/changelog",
            {
                changelogFile: "CHANGELOG.md",
            },
        ],
        "@semantic-release/npm",
        "@semantic-release/github",
        [
            "@semantic-release/git",
            {
                assets: [
                    "CHANGELOG.md",
                    "dist/*",
                    "src/components/*",
                    "src/styles/*",
                    "package.json",
                    "pnpm-lock.yaml",
                ],
                message:
                    "chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
            },
        ],
    ],
}
