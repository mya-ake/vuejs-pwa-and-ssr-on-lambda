'use strict';

const path = require('path');
const express = require('express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const { createBundleRenderer } = require('vue-server-renderer')
// const serverBundle = require('./../dist/vue-ssr-server-bundle.json');
const clientManifest = require('./../dist/vue-ssr-client-manifest.json');
const renderer = createBundleRenderer(path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json'), {
  runInNewContext: false,
  template: require('fs').readFileSync('./server/index.html', 'utf-8'),
  clientManifest,
});
// const renderer = require('vue-server-renderer').createRenderer({
//   template: require('fs').readFileSync('./server/index.html', 'utf-8'),
// });

const appServer = express();
appServer.use(awsServerlessExpressMiddleware.eventContext());

appServer.get(['/*.js', '/*.css'], (req, res, next) => {
  const fileName = req.originalUrl;
  console.log(fileName);
  const root = fileName.startsWith('/node_modules/') ? '.' : 'dist';
  res.header('Cache-Control', 'max-age=86400');
  res.sendFile(fileName, { root: root }, (err) => {
    if (err) {
      next(err);
    }
  });
});

appServer.get('*', (req, res) => {
  const context = { url: req.url };

  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.log(err);
      if (err.code === 404) {
        res.status(404).end('Page not found')
      } else {
        res.status(500).end('Internal Server Error')
      }
    } else {
      res.end(html)
    }
  });
});

const port = 4080;
const server = appServer.listen(port, () => {
  console.log(`listening: http://localhost:${port}`);
});

module.exports = {
  close: () => {
    server.close();
  },
};

// module.exports = {
//   app
// };

