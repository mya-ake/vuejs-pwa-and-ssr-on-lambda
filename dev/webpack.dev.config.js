const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

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
      '~': resolve('src'),
      'vue$': 'vue/dist/vue.runtime.esm.js',
      'vuex$': 'vuex/dist/vuex.esm.js',
    },
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
        options: {
          postcss: [
            require('autoprefixer')({
              browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions'],
            }),
          ],
        },
      },
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
    new FriendlyErrorsPlugin()
  ],
  devtool: '#cheap-eval-source-map',
};

module.exports = config;
