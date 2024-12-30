import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { HiMiniPencil } from "react-icons/hi2";
import { FaNewspaper } from "react-icons/fa6";
import vedio from "../../../assets/vedio.mp4";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  const [userCount, setUserCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/all-users");
        setUserCount(response.data.length);
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };

    const fetchStudentCount = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/student/all-student");
        if (response.data && response.data.length !== undefined) {
          setStudentCount(response.data.length);
        } else {
          console.error("Student count not found in the response.");
        }
      } catch (error) {
        console.error("Error fetching student count:", error);
      }
    };

    fetchStudentCount();
    fetchUserCount();
  }, []);

  return (
    <div className="bg-white min-h-screen p-4 w-full">
      {/* Profile Section */}
      <div className="flex flex-wrap justify-between items-center bg-gray-100 p-4 rounded-md mb-6">
        <div className="flex items-center space-x-4 flex-1">
          <img
            className="rounded-full h-20 w-20 md:h-32 md:w-32"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ19TMJHkL25P8HAp6O7qPPUE4wplZZl_g7Dw&s"
            alt=""
          />
          <div className="text-xl md:text-2xl">
            Pawan Kumar <br />
            <span className="text-sm text-gray-500">(Admin: Pawan Computer Center)</span>
          </div>
        </div>
        <video className="w-full md:w-80 mt-4 md:mt-0 flex-shrink-0" autoPlay loop muted>
          <source src={vedio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-20">
        {/* Total Users Card */}
        <div className="p-4 rounded-lg shadow-lg flex flex-col justify-between min-h-48 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold">{userCount + studentCount} Total Users</div>
            <IoPaperPlaneOutline className="text-3xl text-slate-600" />
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300">
            More Info
          </button>
        </div>

        {/* Enrolled Students Card */}
        <div className="bg-green-500 p-4 rounded-lg shadow-lg flex flex-col justify-between min-h-48 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-white">{studentCount} Enrolled Students</div>
            <FaUsers className="text-3xl text-white" />
          </div>
          <button className="mt-4 bg-green-700 text-white py-2 px-4 rounded-full hover:bg-green-800 transition-colors duration-300">
            More Info
          </button>
        </div>

        {/* Students Certificate Card */}
        <div className="bg-blue-600 p-4 rounded-lg shadow-lg flex flex-col justify-between min-h-48 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-white">0 Students Certificate</div>
            <HiMiniPencil className="text-3xl text-white" />
          </div>
          <Link to="/dashboard/SeeAllStudent">
            <button className="mt-4 bg-blue-800 text-white py-2 px-4 rounded-full hover:bg-blue-900 transition-colors duration-300">
              More Info
            </button>
          </Link>
        </div>

        {/* Applications Card */}
        <div className="bg-yellow-500 p-4 rounded-lg shadow-lg flex flex-col justify-between min-h-48 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold">{userCount} Applications</div>
            <FaNewspaper className="text-3xl text-white" />
          </div>
          <button className="mt-4 bg-yellow-700 text-white py-2 px-4 rounded-full hover:bg-yellow-800 transition-colors duration-300">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
