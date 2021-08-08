const asyncHandler = require('express-async-handler');

// Search Helper
const searchHelper = (searchKey, query, slug) => {
  const searchObject = {};
  const regex = new RegExp(slug, 'i');
  searchObject[searchKey] = regex;

  return query.where(searchObject);
};

// Populate Helper
const populateHelper = (query, population) => {
  return query.populate(population);
};

// Product Sort Helper
const productSortHelper = (query, sortBy) => {
  if (sortBy === 'increased-liking') {
    return query.sort('likeCount -createAt');
  } else if (sortBy === 'descending-liking') {
    return query.sort('-likeCount -createAt');
  } else if (sortBy === 'increasing-price') {
    return query.sort('price -createAt');
  } else if (sortBy === 'descending-price') {
    return query.sort('-price -createAt');
  } else if (sortBy === 'increasing-star') {
    return query.sort('star -createAt');
  } else if (sortBy === 'descending-star') {
    return query.sort('-star -createAt');
  } else {
    return query.sort('-createAt');
  }
};

// Pagination Helper
const paginationHelper = asyncHandler(
  async (pageIndex, totalDocuments, query) => {
    const page = pageIndex || 1;
    const limit = 21;

    if (page === 0) {
      page = 1;
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const pagination = {};
    const total = totalDocuments;

    if (startIndex > 0) {
      pagination.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit: limit,
      };
    }

    return {
      query:
        query === undefined ? undefined : query.skip(startIndex).limit(limit),
      pagination: pagination,
      startIndex: startIndex,
      limit: limit,
    };
  }
);

module.exports = {
  searchHelper,
  populateHelper,
  productSortHelper,
  paginationHelper,
};
