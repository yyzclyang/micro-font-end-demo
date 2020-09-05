const StatsPlugin = require('stats-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
  publicPath: '//localhost:3002',
  devServer: { port: 3001 },
  configureWebpack: {
    devtool: 'none',
    output: {
      filename: '[name].[hash:8].js',
      chunkFilename: '[name].bundle.[chunkhash:8].js',
      library: pkg.name
    },
    plugins: [
      new StatsPlugin('manifest.json', {
        chunkModules: false,
        entrypoints: true,
        source: false,
        chunks: false,
        modules: false,
        assets: false,
        children: false,
        exclude: [/node_modules/]
      })
    ]
  }
};
