/*
 * @Description: 
 * @Date: 2022-03-14 11:38:22
 * @LastEditTime: 2022-03-25 10:36:27
 */
const { merge } = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const webpackBase = require('./webpack.base')

module.exports = merge(webpackBase, {
    mode: 'development',
    devServer: {
        port: '8060',
        host: 'localhost',
        // proxy: {},
        contentBase: path.join(__dirname, '../dist'), // boolean | string | array, static file location
        // publicPath: '/',
        stats: {
          color: true
        },
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        // hotOnly: true,
        // inline: true,
        https: false, // true for self-signed, object for cert authority
        // noInfo: true, // only errors & warns on hot reload
        progress: true,
      },
    module: {
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})