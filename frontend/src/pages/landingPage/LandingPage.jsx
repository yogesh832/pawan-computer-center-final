import React from "react";
import Navbar from "../../components/landingComponents/Navbar";
import Hero from "../../components/landingComponents/Hero";
import OurSuccess from "../../components/landingComponents/OurSuccess";
import WhatIs from "../../components/landingComponents/Whatis";
import Features from "../../components/landingComponents/Features";
import Footer from "../../components/landingComponents/Footer";
import Testimonial from "../../components/landingComponents/Testimonial";
import ClassroomFeature from "../../components/landingComponents/ClassroomFeature";

const LandingPage = () =>{
    return(
        <div className="bg-gray-50">
            <Navbar />
            <Hero />
            <OurSuccess />
            <Features />
            <WhatIs />
            <Testimonial />
            <ClassroomFeature />
            <Footer />
        </div>
    )
}

export default LandingPage;