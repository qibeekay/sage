import React, { useState } from "react";
import { motion } from "motion/react";

function MainSection() {
  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState(null);

  // Card data
  const cards = [
    { title: "Loans", bgColor: "bg-orange-200", icon: "💸" },
    { title: "NFT", bgColor: "bg-purple-400", icon: "🖼️" },
    { title: "Builder", bgColor: "bg-green-800", icon: "🛠️" },
    { title: "Finance", bgColor: "bg-blue-200", icon: "📊" },
  ];

  return (
    <div className="flex-1 p-8">
      <div className="max-w-lg">
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
          <span className="text-lg font-semibold">Finance</span>
        </div>
        <h1 className="text-5xl font-bold mb-4">Welcome to open finance</h1>
        <p className="text-gray-600 mb-6">
          Trade digital assets in a competitive swap environment on our
          versatile, decentralized and trustless Finspace.
        </p>
        <div className="space-x-4">
          <button className="bg-black text-white px-6 py-2 rounded">
            Launch app
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            How it works
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex mt-8 space-x-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex-1 h-48 rounded-lg ${
              card.bgColor
            } flex items-center justify-center transition-all duration-300 ${
              hoveredCard === index
                ? "flex-[3] shadow-lg"
                : hoveredCard !== null
                ? "flex-[1] opacity-70"
                : "flex-[1]"
            }`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-center text-white">
              <div className="text-4xl mb-2">{card.icon}</div>
              <h3 className="text-xl font-semibold">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainSection;
