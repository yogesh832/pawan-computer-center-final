import React from "react";
import classroomFeatureImg from "../../assets/classroomFeatureImg.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const ClassroomFeature = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8">
      {/* Text Section */}
      <div className="flex-1">
        <h1 className="text-[2.5rem] font-bold mb-4 md:text-3xl text-[#00cdc4]">
          Everything you can do in a physical classroom,
          <span className="text-[#FF7352]"> you can do with PCC</span>
        </h1>
        <p className="mt-4 text-gray-600 text-2xl">
          TOTC's school management software helps traditional and online schools
          manage scheduling, attendance, payments, and virtual classrooms all in
          one secure cloud-based system.
        </p>
        <button className="mt-4 flex items-center gap-2 px-6 py-3 bg-[#00cdc4] text-xl text-white rounded-full hover:bg-[#00b5a5] transition-all duration-300 ease-in-out">
          Learn More
          <IoIosArrowRoundForward className="text-2xl" />
        </button>
      </div>

      {/* Image/Video Section */}
      <div className="flex-1 relative">
        <img
          src={classroomFeatureImg}
          alt="Classroom"
          className="rounded-lg shadow-md"
        />
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white text-[#00cdc4] rounded-full flex items-center justify-center shadow-lg hover:bg-[#00b5a5] hover:text-white transition-all duration-300 ease-in-out"
          aria-label="Play Video"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default ClassroomFeature;
