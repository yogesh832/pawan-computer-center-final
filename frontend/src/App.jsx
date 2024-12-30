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
import NewUser from "./pages/account/NewUser/NewUser.jsx";
import StudentDashboardUI from "./pages/StudentDashboardUI/StudentDashboardUI.jsx";
import AdminLoginUI from "./pages/account/Admin/AdminLoginUI.jsx";
import DashboardUI from "./pages/adminDashboard/dashboardUI/DashboardUI.jsx";

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
      { path: "newuser", element: <NewUser /> },
      { path: "student/:registrationNumber", element: <StudentDashboardUI /> },
      { path: "admin", element: <AdminLoginUI /> },
      { path: "dashboard", element: <DashboardUI /> },
    ],
  },
]);


