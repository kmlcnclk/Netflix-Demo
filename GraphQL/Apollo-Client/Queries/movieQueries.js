import { gql } from '@apollo/client';

export const GET_ALL_MOVIES = gql`
  query getAllMovies {
    getAllMovies {
      success
      movies {
        _id
        name
        content
        videoUrl
        createAt
        categories
        likes
        likeCount
        duration
        ageLimit
      }
    }
  }
`;
