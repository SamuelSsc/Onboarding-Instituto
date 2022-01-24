import { gql } from '@apollo/client';



/*Definindo qual será a consulta realizada.*/
export const queryLogar = gql`   
    mutation logar($email: String, $password:String!){
        logar(data: {email: $email password: $password}){
            token
            user{
                email
                password   
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