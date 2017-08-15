const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

const baseConfig = require('./webpack.base.config');

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
};

const config = merge(baseConfig, {
  entry: {
    app: path.resolve(__dirname, '../src/app-client.js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                resolve('src/scss'),
                resolve('node_modules'),
              ]
            },
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join('src', 'index.html'),
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    }),
    new VueSSRClientPlugin()
  ],
  devtool: '#cheap-eval-source-map',
});

module.exports = config;
