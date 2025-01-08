import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/loading/Loading";
// import { Link } from "react-router-dom";
// import BackBtn from "../BackBtnForAll/BackBtn";

const SeeAllStudent = () =>{
    
  const [students, setStudents] = useState([]);
  const [personalDetails, setPersonalDetails] = useState(null); // Store personal details
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to fetch all student data
  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/student/all-student");
      if (Array.isArray(response.data)) {
        setStudents(response.data);
      } else {
        setError("Unexpected data format");
      }
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch personal details based on student registration number
  const fetchPersonalDetails = async (registrationNumber) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/student/one-student/${registrationNumber}`);
      if (response.data) {
        setPersonalDetails(response.data);
      } else {
        setError("No personal details found");
      }
    } catch (error) {
      setError("Error fetching personal details");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Function to handle viewing details
  const handleViewDetails = (registrationNumber) => {
    fetchPersonalDetails(registrationNumber);
    navigate(`/one-student/${registrationNumber}`);
  };

  // Function to handle editing
  const handleEdit = (registrationNumber) => {
    navigate(`/edit-student/${registrationNumber}`);
  };

  // Function to handle deleting a student
  const handleDelete = async (registrationNumber) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/student/delete-student/${registrationNumber}`);
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.registrationNumber !== registrationNumber)
      );
    } catch (error) {
      setError("Error deleting student");
    }
  };

  return (
    <div className="min-h-screen p-4 overflow-y-auto mx-10">
      {/* <Link to="/dashboard">
        <BackBtn />
      </Link> */}

      {loading ? (
        <p className="text-center py-5"><Loading /></p> // Loading state
      ) : error ? (
        <p className="text-center py-5 text-red-500">{error}</p> // Error state
      ) : students.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">Registration Number</th>
                <th className="border border-gray-400 px-4 py-2">Name</th>
                <th className="border border-gray-400 px-4 py-2">Course</th>
                <th className="border border-gray-400 px-4 py-2">Course Option</th>
                <th className="border border-gray-400 px-4 py-2">Aadhaar No</th>
                <th className="border border-gray-400 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id}>
                  <td className="border border-gray-400 px-4 py-2">{student.registrationNumber}</td>
                  <td className="border border-gray-400 px-4 py-2">
                    {student.firstname} {student.lastname}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">{student.course}</td>
                  <td className="border border-gray-400 px-4 py-2">{student.courseOption}</td>
                  <td className="border border-gray-400 px-4 py-2">{student.adhar}</td>
                  <td className="border border-gray-400 px-4 py-2">
                    <div className="flex flex-col gap-3 text-center justify-center items-center">
                      <button
                        className="bg-green-500 gap-2 flex hover:bg-green-700 text-white font-bold py-2 px-2 rounded"
                        onClick={() => handleViewDetails(student.registrationNumber)} // View details
                      >
                        <FaEye className="w-5 h-5 font-bold" /> View Details
                      </button>
                      <div className="flex gap-2 flex-row">
                        <button
                          className="bg-blue-500 flex gap-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleEdit(student.registrationNumber)} // Edit student
                        >
                          <CiEdit className="w-5 h-5 font-bold" /> Edit
                        </button>
                        <button
                          className="bg-red-500 gap-2 flex hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleDelete(student.registrationNumber)} // Delete student
                        >
                          <MdDelete className="w-5 h-5 font-bold" /> Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center py-5">No student data available.</p> // No student data available
      )}

      {/* Display personal details if available */}
      {personalDetails && (
        <div className="mt-4">
          <h3>Personal Details</h3>
          <p>Name: {personalDetails.name}</p>
          <p>Registration Number: {personalDetails.registrationNo}</p>
          <p>Email: {personalDetails.email}</p>
          {/* Add other personal details if necessary */}
        </div>
      )}
    </div>
  );
}

export default SeeAllStudent;