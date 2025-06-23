import React, { useRef } from "react";
import {
  animate,
  useMotionTemplate,
  motion,
  useMotionValue,
  useInView,
  type ValueAnimationTransition,
} from "motion/react";
import AcademyCourses from "./AcademyCourses";

const AcademyExplained = () => {
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
      className="max-w-7xl mx-auto px-4 py-20"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="relative">
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
            <span> Fast-Track Your </span>
            <span>Future in Tech</span>
          </motion.h1>
        </motion.div>

        {/* stories */}
        <div className="w-full my-10">
          <div className="border-2 border-white/10 text-ashGray rounded-[45px] p-[30px] sm:p-[50px] w-full text-sm xs:text-base md:text-xl font-medium">
            <p>
              In a world driven by data, security, and intelligent systems, you
              don't need a degree to succeed — you need direction, discipline,
              and the right training. .
            </p>
            <p className="py-5">
              That’s exactly what we offer at The Virtual Academy — a 4-month,
              mentor-led training program designed to give you the skills,
              confidence, and certifications to compete globally in
              Cybersecurity, Data Analytics, and AI for Cyber Defense.
            </p>
            <p>This isn’t another course. This is your career starter</p>
          </div>

          {/* what you will learn */}
          <AcademyCourses />
        </div>
      </div>
    </motion.section>
  );
};

export default AcademyExplained;
