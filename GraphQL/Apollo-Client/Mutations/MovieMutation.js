import { gql } from '@apollo/client';

export const ADD_MOVIE = gql`
  mutation addMovie(
    $name: String!
    $content: String!
    $duration: [String]!
    $videoUrl: [String]!
    $category: [String]!
    $ageLimit: String!
  ) {
    addMovie(
      name: $name
      content: $content
      duration: $duration
      videoUrl: $videoUrl
      category: $category
      ageLimit: $ageLimit
    ) {
      success
    }
  }
`;

export const DELETE_MOVIE = gql`
  mutation deleteMovie($name: String!) {
    deleteMovie(name: $name) {
      success
    }
  }
`;
