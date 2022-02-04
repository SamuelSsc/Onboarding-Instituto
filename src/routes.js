import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { AddUserPage } from "./pages/AddUserspage";
import { PageLogin } from "./pages/PageLogin";
import { UserDetailpage } from "./pages/PageUser";
import { Userspage } from "./pages/Userspage";

export function MyRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<PageLogin/>} />
                <Route path="/userspage" element={<Userspage />}/>
                <Route path="/createuser" element={<AddUserPage />}/>
                <Route path="/userdetail" element={<UserDetailpage />}/>
            </Routes>
        </BrowserRouter>
    )
}