import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Pagetest } from "./pages/Pagetest";
import { WorkPage } from "./pages/WorkPage";

export default function MyRoutes(){
    return(
            <Routes>
                <Route path=" /" element={<Pagetest/>}></Route>
                <Route path=" /work" element={<WorkPage/>}></Route>
            </Routes>
    )
}