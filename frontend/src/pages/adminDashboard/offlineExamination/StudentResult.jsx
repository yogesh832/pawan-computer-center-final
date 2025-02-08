import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import InvalidError from "./InvalidError"; // Import the InvalidError component

const StudentsResult = () => {
  const { registrationNumber } = useParams(); // Get registration number from URL
  const [studentData, setStudentData] = useState(null); // State for student data
  const [allMarksData, setAllMarksData] = useState(null); // State for marks data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  useEffect(() => {
    const fetchStudentResult = async () => {
      try {
        setLoading(true);
        // Fetch student data from API
        const response = await axios.get(
          `http://localhost:8000/api/v1/student/get-result/${registrationNumber}`
        );
        console.log(response.data); // Log the response to inspect the structure

        // Assuming the response contains marksData and other properties directly
        const { marksData, totalPractical, totalWritten, totalMarks, percentage, status, firstname, lastname } = response.data;

        if (marksData) {
          setStudentData({ firstname, lastname, registrationNumber }); // Set student data
          setAllMarksData({
            marksData,
            totalPractical,
            totalWritten,
            totalMarks,
            percentage,
            status,
          }); // Set marks data and other details
        } else {
          setError("No data found for this student.");
        }
      } catch (error) {
        console.error("Error fetching student data:", error.response || error.message);
        setError("Error fetching student data");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentResult();
  }, [registrationNumber]); // Trigger fetch when registration number changes

  // Close the error prompt
  const closeError = () => {
    setError("");
  };

  if (loading) return <p>Loading...</p>; // Show loading state

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg m-5 p-6">
      <h2 className="text-2xl font-semibold text-center mb-4">Student Results</h2>
      {error && <InvalidError message={error} onClose={closeError} />}
      {!error && studentData && allMarksData && (
        <>
          <div className="text-center mb-6">
            <p className="font-bold">
              Registration No: <span className="font-normal">{registrationNumber}</span>
            </p>
          </div>

          {/* Display individual subject marks */}
          <table className="min-w-full border-collapse border border-black">
            <thead>
              <tr className="border border-black">
                <th className="px-4 py-2 border border-black font-bold">Subject</th>
                <th className="px-4 py-2 border border-black font-bold">Practical Marks (out of 20)</th>
                <th className="px-4 py-2 border border-black font-bold">Written Marks (out of 80)</th>
                <th className="px-4 py-2 border border-black font-bold">Total Marks (out of 100)</th>
              </tr>
            </thead>
            <tbody>
              {allMarksData.marksData && allMarksData.marksData.length > 0 ? (
                allMarksData.marksData.map((subject, index) => (
                  <tr key={index} className="border border-black">
                    <td className="px-4 py-2 border border-black">{subject.name}</td>
                    <td className="px-4 py-2 border border-black">{subject.practical}</td>
                    <td className="px-4 py-2 border border-black">{subject.written}</td>
                    <td className="px-4 py-2 border border-black">{subject.total}</td>
                  </tr>
                ))
              ) : (
                <tr className="border border-black">
                  <td colSpan="4" className="px-4 py-2 border border-black text-center">
                    No result data available
                  </td>
                </tr>
              )}
              {/* Display total marks */}
              <tr className="border border-black">
                <td className="px-4 py-2 border border-black font-bold">Total</td>
                <td className="px-4 py-2 border border-black">{allMarksData.totalPractical}</td>
                <td className="px-4 py-2 border border-black">{allMarksData.totalWritten}</td>
                <td className="px-4 py-2 border border-black">{allMarksData.totalMarks}</td>
              </tr>
            </tbody>
          </table>

          {/* Display marks overview */}
          <div className="m-6">
            <h3 className="font-bold text-xl mb-2">Marks Overview</h3>
            <p><strong>Percentage:</strong> {allMarksData.percentage.toFixed(2)}%</p>
            <p><strong>Status:</strong> {allMarksData.status}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentsResult;