import React, { useState, useEffect } from "react";
import { AnimeBtn } from "../../shared/AnimeBtn";

const GetStarted = () => {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "Step 01",
      description: "Book a free scoping consultation",
    },
    {
      title: "Step 02",
      description: "Get a tailored testing proposal with transparent pricing",
    },
    {
      title: "Step 03",
      description: "Launch your first test through our secure PTaaS portal",
    },
    {
      title: "Step 04",
      description:
        "Receive results, reports, and remediation support in real-time",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep(0);
          return 0;
        }
        const newProgress = prev + 1; // Adjust speed here
        const newStep = Math.floor(newProgress / 25);
        if (newStep !== activeStep) {
          setActiveStep(newStep);
        }
        return newProgress;
      });
    }, 100); // Adjust interval for smoother/faster animation

    return () => clearInterval(interval);
  }, [activeStep]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 mb-[15rem]">
      <div className="bg-[#141414] max-w-[1234px] min-h-[326px] rounded-[45px] px-[20px] py-[50px] sm:px-[50px]">
        {/* Animated progress bar */}
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-white h-3 rounded-full transition-all duration-300 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Steps with animated border */}
        <div className="mt-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`p-5 rounded-2xl text-center transition-all duration-300 ${
                  activeStep === index
                    ? "border-2 border-white"
                    : "border-2 border-white/10"
                }`}
              >
                <p className="font-bold text-lg pb-3">{step.title}</p>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 text-center">
          <p className="text-white text-xl font-bold">
            Let's test your defenses before hackers do.
          </p>
          <p className="mb-6 text-lg">
            Contact us today for a no-obligation consultation and demo of our
            PTaaS platform.
          </p>
          <AnimeBtn>Consult Us Today</AnimeBtn>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
