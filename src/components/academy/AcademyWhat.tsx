import { ChevronRight } from "lucide-react";
import React from "react";

const AcademyWhat = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:py-[7rem]">
      <div className="">
        <div className="flex flex-col items-center text-center relative">
          {/* header text */}
          <h1 className="text-xl xs:text-3xl md:text-5xl lg:text-6xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent py-5 flex flex-col">
            <span>Don’t Just Learn</span>
            <span>Get Hired</span>
          </h1>

          <p className="text-ashGray max-w-[900px] text-sm sm:text-base md:text-xl">
            We support you from your first lesson to your first paycheck with:
          </p>
        </div>

        {/* Don’t Just Learn — Get Hired Section */}
        <div className="mt-10">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Career mentorship",
                "Certification preparation",
                "Portfolio development",
                "Mock interviews",
                "Job board access",
                "Ongoing support, even after graduation",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 py-4 px-6 rounded-full border-opacity-30 btext-lg font-medium shadow-md hover:bg-opacity-20 text-sm"
                >
                  <ChevronRight className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyWhat;
