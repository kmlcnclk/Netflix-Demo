const { gql } = require('apollo-server-micro');

export const MovieTypes = gql`
  type Movie {
    _id: ID!
    name: String!
    slug: String!
    content: String!
    videoUrl: [String]!
    createAt: Date
    categories: [String]!
    likes: [ID]!
    likeCount: Int!
    duration: [String]!
    ageLimit: String!
  }

  type AddMovie {
    success: Boolean!
  }

  type GetAllMovies {
    success: Boolean!
    movies: [Movie]!
  }

  type DeleteMovie {
    success: Boolean!
  }
`;
