'use strict';

const path = require('path');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');
const serverBundle = require('./../dist/vue-ssr-server-bundle.json');
const template = require('fs').readFileSync('./server/index.template.html', 'utf-8');
const clientManifest = require('./../dist/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest,
});

const app = express();
app.use((req, res, next) => {
  res.removeHeader('x-powered-by');
  res.header('no-cache', 'Set-Cookie');
  res.header('x-xss-protection', '1; mode=block');
  res.header('x-frame-options', 'DENY');
  res.header('x-content-type-options', 'nosniff');
  next();
});


app.use('/favicons/', express.static('dist/favicons', {
  index: false,
  setHeaders: (res, path, stat) => {
    res.header('Cache-Control', 'max-age=86400');
  },
}));

app.get(['/*.js', '/*.css', '/*.js.map', '/*.css.map', '/manifest.json'], (req, res, next) => {
  const fileName = req.originalUrl;
  const root = 'dist';
  console.log(`static: ${fileName}`);
  res.header('Cache-Control', 'max-age=60');
  res.sendFile(fileName, { root: root }, (err) => {
    if (err) {
      next(err);
    }
  });
});

app.get('*', (req, res) => {
  res.header('content-type', 'text/html');
  res.header('Cache-Control', 'max-age=60');
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

module.exports = {
  app,
};
