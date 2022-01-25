import { gql } from '@apollo/client';



/*Definindo qual será a Mutation realizada.*/
export const queryLogar = gql`   
mutation login($data: LoginInputType!){
    login(data: $data){
        token
        user{
            name
            email
        }
    }
}
`;


/*{
    "data":{
        "email":"admin@taqtile.com.br",
        "password": "1234qwer"
    }
}*/