import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          SECURE WITH OUR AUDITS
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto text-center">
          Drawing from internal statistics spanning 648 days, we gain valuable
          insights into trends, and performance metrics for informed
          decision-making.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <div className="text-5xl font-bold text-blue-400 mb-4">134</div>
            <h3 className="text-xl font-semibold mb-2">AUDITS</h3>
            <p className="text-gray-300">
              Experience and trust from leaders use Safe, lunch, and
            </p>
          </div>

          {/* Stat 2 */}
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <div className="text-5xl font-bold text-blue-400 mb-4">784+</div>
            <h3 className="text-xl font-semibold mb-2">ISSUES FOUND</h3>
            <p className="text-gray-300">
              We have discovered more than 784 issues so far. 10% of
            </p>
          </div>

          {/* Stat 3 */}
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <div className="text-5xl font-bold text-blue-400 mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">DAY TO RESOLVE</h3>
            <p className="text-gray-300">
              Auditors find high issues every 5 days, resolving them in
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
