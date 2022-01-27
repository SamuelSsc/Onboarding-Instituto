import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { PageLogin } from "./pages/PageLogin";
import { WorkPage } from "./pages/WorkPage";

export function MyRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<PageLogin/>} />
                <Route path="/Workspace" element={<WorkPage />}/>
            </Routes>
        </BrowserRouter>
    )
}