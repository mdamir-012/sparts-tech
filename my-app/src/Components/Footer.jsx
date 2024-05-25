import React from "react";

const Footer = () => {
  return (
    <div className="bg-yellow-500  w-full h-96 flex  justify-center items-center">
      <div>
      <div className="mb-8">
        <h1 className="text-white text-4xl font-semibold font-sans mb-2">Stay Updated</h1>
        <p className="text-white font-sans">Get the  latest updates on academics near you!</p>
      </div>
      <div className="flex justify-evenly m-auto">
        <input type="email" placeholder="E-mail" className="p-2 w-72 rounded-lg" />
        <button className="bg-sky-400 rounded-lg mx-4 text-white px-6">Subscribe</button>
      </div>
      </div>
    </div>
  );
};

export default Footer;
