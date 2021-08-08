import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation registerUser(
    $email: String!
    $password: String!
    $doNotEmailMe: Boolean!
  ) {
    registerUser(
      email: $email
      password: $password
      doNotEmailMe: $doNotEmailMe
    ) {
      success
      ID
    }
  }
`;

export const REGISTRATION_PHASE_STATE = gql`
  mutation registrationPhaseState($email: String!) {
    registrationPhaseState(email: $email) {
      success
      registrationPhaseRoute
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      success
      ID
      registrationPhaseState
    }
  }
`;
export const IS_RECEIVED_MAIL_ALREADY = gql`
  mutation isReceivedMailAlready($email: String!) {
    isReceivedMailAlready(email: $email) {
      success
      emailState
    }
  }
`;
export const CREDIT_OPTION_ADD_TO_USER = gql`
  mutation creditOptionAddToUser(
    $email: String!
    $fName: String!
    $lName: String!
    $cardNumber: String!
    $cardExpiry: String!
    $cardCVV: String!
  ) {
    creditOptionAddToUser(
      email: $email
      fName: $fName
      lName: $lName
      cardNumber: $cardNumber
      cardExpiry: $cardExpiry
      cardCVV: $cardCVV
    ) {
      success
    }
  }
`;

export const ADD_PROFILE_TO_USER = gql`
  mutation addProfileToUser(
    $email: String!
    $profileName: String!
    $profileImageUrl: String!
    $kids: Boolean!
  ) {
    addProfileToUser(
      email: $email
      profileName: $profileName
      profileImageUrl: $profileImageUrl
      kids: $kids
    ) {
      success
    }
  }
`;

export const CHANGE_TO_PROFILE_NAME = gql`
  mutation changeToProfileName(
    $email: String!
    $profileName: String!
    $profileImageUrl: String!
    $language: String!
    $ageLimit: String!
    $autoplayNextEpisode: Boolean!
    $previews: Boolean!
    $profileIndex: String!
  ) {
    changeToProfileName(
      email: $email
      profileName: $profileName
      profileImageUrl: $profileImageUrl
      language: $language
      ageLimit: $ageLimit
      autoplayNextEpisode: $autoplayNextEpisode
      previews: $previews
      profileIndex: $profileIndex
    ) {
      success
    }
  }
`;

export const DELETE_PROFILE_TO_USER = gql`
  mutation deleteProfileToUser($email: String!, $profileIndex: String!) {
    deleteProfileToUser(email: $email, profileIndex: $profileIndex) {
      success
    }
  }
`;

export const IS_THE_PASSWORD_CORRECT = gql`
  mutation isThePasswordCorrect(
    $email: String!
    $password: String!
    $clickProfileIndex: String!
  ) {
    isThePasswordCorrect(
      email: $email
      password: $password
      clickProfileIndex: $clickProfileIndex
    ) {
      success
      sliderValue
    }
  }
`;

export const CHANGE_TO_USER_SLIDER_VALUE = gql`
  mutation changeToUserSliderValue(
    $email: String!
    $ageLimit: String!
    $sliderValue: Int!
    $clickProfileIndex: String!
    $titleRestrictions: [String]!
    $kids: Boolean!
  ) {
    changeToUserSliderValue(
      email: $email
      ageLimit: $ageLimit
      sliderValue: $sliderValue
      clickProfileIndex: $clickProfileIndex
      titleRestrictions: $titleRestrictions
      kids: $kids
    ) {
      success
    }
  }
`;

export const ADMIN_LOGIN = gql`
  mutation adminLogin($email: String!, $password: String!) {
    adminLogin(email: $email, password: $password) {
      success
    }
  }
`;

export const ADD_WATCH_HISTORY = gql`
  mutation addWatchHistory(
    $ID: ID!
    $name: String!
    $clickProfileIndex: String!
  ) {
    addWatchHistory(
      ID: $ID
      name: $name
      clickProfileIndex: $clickProfileIndex
    ) {
      success
    }
  }
`;

export const ADD_MY_LIST = gql`
  mutation addMyList($ID: ID!, $name: String!, $clickProfileIndex: String!) {
    addMyList(ID: $ID, name: $name, clickProfileIndex: $clickProfileIndex) {
      success
      movies {
        name
        content
        videoUrl
        categories
        duration
        ageLimit
        createAt
      }
      tvShows {
        name
        content
        videoUrl
        categories
        duration
        ageLimit
        createAt
      }
    }
  }
`;

export const DELETE_MY_LIST = gql`
  mutation deleteMyList($ID: ID!, $name: String!, $clickProfileIndex: String!) {
    deleteMyList(ID: $ID, name: $name, clickProfileIndex: $clickProfileIndex) {
      success
      movies {
        name
        content
        videoUrl
        categories
        duration
        ageLimit
        createAt
      }
      tvShows {
        name
        content
        videoUrl
        categories
        duration
        ageLimit
        createAt
      }
    }
  }
`;

export const DELETE_TITLE_RESTRICTIONS = gql`
  mutation deleteTitleRestrictions(
    $email: String!
    $clickProfileIndex: String!
    $videoName: String!
  ) {
    deleteTitleRestrictions(
      email: $email
      clickProfileIndex: $clickProfileIndex
      videoName: $videoName
    ) {
      success
      titleRestrictions
    }
  }
`;
