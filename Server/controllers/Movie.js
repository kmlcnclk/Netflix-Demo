const { ApolloError } = require('apollo-server-errors');
const asyncHandler = require('express-async-handler');
const Movie = require('../models/Movie');
const MovieCategory = require('../models/MovieCategory');

const addMovie = asyncHandler(
  async (name, content, duration, videoUrl, category, ageLimit, res) => {
    let categories = [];

    for (let i = 0; i < category.length; i++) {
      await categories.push(category[i]);
    }

    const movie = await Movie.create({
      name,
      content,
      duration,
      videoUrl,
      categories,
      ageLimit,
    });

    for (let i = 0; i < movie.categories.length; i++) {
      const category = await MovieCategory.findOne({
        name: movie.categories[i],
      });

      if (!category) {
        throw new ApolloError('There is no such category', 401);
      }

      await category.movies.push(movie._id);
      category.movieCount = await category.movies.length;

      await category.save();
    }

    res.results = { success: true };
  }
);

const getAllMovies = asyncHandler(async (res) => {
  const movies = await Movie.find();

  res.results = {
    success: true,
    movies: movies,
  };
});

const deleteMovie = asyncHandler(async (name, res) => {
  const movie = await Movie.findOne({ name });

  if (!movie) {
    throw new ApolloError('There is no such TV Show', 401);
  } else {
    movie.remove();
  }

  res.results = {
    success: true,
  };
});

module.exports = { addMovie, getAllMovies, deleteMovie };
