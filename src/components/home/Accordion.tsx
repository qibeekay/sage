import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

interface ProcessPhase {
  phase: string;
  description: string;
}

interface ProcessAccordionProps {
  processes: ProcessPhase[];
}

const Accordion: React.FC<ProcessAccordionProps> = ({ processes }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    hidden: {
      x: -50, // Slide from left (down) or right (up)
      opacity: 0,
      scale: 0.95,
      rotate: 5, // Subtle rotation
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.8,
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="max-w-[800px] mx-auto my-8"
    >
      <div className="space-y-6">
        {processes.map((process, index) => (
          <div key={index} className="overflow-visible">
            {" "}
            {/* Changed to overflow-visible */}
            {/* Accordion Header */}
            <motion.button
              onClick={() => toggleAccordion(index)}
              className="cursor-pointer w-fit flex justify-between items-center p-4 text-left focus:outline-none"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              variants={itemVariants}
            >
              <motion.span
                className="font-semibold px-5 sm:px-10 py-5 rounded-full flex items-center gap-4 sm:text-lg"
                initial={{
                  backgroundColor: "#080808",
                  color: "#ffffff",
                  border: "2px solid #615fff",
                }}
                whileHover={{
                  backgroundColor: "#615fff",
                  border: "2px solid #080808",
                  color: "#080808",
                  transition: { duration: 0.3 },
                }}
              >
                <span className="text-xl sm:text-3xl">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {process.phase}
              </motion.span>
            </motion.button>
            {/* Accordion Content */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: { duration: 0.3 },
                      opacity: { duration: 0.2, delay: 0.1 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      opacity: { duration: 0.2 },
                      height: { duration: 0.3, delay: 0.1 },
                    },
                  }}
                  className="ml-auto w-full sm:w-[calc(100%-100px)]"
                  // style={{ width: "calc(100% - 100px)" }}
                >
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: { duration: 0.3, delay: 0.2 },
                    }}
                    exit={{
                      x: 20,
                      opacity: 0,
                      transition: { duration: 0.2 },
                    }}
                    className="p-[30px] sm:p-[40px] rounded-[45px] text-dark relative"
                  >
                    {/* Your original design elements */}
                    <div className="absolute size-20 rounded-md transition duration-300 bg-black bottom-1.5 right-1.5"></div>
                    <div className="absolute inset-0 bg-white rounded-[45px] [mask-image:linear-gradient(325deg,transparent,transparent_40px,black_40px)]"></div>

                    <div className="relative sm:text-lg font-semibold">
                      <p>{process.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Accordion;
