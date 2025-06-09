import React, { useRef } from "react";
import {
  animate,
  useMotionTemplate,
  motion,
  useMotionValue,
  useInView,
  type ValueAnimationTransition,
} from "motion/react";

const OurStories = () => {
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
      <div className="relative">
        {/* Animated content */}
        <motion.div
          className="flex flex-col items-center text-center relative"
          variants={containerVariants}
        >
          {/* badge text */}
          <motion.p
            className="border border-[#002752] py-2 px-6 rounded-full text-sm sm:text-lg flex items-center gap-2"
            variants={itemVariants}
          >
            Let's take you back in time
          </motion.p>

          {/* header text */}
          <motion.h1
            className="text-xl xs:text-3xl md:text-5xl lg:text-8xl mt-5 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent py-5 flex flex-col"
            variants={itemVariants}
          >
            <span>Our Story</span>
            <span>Our Journey</span>
          </motion.h1>
        </motion.div>

        {/* stories */}
        <div className="w-full my-10">
          <div className="border-2 border-white/10 text-ashGray rounded-[45px] p-[50px] w-full text-sm xs:text-base md:text-xl font-medium">
            <p>
              SAGE Consolidated was founded in 2010 with a clear mission: to
              address the growing cybersecurity challenges facing African
              businesses and organizations.
            </p>
            <p className="py-5">
              What began as a small team of security experts has grown into a
              comprehensive cybersecurity consulting firm with operations across
              the continent. Over the years, we've helped hundreds of
              organizations safeguard their digital assets and build resilient
              security frameworks.
            </p>
            <p>
              Today, SAGE Consolidated stands at the forefront of cybersecurity
              innovation in Africa, combining global best practices with local
              expertise to deliver solutions that address the unique security
              challenges of the African market.
            </p>
          </div>
          {/* <div className="bg-indigo-500 text-dark rounded-[45px] p-[50px] w-full text-sm xs:text-base md:text-xl font-medium">
            <p>
              SAGE Consolidated was founded in 2010 with a clear mission: to
              address the growing cybersecurity challenges facing African
              businesses and organizations.
            </p>
            <p className="py-5">
              What began as a small team of security experts has grown into a
              comprehensive cybersecurity consulting firm with operations across
              the continent. Over the years, we've helped hundreds of
              organizations safeguard their digital assets and build resilient
              security frameworks.
            </p>
            <p>
              Today, SAGE Consolidated stands at the forefront of cybersecurity
              innovation in Africa, combining global best practices with local
              expertise to deliver solutions that address the unique security
              challenges of the African market.
            </p>
          </div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default OurStories;
