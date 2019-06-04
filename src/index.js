'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('config');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./docs/swagger.js');
const path = require('path');
const fs = require('fs');
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

const app = express();

//TODO: Let's se if we can refactor this someday...
app.use(morgan(process.env.NODE_ENV == 'production' ? 'combined' : 'common', { stream: accessLogStream }));
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

let server = app.listen(config.get('port'), () => {
    console.log(new Date().toUTCString() + `# SERVIDOR: http://localhost:${config.get('port')}`)
});

module.exports = server;