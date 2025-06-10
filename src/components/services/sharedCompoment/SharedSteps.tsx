import Timeline from "./Timeline";

const SharedSteps = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:py-20 min-h-screen">
      <div className="flex flex-col items-center text-center relative">
        <div>
          <p className="border border-[#002752] py-2 px-6 rounded-full text-sm sm:text-lg w-fit">
            Know us more
          </p>
        </div>

        {/* header text */}
        <h1 className="text-xl xs:text-3xl md:text-5xl lg:text-6xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent py-5 flex flex-col">
          <span>Our Approach to</span>
          <span>Identifying Vulnerabilities</span>
        </h1>

        {/* paragraph text */}
        <p className="text-ashGray max-w-[900px] text-sm sm:text-base md:text-xl">
          Our methodology blends manual expert-driven testing with automated
          tools, ensuring a comprehensive security evaluation. Here’s how we do
          it:
        </p>
      </div>

      <Timeline />
    </section>
  );
};

export default SharedSteps;
