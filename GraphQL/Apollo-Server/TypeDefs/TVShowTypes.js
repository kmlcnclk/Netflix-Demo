const { gql } = require('apollo-server-micro');

export const TVShowTypes = gql`
  type TVShow {
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

  type AddTVShow {
    success: Boolean!
  }

  type GetAllTVShows {
    success: Boolean!
    tvShows: [TVShow]!
  }

  type DeleteTVShow {
    success: Boolean!
  }
`;
