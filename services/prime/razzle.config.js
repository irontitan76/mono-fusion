const nodeExternals = require('webpack-node-externals');
const fs = require('fs');
const { resolve } = require('path');

module.exports = {
  modifyBabelOptions() {
    return {
      presets: ['razzle/babel'],
    };
  },
  modify(config, { target, dev }, webpack) {
    // package un-transpiled packages
    const babelRuleIndex = config.module.rules.findIndex(
      (rule) => rule.use && rule.use[0].loader && rule.use[0].loader.includes('babel-loader')
    );

    config.module.rules[babelRuleIndex] = Object.assign(config.module.rules[babelRuleIndex], {
      include: [
        ...config.module.rules[babelRuleIndex].include,
        fs.realpathSync('../../node_modules/@fusion/visual')
      ],
    });

    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   '@fusion/visual': resolve(__dirname, '..', '..', 'packages', 'visual', 'lib'),
    // }

    config.externals = target === 'node'
      ? [
          nodeExternals({
            whitelist: [
              dev ? 'webpack/hot/poll?300' : null,
              /\.(eot|woff|woff2|ttf|otf)$/,
              /\.(svg|png|jpg|jpeg|gif|ico)$/,
              /\.(mp4|mp3|ogg|swf|webp)$/,
              /\.(css|scss|sass|sss|less)$/,
              /^@fusion\/design/,
            ].filter(Boolean),
          }),
        ]
      : [];

    return config;
  },
};