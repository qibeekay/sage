import React from "react";
import { AnimeBtn } from "../shared/AnimeBtn";
import img from "../../assets/illustrations/illust.png";
import { Btn } from "../shared/Btn";

const AcademyHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-10 pb-10 md:pb-32 md:pt-[12rem] text-dark">
      <div className="w-full bg-indigo-500 px-[20px] sm:px-[50px] py-[50px] min-h-[80svh] md:min-h-[326px] rounded-[45px] relative ">
        <div className="flex items-center justify-between">
          {/* text */}
          <div className="flex flex-col mt-10 sm:mt-0 md:gap-y-6 w-full md:w-[50%] lg:w-[60%]">
            {/* bagde */}
            <p className="border border-[#002752] py-2 px-6 rounded-full text w-fit">
              Want to become an expert?
            </p>

            <div className="">
              /{/* header text */}
              <h1 className="flex flex-col text-2xl sm:text-3xl lg:text-5xl font-bold">
                <span>The Virtual Academy</span>
                <span className="text-base sm:text-xl lg:text-3xl">
                  Where Ambition Meets Opportunity
                </span>
              </h1>
              {/* paragraph */}
              <p className="sm:text-lg mt-4">
                Break into Cybersecurity, Data Analytics & AI in Just 4 Months.
                Learn from experts. Build real-world skills. Launch a career
                that changes your life.
              </p>
            </div>

            {/* cta button */}
            <div className="flex items-center justify-center lg:justify-start gap-4 relative z-10 mt-4 sm:mt-0 flex-wrap">
              <Btn color="dark">Apply Now</Btn>
              <AnimeBtn>For Inquiries</AnimeBtn>
            </div>
          </div>

          {/* image */}
          <div className="absolute -bottom-[6rem] md:-bottom-9 -right-4 lg:right-0">
            <div>
              <img
                src={img}
                alt="illustration of a person smiling while looking at their laptop"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyHero;
