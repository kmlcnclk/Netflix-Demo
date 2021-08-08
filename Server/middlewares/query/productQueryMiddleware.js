const asyncHandler = require('express-async-handler');
const {
  searchHelper,
  populateHelper,
  productSortHelper,
  paginationHelper,
} = require('./queryMiddlewareHelpers');
const Category = require('Server/models/Category');

// Product Query Middleware
const productQueryMiddleware = asyncHandler(async function (
  res,
  sortBy,
  model,
  options,
  slug,
  pageIndex
) {
  let query;
  if (slug) {
    const category = await Category.findOne({ slug });

    query = model.find({ category: category._id, stockState: true });
  } else {
    query = model.find();
  }
  // query = searchHelper("name", query, req);

  if (options && options.population) {
    query = populateHelper(query, options.population);
  }

  query = productSortHelper(query, sortBy);

  var b = [];

  const a = await Category.findOne({ slug });

  for (let i = 0; i < a.products.length; i++) {
    const c = await model.findById(a.products[i]);
    if (c.stockState) {
      b.push(a.products[i]);
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

module.exports = productQueryMiddleware;
