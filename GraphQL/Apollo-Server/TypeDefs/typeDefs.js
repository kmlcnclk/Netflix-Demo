const { gql } = require('apollo-server-micro');
const { SelamTypes } = require('./selamTypes');
const { TVShowTypes } = require('./TVShowTypes');
const { MovieTypes } = require('./MovieTypes');
const { UserTypes } = require('./userTypes');
const { TVShowCategoryTypes } = require('./TVShowCategoryTypes');
const { MovieCategoryTypes } = require('./MovieCategoryTypes');
const { ProfileTypes } = require('./profileTypes');

export const typeDefs = gql`
  type Query {
    selam(selam: String!): Selam!
    rememberMe(email: String!): RememberMe!
    getProfilesFromUser(email: String!): GetProfilesFromUser!
    getAllUser: [ID]!
    getUserID(email: String!): GetUserID!
    getUserFromID(ID: ID!): GetUserFromID!
    getUnclickedProfiles(
      email: String!
      clickProfileIndex: String!
    ): GetUnclickedProfiles!
    getAllMyListToProfile(
      email: String!
      clickProfileIndex: String!
    ): GetAllMyListToProfile!
    getAllMovies: GetAllMovies!
    getAllTVShows: GetAllTVShows!
    isAdmin(adminEmail: String!): IsAdmin!
    getProfileImageFromUser(email: String!): GetProfileImageFromUser!
  }

  type Mutation {
    registerUser(
      email: String!
      password: String!
      doNotEmailMe: Boolean!
    ): RegisterUser!
    login(email: String!, password: String!): Login!
    makeTheUserAdmin(
      email: String!
      role: String!
      adminID: ID!
    ): MakeTheUserAdmin!
    receiveEmail(email: String!): ReceiveEmail!
    isReceivedMailAlready(email: String!): IsReceivedMailAlready!
    registrationPhaseState(email: String!): RegistrationPhaseState!
    registrationPhaseStateUpdate(
      email: String!
      rpsu: Boolean!
    ): RegistrationPhaseStateUpdate!
    creditOptionAddToUser(
      email: String!
      fName: String!
      lName: String!
      cardNumber: String!
      cardExpiry: String!
      cardCVV: String!
    ): CreditOptionAddToUser!
    addProfileToUser(
      email: String!
      profileName: String!
      profileImageUrl: String!
      kids: Boolean!
    ): AddProfileToUser!
    changeToProfileName(
      email: String!
      profileName: String!
      profileImageUrl: String!
      language: String!
      ageLimit: String!
      autoplayNextEpisode: Boolean!
      previews: Boolean!
      profileIndex: String!
    ): ChangeToProfileName!
    deleteProfileToUser(
      email: String!
      profileIndex: String!
    ): DeleteProfileToUser!
    isThePasswordCorrect(
      email: String!
      password: String!
      clickProfileIndex: String!
    ): IsThePasswordCorrect!
    changeToUserSliderValue(
      email: String!
      ageLimit: String!
      sliderValue: Int!
      clickProfileIndex: String!
      titleRestrictions: [String]!
      kids: Boolean!
    ): ChangeToUserSliderValue!
    addTVShow(
      name: String!
      content: String!
      duration: [String]!
      videoUrl: [String]!
      category: [String]!
      ageLimit: String!
    ): AddTVShow!
    addMovie(
      name: String!
      content: String!
      duration: [String]!
      videoUrl: [String]!
      category: [String]!
      ageLimit: String!
    ): AddMovie!
    addTVShowCategory(name: String!): AddTVShowCategory!
    addMovieCategory(name: String!): AddMovieCategory!
    adminLogin(email: String!, password: String!): AdminLogin!
    addWatchHistory(
      ID: ID!
      name: String!
      clickProfileIndex: String!
    ): AddWatchHistory!
    addMyList(ID: ID!, name: String!, clickProfileIndex: String!): AddMyList!
    deleteMyList(
      ID: ID!
      name: String!
      clickProfileIndex: String!
    ): DeleteMyList!
    deleteMovie(name: String!): DeleteMovie!
    deleteTVShow(name: String!): DeleteTVShow!
    deleteMovieCategory(name: String!): DeleteMovieCategory!
    deleteTVShowCategory(name: String!): DeleteTVShowCategory!
    deleteTitleRestrictions(
      email: String!
      clickProfileIndex: String!
      videoName: String!
    ): DeleteTitleRestrictions!
  }

  scalar Date

  ${SelamTypes}
  ${UserTypes}
  ${TVShowTypes}
  ${MovieTypes}
  ${TVShowCategoryTypes}
  ${MovieCategoryTypes}
  ${ProfileTypes}
`;
