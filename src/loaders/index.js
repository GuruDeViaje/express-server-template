const expressLoader = require('./express');
const { logger } = require('./logger');

const init = async expressApp => {
  logger.info('✌️ Express loaded');
  await expressLoader(expressApp);
};

module.exports = init;
