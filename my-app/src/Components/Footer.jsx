import React from "react";

const Footer = () => {
  return (
    <div className="bg-yellow-500  w-full h-96 flex  justify-center items-center">
      <div>
      <div className="mb-8">
        <h1 className="text-white text-4xl font-semibold font-sans mb-2">Stay Updated</h1>
        <p className="text-white font-sans">Get the  latest updates on academics near you!</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full max-w-md">
          <input
            type="email"
            placeholder="E-mail"
            className="p-2 rounded-md border border-gray-300 bg-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full sm:w-2/3"
          />
          <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/3">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;