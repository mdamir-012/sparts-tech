import React, { useEffect } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" bg-white h-[600px]">
      <div className=" flex justify-around py-28">
        <div
          className="flex justify-center items-center  h-full"
          data-os="fade-right"
        >
          <h1 className="flex flex-col text-left text-6xl justify-start">
            Find the Best <span>Activity for Your</span> Child!
          </h1>
          <IoIosArrowDroprightCircle className="text-sky-300 ml-16 hover:text-sky-500 cursor-pointer text-6xl" />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Y5LM7wEdzTDY6XlM8j9x-sHilAAjfJHJK27JRD-6PA&s"
            className="w-full"
            alt="sketch_image"
          />
        </div>
      </div>

      <div className="flex justify-center items-center mt-14 gap-4">
        <button className="bg-yellow-500 w-52 text-white rounded-2xl py-2 font-medium hover:bg-yellow-200">
          For Academies
        </button>
        <button className="bg-yellow-500 w-52 text-white rounded-2xl py-2 font-medium hover:bg-yellow-200">
          SpArts in your home
        </button>
      </div>
    </div>
  );
};

export default Header;
