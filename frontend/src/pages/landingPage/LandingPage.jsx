import React, { useState, useEffect } from "react";
import Navbar from "../../components/landingComponents/Navbar";
import Hero from "../../components/landingComponents/Hero";
import OurSuccess from "../../components/landingComponents/OurSuccess";
import WhatIs from "../../components/landingComponents/Whatis.jsx";
import Features from "../../components/landingComponents/Features";
import Footer from "../../components/landingComponents/Footer";
import Testimonial from "../../components/landingComponents/Testimonial.jsx";
import ClassroomFeature from "../../components/landingComponents/ClassroomFeature";
import MiniAboutUs from "../../components/landingComponents/miniAboutUs";
import Loading from "../../components/loading/Loading.jsx";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Set error to null by default
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a loading delay of 1 second.
    const timer = setTimeout(() => {
      setLoading(false);
      // If there's an error, you could set it here using setError("Error message")
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50">
      {loading ? (
        // Loading state
        <p className="text-center py-5">
          <Loading />
        </p>
      ) : error ? (
        // Error state
        <p className="text-center py-5 text-red-500">{error}</p>
      ) : (
        // Content to display once loading is complete and no error exists
        <>
          
          <Hero />
          <OurSuccess />
          <Features />
          <WhatIs />
          <Testimonial />
          <ClassroomFeature />
          <MiniAboutUs />
         
        </>
      )}
    </div>
  );
};

export default LandingPage;
