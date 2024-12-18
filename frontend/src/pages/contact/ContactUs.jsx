import React, { useState } from "react";
import axios from "axios";
// import contactimg from "../../assets/images/contactimg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  // Define state variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/send-email", {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        toast.success("Email sent successfully!");
        // setStatus('Email sent successfully!');
        setName(""); // Clear form fields
        setEmail("");
        setMessage("");
      } else {
        toast.error("Error sending email. Please try again later.");
      }
    } catch (error) {
      toast.error("Error sending email. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">CONTACT US</h1>
        <p className="text-lg text-gray-600">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER SOCIAL MEDIA.
        </p>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <img
            // src={contactimg}
            alt="contactimg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your Name..."
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter you Email (abc@gmail.com)"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter you message..."
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </form>
          {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
