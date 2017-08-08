const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const connectHistoryApiFallback = require('connect-history-api-fallback');
const express = require('express');
const path = require('path');

const config = require('./../config/dev.env');
const webpackConfig = require('./webpack.dev.config');
const { myExecSync, removeDistFiles } = require('./utils');

/** settings */
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = config.dev.NODE_ENV;
}
const port = config.dev.PORT;

// add hot-reload related code to entry chunks
Object.keys(webpackConfig.entry).forEach((name) => {
  const entry = path.resolve(__dirname, './dev-client');
  webpackConfig.entry[name] = [entry].concat(webpackConfig.entry[name])
})

const app = express();
const compiler = webpack(webpackConfig)

const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
});

const hotMiddleware = webpackHotMiddleware(compiler, {
  log: false,
  heartbeat: 2000
});

compiler.plugin('compilation', (compilation) => {
  console.log('complilation');
  compilation.plugin('html-webpack-plugin-after-emit', (data, callback) => {
    console.log('after-emit');
    hotMiddleware.publish({ action: 'reload' });
    callback();
  });
});

app.use(connectHistoryApiFallback());
app.use(devMiddleware);
app.use(hotMiddleware);

/** execute */
removeDistFiles();


// myExecSync('webpack -d');
// myExecSync('webpack --watch -d & browser-sync start --config bs-config.js');

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
  //   opn(uri)
  // }
  _resolve()
})

const server = app.listen(port, () => {
  console.log(`listening: http://localhost:${port}`);
});

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close();
  },
};
