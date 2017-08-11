const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const SRC_PATH = './../src';

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
};

const config = {
  entry: {
    app: path.resolve(__dirname, '../src/app.js'),
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'vue$': 'vue/dist/vue.runtime.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename:'index.html',
      template: path.join('src', 'index.html'),
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin()
  ],
  devtool: '#cheap-eval-source-map',
};

module.exports = config;
