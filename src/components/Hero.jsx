import React from "react";
import LeadForm from "../components/LeadForm";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-teal-300 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-light leading-tight">
            Paint your home the <br />
            smart way with <br />
            <span className="font-semibold">MS Paint Workers</span>
          </h1>

          <p className="mt-4 text-sm text-white/90 max-w-md">
            Get expert painting with colour advice, advanced tools and a
            hassle-free experience from start to finish.
          </p>

          <button className="mt-6 bg-white text-gray-700 px-5 py-2 rounded-md shadow">
            Explore Now
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end">
          <LeadForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;