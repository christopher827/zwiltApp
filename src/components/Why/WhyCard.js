import React from "react";
import rbut from "../../assets/r-but.png";
import Button from "../../assets/Button.js";

export default function WhyCard({ whyText }) {

    const details = whyText;

    console.log('det', details);


  return (
    <div
      className=" flex flex-col md:flex-row p-10"
    >
      {/* Left Section */}
      <div className="flex-1 flex flex-row justify-center items-center space-y-6">
        {/* Second Row */}
        <div className="">
          <h2 className="text-[#000] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {whyText[0].title}
          </h2>
          <h3 className="text-[#000] text-lg font-medium mb-6">
            {whyText[0].description}
          </h3>
        </div>
      </div>

    </div>
  );
}
