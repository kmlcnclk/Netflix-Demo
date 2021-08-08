import {
  addMovie,
  getAllMovies,
  deleteMovie,
} from '../../../Server/controllers/Movie';

export const MovieResolvers = {
  Query: {
    async getAllMovies(_, __, { res }) {
      await getAllMovies(res);

      return res.status(200).results;
    },
  },
  Mutation: {
    async addMovie(
      _,
      { name, content, duration, videoUrl, category, ageLimit },
      { res }
    ) {
      await addMovie(
        name,
        content,
        duration,
        videoUrl,
        category,
        ageLimit,
        res
      );

      return res.status(200).results;
    },
    async deleteMovie(_, { name }, { res }) {
      await deleteMovie(name, res);

      return res.status(200).results;
    },
  },
};
