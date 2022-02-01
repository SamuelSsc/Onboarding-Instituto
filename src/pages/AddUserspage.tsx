import React from "react";
import { AddUser } from "../components/AddUser/AddUser.component";
import { Title } from "../components/Header/Header.component";


export function AddUserPage() {
    return(
        <section>
            <Title />
            <AddUser />
        </section>
    )
}