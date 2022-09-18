module.exports = {
  branchs: "master",
  repositoryUrl: "https://github.com/ganeshkumarburra/react-app",
  pulgins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "build.zip", label: "Build" },
          { path: "coverage.zip", label: "Coverage" },
        ],
      },
    ],
  ],
};
