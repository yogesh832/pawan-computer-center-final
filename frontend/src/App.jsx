import React from "react";
import {Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./components/account/Login.jsx";
const App = () =>{
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;