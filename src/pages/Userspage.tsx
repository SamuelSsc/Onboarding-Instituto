import React from "react";
import { Title } from "../components/Header/Header.component";
import { UserList } from "../components/UserList/UserList.component";

export function Userspage() {
    
    return(
        <section>
            <Title/>
            <UserList />
        </section>
    )
}