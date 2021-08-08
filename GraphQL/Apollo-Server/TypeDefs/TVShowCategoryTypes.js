const { gql } = require('apollo-server-micro');

export const TVShowCategoryTypes = gql`
  type TVShowCategory {
    _id: ID!
    name: String!
    slug: String!
    createAt: Date
    tvShows: [ID]!
    tvShowCount: Int!
  }

  type AddTVShowCategory {
    success: Boolean!
  }

  type DeleteTVShowCategory {
    success: Boolean!
  }
`;
