import { UserResolvers } from './UserResolvers';
import { SelamResolvers } from './SelamResolvers';
import { TVShowResolvers } from './TVShowResolvers';
import { TVShowCategoryResolvers } from './TVShowCategoryResolvers';
import { MovieResolvers } from './MovieResolvers';
import { MovieCategoryResolvers } from './MovieCategoryResolvers';
import { dateScalar } from '../CustomScalar/DateScalar';

export const resolvers = {
  Query: {
    ...SelamResolvers.Query,
    ...UserResolvers.Query,
    ...TVShowResolvers.Query,
    ...MovieResolvers.Query,
  },
  Mutation: {
    ...UserResolvers.Mutation,
    ...TVShowResolvers.Mutation,
    ...TVShowCategoryResolvers.Mutation,
    ...MovieResolvers.Mutation,
    ...MovieCategoryResolvers.Mutation,
  },

  Date: {
    dateScalar,
  },
};
