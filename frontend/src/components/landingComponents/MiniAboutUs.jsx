import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const MiniAboutUs = () => {
  return (
    <section className="py-24 relative bg-gray-50">
      <div className="max-w-7xl px-6 md:px-12 lg:px-16 mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
          {/* Left Side - Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-last lg:order-first">
            <div className="pt-24 lg:justify-center sm:justify-end flex">
              <img
                className="rounded-xl object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 w-full h-auto"
                src="https://pagedone.io/asset/uploads/1717741205.png"
                alt="About Us"
              />
            </div>
            <img
              className="rounded-xl object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 w-full h-auto"
              src="https://pagedone.io/asset/uploads/1717741215.png"
              alt="About Us"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col gap-10 lg:items-start items-center text-center lg:text-left">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#00cdc4] text-3xl sm:text-4xl font-bold leading-tight">
                  Empowering
                  <span className="text-[#FF7352]"> Each Other to Succeed</span>
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg sm:text-2xl">
                  Every project we've undertaken has been a collaborative
                  effort, where every person involved has left their mark.
                  Together, we've not only constructed buildings but also built
                  enduring connections that define our success story.
                </p>
              </div>

              {/* Stats Section */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-12 lg:gap-16">
                <div className="text-center">
                  <p className="text-2xl sm:text-6xl text-[#00cdc4]">33+</p>
                  <p className="text-black text-xl sm:text-2xl">Years of Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-6xl text-[#00cdc4]">125+</p>
                  <p className="text-black text-xl sm:text-2xl">Successful Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-6xl text-[#00cdc4]">52+</p>
                  <p className="text-black text-xl sm:text-2xl">Main Questions</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-6xl text-[#00cdc4]">52+</p>
                  <p className="text-black text-xl sm:text-2xl">Happy Clients</p>
                </div>
              </div>
            </div>

            {/* Read More Button */}
            <Link to={"about"}>
              <button className="mt-4 flex items-center gap-2 px-6 py-3 bg-[#00cdc4] text-xl text-white rounded-full hover:bg-[#00b5a5] transition-all duration-300 ease-in-out">
                Read More
                <IoIosArrowRoundForward className="text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniAboutUs;
