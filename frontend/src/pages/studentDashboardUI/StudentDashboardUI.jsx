import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import ProgressBar from "./ProgressBar.jsx";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading.jsx";

const StudentDashboardUI = () => {
  const totalDays = 100; // Total number of days in the course
  const courseStartDate = new Date("2024-09-01"); // Adjust the start date accordingly

  const calculateCurrentDay = () => {
    const today = new Date();
    const elapsedTime = today - courseStartDate;
    const elapsedDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    return Math.min(elapsedDays + 1, totalDays); // Ensure the current day does not exceed totalDays
  };
  const { registrationNumber } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentDay, setCurrentDay] = useState(calculateCurrentDay());

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/student/one-student/${registrationNumber}`)
      .then((response) => {
        setStudent(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
        setError("Failed to fetch student data");
        setLoading(false);
      });
  }, [registrationNumber]); // Ensure registrationNumber is included in the dependency array

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDay(calculateCurrentDay());
    }, 24 * 60 * 60 * 1000); // Update daily

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div><Loading /></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!student) {
    return <div>No student data available.</div>;
  }

  return (
    <div className="container p-4">
      <h1 className="text-3xl font-bold mb-4">Student Profile</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <table className="table-auto w-full text-left">
          <tbody>
            <tr>
              <td className="font-semibold">Photo:</td>
              <td className="text-center">
                <img
                  src={student.photo || "https://www.gravatar.com/avatar/?d=mp"}
                  alt={`${student.firstname} ${student.lastname}`}
                  className="w-32 h-32 object-cover rounded-full border-4 border-gray-200"
                />
              </td>
            </tr>
            <tr>
              <td className="font-semibold">Name:</td>
              <td>
                {student.firstname} {student.lastname}
              </td>
            </tr>
            <tr>
              <td className="font-semibold">ID:</td>
              <td>{student.registrationNumber}</td>
            </tr>
            <tr>
              <td className="font-semibold">Course:</td>
              <td>{student.course}</td>
            </tr>
            <tr>
              <td className="font-semibold">Date of Birth:</td>
              <td>{new Date(student.dob).toLocaleDateString()}</td>
            </tr>
            <tr>
              <td className="font-semibold">Email:</td>
              <td>{student.email}</td>
            </tr>
            <tr>
              <td className="font-semibold">Father's Name:</td>
              <td>{student.fatherName}</td>
            </tr>
            <tr>
              <td className="font-semibold">Mother's Name:</td>
              <td>{student.mothername}</td>
            </tr>
            <tr>
              <td className="font-semibold">Aadhaar Number:</td>
              <td>{student.adhar}</td>
            </tr>
            <tr>
              <td className="font-semibold">Address:</td>
              <td>{student.address}</td>
            </tr>
            <tr>
              <td className="font-semibold">Completion Status:</td>
              <td>{student.completionStatus}</td>
            </tr>
            <tr>
              <td className="font-semibold" colSpan="2">
                <h1 className="text-2xl font-bold mb-4">Course Progress</h1>
                <ProgressBar currentDay={currentDay} totalDays={totalDays} />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  <button
                    onClick={() => alert("Viewing certificates")}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <FaEye className="me-2" /> View Certificates
                  </button>
                  <button
                    onClick={() => alert("Checking course completion")}
                    className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <FaEye className="me-2" /> Check Completion
                  </button>
                  <button
                    onClick={() =>
                      alert("Request to edit completion status sent to admin.")
                    }
                    className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <CiEdit className="me-2" /> Request Edit
                  </button>
                  <button
                    onClick={() => alert("Viewing course details")}
                    className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <FaEye className="me-2" /> View Course
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDashboardUI;
