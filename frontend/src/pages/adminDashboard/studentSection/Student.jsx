import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../../components/loading/Loading";

const Student = () => {
  const { registrationNumber } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/student/one-student/${registrationNumber}`)
      .then((response) => {
        if (response.data) {
          setStudent(response.data);
        } else {
          console.error("No data received");
        }
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
        setError("Failed to fetch student data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [registrationNumber]);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!student) {
    return <div>No student data available.</div>;
  }

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">View Student</h1>
      <div className="border rounded-lg shadow-lg p-6">
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Field</th>
              <th className="border border-gray-400 px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Registration Number
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.registrationNumber}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                First Name
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.firstname}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Last Name
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.lastname}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Date of Birth
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.dob}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Email
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.email}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                State
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.state}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                District
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.district}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Course
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.course}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Course Option
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.courseOption}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Mother's Name
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.mothername}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Father's Name
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.fathername}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Qualification
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.qualification}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Contact No
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.contactno}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Guardian's Contact
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.guardiancontact}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Aadhaar No
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.adhar}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Gender
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.gender}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Category
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.category}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Religion
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.religion}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Marital Status
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.maritalstatus}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Permanent Address
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.address}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Present Address
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.presentaddress}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Photo
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <img
                  src={student.photo || "https://via.placeholder.com/150"}
                  alt="Student Photo"
                  className="w-32 h-32 object-cover"
                />
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Signature
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <img
                  src={student.signature || "https://via.placeholder.com/150"}
                  alt="Student Signature"
                  className="w-32 h-32 object-cover"
                />
              </td>
            </tr>

            <tr className="border-b">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                Marksheet
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <img
                  src={student.marksheet || "https://via.placeholder.com/150"}
                  alt="Student Marksheet"
                  className="w-32 h-32 object-cover"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;

