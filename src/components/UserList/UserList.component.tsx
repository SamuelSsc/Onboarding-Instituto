import React from "react";
import { getUsersquery } from "../../services/getUsersRequest";
import { Container, Contents, Subtitle, Ul} from "./UserList.component.styled";
import { useQuery } from "@apollo/client";

export function UserList(): JSX.Element {
    
    function getUsers(){
        const token = localStorage.token
        const { loading, error, data } = useQuery(getUsersquery,{
            context:{
                headers:{
                    Authorization: token,
                },
            },
        });

        let usersInformation = data?.users?.nodes?.map((users: { name: any; email: any; }) => users);
        
        
        return console.log(usersInformation);
    }

    getUsers()
    return(
    <section>
        <Subtitle>Lista de Usuarios</Subtitle>
        <Container>

            <Contents>
                <h3>USERS</h3>
                
                <Ul>
                    <li>
                        <strong>NOME:</strong><br/>
                        <p></p>
                        
                    </li>
                    <li>
                        <strong>E-mail:</strong><br/> SamuelSsc58748392@gmai.com
                    </li>
                </Ul>

            </Contents>

            

        </Container>
    </section>
 
    )
}