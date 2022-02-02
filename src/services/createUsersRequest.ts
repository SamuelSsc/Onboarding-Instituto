import { gql } from '@apollo/client';




export const createUserMutation = gql`
mutation  createUser($data: UserInputType!){
    createUser(data: $data){
        name
    	phone
        birthDate
        email
    	role   	
    }
}
`;


