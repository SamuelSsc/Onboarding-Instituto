import { gql, useQuery } from '@apollo/client';




export const getUsersquery = gql`
query users($pageInfo: PageInputType){
    users(pageInfo: $pageInfo){
    nodes{
      name
    }
    }
  }
`;


