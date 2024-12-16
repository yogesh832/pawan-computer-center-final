import React from "react";
import {Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./components/account/Login.jsx";
import SignUp from "./components/account/SignUp.jsx";
const App = () =>{
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App;