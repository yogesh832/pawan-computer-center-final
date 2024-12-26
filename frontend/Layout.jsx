import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./src/components/landingComponents/Navbar";
import Footer from "./src/components/landingComponents/Footer";
const Layout = () =>{
    return(
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;