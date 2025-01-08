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
import AddStudent from "./pages/adminDashboard/studentSection/AddStudent.jsx";
import SeeAllStudent from "./pages/adminDashboard/studentSection/SeeAllStudent.jsx";
import Student from "./pages/adminDashboard/studentSection/Student.jsx";
import EditStudent from "./pages/adminDashboard/studentSection/EditStudent.jsx";
import ViewCertificate from "./pages/adminDashboard/certificateSection/ViewCertificate.jsx";
import CenterDocument from "./pages/adminDashboard/centerSection/CenterDocument.jsx";
import AddMarks from "./pages/adminDashboard/offlineExamination/AddMarks.jsx";
import AddStudentsMarks from "./pages/adminDashboard/offlineExamination/AddStudentMarks.jsx";
import ViewMarks from "./pages/adminDashboard/offlineExamination/ViewMarks.jsx";
import StudentsResult from "./pages/adminDashboard/offlineExamination/StudentResult.jsx";
import CourseEnquiries from "./pages/adminDashboard/studentSection/CourseEnquiry.jsx";

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
      { path: "centerDocument", element: <CenterDocument/> },
      { path: "viewCertificate", element: <ViewCertificate/> },
      { path: "addMarks", element: <AddMarks/> },
      { path: "add-marks/:registrationNumber", element: <AddStudentsMarks/> },
      { path: "viewMarks", element: <ViewMarks/> },
      { path: "studentResult/:registrationNumber", element: <StudentsResult/> },
      { path: "courseEnquiry", element: <CourseEnquiries/> },
      { path: "dashboard/addstudents", element: <AddStudent /> },
      { path: "dashboard/seeallstudents", element: <SeeAllStudent /> },
      { path: "one-student/:registrationNumber", element: <Student /> },
      { path: "edit-student/:registrationNumber", element: <EditStudent /> },
      // { path: "edit-student/:registrationNumber", element: <EditStudent /> },
    ],
  },
]);


