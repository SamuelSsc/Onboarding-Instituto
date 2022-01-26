import React from "react";
import { Container, Contents, Subtitle, Ul} from "./UserList.component.styled";

export function UserList() {
    return(
    <section>
        <Subtitle>Lista de Usuarios</Subtitle>
        <Container>

            <Contents>
                <h3>USERS</h3>

                <Ul>
                    <li>
                        <strong>Nome:</strong><br/>Samuel Santana de Camargo.
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