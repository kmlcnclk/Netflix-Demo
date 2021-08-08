import {
  addMovieCategory,
  deleteMovieCategory,
} from '../../../Server/controllers/MovieCategory';

export const MovieCategoryResolvers = {
  Mutation: {
    async addMovieCategory(_, { name }, { res }) {
      await addMovieCategory(name, res);

      return res.status(200).results;
    },
    async deleteMovieCategory(_, { name }, { res }) {
      await deleteMovieCategory(name, res);

      return res.status(200).results;
    },
  },
};
