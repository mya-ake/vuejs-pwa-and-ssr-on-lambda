'use strict';

const path = require('path');
const express = require('express');
// const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const { createBundleRenderer } = require('vue-server-renderer');
const serverBundle = require('./../dist/vue-ssr-server-bundle.json');
const template = require('fs').readFileSync('./server/index.html', 'utf-8');
const clientManifest = require('./../dist/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest,
});

const app = express();
// app.use(awsServerlessExpressMiddleware.eventContext());


app.get(['/*.js', '/*.css', '/*.js.map', '/*.css.map'], (req, res, next) => {
  const fileName = req.originalUrl;
  console.log(`static: ${fileName}`);
  const root = fileName.startsWith('/node_modules/') ? '.' : 'dist';
  res.header('Cache-Control', 'max-age=86400');
  res.sendFile(fileName, { root: root }, (err) => {
    if (err) {
      next(err);
    }
  });
});

app.get('*', (req, res) => {
  const context = { url: req.url };
  console.log(`html: ${req.url}`);

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
const server = app.listen(port, () => {
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

