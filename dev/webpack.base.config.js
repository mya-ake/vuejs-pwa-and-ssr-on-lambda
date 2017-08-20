const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
};

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  output: {
    path: path.join(__dirname, '..', 'dist', 'assets'),
    filename: '[name].[hash].js',
    publicPath: '/assets/',
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
          extractCSS: isProduction,
          postcss: [
            require('autoprefixer')({
              browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions'],
            }),
          ],
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: resolve('src/static'),
        to: resolve('dist'),
      },
    ]),
  ],
};

module.exports = config;
