module.exports = {
  publicPath: '//localhost:3001',
  devServer: { port: 3001 },
  configureWebpack: {
    output: {
      library: 'APP1',
      libraryTarget: 'window'
    }
  }
};
