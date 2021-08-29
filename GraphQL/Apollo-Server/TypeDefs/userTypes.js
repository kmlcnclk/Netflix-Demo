const { gql } = require('apollo-server-micro');

export const UserTypes = gql`
  type User {
    _id: ID!
    email: String!
    password: String!
    createAt: Date
    role: String!
    resetPasswordToken: String!
    resetPasswordExpire: String!
    creditCards: [CreditCards]!
    registrationPhaseState: Boolean!
    profiles: [ID]!
    child: ID
    doNotEmailMe: Boolean!
  }

  type RegisterUser {
    success: Boolean!
    ID: ID!
  }

  type CreditCards {
    fName: String!
    lName: String!
    cardNumber: String!
    cardExpiry: String!
    cardCVV: String!
  }
  type MakeTheUserAdmin {
    success: Boolean!
    message: String!
  }
  type ReceiveEmail {
    success: Boolean!
    access_token: String!
  }
  type IsReceivedMailAlready {
    success: Boolean!
    emailState: Boolean!
  }

  type RegistrationPhaseState {
    success: Boolean!
    registrationPhaseRoute: String!
  }

  type RegistrationPhaseStateUpdate {
    success: Boolean!
  }

  type Login {
    success: Boolean!
    ID: ID!
    registrationPhaseState: Boolean!
  }

  type CreditOptionAddToUser {
    success: Boolean!
  }

  type RememberMe {
    success: Boolean!
    password: String!
  }

  type Profiles {
    profileName: String!
    profileImageUrl: String!
    language: String!
    maturitySettings: MaturitySettings!
    autoplayControls: AutoplayControls!
    kids: Boolean!
  }

  type AddProfileToUser {
    success: Boolean!
  }

  type GetProfilesFromUser {
    success: Boolean!
    profiles: [Profiles]!
  }

  type ChangeToProfileName {
    success: Boolean!
  }

  type DeleteProfileToUser {
    success: Boolean!
  }

  type GetUserID {
    success: Boolean!
    ID: ID!
  }

  type GetUserFromID {
    success: Boolean!
    user: User!
    profiles: [Profile]!
    child: Child!
  }

  type IsThePasswordCorrect {
    success: Boolean!
    sliderValue: Int!
  }

  type ChangeToUserSliderValue {
    success: Boolean!
  }

  type GetUnclickedProfiles {
    success: Boolean!
    profilesImage: [String]!
    profilesName: [String]!
    i: [Int]!
  }

  type AdminLogin {
    success: Boolean!
  }

  type AddWatchHistory {
    success: Boolean!
  }

  type AddMyList {
    success: Boolean!
    movies: [Movie]!
    tvShows: [TVShow]!
  }

  type DeleteMyList {
    success: Boolean!
    movies: [Movie]!
    tvShows: [TVShow]!
  }

  type GetAllMyListToProfile {
    success: Boolean!
    movies: [Movie]!
    tvShows: [TVShow]!
  }

  type IsAdmin {
    success: Boolean!
  }

  type GetProfileImageFromUser {
    success: Boolean!
    images: [String!]
  }

  type DeleteTitleRestrictions {
    success: Boolean!
    titleRestrictions: [String]!
  }

  type GetChildFromUser {
    success: Boolean!
    child: Child
  }

  type DeleteChildFromUser {
    success: Boolean!
  }

  type ChangeChildFromUser {
    success: Boolean!
  }

  type IsThePasswordCorrectChildProfile {
    success: Boolean!
    sliderValue: Int!
  }
`;
