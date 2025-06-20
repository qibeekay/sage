import type { pentestingOverview } from "../../../constants/overview";

interface SharedOverviewProps {
  badgeText: string;
  title: React.ReactNode;
  description: React.ReactNode;
  features: typeof pentestingOverview;
}

const SharedOverview = ({
  badgeText,
  title,
  description,
  features,
}: SharedOverviewProps) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:py-20">
      <div className="flex flex-col lg:flex-row w-full items-start gap-10">
        {/* Left column - sticky content */}
        <div className="w-full sticky lg:h-screen -top-7 lg:top-0 flex items-center bg-dark py-10 lg:py-0 lg:bg-none z-30">
          <div>
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
            <p className="text-ashGray max-w-[900px] text-sm sm:text-base md:text-xl flex flex-col gap-y-6">
              {description}
            </p>
          </div>
        </div>

        {/* Right column - scrollable features */}
        <div className="w-full lg:pt-[40vh] pb-[10vh]">
          <div className="flex flex-col items-end gap-10">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="aspect-square mx-auto w-full sm:w-[25rem] lg:w-[30rem] p-6 bg-gradient-to-b from-[#080808]/0 to-[#080808]/40 border-2 border-white/10 rounded-[15px] flex flex-col justify-center items-center text-center shadow-card relative gap-2"
              >
                {/* number */}
                <h1 className="text-9xl font-enoch text-neutral-900/50">
                  {feature.id.toString().padStart(2, "0")}
                </h1>
                <h2 className="font-bold text-[#B0B3B8] text-2xl md:text-3xl mt-2">
                  {feature.title}
                </h2>
                <p className="text-[#A1A5AB] text-xl md::text-2xl mt-4">
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
