import React from "react";

// Define the stat card data with TypeScript
interface StatCardProps {
  title: string;
  description: string;
  rotation: string; // Tailwind rotation class (e.g., "-rotate-3")
  positionClass: string; // Tailwind classes for positioning
}

const AuditStats: React.FC = () => {
  // Stat card data with positioning classes
  const stats: StatCardProps[] = [
    {
      title: "134 AUDITS",
      description:
        "Experience and trusted leaders like Safe, Linch, and LayerZero speak volumes in our portfolio.",
      rotation: "-rotate-10",
      positionClass:
        "left-1/2 -translate-x-1/2 top-0 md:left-1/4 md:-translate-x-0",
    },
    {
      title: "82 CRITICAL AND HIGH ISSUES IN 77 AUDITS",
      description:
        "We have discovered more than 784 issues so far, 10% of them account for critical and high findings.",
      rotation: "-rotate-10",
      positionClass:
        "left-1/2 -translate-x-1/2 top-24 md:left-[50%] md:-translate-x-1/4 md:-top-[2rem]",
    },
    {
      title: "1 DAY TO AN ISSUE",
      description:
        "Auditors find high issues every 5 days, resolving them in 2 days, while general issues take 1 day for resolution.",
      rotation: "rotate-5",
      positionClass:
        "left-1/2 -translate-x-1/2 top-48 md:left-1/2 md:-translate-x-0 md:top-30",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0f0a20] to-purple-900 text-white py-20 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        SECURE WITH OUR AUDITS
      </h2>
      {/* Paragraph */}
      <p className="text-lg max-w-3xl mx-auto mb-16 text-gray-300">
        Drawing from internal statistics spanning 648 days, we gain valuable
        insights into trends, and performance metrics for informed
        decision-making.
      </p>

      {/* Stat Cards Container */}
      <div className="relative h-[600px] md:h-[400px] max-w-5xl mx-auto bg-red-500">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`absolute w-full max-w-xs bg-gradient-to-br from-purple-600 to-pink-500 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 ${stat.rotation} ${stat.positionClass}`}
          >
            <h3 className="font-bold text-lg md:text-xl mb-2 ">{stat.title}</h3>
            <p className="text-sm text-gray-200">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="mt-4 border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
        View Details
      </button>
    </section>
  );
};

export default AuditStats;
