const { resolve } = require('path');
const rewireYarnWorkspaces = require('react-app-rewire-yarn-workspaces');

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    components: resolve('./src/components'),
    pages: resolve('./src/pages'),
    static: resolve('./src/static'),
  }

  return rewireYarnWorkspaces(config, env);
};