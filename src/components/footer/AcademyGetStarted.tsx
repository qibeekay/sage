import React from "react";
import africa from "../../assets/africa.jpg";
import { AnimeBtn } from "../shared/AnimeBtn";

const AcademyGetStarted = () => {
  return (
    <div>
      <div className="bg-black border border-white/30 max-w-7xl mx-auto min-h-[400px] text-ashGray rounded-[20px] sm:rounded-[45px] p-10 sm:p-[50px] relative overflow-hidden">
        <div className="absolute md:hidden inset-0 bg-black/60 z-5"></div>
        <div className="flex items-center justify-center md:items-start md:justify-start">
          <div className="relative z-10 max-w-[35rem] mt-4">
            {/* header text */}
            <h1 className="text-white text-xl xs:text-2xl sm:text-3xl md:text-5xl font-bold">
              The Virtual Academy
            </h1>
            {/* small text */}
            <p className="font-medium md:font-bold text-white md:text-ashGray text-sm md:text-xl md:mt-2">
              Where Ambition Meets Opportunity
            </p>
            {/* pararagph */}
            <p className="text-sm md:text-lg my-6 text-white md:text-ashGray">
              Break into Cybersecurity, Data Analytics & AI in Just 4
              Months.Learn from experts. Build real-world skills. Launch a
              career that changes your life.
            </p>
            {/* button */}
            <AnimeBtn>Get Started</AnimeBtn>
          </div>

          {/* map1 */}
          <div>
            <div className="w-[30rem] aspect-square absolute left-1/2 top-1/2 -translate-1/2 md:left-auto md:-translate-0 md:right-20 md:-top-10">
              <img src={africa} className="w-full h-full object-cover" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyGetStarted;
