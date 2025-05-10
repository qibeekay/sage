import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { RiArrowRightUpLongFill } from "@remixicon/react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

// Array of different colors for each card
const cardColors = [
  "bg-cyan-500", // Card 1
  "bg-emerald-500", // Card 2
  "bg-amber-500", // Card 3
  "bg-violet-500", // Card 4
  "bg-rose-500", // Card 5
  "bg-indigo-500", // Card 6
  "bg-lime-500", // Card 7
  "bg-pink-500", // Card 8
  "bg-sky-500", // Card 9
];

const hoverColors = [
  "group-hover:bg-cyan-400",
  "group-hover:bg-emerald-400",
  "group-hover:bg-amber-400",
  "group-hover:bg-violet-400",
  "group-hover:bg-rose-400",
  "group-hover:bg-indigo-400",
  "group-hover:bg-lime-400",
  "group-hover:bg-pink-400",
  "group-hover:bg-sky-400",
];

const services = [
  {
    icon: "/assets/lottie/innovate.lottie",
    name: "Penetration Testing \n & Vulnerability Assessment",
    description:
      "Simulates cyber-attacks to identify and address vulnerabilities in systems, ensuring robust defense against threats.",
  },
  {
    icon: "/assets/lottie/team.lottie",
    name: "Threat Intelligence \n & Incident Response",
    description:
      "Monitors and analyzes threats in real-time, enabling swift response and mitigation to minimize damage from cyber incidents.",
  },
  {
    icon: "/assets/lottie/team.lottie",
    name: "Governance, Risk \n & Compliance (GRC)",
    description:
      "Ensures alignment with regulations and standards, managing risks while establishing strong cybersecurity governance.",
  },
  {
    icon: "/assets/lottie/team.lottie",
    name: "Cloud & Identity \n Security",
    description:
      "Secures cloud environments and identity systems, protecting sensitive data and access from unauthorized breaches.",
  },
  {
    icon: "/assets/lottie/innovate.lottie",
    name: "Security Operations \n Center (SOC) Services",
    description:
      "Provides 24/7 monitoring and management of security events, ensuring proactive threat detection and response.",
  },
  {
    icon: "/assets/lottie/team.lottie",
    name: "Cybersecurity \n Awareness & Training",
    description:
      "Educates employees on best practices, reducing human error and fostering a security-first culture within organizations.",
  },
  {
    icon: "/assets/lottie/team.lottie",
    name: "Digital Forensics \n & Malware Analysis",
    description:
      "Investigates cyber incidents, analyzing malware and digital evidence to uncover attack origins and prevent recurrence.",
  },
  {
    icon: "/assets/lottie/team.lottie",
    name: "Security Architecture \n & Implementation",
    description:
      "Designs and deploys tailored security frameworks, ensuring resilient infrastructure against evolving threats.",
  },
  {
    icon: "/assets/lottie/team.lottie",
    name: "Managed Security \n Services",
    description:
      "Offers comprehensive, outsourced security management, delivering continuous protection and expertise for businesses.",
  },
];

const Services = ({ onVisible }: any) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const inView = useInView(targetRef, { amount: 0.1, once: false });

  useEffect(() => {
    if (inView) onVisible("#080808"); // Blue background for CaseStudies
  }, [inView, onVisible]);

  const [containerWidth, setContainerWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  const { scrollYProgress } = useScroll({ target: targetRef });

  // Calculate the total width of the card container and viewport
  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth);
        setViewportWidth(window.innerWidth);
      }
    };
    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, []);

  const startPosition =
    containerWidth > 0 ? (containerWidth - viewportWidth) / 2 : 0;

  const endPosition = startPosition - (containerWidth - viewportWidth);

  // Dynamically calculate the x transform
  const x = useTransform(scrollYProgress, [0, 1], [startPosition, endPosition]);

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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={targetRef}
      className="py-10 md:py-20 w-full"
    >
      <div className=" px-4 h-[500vh]">
        <div className="h-[100vh] sticky top-10 flex flex-col items-center justify-start overflow-hidden ">
          <div className="flex flex-col items-center text-center relative">
            {/* badge text */}
            <motion.p
              variants={itemVariants}
              className="border border-[#002752] py-2 px-6 rounded-full text-sm sm:text-lg flex items-center gap-2"
            >
              What We Offer
            </motion.p>
            {/* header text */}
            <motion.h1
              variants={itemVariants}
              className="text-xl xs:text-3xl md:text-5xl lg:text-8xl mt-5 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent py-5 flex flex-col"
            >
              <span>Simplify Security,</span>
              <span>Anytime, Anywhere</span>
            </motion.h1>
          </div>

          {/* cards */}
          <div className="mt-20">
            <motion.div
              ref={containerRef}
              style={{ x }}
              className="flex items-center gap-[2vw] px-[4rem]"
            >
              {services.map((service, index) => {
                const [firstLine, secondLine] = service.name.split("\n");
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    key={index}
                    className="relative z-0 p-5 sm:p-[50px] w-[400px] sm:w-[500px] md:w-[700px] lg:w-[800px] h-[410px] group shrink-0"
                  >
                    {/* Glow effect with dynamic color */}
                    <div
                      className={`absolute size-16 rounded-xl ${cardColors[index]} top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300`}
                    ></div>

                    {/* Main accent with dynamic color */}
                    <div
                      className={`absolute size-16 rounded-xl ${hoverColors[index]} transition duration-300 ${cardColors[index]} top-1.5 right-1.5 -z-10`}
                    ></div>

                    {/* Card background */}
                    <div className="absolute inset-0 bg-[#141414] -z-10 rounded-[45px] [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>

                    <div className="flex flex-col-reverse items-center justify-center md:grid md:grid-cols-2 md:justify-start h-full gap-x-10">
                      {/* text */}
                      <div className="w-full h-full flex flex-col justify-center md:justify-between gap-y-10">
                        <h3 className=" text-xl lg:text-2xl font-semibold text-white flex flex-col">
                          <span
                            className={`${cardColors[index]} text-black p-[7px] rounded-[7px] w-fit`}
                          >
                            {firstLine}
                          </span>
                          <span
                            className={`${cardColors[index]} text-black p-[7px] rounded-[7px] w-fit`}
                          >
                            {secondLine}
                          </span>
                        </h3>

                        {/* button */}
                        <div className="flex items-center gap-4">
                          <div className="">
                            <div
                              className={`w-[41px] aspect-square rounded-full ${cardColors[index]} grid place-items-center text-black`}
                            >
                              <RiArrowRightUpLongFill size={30} />
                            </div>
                          </div>
                          <p className="font-medium text-xl">Learn More</p>
                        </div>
                      </div>

                      {/* lottie icon */}
                      <div className="">
                        <div>
                          <DotLottieReact
                            src={service.icon}
                            className=""
                            autoplay
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
