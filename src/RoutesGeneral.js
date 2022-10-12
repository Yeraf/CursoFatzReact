import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Component/Main";
import Api from "./Component/Api";
import Contact from "./Component/Contact";
import Navbar from "./ComponentStatic/Navbar";

function RoutesGeneral () {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact index path="/"  element={<Main/>}/>
            <Route path="/api" element={<Api/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesGeneral;