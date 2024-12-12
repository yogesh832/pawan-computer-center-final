import React from "react";
import classroomFeatureImg from "../../assets/classroomFeatureImg.png";
const ClassroomFeature = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-lg shadow-md">
      {/* Text Section */}
      <div className="flex-1">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Everything you can do in a physical classroom,
          <span className="text-[#FF7352]">

          you can do with PCC
          </span>{" "}

        </h1>
        <p className="mt-4 text-gray-600">
          TOTC's school management software helps traditional and online schools
          manage scheduling, attendance, payments, and virtual classrooms all in
          one secure cloud-based system.
        </p>
        <button className="mt-4 text-blue-500 underline hover:text-blue-700">
          Learn more
        </button>
      </div>

      {/* Image/Video Section */}
      <div className="flex-1 relative">
        <img
          src={classroomFeatureImg} // Replace with your actual ima{ge URL
          alt="Classroom"
          className="rounded-lg shadow-md"
        />
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white text-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-500 hover:text-white"
          aria-label="Play Video"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default ClassroomFeature;
