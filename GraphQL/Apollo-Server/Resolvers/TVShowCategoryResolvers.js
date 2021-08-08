import {
  addTVShowCategory,
  deleteTVShowCategory,
} from '../../../Server/controllers/TVShowCategory';

export const TVShowCategoryResolvers = {
  Mutation: {
    async addTVShowCategory(_, { name }, { res }) {
      await addTVShowCategory(name, res);

      return res.status(200).results;
    },
    async deleteTVShowCategory(_, { name }, { res }) {
      await deleteTVShowCategory(name, res);

      return res.status(200).results;
    },
  },
};
