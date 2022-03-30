const express = require('express');

const productsRouter = require('./products.router');
const userRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

function routerApiV2(app) {
  const router = express.Router();
  app.use('/api/v2', router)
  router.use('/products', productsRouter)
  router.use('/users', userRouter)
  router.use('/categories', categoriesRouter)
}

module.exports = routerApiV2;
