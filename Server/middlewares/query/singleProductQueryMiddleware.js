const { ApolloError } = require('apollo-server-errors');
const asyncHandler = require('express-async-handler');
const { populateHelper } = require('./queryMiddlewareHelpers');

// Product Query Middleware
const singleProductQueryMiddleware = asyncHandler(async function (
  slug,
  model,
  res
) {
  const product = await model
    .findOne({
      slug,
    })
    .populate({
      path: 'category',
      select: 'name',
    })
    .populate({
      path: 'user',
      select: 'name',
    });

  if (!product) {
    throw new ApolloError('This product is not registered', 400);
  }
  res.result = { data: product, success: true, code: 200, message: '' };
});

module.exports = singleProductQueryMiddleware;
