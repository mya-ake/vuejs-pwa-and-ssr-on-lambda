const ora = require('ora')
const webpack = require('webpack');

const { myExecSync, removeDistFiles } = require('./utils');
const webpackConfig = require('./webpack.prod.config');

/** settings */
process.env.NODE_ENV = 'production'

/** execute */
const spinner = ora('building for production...')
spinner.start()

removeDistFiles();

webpack(webpackConfig, (err, stats) => {
  spinner.stop()
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
});

// myExecSync('yarn webpack -p');
