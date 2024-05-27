import React, { useState, useEffect } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";



const TopHero = () => {
  const [currImage, setcurrImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setcurrImage((prevIndex) => (prevIndex + 1) % img.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full h-screen max-w-full rounded-lg overflow-hidden shadow-lg relative">
        <div className="relative w-full h-full">
          {img.map((imageUrl, i) => (
            <img
              key={i}
              src={imageUrl}
              alt={`Slide ${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                i === currImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 flex items-center text-left text-white bg-opacity-50 p-5 rounded-lg font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl ml-4 sm:ml-8 md:ml-12 lg:ml-16">
            <p className="animate__animated animate__fadeInLeft transition duration-500 ease-in-out text-black font-mono text-6xl">
              Find the Best <br /> Activity for your <br /> Child!
            </p>

            <span className="ml-3 mt-2 rounded-full bg-sky-400 hover:bg-sky-500 transition duration-300 ease-in-out">
            <IoIosArrowDroprightCircle className="  cursor-pointer text-6xl" />
            </span>
          </div>

          <div className="absolute bottom-6 w-full flex flex-col md:flex-row justify-center py-4">
            <button className="w-full  lg:w-72 text-lg sm:text-xl md:text-2xl lg:text-3xl bg-yellow-400 text-white p-3 rounded-full mb-2 md:mb-0 md:mr-2.5 mt-10 hover:bg-yellow-600 transition duration-300 ease-in-out">
              For Academies
            </button>
            <button className="w-full  lg:w-96 text-lg sm:text-xl md:text-2xl lg:text-3xl bg-yellow-400 text- p-3 rounded-full mt-10 hover:bg-yellow-600 transition duration-300 ease-in-out text-white">
              SpArts in your home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const img = [
    "https://media.istockphoto.com/id/1417645836/photo/teacher-and-joyful-students-celebrate-successful-completion-of-collective-school-work-in-a.jpg?s=2048x2048&w=is&k=20&c=Dgv78tz3TaDcHQRjTqIlCUv5JURR9MESUJdUCvNDHR4=",
    "https://media.istockphoto.com/id/1137022141/photo/girls-with-their-young-lady-teacher-in-private-school.jpg?s=2048x2048&w=is&k=20&c=Xfw_cS89lCrpBmwoOTbzpwT4NW_Lx8FXLlRiSrpMT3w=",
    "https://media.istockphoto.com/id/1421872415/photo/teacher-conducts-a-lesson-gives-a-lecture-children-during-school-work.jpg?s=2048x2048&w=is&k=20&c=yAtGojjuApsutH8-KLOZrc8qH3VU2yx6es_l3c1gVWw=",
    "https://media.istockphoto.com/id/473906114/photo/multiracial-group-of-children-in-preschool-hallway.jpg?s=2048x2048&w=is&k=20&c=IN-7KmAgQEI1kPaepwgpjuS4-lr_NujBvzpHjR9gmhc=",
    "https://media.istockphoto.com/id/695294506/photo/scoring-a-goal.jpg?s=2048x2048&w=is&k=20&c=m4LaiZMixxHMEP4AYDesDSLheGlovzoIGnxjBJIAxW0=",
  ];
export default TopHero;