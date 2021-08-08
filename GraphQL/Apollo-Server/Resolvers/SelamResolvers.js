export const SelamResolvers = {
  Query: {
    async selam(_, { selam }, { res }) {
      res.results = {
        selam: selam,
      };
      return res.status(200).results;
    },
  },
};
