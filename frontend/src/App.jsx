import React from "react";
import {Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./components/account/Login.jsx";
import SignUp from "./components/account/SignUp.jsx";
import AboutUs from "./pages/aboutUs/aboutUs.jsx";
import Contact from "./pages/contact/ContactUs.jsx";
import Courses from "./components/landingComponents/Courses.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
const App = () =>{
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  )
}

export default App;