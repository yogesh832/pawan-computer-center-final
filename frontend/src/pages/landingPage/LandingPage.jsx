import React from "react";
import Navbar from "../../components/landingComponents/Navbar";
import Hero from "../../components/landingComponents/Hero";
import OurSuccess from "../../components/landingComponents/OurSuccess";

const LandingPage = () =>{
    return(
        <div>
            <Navbar />
            <Hero />
            <OurSuccess />
        </div>
    )
}

export default LandingPage;