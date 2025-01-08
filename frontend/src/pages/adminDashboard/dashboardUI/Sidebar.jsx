import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegCircle } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { AiFillProduct } from "react-icons/ai";
import { FaBuildingColumns } from "react-icons/fa6";

const Sidebar = () => {
  const [studentLink, setStudentLink] = useState("home");
  const [showStudentLinks, setShowStudentLinks] = useState(false);

  const [courseLink, setCourseLink] = useState("home");
  const [showCourseLinks, setShowCourseLinks] = useState(false);

  const [certificateLink, setCertificateLink] = useState("home");
  const [showCertificateLinks, setShowCertificateLinks] = useState(false);

  const [onlineLink, setOnlineLink] = useState("home");
  const [showOnlineLinks, setShowOnlineLinks] = useState(false);

  const [offlineLink, setOfflineLink] = useState("home");
  const [showOfflineLinks, setShowOfflineLinks] = useState(false);

  const [accountLink, setAccountLink] = useState("home");
  const [showAccountLinks, setShowAccountLinks] = useState(false);

  const linkStyle = "transition-colors duration-300 ease-in-out p-2 rounded-md";
  const linkActiveStyle = "bg-gray-800 text-white";
  const linkTextStyle = "flex items-center gap-2 text-lg";

  return (
    <div className="flex min-w-[90%] flex-col p-4  bg-gray-900 text-white min-h-screen">
      <a
        href="/"
        className="flex items-center mb-6 text-white text-xl font-semibold"
      >
        <span>Dashboard</span>
      </a>
      <hr className="mb-4 border-red-700" />
      <ul className="space-y-2">
        {/* Student Section */}
        <li>
          <a
            href="#"
            className={`block bg-red-600 ${linkStyle} ${
              studentLink === "dashboard" ? linkActiveStyle : ""
            } flex gap-2`}
            onClick={() => {
              setStudentLink("dashboard");
              setShowStudentLinks(!showStudentLinks);
            }}
          >
            <PiStudentFill className="text-2xl" />
            <span className={`linkTextStyle text-[15px]`}>Student Section</span>
          </a>
          {showStudentLinks && (
            <div className="pl-6 mt-2 space-y-1">
              <Link
                to="/dashboard/addstudents"
                className={`${linkStyle} flex items-center gap-2`}
              >
                <FaRegCircle />
                Add Student
              </Link>
              <Link
                to="/dashboard/seeallstudents"
                className={`${linkStyle} flex items-center gap-2`}
              >
                <FaRegCircle />
                See All Students
              </Link>
              <Link
                to="/dashboard/CourseEnquiry"
                className={`${linkStyle} flex items-center gap-2`}
              >
                <FaRegCircle />
                Course Enquiry
              </Link>
            </div>
          )}
        </li>

        {/* Center Section */}
        <li>
          <a
            href="#"
            className={`block bg-blue-600 ${linkStyle} ${
              courseLink === "dashboard" ? linkActiveStyle : ""
            } flex gap-2`}
            onClick={() => {
              setCourseLink("dashboard");
              setShowCourseLinks(!showCourseLinks);
            }}
          >
            <FaBuildingColumns className="text-2xl" />
            <span className={`linkTextStyle text-[15px]`}>Center Section</span>
          </a>
          {showCourseLinks && (
            <div className="pl-6 mt-2 space-y-1">
              <Link
                to="/dashboard/CenterDocument"
                className={`${linkStyle} flex items-center gap-2`}
              >
                <FaRegCircle />
                Center Document
              </Link>
              <Link
                to="/dashboard/CenterMessage"
                className={`${linkStyle} flex items-center gap-2`}
              >
                <FaRegCircle />
                Center Message
              </Link>
            </div>
          )}
        </li>

        {/* Certificate Section */}
        <li>
          <a
            href="#"
            className={`block bg-green-600 ${linkStyle} ${
              certificateLink === "dashboard" ? linkActiveStyle : ""
            } flex gap-2`}
            onClick={() => {
              setCertificateLink("dashboard");
              setShowCertificateLinks(!showCertificateLinks);
            }}
          >
            <AiFillProduct className="text-2xl" />
            <span className={`linkTextStyle text-[15px]`}>
              Certificate Section
            </span>
          </a>
          {showCertificateLinks && (
            <div className="pl-6 mt-2 space-y-1">
              <Link
                to="/dashboard/ViewCertificate"
                className={`${linkStyle} flex items-center gap-2`}
              >
                <FaRegCircle />
                View Certificates
              </Link>
              {/* <Link
                to="/dashboard/TrackCertificate"
                className={`${linkStyle} flex items-center gap-2`}
              >
                <FaRegCircle />
                Track Certificate
              </Link> */}
            </div>
          )}
        </li>

        {/* Offline Examination Section */}
        <li>
          <a
            href="#"
            className={`block bg-purple-600 ${linkStyle} ${
              offlineLink === "dashboard" ? linkActiveStyle : ""
            } flex gap-2`}
            onClick={() => {
              setOfflineLink("dashboard");
              setShowOfflineLinks(!showOfflineLinks);
            }}
          >
            <PiStudentFill className="text-2xl" />
            <span className={`linkTextStyle text-[15px]`}>
              Offline Examination
            </span>
          </a>
          {showOfflineLinks && (
            <div className="pl-6 mt-2 space-y-1">
              <Link
                to="/dashboard/addMarks"
                className={`${linkStyle} flex items-center gap-2`}
              >
                <FaRegCircle />
                Add Marks
              </Link>
              <Link
                to="/dashboard/ViewMarks"
                className={`${linkStyle} flex items-center gap-2`}
              >
                <FaRegCircle />
                View Marks
              </Link>
            </div>
          )}
        </li>

        {/* Account Section */}
        <li>
          <a
            href="#"
            className={`block bg-teal-600 ${linkStyle} ${
              accountLink === "dashboard" ? linkActiveStyle : ""
            } flex gap-2`}
            onClick={() => {
              setAccountLink("dashboard");
              setShowAccountLinks(!showAccountLinks);
            }}
          >
            <PiStudentFill className="text-2xl" />
            <span className={`text-base ${linkTextStyle}`}>Account Section</span>
          </a>
          {showAccountLinks && (
            <div className="pl-6 mt-2 space-y-1">
              <Link
                to="/dashboard/AddAccount"
                className={`${linkStyle} flex items-center gap-2`}
              >
                <FaRegCircle />
                Add Fund
              </Link>
              <Link
                to="/dashboard/AddStudentFee"
                className={`${linkStyle} flex items-center gap-2`}
              >
                <FaRegCircle />
                Add Student Fee
              </Link>
              <Link
                to="/dashboard/ViewStudentFee"
                className={`${linkStyle} flex items-center gap-2`}
              >
                <FaRegCircle />
                View Student Fee
              </Link>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
