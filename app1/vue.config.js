const StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  publicPath: '//localhost:3001',
  devServer: { port: 3001 },
  configureWebpack: {
    output: {
      library: 'APP1',
      libraryTarget: 'window'
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
