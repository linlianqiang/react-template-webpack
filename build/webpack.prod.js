/*
 * @Description: 
 * @Date: 2022-03-14 11:38:22
 * @LastEditTime: 2022-04-02 10:20:15
 */
'use strict'
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const webpackBase = require('./webpack.base');

module.exports = merge(webpackBase, {
  mode: 'production',
  devtool: false,
  optimization: {},
  plugins: []
})