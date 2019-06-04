const swaggerJsdoc = require('swagger-jsdoc');
const package = require('../../package.json');
const options = {
    swaggerDefinition: {
        // Like the one described here: https://swagger.io/specification/#infoObject
        info: {
            title: package.name,
            version: package.version,
            description: package.description,
        },
    },
    apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;