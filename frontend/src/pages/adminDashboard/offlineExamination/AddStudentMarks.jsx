import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AddStudentsMarks = () => {
  const { registrationNumber } = useParams();
  const [studentData, setStudentData] = useState({
    name: "",
    registrationNo: registrationNumber,
  });
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(""); // For success/error messages
  const [error, setError] = useState(""); // Separate error message for better UX

  // Fetch student data based on registration number
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/dashboard/addStudent/${registrationNumber}`
        );
        const student = response.data;

        if (student) {
          setStudentData({
            name: `${student.firstname || "Unknown"} ${student.lastname || ""}`,
            registrationNo: registrationNumber,
          });
        } else {
          setError("Student not found.");
        }
      } catch (error) {
        setError("Error fetching student data. Please try again later.");
        console.error("Error fetching student data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [registrationNumber]);

  // Add a new subject row
  const addSubject = () => {
    setSubjects([
      ...subjects,
      { name: "", practical: 0, written: 0, total: 0 },
    ]);
  };

  // Update subject field
  const updateSubject = (index, field, value) => {
    const newSubjects = [...subjects];
    const parsedValue = field !== "name" ? parseInt(value || "0", 10) : value;

    if (isNaN(parsedValue) && field !== "name") {
      newSubjects[index][field] = ""; // Clear invalid input
    } else {
      newSubjects[index][field] = parsedValue;

      // Calculate total if practical or written marks are updated
      if (field === "practical" || field === "written") {
        newSubjects[index].total =
          parseInt(newSubjects[index].practical || "0", 10) +
          parseInt(newSubjects[index].written || "0", 10);
      }
    }

    setSubjects(newSubjects);
  };

  // Handle saving the marks to the backend
  const saveMarks = async () => {
    try {
      // Validate input
      if (
        subjects.some(
          (subject) =>
            !subject.name ||
            subject.practical === "" ||
            subject.written === "" ||
            subject.total === ""
        )
      ) {
        setMessage("Please fill out all fields before saving.");
        return;
      }

      const marksData = subjects.map((subject) => ({
        name: subject.name,
        practical: parseInt(subject.practical, 10),
        written: parseInt(subject.written, 10),
        total: parseInt(subject.total, 10),
      }));

      const response = await axios.post(
        `http://localhost:8000/api/v1/student/add-marks/${registrationNumber}`,
        { marksData }
      );

      if (response.status === 201) {
        setMessage("Marks saved successfully!");
        setSubjects([]); // Clear subjects after successful save
      } else {
        setMessage("Failed to save marks. Please try again.");
      }
    } catch (error) {
      console.error("Error saving marks:", error.message);
      setMessage("Error saving marks. Please try again later.");
    }
  };

  // Loading state while fetching student data
  if (loading) {
    return <div>Loading student data...</div>;
  }

  // Error state
  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg m-5 p-6">
      <h2 className="text-2xl font-semibold text-center mb-4">Student Marks</h2>

      <div className="text-center mb-6">
        <span className="font-bold">Name:</span> {studentData.name} &nbsp; |
        &nbsp;
        <span className="font-bold">Registration No:</span>{" "}
        {studentData.registrationNo}
      </div>

      {/* Display success or error message */}
      {message && (
        <div
          className={`text-center ${
            message.includes("successfully")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {message}
        </div>
      )}

      <table className="min-w-full border-collapse border border-black">
        <thead>
          <tr className="border border-black">
            <th className="px-4 py-2 border border-black font-bold">Subject</th>
            <th className="px-4 py-2 border border-black font-bold">
              Practical Marks
            </th>
            <th className="px-4 py-2 border border-black font-bold">
              Written Marks
            </th>
            <th className="px-4 py-2 border border-black font-bold">
              Total Marks
            </th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index} className="border border-black">
              <td className="px-4 py-2 border border-black">
                <input
                  type="text"
                  placeholder="Subject Name"
                  className="w-full px-2 py-1 border rounded"
                  value={subject.name}
                  onChange={(e) => updateSubject(index, "name", e.target.value)}
                />
              </td>
              <td className="px-4 py-2 border border-black">
                <input
                  type="number"
                  placeholder="Practical Marks"
                  className="w-full px-2 py-1 border rounded"
                  value={subject.practical}
                  onChange={(e) =>
                    updateSubject(index, "practical", e.target.value)
                  }
                />
              </td>
              <td className="px-4 py-2 border border-black">
                <input
                  type="number"
                  placeholder="Written Marks"
                  className="w-full px-2 py-1 border rounded"
                  value={subject.written}
                  onChange={(e) =>
                    updateSubject(index, "written", e.target.value)
                  }
                />
              </td>
              <td className="px-4 py-2 border border-black">
                <input
                  type="number"
                  placeholder="Total"
                  className="w-full px-2 py-1 border rounded"
                  value={subject.total}
                  readOnly
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={addSubject}
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600"
      >
        Add Subject
      </button>

      <div className="mt-5">
        <button
          onClick={saveMarks}
          className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600"
        >
          Save Data
        </button>
      </div>
    </div>
  );
};

export default AddStudentsMarks;
