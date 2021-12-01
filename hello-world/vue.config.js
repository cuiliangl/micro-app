const { name } = require('./package.json')

module.exports = {
  publicPath: process.env.BASE_URL,
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  },
  devServer: {
    port: process.env.VUE_APP_PORT,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
