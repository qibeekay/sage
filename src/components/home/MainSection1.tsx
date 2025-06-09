import React, { useState } from "react";
import { motion } from "framer-motion";

function MainSection1() {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      title: "DESIGN",
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-600",
      content:
        "Custom design templates for your projects. Change text and colors as needed.",
    },
    {
      title: "MOTION",
      bgColor: "bg-gradient-to-r from-purple-500 to-purple-600",
      content:
        "Beautiful animations and transitions to enhance user experience.",
    },
    {
      title: "MEDIA",
      bgColor: "bg-gradient-to-r from-pink-500 to-pink-600",
      content: "Media components ready to use in your applications.",
    },
    {
      title: "EFFECTS",
      bgColor: "bg-gradient-to-r from-orange-500 to-orange-600",
      content: "Visual effects that will make your content stand out.",
    },
  ];

  const cardVariants = {
    expanded: {
      flex: "3 1 0%",
      minWidth: "300px",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    collapsed: {
      flex: "1 1 0%",
      minWidth: "80px",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    mobileExpanded: {
      width: "100%",
      height: "200px",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    mobileCollapsed: {
      width: "100%",
      height: "60px",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      {/* Header */}
      <div className="mb-8 sm:mb-12 max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-1 sm:mb-2">
          MOTION
        </h1>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
          MEDIA GROUP
        </h2>
      </div>

      {/* Responsive Cards Container */}
      <div className="max-w-6xl mx-auto">
        {/* Desktop - Side by side horizontal expansion */}
        <div className="hidden sm:flex h-64 gap-2">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`${card.bgColor} rounded-lg text-white overflow-hidden cursor-pointer`}
              variants={cardVariants}
              initial={index === 0 ? "expanded" : "collapsed"}
              animate={activeCard === index ? "expanded" : "collapsed"}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(0)}
            >
              <div className="h-full p-4 sm:p-6 flex flex-col">
                <h3 className="text-base sm:text-lg font-bold mb-2">
                  {card.title}
                </h3>

                {activeCard === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <p className="text-sm sm:text-base mb-3 sm:mb-4">
                      {card.content}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button className="px-3 sm:px-4 py-1 sm:py-2 bg-white bg-opacity-20 rounded-full text-xs sm:text-sm">
                        CHANGE TEXT
                      </button>
                      <button className="px-3 sm:px-4 py-1 sm:py-2 bg-white bg-opacity-20 rounded-full text-xs sm:text-sm">
                        CHANGE COLOR
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile - Vertical stack */}
        <div className="sm:hidden space-y-2">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`${card.bgColor} rounded-lg text-white overflow-hidden cursor-pointer`}
              variants={cardVariants}
              initial={index === 0 ? "mobileExpanded" : "mobileCollapsed"}
              animate={
                activeCard === index ? "mobileExpanded" : "mobileCollapsed"
              }
              onClick={() => setActiveCard(activeCard === index ? 0 : index)}
            >
              <div className="h-full p-4 flex flex-col">
                <h3 className="text-base font-bold mb-2">{card.title}</h3>

                {activeCard === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <p className="text-sm mb-3">{card.content}</p>
                    <div className="flex flex-wrap gap-2">
                      <button className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs">
                        CHANGE TEXT
                      </button>
                      <button className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs">
                        CHANGE COLOR
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Indicators - Hidden on mobile */}
      <div className="hidden sm:flex justify-center space-x-2 mt-6 sm:mt-8">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              activeCard === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default MainSection1;
