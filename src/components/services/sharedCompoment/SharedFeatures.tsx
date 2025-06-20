import type { pentestFeatures } from "../../../constants/features";

interface FeaturesProps {
  badgeText: string;
  title: React.ReactNode;
  description: string;
  features: typeof pentestFeatures;
}
const SharedFeatures = ({
  badgeText,
  title,
  description,
  features,
}: FeaturesProps) => {
  return (
    <section className="py-10 md:py-[7rem] bg-[#615fff] text-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center relative">
          {/* badge text */}
          <p className="border border-dark py-2 px-6 rounded-full text-sm sm:text-lg flex items-center gap-2 font-medium">
            {badgeText}
          </p>
          {/* header text */}
          <h1 className="text-xl xs:text-3xl md:text-5xl lg:text-8xl mt-5 font-semibold tracking-tighter text-dark flex flex-col">
            {title}
          </h1>
          {/* paragraph text */}
          <p className="text-dark max-w-[900px] text-sm xs:text-base md:text-xl font-medium mt-2">
            {description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-[#141414] hover:bg-[#141414]/95 transition-all duration-300 hover:shadow-xl"
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.feature}
              </h3>
              <p className="text-white leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SharedFeatures;
