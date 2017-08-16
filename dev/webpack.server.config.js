const webpack = require('webpack');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');


const baseConfig = require('./webpack.base.config');

const config = merge(baseConfig, {
  entry: {
    server: path.resolve(__dirname, '../src/app-server.js'),
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs2'
  },
  // externals: nodeExternals({
  //   whitelist: [
  //     /\.css$/,
  //     /\.scss$/,
  //     /\.vue$/,
  //     /\.js$/,
  //   ],
  // }),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"',
        'VUE_ENV': '"server"',
      },
    }),
    new VueSSRServerPlugin()
  ],
  devtool: '#source-map',
});

module.exports = config;
