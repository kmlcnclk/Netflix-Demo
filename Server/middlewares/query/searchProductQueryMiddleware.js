const asyncHandler = require('express-async-handler');
const {
  searchHelper,
  populateHelper,
  productSortHelper,
  paginationHelper,
} = require('./queryMiddlewareHelpers');
const Category = require('Server/models/Category');

// Product Query Middleware
const searchProductQueryMiddleware = asyncHandler(async function (
  pageIndex,
  slug,
  req,
  res,
  model,
  options
) {
  let query;

  query = model.find({ stockState: true });

  query = searchHelper('name', query, slug);

  if (options && options.population) {
    query = populateHelper(query, options.population);
  }

  query = productSortHelper(query, '');

  const a = await model.find({ stockState: true });

  var b = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i].name.toLowerCase().includes(slug.toLowerCase())) {
      b.push(a[i]);
    }
  }

  const total = b.length;
  const paginationResult = await paginationHelper(pageIndex, total, query);

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

module.exports = searchProductQueryMiddleware;
