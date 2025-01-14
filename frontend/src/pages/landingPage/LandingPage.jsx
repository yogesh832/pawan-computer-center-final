import React from "react";
import Navbar from "../../components/landingComponents/Navbar";
import Hero from "../../components/landingComponents/Hero";
import OurSuccess from "../../components/landingComponents/OurSuccess";
import WhatIs from "../../components/landingComponents/Whatis.jsx";
import Features from "../../components/landingComponents/Features";
import Footer from "../../components/landingComponents/Footer";
import Testimonial from "../../components/landingComponents/Testimonial.jsx";
import ClassroomFeature from "../../components/landingComponents/ClassroomFeature";
import MiniAboutUs from "../../components/landingComponents/miniAboutUs";

const LandingPage = () =>{
    return(
        <div className="bg-gray-50">
            
            <Hero />
            <OurSuccess />
            <Features />
            <WhatIs />
            <Testimonial />
            <ClassroomFeature />
            <MiniAboutUs />
            
        </div>
    )
}

export default LandingPage;