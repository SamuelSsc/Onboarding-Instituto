import React  from "react";
import { getUsersquery } from "../../services/getUsersRequest";
import { BTNavegation, Container, Contents, Navegation, Subtitle, Ul} from "./UserList.component.styled";
import { useQuery } from "@apollo/client";

export function UserList(): JSX.Element {

    let usersInformation

        const token = localStorage.token   
        const limit = 12;
        let offset = 0;
        const { data } = useQuery(getUsersquery,{
            context:{
                headers:{
                    Authorization: token,
                },
            },
            variables: {
                offset,
                limit,
              },
        });


        usersInformation = data?.users?.nodes?.map((users: { name: string; email: string; }) => users);
        
        const namesMapped = usersInformation?.map( (users:usersType) => <p key={users.name}>{users.name}</p>)
        const emailMapped = usersInformation?.map( (users:usersType) => <p key={users.email}>{users.email}</p>)
    

        
        const nextPage = () => {
            if (offset >= 0){
               offset =+ 12 
               console.log(offset)
            }
        }

        const previusPage = () => {
            if (offset >= 12){
                offset =- 12
                console.log(offset)
            }
        }


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
                        <strong>E-MAIL:</strong><br/>
                        {emailMapped}
                    </li>
                </Ul>
                <Navegation>
                    <BTNavegation onClick={previusPage}>Anterior</BTNavegation>
                    <BTNavegation onClick={nextPage}>Proxima</BTNavegation>
                </Navegation>
            </Contents>

            

        </Container>
    </section>
 
    )
}


interface usersType {
    name: string;
    email: string;
  }