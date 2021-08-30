import { gql } from '@apollo/client';

export const REMEMBER_ME = gql`
  query rememberMe($email: String!) {
    rememberMe(email: $email) {
      success
      password
    }
  }
`;

export const GET_PROFILES_FROM_USER = gql`
  query getProfilesFromUser($email: String!) {
    getProfilesFromUser(email: $email) {
      success
      profiles {
        profileName
        profileImageUrl
        language
        maturitySettings {
          ageLimit
        }
        autoplayControls {
          autoplayNextEpisode
          previews
        }
        kids
      }
    }
  }
`;
export const GET_ALL_USER = gql`
  query {
    getAllUser {
      usersID
    }
  }
`;

export const GET_USER_ID = gql`
  query getUserID($email: String!) {
    getAllUser(email: $email) {
      success
      ID
    }
  }
`;

export const GET_USER_FROM_ID = gql`
  query getUserFromID($ID: ID!) {
    getUserFromID(ID: $ID) {
      success
      user {
        _id
        email
      }
      profiles {
        profileName
        profileImageUrl
        titleRestrictions
        kids
        maturitySettings {
          sliderValue
        }
      }
      child {
        childName
        childImageUrl
        titleRestrictions
        kids
        maturitySettings {
          sliderValue
        }
      }
    }
  }
`;

export const GET_UNCLICKED_PROFILES = gql`
  query getUnclickedProfiles($email: String!, $clickProfileIndex: String!) {
    getUnclickedProfiles(email: $email, clickProfileIndex: $clickProfileIndex) {
      success
      profilesImage
      profilesName
      i
    }
  }
`;

export const GET_ALL_MY_LIST_TO_PROFILE = gql`
  query getAllMyListToProfile($email: String!, $clickProfileIndex: String!) {
    getAllMyListToProfile(
      email: $email
      clickProfileIndex: $clickProfileIndex
    ) {
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

export const IS_ADMIN = gql`
  query isAdmin($adminEmail: String!) {
    isAdmin(adminEmail: $adminEmail) {
      success
    }
  }
`;

export const GET_PROFILE_IMAGE_FROM_USER = gql`
  query getProfileImageFromUser($email: String!) {
    getProfileImageFromUser(email: $email) {
      success
      images
    }
  }
`;

export const GET_CHILD_FROM_USER = gql`
  query getChildFromUser($email: String!) {
    getChildFromUser(email: $email) {
      success
      child {
        _id
        childName
        likes
        likeCount
        myList
        childImageUrl
        language
        maturitySettings {
          ageLimit
          sliderValue
        }
        autoplayControls {
          autoplayNextEpisode
          previews
        }
        watchHistory
        kids
        titleRestrictions
      }
    }
  }
`;

export const GET_PROFILES = gql`
  query getProfiles($email: String!) {
    getProfiles(email: $email) {
      success
      profilesImage
      profilesName
      i
    }
  }
`;
