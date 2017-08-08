const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const options = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
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

module.exports = options;
