const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = './../src';

console.log(__dirname);
console.log(path.join(SRC_PATH, 'app.js'));
const config = {
  entry: {
    app: path.join(SRC_PATH, 'app.js'),
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename:'index.html',
      template: path.join('src', 'index.html'),
      inject: true,
    }),
  ],
  devtool: '#cheap-eval-source-map',
};

module.exports = config;
