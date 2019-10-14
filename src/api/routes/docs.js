const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const router = express.Router();
const config = require('config');
const packageData = require('../../../package.json');

const apiInfo = config.get('api');

const options = {
  swaggerDefinition: {
    basePath: apiInfo.prefix,
    info: {
      title: packageData.name,
      version: apiInfo.version,
      description: packageData.description
    }
  },
  apis: ['./src/api/routes/*.js']
};

const apiSpec = swaggerJsdoc(options);

const routes = app => {
  app.use('/docs', router);

  router.use('/', swaggerUi.serve);
  router.get('/', swaggerUi.setup(apiSpec));
};

module.exports = routes;
