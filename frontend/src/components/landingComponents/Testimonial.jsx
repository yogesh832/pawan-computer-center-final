import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import testimonialsimgOne from "../../assets/testimonialimg1.png"; // Import the image
import testimonialsimgTwo from "../../assets/testimonialimg2.png"
import testimonialsimgThree from "../../assets/testimonialimg3.png"

const Testimonial = () => {
  const testimonials = [
    {
      name: "Gloria Rose",
      image: testimonialsimgOne, // Use the imported testimonials image
      text: `"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."`,
      rating: 4,
      reviews: "12 reviews at Yelp",
    },
    {
      name: "John Smith",
      image: testimonialsimgTwo, // Use the same image for all testimonials
      text: `"TOTC has revolutionized the way we approach online learning. It's an incredibly helpful tool that has helped us increase efficiency and engagement."`,
      rating: 5,
      reviews: "20 reviews at Google",
    },
    {
      name: "Emily Adams",
      image: testimonialsimgThree, // Use the same image for all testimonials
      text: `"A fantastic platform that has made our online classes more engaging and organized. I highly recommend it for both teachers and students!"`,
      rating: 5,
      reviews: "8 reviews at Yelp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval); // Clear the interval when component unmounts
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Section (Text and Button) */}
        <div className="mb-6 md:mb-0 w-full md:w-1/2">
          <div className="flex items-center">
            <hr className="w-28 border-t-2 border-[#00cdc4]" />
            <p className="text-center font-semibold text-[#FF7352]">
              TESTIMONIAL
            </p>
            <hr className="w-28 border-t-2 border-[#00cdc4]" />
          </div>

          <h2 className="text-5xl font-bold text-[#00cdc4] mb-4 mt-6">
            What They Say?
          </h2>

          <p className="text-gray-600 mb-4 text-lg">
            TOTC has got more than 100k positive ratings from our users around
            the world.
          </p>
          <p className="text-gray-600 mb-6 text-lg">
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
          <p className="text-gray-600 mb-6 text-lg">
            Are you too? Please give your assessment
          </p>

          <button className="flex items-center mt-2 px-8 py-4  bg-[#00cdc4] text-xl text-white rounded-full hover:bg-[#00b5a5] transition">
            Write your assessment
            <IoIosArrowRoundForward className="text-2xl" />
          </button>
        </div>

        {/* Right Section (Carousel for Image and Testimonial) */}
        <div className="w-full md:w-1/2 relative">
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="object-cover rounded-lg w-3/4 shadow-lg"
              />
            </div>

            <div className="absolute bottom-4 border-s-8 border-s-[#FF7352] right-0 bg-white shadow-xl p-6 rounded-lg w-full max-w-xl h-60">
              <div className="border-s-4 border-s-gray-400">
                <p className="text-gray-800 font-semibold ml-2 mb-2 text-lg leading-relaxed">
                  {testimonials[currentIndex].text}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600 font-medium -mb-6">
                  {testimonials[currentIndex].name}
                </p>

                <div className="flex flex-col items-end">
                  <div className="flex items-center text-yellow-400 mb-1">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <FaStar key={i} />
                      )
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {testimonials[currentIndex].reviews}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6 w-full max-w-xs">
              <button
                onClick={prevTestimonial}
                className="text-teal-400 hover:text-teal-500 hidden"
              >
                Previous
              </button>
              <button
                onClick={nextTestimonial}
                className="text-teal-400 hover:text-teal-500 hidden"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
