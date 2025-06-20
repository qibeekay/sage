import { Check } from "lucide-react";
import type { pentestWhy } from "../../../constants/whydetails";

interface FeaturesProps {
  badgeText: string;
  title: React.ReactNode;
  description: string;
  features: typeof pentestWhy;
}
const SharedWhy = ({
  badgeText,
  title,
  description,
  features,
}: FeaturesProps) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:py-[7rem]">
      <div className="">
        <div className="flex flex-col items-center text-center relative">
          <div>
            <p className="border border-[#002752] py-2 px-6 rounded-full text-sm sm:text-lg w-fit">
              {badgeText}
            </p>
          </div>

          {/* header text */}
          <h1 className="text-xl xs:text-3xl md:text-5xl lg:text-6xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent py-5 flex flex-col">
            {title}
          </h1>

          {/* paragraph text */}
          <p className="text-ashGray max-w-[900px] text-sm sm:text-base md:text-xl">
            {description}
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
