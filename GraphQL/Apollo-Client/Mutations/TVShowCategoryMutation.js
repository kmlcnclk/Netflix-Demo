import { gql } from '@apollo/client';

export const ADD_TVSHOW_CATEGORY = gql`
  mutation addTVShowCategory($name: String!) {
    addTVShowCategory(name: $name) {
      success
    }
  }
`;

export const DELETE_TVSHOW_CATEGORY = gql`
  mutation deleteTVShowCategory($name: String!) {
    deleteTVShowCategory(name: $name) {
      success
    }
  }
`;
