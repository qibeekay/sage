import {
  CheckCircle,
  Shield,
  Users,
  Zap,
  FileText,
  Monitor,
} from "lucide-react";

const SharedFeatures = () => {
  const features = [
    {
      feature: "Hybrid Testing",
      description:
        "Combines manual ethical hacking with automated tools for maximum coverage.",
      icon: Zap,
      gradient: "from-red-500 to-pink-500",
    },
    {
      feature: "PTaaS Dashboard",
      description:
        "Real-time visibility, test tracking, secure communication, and evidence access.",
      icon: Monitor,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      feature: "Remediation Support",
      description:
        "Detailed fixes with walkthrough sessions and post-remediation testing.",
      icon: Users,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      feature: "Zero Downtime Testing",
      description:
        "Safe, controlled simulations that won't impact your operations.",
      icon: Shield,
      gradient: "from-purple-500 to-violet-500",
    },
    {
      feature: "Multi-Scope Testing",
      description:
        "Apps, networks, APIs, cloud, Active Directory, wireless, and IoT environments.",
      icon: CheckCircle,
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      feature: "Custom Reporting",
      description:
        "Tailored reports for technical teams, management, and auditors.",
      icon: FileText,
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-10 md:py-[7rem] bg-[#615fff] text-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center relative">
          {/* badge text */}
          <p className="border border-dark py-2 px-6 rounded-full text-sm sm:text-lg flex items-center gap-2 font-medium">
            Service Features
          </p>
          {/* header text */}
          <h1 className="text-xl xs:text-3xl md:text-5xl lg:text-8xl mt-5 font-semibold tracking-tighter text-dark flex flex-col">
            <span>Key Features of</span>
            <span>Our Testing Services</span>
          </h1>
          {/* paragraph text */}
          <p className="text-dark max-w-[900px] text-sm xs:text-base md:text-xl font-medium mt-2">
            Comprehensive capabilities designed to give you complete visibility
            into your security posture.
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
