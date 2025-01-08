import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../../components/loading/Loading";

const EditStudent = () => {
  const { registrationNumber } = useParams();

  console.log("Registration Number:", registrationNumber);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    email: "",
    state: "",
    district: "",
    course: "",
    courseOption: "",
    mothername: "",
    fathername: "",
    qualification: "",
    contactno: "",
    guardiancontact: "",
    adhar: "",
    gender: "",
    category: "",
    religion: "",
    address: "",
    presentaddress: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const courseOptions = {
    "": [],
    8: ["CERTIFICATE IN FUNDAMENTAL(RV01001)"],
    9: [
      "Advanced Level Graphic Design(RV03039)",
      "CERTIFICATE IN HINDI TYPING(RV03006)",
    ],
  };

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Delhi",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const categories = ["General", "OBC", "SC", "ST", "EWS"];
  const maritalStatuses = ["Single", "Married", "Divorced", "Widowed"];
  const genders = ["Male", "Female", "Other"];

  useEffect(() => {
    const fetchStudentData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/student/one-student/${registrationNumber}`
        );
        console.log("Fetched data:", response.data);
        setFormData(response.data);
        setSelectedCourse(response.data.course);
      } catch (error) {
        console.error("Error fetching student data:", error.response?.data);
        setError(error.response?.data?.message || "Failed to fetch student data.");
      } finally {
        setLoading(false);
      }
    };

    if (registrationNumber) {
      fetchStudentData();
    }
  }, [registrationNumber]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (name === "course") {
      setSelectedCourse(value);
      setFormData({ ...formData, course: value, courseOption: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Form data to submit:", formData);

    try {
      const response = await axios.put(
        `http://localhost:8000/api/v1/student/edit-student/${registrationNumber}`,
        formData
      );
      console.log("Update successful:", response.data);
      alert("Student details updated successfully!");
    } catch (error) {
      console.error("Error updating student data:", error.response?.data);
      setError(error.response?.data?.message || "Error updating student data");
    }
  };

  if (loading)
    return (
      <p>
        <Loading />
      </p>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Edit Student</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap">
            {/* First Name */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            
            {/* last Name */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            {/* date of birth */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth:
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            {/* state  */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State:
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* district */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="district"
                className="block text-sm font-medium text-gray-700"
              >
                District:
              </label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

             {/* course */}
             <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="course"
                className="block text-sm font-medium text-gray-700"
              >
                Course:
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="">Select Course</option>
                <option value="8">1-Month Certificate Course</option>
                <option value="9">3-Months Certificate Course</option>
                {/* Add more course options */}
              </select>
            </div>

            {/* course Option */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="courseOption"
                className="block text-sm font-medium text-gray-700"
              >
                Course Option:
              </label>
              <select
                id="courseOption"
                name="courseOption"
                value={formData.courseOption}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
                disabled={!selectedCourse}
              >
                <option value="">Select Course Option</option>
                {courseOptions[selectedCourse]?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* mother Name */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="mothername"
                className="block text-sm font-medium text-gray-700"
              >
                Mother Name:
              </label>
              <input
                type="text"
                id="mothername"
                name="mothername"
                value={formData.mothername}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* father Name */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="fathername"
                className="block text-sm font-medium text-gray-700"
              >
                Father Name:
              </label>
              <input
                type="text"
                id="fathername"
                name="fathername"
                value={formData.fathername}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* qualification */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="qualification"
                className="block text-sm font-medium text-gray-700"
              >
                Qualification:
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* contact No */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="contactno"
                className="block text-sm font-medium text-gray-700"
              >
                Contact No:
              </label>
              <input
                type="text"
                id="contactno"
                name="contactno"
                value={formData.contactno}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            {/* guardian Contact */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="guardiancontact"
                className="block text-sm font-medium text-gray-700"
              >
                Guardian Contact:
              </label>
              <input
                type="text"
                id="guardiancontact"
                name="guardiancontact"
                value={formData.guardiancontact}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* aadhar */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="adhar"
                className="block text-sm font-medium text-gray-700"
              >
                Aadhar:
              </label>
              <input
                type="text"
                id="adhar"
                name="adhar"
                value={formData.adhar}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* gender */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="">Select Gender</option>
                {genders.map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
            </div>

            {/* category */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category:
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* religion */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="religion"
                className="block text-sm font-medium text-gray-700"
              >
                Religion:
              </label>
              <input
                type="text"
                id="religion"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* marital Status */}
            {/* <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="maritalstatus"
                className="block text-sm font-medium text-gray-700"
              >
                Marital Status:
              </label>
              <select
                id="maritalstatus"
                name="maritalstatus"
                value={formData.maritalstatus}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="">Select Marital Status</option>
                {maritalStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div> */}

             {/* address */}
             <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address:
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* present Address */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="presentaddress"
                className="block text-sm font-medium text-gray-700"
              >
                Present Address:
              </label>
              <textarea
                id="presentaddress"
                name="presentaddress"
                value={formData.presentaddress}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

              {/* photo */}
              {/* <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo:
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={handleChange}
                className="mt-1 block w-full"
              />
              {formData.photo && (
                <img
                  src={
                    formData.photo instanceof File
                      ? URL.createObjectURL(formData.photo)
                      : null
                  }
                  alt="Preview"
                  className="mt-2 w-32 h-32 object-cover"
                />
              )}
            </div> */}

            {/* signature */}
            {/* <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="signature"
                className="block text-sm font-medium text-gray-700"
              >
                Signature:
              </label>
              <input
                type="file"
                id="signature"
                name="signature"
                onChange={handleChange}
                className="mt-1 block w-full"
              />
              {formData.signature && (
                <img
                  src={
                    formData.signature instanceof File
                      ? URL.createObjectURL(formData.signature)
                      : null
                  }
                  alt="Preview"
                  className="mt-2 w-32 h-32 object-cover"
                />
              )}
            </div> */}

            {/* marksheet */}
            {/* <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="marksheet"
                className="block text-sm font-medium text-gray-700"
              >
                Marksheet:
              </label>
              <input
                type="file"
                id="marksheet"
                name="marksheet"
                onChange={handleChange}
                className="mt-1 block w-full"
              />
            </div> */}

            {/* Additional form fields */}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
