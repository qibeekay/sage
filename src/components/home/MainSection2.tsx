import React, { useState } from "react";
import { motion } from "framer-motion";

function MainSection2() {
  // State to track which card is being interacted with, default to 0 for the first card
  const [activeCard, setActiveCard] = useState(0);

  // Card data
  const cards = [
    { title: "Loans", bgColor: "bg-orange-200", icon: "💸" },
    { title: "NFT", bgColor: "bg-purple-400", icon: "🖼️" },
    { title: "Builder", bgColor: "bg-green-800", icon: "🛠️" },
    { title: "Finance", bgColor: "bg-blue-200", icon: "📊" },
  ];

  // Animation variants for the cards
  const cardVariants = {
    expanded: {
      flexGrow: 3,
      opacity: 1,
      boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    collapsed: {
      flexGrow: 1,
      opacity: 0.7,
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    default: {
      flexGrow: 1,
      opacity: 1,
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    mobileExpanded: {
      height: "12rem",
      opacity: 1,
      boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    mobileCollapsed: {
      height: "6rem",
      opacity: 0.7,
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex-1 p-4 sm:p-6 md:p-8">
      <div className="max-w-lg mx-auto md:mx-0">
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
          <span className="text-base sm:text-lg font-semibold">Finance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Welcome to open finance
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          Trade digital assets in a competitive swap environment on our
          versatile, decentralized and trustless Finspace.
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded text-sm sm:text-base">
            Launch app
          </button>
          <button className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">
            How it works
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row mt-6 md:mt-8 space-y-4 md:space-y-0 md:space-x-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`w-full md:flex-1 h-24 md:h-48 rounded-lg ${card.bgColor} flex items-center justify-center cursor-pointer`}
            variants={cardVariants}
            initial={index === 0 ? "expanded" : "collapsed"} // First card expanded by default
            animate={
              window.innerWidth >= 768 // md breakpoint (768px)
                ? activeCard === null
                  ? index === 0
                    ? "expanded"
                    : "collapsed"
                  : activeCard === index
                  ? "expanded"
                  : "collapsed"
                : activeCard === index
                ? "mobileExpanded"
                : "mobileCollapsed"
            }
            onMouseEnter={() => {
              if (window.innerWidth >= 768) setActiveCard(index);
            }}
            onMouseLeave={() => {
              if (window.innerWidth >= 768) setActiveCard(null);
            }}
            onClick={() => {
              if (window.innerWidth < 768) {
                setActiveCard(activeCard === index ? null : index);
              }
            }}
          >
            <div className="text-center text-white">
              <div className="text-3xl md:text-4xl mb-2">{card.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold -rotate-90 transform">
                {card.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MainSection2;
