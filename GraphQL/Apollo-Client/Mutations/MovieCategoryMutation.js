import { gql } from '@apollo/client';

export const ADD_MOVIE_CATEGORY = gql`
  mutation addMovieCategory($name: String!) {
    addMovieCategory(name: $name) {
      success
    }
  }
`;

export const DELETE_MOVIE_CATEGORY = gql`
  mutation deleteMovieCategory($name: String!) {
    deleteMovieCategory(name: $name) {
      success
    }
  }
`;
