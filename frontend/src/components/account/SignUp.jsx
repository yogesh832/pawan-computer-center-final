import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Joi from "joi";
import "react-toastify/dist/ReactToastify.css";
import loginimg from "../../assets/Images/loginpage.png";

const SignUp = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Joi schema for validation
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
      "string.empty": "Name is required",
      "string.min": "Name must be at least 3 characters long",
      "string.max": "Name must be less than 100 characters long",
    }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.empty": "Email is required",
        "string.email": "Invalid email format",
      }),
    password: Joi.string().min(4).max(100).required().messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 4 characters long",
    }),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validate the form data
    const { error } = schema.validate(signUpInfo, { abortEarly: false });
    if (error) {
      error.details.forEach((err) => toast.error(err.message));
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signUpInfo),
      });

      const result = await response.json();

      // Log the response and result for debugging
      console.log("Response:", response); // Logs the entire response object
      console.log("Result:", result); // Logs the response body from the server

      if (!response.ok) {
        return toast.error(
          result.message || "Sign up failed. Please try again."
        );
      }

      toast.success("Sign up successful!");
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      console.error("Error:", err); // Logs any error that occurred in the try block
      toast.error("Sign up failed. Please try again.");
    }
  };

  return (
    <>
      <h1 className="text-center text-5xl font-bold mt-10 mb-5">
        Sign Up Now!
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center p-6 min-h-screen">
        <div className="w-full md:w-1/2 p-6">
          <img
            src={loginimg}
            alt="Sign Up"
            className="w-full max-w-md mx-auto"
          />
        </div>

        <form
          onSubmit={handleSignUp}
          className="flex flex-col items-center w-full md:w-1/2 max-w-md bg-white p-6 rounded-lg shadow-lg"
        >
          <input
            type="text"
            name="name"
            value={signUpInfo.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={signUpInfo.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            value={signUpInfo.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Sign Up Now
          </button>

          <p className="text-center mt-4">Already have an account?</p>
          <Link to="/login" className="w-full">
            <button
              type="button"
              className="w-full mt-2 bg-white text-blue-600 border-2 border-blue-600 p-3 rounded-lg hover:bg-blue-600 hover:text-white"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUp;
