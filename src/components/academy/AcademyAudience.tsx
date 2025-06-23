import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { details } from "../../constants/academy";

const AcademyAudience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };
  return (
    <motion.section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 py-10 md:py-20"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div>
        {/* Animated content */}
        <motion.div
          className="flex flex-col items-center text-center relative"
          variants={containerVariants}
        >
          {/* header text */}
          <motion.h1
            className="text-xl xs:text-3xl md:text-5xl lg:text-8xl mt-5 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent py-5 flex flex-col"
            variants={itemVariants}
          >
            <span>Who It's For</span>
          </motion.h1>

          {/* paragraph text */}
          <motion.p
            className="text-ashGray max-w-[900px] text-sm sm:text-base md:text-xl"
            variants={itemVariants}
          >
            If you're smart, hungry, and ready to level up — you're who we built
            this for.
          </motion.p>
        </motion.div>

        {/* grid section */}
        <div className="lg:grid lg:grid-cols-2 gap-10 py-10">
          {details.map((detail, index) => (
            <div
              key={index}
              className={` lg:w-full px-10 xs:px-[30px] py-[50px] rounded-[45px] bg-gradient-to-br ${detail.gradient} max-w-[40rem] lg:max-w-full mx-auto mt-10 lg:mt-0`}
            >
              <div className="flex items-center flex-col-reverse sm:flex-row gap-5 justify-between">
                {/* text */}
                <div>
                  <h1 className="font-bold text-center md:text-left text-2xl llg:text-3xl">
                    {detail.title}
                  </h1>
                  <p className="font-medium llg:text-lg text-center md:text-left">
                    {detail.desc}
                  </p>
                </div>

                {/* image */}
                <div className="">
                  <div className="bg-white/10 backdrop-blur-sm w-[12rem] aspect-square rounded-full overflow-hidden">
                    <img
                      src={detail.image}
                      alt={`image of ${detail.title}`}
                      className="absolute top-3"
                    />
                  </div>
                </div>
              </div>
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AcademyAudience;
