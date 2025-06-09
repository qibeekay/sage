import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MainSection3 = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on load & resize
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const cards = [
    { label: "Change Text", bgColor: "#E60012", content: "Add your content" },
    { label: "Change Color", bgColor: "#FF2C55", content: "Customize freely" },
    {
      label: "Add Your Content",
      bgColor: "#FF3C00",
      content: "Design anything",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden font-sans">
      {/* LEFT PANEL */}
      <div className="md:w-1/4 w-full bg-black text-white p-6 flex flex-col justify-between relative">
        <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:20px_20px] opacity-10 z-0" />

        <div className="relative z-10">
          <h1 className="text-3xl font-bold leading-tight mb-2">
            MOTION
            <br />
            MEDIA
            <br />
            GROUP
          </h1>
          <p className="text-red-500 uppercase text-xs tracking-widest">
            Design Templates
          </p>
        </div>

        <div className="relative z-10 w-full aspect-square rounded-lg overflow-hidden mt-4">
          <img
            src="https://via.placeholder.com/300"
            alt="portrait"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* RIGHT PANELS */}
      <div className="flex flex-1 flex-col md:flex-row h-full">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-between p-6 transition-all duration-500 cursor-pointer"
            style={{
              backgroundColor: card.bgColor,
              flex: isMobile ? "unset" : activeCard === index ? 3 : 1,
              height: isMobile
                ? activeCard === index
                  ? "16rem"
                  : "8rem"
                : "auto",
            }}
            onMouseEnter={() => !isMobile && setActiveCard(index)}
            onMouseLeave={() => !isMobile && setActiveCard(null)}
            onClick={() => isMobile && setActiveCard(index)}
          >
            <div className="text-white text-xs uppercase tracking-widest">
              {card.label}
            </div>
            <div className="text-white text-[100px] font-extrabold leading-none">
              {`0${index + 1}`}
            </div>
            <div className="text-white text-base">{card.content}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MainSection3;
