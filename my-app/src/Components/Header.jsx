import React from "react";

const Header = () => {
  return (
    <div className="bg-white h-96">
      <div className="flex justify-around mt-14">
        <div className="flex justify-center items-center  h-full">
          <h1 className="flex flex-col text-left text-4xl justify-start">Find the Best <span>Activity for Your</span> Child!</h1>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Y5LM7wEdzTDY6XlM8j9x-sHilAAjfJHJK27JRD-6PA&s" alt="sketch_image" />
        </div>
      </div>

       <div className="flex justify-center items-center mt-14 gap-4">
      <button className="bg-yellow-500 w-52 text-white rounded-2xl py-2 font-medium">For Academies</button>
      <button className="bg-yellow-500 w-52 text-white rounded-2xl py-2 font-medium">SpArts in your home</button>
      </div> 
    </div>
  );
};



export default Header;
