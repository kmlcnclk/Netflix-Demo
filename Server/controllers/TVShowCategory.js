const { ApolloError } = require('apollo-server-errors');
const asyncHandler = require('express-async-handler');
const TVShowCategory = require('../models/TVShowCategory');

const addTVShowCategory = asyncHandler(async (name, res) => {
  const tvsc = await TVShowCategory.findOne({
    name: name,
  });

  if (tvsc) {
    throw new ApolloError('This category is available');
  }

  const category = await TVShowCategory.create({
    name,
  });
  res.results = { success: true };
});

const deleteTVShowCategory = asyncHandler(async (name, res) => {
  const tvsc = await TVShowCategory.findOne({
    name: name,
  });

  if (!tvsc) {
    throw new ApolloError('This category is available');
  } else {
    await tvsc.remove();
  }

  res.results = {
    success: true,
  };
});

module.exports = { addTVShowCategory, deleteTVShowCategory };
