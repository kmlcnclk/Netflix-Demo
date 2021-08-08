const { gql } = require('apollo-server-micro');

export const MovieCategoryTypes = gql`
  type MovieCategory {
    _id: ID!
    name: String!
    slug: String!
    createAt: Date
    movies: [ID]!
    movieCount: Int!
  }

  type AddMovieCategory {
    success: Boolean!
  }

   type DeleteMovieCategory {
    success: Boolean!
  }
`;
