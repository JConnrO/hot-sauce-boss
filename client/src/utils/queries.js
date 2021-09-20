import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      name
      savedProducts {
        name
        description
        price
        quantity
        title
      }
    }
  }
`;