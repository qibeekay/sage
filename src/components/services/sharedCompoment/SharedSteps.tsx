import type { pentestApproach } from "../../../constants/approach";
import Timeline from "./Timeline";

interface SharedStepsProps {
  badgeText: string;
  title: React.ReactNode;
  description: React.ReactNode;
  timelineItems: typeof pentestApproach;
}
const SharedSteps = ({
  badgeText,
  title,
  description,
  timelineItems,
}: SharedStepsProps) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:py-20 min-h-screen overflow-hidden">
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

      <Timeline items={timelineItems} />
    </section>
  );
};

export default SharedSteps;
