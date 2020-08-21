module.exports = {
  publicPath: '//localhost:3002',
  devServer: { port: 3001 },
  configureWebpack: {
    output: {
      library: 'APP2',
      libraryTarget: 'window'
    }
  }
};
