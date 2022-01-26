import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { PageLogin } from "./pages/PageLogin";
import { Userspage } from "./pages/Userspage";

export function MyRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<PageLogin/>} />
                <Route path="/Userspage" element={<Userspage />}/>
            </Routes>
        </BrowserRouter>
    )
}