const bodyParser = require('body-parser');
const helmet = require('helmet');
const config = require('config');
const routes = require('../api');
const logger = require('../loaders/logger');

const expressLoader = async app => {
  try {
    app.use(helmet());

    /* Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
     It shows the real origin IP in the heroku or Cloudwatch logs */
    app.enable('trust proxy');

    // Middleware that transforms the raw string of req.body into json
    app.use(bodyParser.json());

    app.get('/', (req, res) => res.send({ message: 'Welcome' }));

    // Load API routes
    app.use(config.get('api').prefix, routes());

    /// catch 404 and forward to error handler
    app.use((req, res, next) => {
      const err = new Error('Not Found');
      err['status'] = 404;
      next(err);
    });

    // eslint-disable-next-line no-unused-vars
    app.use((err, req, res, next) => {
      if (err.name === 'UnauthorizedError') err.status = 401
      res.status(err.status || 500);
      res.json({
        errors: {
          message: err.message,
        },
      });
    });
  } catch (error) {
    logger.error(error);
  }
};


module.exports = expressLoader;
