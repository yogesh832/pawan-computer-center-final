import React from "react";
// import BackBtn from "../BackBtnForAll/BackBtn";
import { Link } from "react-router-dom";

const CenterDocument = () => {
  const imageStyle = "h-24 w-36"; // Tailwind classes for height and width
  const containerStyle =
    "bg-white p-5 m-3 flex flex-col items-center text-center justify-center";
  const linkStyle = "my-2";
  const alignFormatStyle = "w-full flex items-center justify-between gap-20"; // Adjusted gap and alignment

  return (
    <>
      <Link to="/dashboard">
        {/* <BackBtn /> */}
      </Link>
      <h1 className="text-2xl font-bold mb-4">Centre Documents</h1>
      <div className={containerStyle}>
        <div className={alignFormatStyle}>
          <h4 className="min-w-[150px]">Trade License</h4>
          <a
            href="https://i.imgur.com/PUb5mrm.jpeg"
            target="_blank"
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
