const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = 'production';

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
        include: [
          resolve('src'),
          resolve('node_modules/@material'),
        ],
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
          ]
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.[contenthash].css',

    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join('src', 'index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
  ],
  devtool: '#source-map',
};

module.exports = config;
