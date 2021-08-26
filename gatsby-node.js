const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
  if (stage === 'build-javascript' || stage === 'develop') {
    actions.setWebpackConfig({
      plugins: [
        plugins.provide({ process: 'process/browser' }),
        new TsconfigPathsPlugin(),
      ],
    });
  }
};
