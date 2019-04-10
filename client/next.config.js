const path = require('path');
const withImages = require('next-images')

module.exports = withImages({
  webpack: (config) => {    
    config.module.rules.push(
      {
        test: /\.(md|mdx)$/,
        use: [
          {
            loader: 'raw-loader',
          }
        ]
      }
    );

    return config
  },
});