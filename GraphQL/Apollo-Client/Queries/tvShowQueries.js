import { gql } from '@apollo/client';

export const GET_ALL_TV_SHOWS = gql`
  query getAllTVShows {
    getAllTVShows {
      success
      tvShows {
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
