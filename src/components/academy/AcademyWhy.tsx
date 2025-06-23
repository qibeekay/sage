import { Check } from "lucide-react";
import { differences } from "../../constants/academy";

const AcademyWhy = ({}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:py-[7rem]">
      <div className="">
        <div className="flex flex-col items-center text-center relative">
          {/* header text */}
          <h1 className="text-xl xs:text-3xl md:text-5xl lg:text-6xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent py-5 flex flex-col">
            <span>Why We’re</span>
            <span>Different</span>
          </h1>

          {/* paragraph text */}
          <blockquote
            className=" max-w-3xl text-sm md:text-lg text-white border-l-4 pl-6 py-4 italic relative"
            style={{ borderColor: "#002752", backgroundColor: "#0a0a0a" }}
          >
            “The only thing standing between you and a six-figure career is the
            right guidance.
          </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
          {differences.map((feature, index) => (
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

export default AcademyWhy;
