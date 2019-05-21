const base = require('@fusion/system/next.config.js');
base.transpileModules.push('@fusion/corp');
base.target = 'serverless';

module.exports = base;
