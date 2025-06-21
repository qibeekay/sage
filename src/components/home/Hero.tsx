import React, { type RefObject, useEffect, useRef } from "react";
import gridLines from "../../assets/grid-lines.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useInView,
  animate,
} from "motion/react";
import { AnimeBtn } from "../shared/AnimeBtn";
import { Btn } from "../shared/Btn";

const useRelativeMousePosition = (to: RefObject<HTMLElement | null>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (e: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current?.getBoundingClientRect();
    mouseX.set(e.x - left);
    mouseY.set(e.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: false, amount: 0.3 });

  const [mouseX, mouseY] = useRelativeMousePosition(sectionRef);
  const maskImage = useMotionTemplate`radial-gradient(ellipse 30% 30% at ${mouseX}px ${mouseY}px, black, transparent)`;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="">
      <div
        ref={sectionRef}
        className="px-4 h-[80dvh] sm:h-dvh overflow-hidden relative group flex items-center justify-center [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent),linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] [mask-composite:intersect]"
      >
        {/* Background elements */}
        <div
          className="absolute inset-0 bg-[#001129] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_center_top,black,transparent)] group-hover:opacity-0 transition duration-700"
          style={{ backgroundImage: `url(${gridLines})` }}
        ></div>

        <motion.div
          className="absolute inset-0 bg-[#001129] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
          style={{
            maskImage,
            backgroundImage: `url(${gridLines})`,
          }}
        ></motion.div>

        {/* Animated content */}
        <motion.div
          ref={contentRef}
          className="flex flex-col items-center text-center relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* badge text */}
          <motion.p
            className="border border-[#002752] py-2 px-6 rounded-full text-sm sm:text-lg"
            variants={itemVariants}
          >
            Cybersecurity Consulting Company
          </motion.p>

          {/* header text */}
          <motion.h1
            className="text-xl xs:text-3xl md:text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent py-5 flex flex-col"
            variants={itemVariants}
          >
            <span>Protect your organizations</span>
            <span>from evolving digital threats</span>
          </motion.h1>

          {/* paragraph text */}
          <motion.p
            className="text-ashGray max-w-[900px] text-sm sm:text-base md:text-xl"
            variants={itemVariants}
          >
            <span className="font-bold">SAGE Consolidated</span> is a
            forward-thinking cybersecurity consulting company dedicated to
            protecting organizations across Africa and beyond from evolving
            digital threats.
          </motion.p>

          {/* cta buttons */}
          <motion.div
            className="flex items-center justify-center gap-5 mt-5 relative w-full flex-wrap"
            variants={itemVariants}
          >
            <Btn>Learn More</Btn>
            <AnimeBtn>Consult Us Now</AnimeBtn>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
