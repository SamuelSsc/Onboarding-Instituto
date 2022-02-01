import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { AddUserPage } from "./pages/AddUserspage";
import { PageLogin } from "./pages/PageLogin";
import { Userspage } from "./pages/Userspage";

export function MyRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<PageLogin/>} />
                <Route path="/userspage" element={<Userspage />}/>
                <Route path="/createuser" element={<AddUserPage />}/>
            </Routes>
        </BrowserRouter>
    )
}