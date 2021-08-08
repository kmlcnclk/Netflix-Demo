const asyncHandler = require('express-async-handler');
const {
  searchHelper,
  populateHelper,
  productSortHelper,
  paginationHelper,
} = require('./queryMiddlewareHelpers');
const Category = require('Server/models/Category');

// Product Query Middleware
const allProductQueryMiddleware = asyncHandler(async function (
  res,
  req,
  model,
  options
) {
  let query;

  query = model.find();

  // query = searchHelper("name", query, req);

  if (options && options.population) {
    query = populateHelper(query, options.population);
  }

  query = productSortHelper(query, req);

  const total = await model.countDocuments();
  const paginationResult = await paginationHelper(total, query, req);

  query = paginationResult.query;
  const pagination = paginationResult.pagination;

  const queryResults = await query;

  res.queryResults = {
    success: true,
    count: queryResults.length,
    pagination: pagination,
    data: queryResults,
  };
});

module.exports = allProductQueryMiddleware;
