import React, { useState } from "react";
import axios from "axios";
import contactimg from "../../assets/contactimg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
        setName("");
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
    <div className="container mx-auto p-6 pt-10 md:p-10 lg:p-16 xl:p-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          CONTACT US
        </h1>
        <p className="text-lg text-gray-600">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER IT’S ABOUT A QUERY OR COLLABORATION.
        </p>
      </div>
      <div className="flex flex-wrap -mx-4 items-center">
        <div className="w-full md:w-1/2 p-4">
          <img
            src={contactimg}
            alt="Contact"
            className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="mb-6">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name..."
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email (e.g., abc@gmail.com)"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
