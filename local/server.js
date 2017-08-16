const express = require('express');

const appServer = express();
appServer.get('*', (req, res, next) => {
  const fileName = req.originalUrl;
  console.log(fileName);
  const root = fileName.startsWith('/node_modules/') ? '.' : 'dist';
  res.sendFile(fileName, { root: root }, (err) => {
    if (err) {
      next(err);
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
