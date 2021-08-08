const { ApolloError } = require('apollo-server-errors');
const asyncHandler = require('express-async-handler');
const TVShow = require('../models/TVShow');
const TVShowCategory = require('../models/TVShowCategory');

const addTVShow = asyncHandler(
  async (name, content, duration, videoUrl, category, ageLimit, res) => {
    let categories = [];

    for (let i = 0; i < category.length; i++) {
      const c = await TVShowCategory.findOne({ name: category[i] });

      await categories.push(c.name);
    }

    const tvShow = await TVShow.create({
      name,
      content,
      duration,
      videoUrl,
      categories,
      ageLimit,
    });

    for (let i = 0; i < tvShow.categories.length; i++) {
      const category = await TVShowCategory.findOne({
        name: tvShow.categories[i],
      });

      if (!category) {
        throw new ApolloError('There is no such category', 401);
      }

      await category.tvShows.push(tvShow._id);
      category.tvShowCount = await category.tvShows.length;

      await category.save();
    }

    res.results = { success: true };
  }
);

const getAllTVShows = asyncHandler(async (res) => {
  const tvShows = await TVShow.find();

  res.results = {
    success: true,
    tvShows: tvShows,
  };
});

const deleteTVShow = asyncHandler(async (name, res) => {
  const tvShow = await TVShow.findOne({ name });

  if (!tvShow) {
    throw new ApolloError('There is no such TV Show', 401);
  } else {
    tvShow.remove();
  }

  res.results = {
    success: true,
  };
});

module.exports = { addTVShow, getAllTVShows, deleteTVShow };
