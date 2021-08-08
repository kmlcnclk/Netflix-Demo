const { gql } = require('apollo-server-micro');

export const ProfileTypes = gql`
  type Profile {
    _id: ID!
    likes: [ID]!
    likeCount: Int!
    createAt: Date
    myList: [ID]!
    profileName: String!
    profileImageUrl: String!
    language: String!
    maturitySettings: MaturitySettings!
    autoplayControls: AutoplayControls!
    watchHistory: [ID]!
    kids: Boolean!
    titleRestrictions: [String]!
  }

  type MaturitySettings {
    ageLimit: String!
    sliderValue: Int!
  }

  type AutoplayControls {
    autoplayNextEpisode: Boolean!
    previews: Boolean!
  }
`;
