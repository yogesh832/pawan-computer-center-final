import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout.jsx";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./components/account/Login";
import SignUp from "./components/account/SignUp";
import AboutUs from "./pages/aboutUs/AboutUs";
import Contact from "./pages/contact/ContactUs";
import Courses from "./pages/courses/Course";
import Gallery from "./pages/gallery/Gallery";

export const App = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <LandingPage /> }, 
      { path: "about", element: <AboutUs /> },
      { path: "contact", element: <Contact /> },
      { path: "course", element: <Courses /> },
      { path: "gallery", element: <Gallery /> },
      { path: "login", element: <Login /> }, 
      { path: "signup", element: <SignUp /> },
    ],
  },
]);


