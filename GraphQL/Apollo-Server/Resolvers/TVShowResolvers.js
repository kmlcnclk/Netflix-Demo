import {
  addTVShow,
  getAllTVShows,
  deleteTVShow,
} from '../../../Server/controllers/TVShow';

export const TVShowResolvers = {
  Query: {
    async getAllTVShows(_, __, { res }) {
      await getAllTVShows(res);

      return res.status(200).results;
    },
  },
  Mutation: {
    async addTVShow(
      _,
      { name, content, duration, videoUrl, category, ageLimit },
      { res }
    ) {
      await addTVShow(
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
    async deleteTVShow(_, { name }, { res }) {
      await deleteTVShow(name, res);

      return res.status(200).results;
    },
  },
};
