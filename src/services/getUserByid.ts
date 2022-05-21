import { gql } from '@apollo/client';

export const getUserByidQuery = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      name
      phone
      birthDate
      email
      role
    }
  }
`;
