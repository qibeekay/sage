import React, { useEffect, useRef } from "react";
import Accordion from "./Accordion";
import { motion, useInView } from "framer-motion";

const processes = [
  {
    phase: "Consult & Assess",
    description:
      "We begin with a comprehensive consultation to understand your business and security needs. Through penetration testing, vulnerability assessments, and governance, risk, and compliance (GRC) evaluations, we identify vulnerabilities, regulatory gaps, and risks to establish a clear security baseline.",
  },
  {
    phase: "Strategize & Architect",
    description:
      "Our experts design a customized security framework, incorporating security architecture, cloud and identity security, and threat intelligence strategies. This proactive blueprint aligns with your operations, ensuring seamless integration and robust defense against emerging threats.",
  },
  {
    phase: "Implement & Train",
    description:
      "We deploy cutting-edge tools, policies, and configurations for managed security services and security operations center (SOC) capabilities. Coupled with cybersecurity awareness and training programs, we empower your team and fortify your infrastructure to withstand attacks.",
  },
  {
    phase: "Monitor & Respond",
    description:
      "With 24/7 SOC services, threat intelligence, and incident response, we provide real-time threat detection and rapid mitigation. Digital forensics and malware analysis ensure thorough investigation and recovery, keeping your defenses agile and effective.",
  },
  {
    phase: "Optimize & Scale",
    description:
      "We continuously refine your security posture through managed security services and GRC updates, ensuring compliance and resilience as your business evolves. Our solutions adapt to new threats and growth, delivering long-term protection.",
  },
];

const CaseStudies = ({ onVisible }: any) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: false });

  useEffect(() => {
    if (inView) onVisible("#615fff"); // Blue background for CaseStudies
  }, [inView, onVisible]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.8,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="w-full text-dark"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
        <motion.div variants={containerVariants} className="relative">
          <div className="flex flex-col items-center text-center relative">
            {/* badge text */}
            <motion.p
              variants={itemVariants}
              className="border border-dark py-2 px-6 rounded-full text-sm sm:text-lg flex items-center gap-2 font-medium"
            >
              Process
            </motion.p>
            {/* header text */}
            <motion.h1
              variants={itemVariants}
              className="text-xl xs:text-3xl md:text-5xl lg:text-8xl mt-5 font-semibold tracking-tighter text-dark flex flex-col"
            >
              <span>Secure by Design:</span>
              <span>Our Process</span>
            </motion.h1>
            {/* paragraph text */}
            <motion.p
              variants={itemVariants}
              className="text-dark max-w-[900px] text-sm xs:text-base md:text-xl font-medium mt-2"
            >
              At <span className="font-bold">SAGE Consolidated</span> we don’t
              just react to threats—we build security into every layer of your
              business. Our proven, step-by-step process ensures robust
              protection while enabling your growth.
            </motion.p>
          </div>
          {/* accordion */}
          <div className="mt-20">
            <Accordion processes={processes} />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CaseStudies;
