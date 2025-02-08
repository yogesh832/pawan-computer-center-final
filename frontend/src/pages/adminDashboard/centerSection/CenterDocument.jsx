import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../components/loading/Loading.jsx";

const CenterDocument = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a loading delay of 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <Loading />
      </div>
    );
  }

  const imageStyle = "h-24 w-36"; // Tailwind classes for height and width
  const containerStyle =
    "bg-white p-5 m-3 flex flex-col items-center text-center justify-center";
  const linkStyle = "my-2";
  const alignFormatStyle =
    "w-full flex items-center justify-between gap-20"; // Adjusted gap and alignment

  return (
    <>
      <Link to="/dashboard">
        {/* Optionally include a Back Button here */}
      </Link>
      <h1 className="text-2xl font-bold mb-4">Centre Documents</h1>
      <div className={containerStyle}>
        <div className={alignFormatStyle}>
          <h4 className="min-w-[150px]">Trade License</h4>
          <a
            href="https://i.imgur.com/PUb5mrm.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            <img
              className={imageStyle}
              src="https://i.imgur.com/PUb5mrm.jpeg"
              alt="Trade License"
            />
          </a>
        </div>

        <div className={alignFormatStyle}>
          <h4 className="min-w-[150px]">Address Proof</h4>
          <a
            href="https://i.imgur.com/PUb5mrm.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            <img
              className={imageStyle}
              src="https://i.imgur.com/PUb5mrm.jpeg"
              alt="Address Proof"
            />
          </a>
          <a
            href="https://i.imgur.com/PUb5mrm.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            <img
              className={imageStyle}
              src="https://i.imgur.com/PUb5mrm.jpeg"
              alt="Address Proof"
            />
          </a>
        </div>

        <div className={alignFormatStyle}>
          <h4 className="min-w-[150px]">Pan Card</h4>
          <a
            href="https://i.imgur.com/PUb5mrm.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            <img
              className={imageStyle}
              src="https://i.imgur.com/PUb5mrm.jpeg"
              alt="Pan Card"
            />
          </a>
        </div>

        <div className={alignFormatStyle}>
          <h4 className="min-w-[150px]">Voter Card</h4>
          <a
            href="https://i.imgur.com/PUb5mrm.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            <img
              className={imageStyle}
              src="https://i.imgur.com/PUb5mrm.jpeg"
              alt="Voter Card"
            />
          </a>
          <a
            href="https://i.imgur.com/PUb5mrm.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            <img
              className={imageStyle}
              src="https://i.imgur.com/PUb5mrm.jpeg"
              alt="Voter Card"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default CenterDocument;
