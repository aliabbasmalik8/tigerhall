import { gql } from '@apollo/client';
import { IMAGE_FRAGMENT, CATEGORY_FRAGMENT, EXPERT_FRAGMENT  } from './fragments';

export const CONTENT_CARDS_QUERY = gql`
  ${IMAGE_FRAGMENT}
  ${CATEGORY_FRAGMENT}
  ${EXPERT_FRAGMENT}
  query contentCards($offset: Int){
    contentCards(filter: {offset: $offset,limit: 20, keywords: "", types: [PODCAST]}) {
      edges {
        ... on Podcast {
          name
          image {
            ...Image
          }
          categories {
            ...Category
          }
          experts {
            ...Expert
          }
        } 
      }
    }
  }
`;