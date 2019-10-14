/* eslint-disable no-unreachable, no-process-exit */
const express = require('express');
const config = require('config');
const { logger } = require('./loaders/logger');
const loaders = require('./loaders');

const app = express();
const startServer = async () => {
  await loaders(app);

  app.listen(config.port, err => {
    if (err) {
      logger.error(err);
      process.exit(1);
      return;
    }
    logger.info(`😎  Server listening on port: ${config.port}`);
  });
};

startServer();

module.exports = startServer;
