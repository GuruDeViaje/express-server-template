const express = require('express');
const userRouter = require('./routes/user');
const docsRouter = require('./routes/docs');

module.exports = () => {
  const app = express.Router();
  userRouter(app);
  docsRouter(app);
  return app;
};
