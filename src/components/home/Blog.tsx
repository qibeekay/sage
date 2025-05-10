import { motion, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";
import tinycolor from "tinycolor2";
import BlogDetails from "./BlogDetails";

const Blog = () => {
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
      className="max-w-7xl mx-auto px-4 py-20"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="relative" variants={containerVariants}>
        <div className="absolute inset-0 bg-[#001129]/50 bg-blend-overlay [mask-image:radial-gradient(20%_20%_at_20%_80%,black,transparent)]  group-hover:opacity-0 transition duration-700"></div>
        <div className="absolute inset-0 bg-[#001129]/50 bg-blend-overlay [mask-image:radial-gradient(20%_20%_at_70%_80%,black,transparent)]  group-hover:opacity-0 transition duration-700"></div>
        <div className="flex flex-col items-center text-center relative">
          {/* badge text */}
          <motion.p
            variants={itemVariants}
            className="border border-[#002752] py-2 px-6 rounded-full text-sm sm:text-lg flex items-center gap-2"
          >
            Resources
          </motion.p>
          {/* header text */}
          <motion.h1
            variants={itemVariants}
            className="text-xl xs:text-3xl md:text-5xl lg:text-8xl mt-5 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent py-5 flex flex-col"
          >
            <span>Latest News </span>
            <span>And Blogs</span>
          </motion.h1>
        </div>

        {/* blogs*/}
        <div className="">
          <BlogDetails />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Blog;
