import { Check, BarChart, Shield, Eye, Zap, Users, Globe } from "lucide-react";
import React from "react";

const features = [
  {
    title: "Expertise Across Domains",
    description:
      "Our team comprises OSCP-certified, CREST-affiliated, and real-world red teamers with years of experience across multiple industries and infrastructures.",
  },
  {
    title: "Real-Time Access to Findings",
    description:
      "With PTaaS, you don't have to wait for a report — view findings as they're discovered, communicate directly with analysts, and initiate remediation immediately.",
  },
  {
    title: "Cutting-Edge Automation",
    description:
      "Our Automated Pentesting Engine mimics attacker behavior at scale. It identifies common, critical, and even context-sensitive vulnerabilities quickly, making it ideal for agile environments.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "We believe security should be collaborative and transparent. We work closely with your teams, providing knowledge transfer, training, and insights that empower your organization.",
  },
  {
    title: "Local & Global Coverage",
    description:
      "Whether you're a Nigerian SMB or a global enterprise, we understand the regulatory, cultural, and operational context of your organization.",
  },
];

const SharedWhy = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:py-[7rem]">
      <div className="">
        <div className="flex flex-col items-center text-center relative">
          <div>
            <p className="border border-[#002752] py-2 px-6 rounded-full text-sm sm:text-lg w-fit">
              Why us?
            </p>
          </div>

          {/* header text */}
          <h1 className="text-xl xs:text-3xl md:text-5xl lg:text-6xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent py-5 flex flex-col">
            <span>Why Choose Us for</span>
            <span>Penetration Testing?</span>
          </h1>

          {/* paragraph text */}
          <p className="text-ashGray max-w-[900px] text-sm sm:text-base md:text-xl">
            Experience the difference of working with cybersecurity experts who
            understand your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row items-start">
                <div className="bg-gray-200 rounded-full p-3 mr-4">
                  <Check className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-dark mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm sm:text-base text-dark">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SharedWhy;
