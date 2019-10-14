const express = require('express');
const router = express.Router();

const routes = app => {
  app.use('/user', router);


  /**
   * @swagger
   * /user:
   *  get:
   *      description: some description
   *      produces:
   *          - application/json
   *      responses:
   *          200:
   *              description: Todo
   *
   */
  router.get('/', (req, res) => res.send({ message: ':-D' }));
};

module.exports = routes;
