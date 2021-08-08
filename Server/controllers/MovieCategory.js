const { ApolloError } = require('apollo-server-errors');
const asyncHandler = require('express-async-handler');
const MovieCategory = require('../models/MovieCategory');

const addMovieCategory = asyncHandler(async (name, res) => {
  const mc = await MovieCategory.findOne({
    name: name,
  });

  if (mc) {
    throw new ApolloError('This category is available');
  }

  const category = await MovieCategory.create({
    name,
  });
  res.results = { success: true };
});

const deleteMovieCategory = asyncHandler(async (name, res) => {
  const mc = await MovieCategory.findOne({
    name: name,
  });

  if (!mc) {
    throw new ApolloError('This category is available');
  } else {
    await mc.remove();
  }

  res.results = {
    success: true,
  };
});

module.exports = { addMovieCategory, deleteMovieCategory };
