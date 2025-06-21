import React, { useRef } from "react";
import {
  animate,
  useMotionTemplate,
  motion,
  useMotionValue,
  useInView,
  type ValueAnimationTransition,
} from "motion/react";

const AcademyAudience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

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
      </div>
    </motion.section>
  );
};

export default AcademyAudience;
