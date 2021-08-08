const { gql } = require('apollo-server-micro');

export const SelamTypes = gql`
  #   type Category {
  #     _id: ID!
  #     name: String!
  #     slug: String!
  #     products: [Product]
  #     productCount: Int
  #     createAt: Date
  #     imageUrl: String!
  #   }

  type Selam {
    selam: String!
  }
`;
