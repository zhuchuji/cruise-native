const webpackCommonConfig = require('./webpack.common.conf.js')
const merge = require('webpack-merge')
const webpack = require('webpack')

const webpackTestConfig = merge(webpackCommonConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '"testing"'
    })
  ]
})

delete webpackTestConfig.entry

module.exports = webpackTestConfig
