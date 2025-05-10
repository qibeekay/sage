import React from "react";

// Define the stat card data with TypeScript
interface StatCardProps {
  title: string;
  description: string;
  rotation: string; // Tailwind rotation class (e.g., "-rotate-3")
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  description,
  rotation,
}) => (
  <div
    className={`bg-gradient-to-br from-purple-600 to-pink-500 text-white p-6 rounded-xl shadow-lg ${rotation} max-w-xs`}
  >
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm leading-relaxed">{description}</p>
  </div>
);

const AuditStatsSection: React.FC = () => {
  // Stat card data
  const stats: StatCardProps[] = [
    {
      title: "134 AUDITS",
      description:
        "Experience and trusted leaders like Safe, Linch, and LayerZero speak volumes in our portfolio.",
      rotation: "-rotate-3",
    },
    {
      title: "82 CRITICAL AND HIGH ISSUES IN 77 AUDITS",
      description:
        "We have discovered more than 784 issues so far, 10% of them account for critical and high findings.",
      rotation: "rotate-2",
    },
    {
      title: "1 DAY TO AN ISSUE",
      description:
        "Auditors find high issues every 5 days, resolving them in 2 days, while general issues take 1 day for resolution.",
      rotation: "-rotate-1",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-purple-900 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          SECURE WITH OUR AUDITS
        </h1>
        {/* Paragraph */}
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Drawing from internal statistics spanning 648 days, we gain valuable
          insights into trends, and performance metrics for informed
          decision-making.
        </p>
        {/* Stat Cards */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              description={stat.description}
              rotation={stat.rotation}
            />
          ))}
        </div>
        {/* Button */}
        <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
          View Details
        </button>
      </div>
    </section>
  );
};

export default AuditStatsSection;
