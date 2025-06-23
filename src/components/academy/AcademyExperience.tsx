import { experiences } from "../../constants/academy";

const AcademyExperience = ({}) => {
  return (
    <section className="py-10 md:py-20 bg-[#615fff] text-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center relative">
          {/* header text */}
          <h1 className="text-xl xs:text-3xl md:text-5xl mt-5 font-semibold tracking-tighter text-dark flex flex-col">
            <span>The Academy</span>
            <span>Experience</span>
          </h1>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {experiences.map((feature, index) => (
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

export default AcademyExperience;
