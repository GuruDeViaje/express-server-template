const pino = require('pino');
const expressPino = require('express-pino-logger');
const config = require('config');

const logger = pino({
  level: config.get('log').level,
  redact: {
    paths: ['req', 'res', 'hostname', 'pid'],
    remove: true,
  }
});

const expressLogger = expressPino({ logger });

const log = {
  logger,
  expressLogger
};

module.exports = log;
