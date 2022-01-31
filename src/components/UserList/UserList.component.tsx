import React  from "react";
import { getUsersquery } from "../../services/getUsersRequest";
import { Container, Contents, Subtitle, Ul} from "./UserList.component.styled";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

export function UserList(): JSX.Element {

    let usersemail 
    let usersname
    let usersInformation

    /*useEffect(() => {
        document.write(usersname)
    }, [usersname])*/

   
        const token = localStorage.token
        const { data } = useQuery(getUsersquery,{
            context:{
                headers:{
                    Authorization: token,
                },
            },
        });

        usersInformation = data?.users?.nodes?.map((users: { name: string; email: string; }) => users);
        
        const namesMapped = usersInformation?.map( (users:usersType) => <p key={users.name}>{users.name}</p>)
        const emailMapped = usersInformation?.map( (users:usersType) => <p key={users.email}>{users.email}</p>)
    

    

    return(
    <section>
        <Subtitle>Lista de Usuarios</Subtitle>
        <Container>

            <Contents>
                <h3>USERS</h3>
                
                <Ul>
                    <li>
                        <strong>NOME:</strong><br/>
                        {namesMapped}                       
                    </li>
                    <li>
                        <strong>E-mail:</strong><br/>
                        {emailMapped}
                    </li>
                </Ul>

            </Contents>

            

        </Container>
    </section>
 
    )
}

interface usersType {
    name: string;
    email: string;
  }