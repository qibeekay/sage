import StickyScroll from "../../home/StickyScroll";

const features = [
  {
    title: "Prevent Breaches Before They Happen",
    description: "Catch vulnerabilities before attackers exploit them.",
    id: 1,
  },
  {
    title: "Reduce Compliance Risk",
    description:
      "Meet requirements for standards like ISO 27001, PCI-DSS, HIPAA, NDPR, and NIST.",
    id: 2,
  },
  {
    title: "Boost Customer Confidence",
    description: "Show your clients and partners that their data is secure.",
    id: 3,
  },
  {
    title: "Improve Internal Defenses",
    description:
      "Identify weak points in detection, response, and staff awareness.",
    id: 4,
  },
  {
    title: "Stay Agile",
    description:
      "Integrate automated pentesting into CI/CD pipelines for secure software development.",
    id: 5,
  },
];

const SharedOverview = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:py-20">
      <div className="flex w-full items-start gap-10">
        {/* flex 1 */}
        <div className="w-full sticky h-screen top-0 flex items-center">
          <div>
            <div>
              <p className="border border-[#002752] py-2 px-6 rounded-full text-sm sm:text-lg w-fit">
                Know us more
              </p>
            </div>

            {/* header text */}
            <h1 className="text-xl xs:text-3xl md:text-5xl lg:text-6xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent py-5 flex flex-col">
              <span>Benefits of Proactive</span>
              <span>Security Testing</span>
            </h1>

            {/* paragraph text */}
            <p className="text-ashGray max-w-[900px] text-sm sm:text-base md:text-xl">
              <span className="font-bold">SAGE Consolidated</span> is a
              forward-thinking cybersecurity consulting company dedicated to
              protecting organizations across Africa and beyond from evolving
              digital threats.
            </p>
          </div>
        </div>

        {/* flex 2 */}
        <div className="w-full py-[50vh]">
          <div className="flex flex-col items-end gap-10">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="aspect-square w-[30rem] p-6 bg-gradient-to-b from-[#080808]/0 to-[#080808]/40 border-2 border-white/10 rounded-[15px] flex flex-col items-center text-center shadow-card relative"
              >
                <h2 className="font-bold text-[#B0B3B8] text-lg mt-2">
                  {feature.title}
                </h2>
                <p className="text-[#A1A5AB] max-w-[200px] mt-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SharedOverview;
