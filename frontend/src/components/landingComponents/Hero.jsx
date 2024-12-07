import React from "react";
import heroimg from "../../assets/heroimg.png";

const Hero = () => {
  return (
    <div>
      <img 
        src={heroimg} 
        alt="Hero" 
        className="w-full h-[100vh] object-cover rounded-b-3xl" 
      />
    </div>
  );
};

export default Hero;
