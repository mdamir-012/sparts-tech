
import React from "react";

const Navbar = () => {
  return (
    <div className="flex h-[70px]  justify-end bg-sky-400 ">
      <div className=" sm:w-1/2 cursor-pointer lg:1/2 flex justify-evenly mt-8 mr-4 text-white text-lg font-medium font-sans  gap-2 ">
        <p>Our Customer</p>
        <p>spArts Advantage</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default Navbar;
