const { gql } = require('apollo-server-micro');

export const ChildTypes = gql`
  type Child {
    _id: ID!
    likes: [ID]!
    likeCount: Int!
    createAt: Date
    myList: [ID]!
    childName: String!
    childImageUrl: String!
    language: String!
    maturitySettings: MaturitySettingsC!
    autoplayControls: AutoplayControlsC!
    watchHistory: [ID]!
    kids: Boolean!
    titleRestrictions: [String]!
    profileLock: String!
    password: String
  }

  type MaturitySettingsC {
    ageLimit: String!
    sliderValue: Int!
  }

  type AutoplayControlsC {
    autoplayNextEpisode: Boolean!
    previews: Boolean!
    dataUsagePerScreen: String!
  }
`;
