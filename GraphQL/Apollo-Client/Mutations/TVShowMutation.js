import { gql } from '@apollo/client';

export const ADD_TVSHOW = gql`
  mutation addTVShow(
    $name: String!
    $content: String!
    $duration: [String]!
    $videoUrl: [String]!
    $category: [String]!
    $ageLimit: String!
  ) {
    addTVShow(
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

export const DELETE_TVSHOW = gql`
  mutation deleteTVShow($name: String!) {
    deleteTVShow(name: $name) {
      success
    }
  }
`;
