import React from "react";
import Navbar from "../../components/landingComponents/Navbar";
import Hero from "../../components/landingComponents/Hero";
import OurSuccess from "../../components/landingComponents/OurSuccess";
import WhatIs from "../../components/landingComponents/Whatis";
import Features from "../../components/landingComponents/Features";
import Footer from "../../components/landingComponents/Footer";
import Testimonial from "../../components/landingComponents/Testimonial";

const LandingPage = () =>{
    return(
        <div>
            <Navbar />
            <Hero />
            <OurSuccess />
            <Features />
            <WhatIs />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default LandingPage;