'use strict';

const awsServerlessExpress = require('aws-serverless-express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const { app } = require('./server');
app.use(awsServerlessExpressMiddleware.eventContext());

const server = awsServerlessExpress.createServer(app);

module.exports.render = (event, context, callback) => {
  console.log(event);
  awsServerlessExpress.proxy(server, event, context);
};
