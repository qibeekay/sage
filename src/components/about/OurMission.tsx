import { RiArrowRightUpLongFill } from "@remixicon/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const contents = [
  {
    title: "Mission",
    description:
      "To empower organizations across Africa and beyond with robust, tailored cybersecurity solutions that safeguard their digital assets and enable secure business growth.",
  },
  {
    title: "Vision",
    description:
      "To be the leading cybersecurity partner in Africa, driving innovation and trust in the digital landscape by delivering strategic and practical security solutions.",
  },
  {
    title: "Core Values",
    description:
      "Innovation, integrity, and expertise guide our approach. We prioritize client-centric solutions, proactive strategies, and a commitment to excellence in addressing evolving digital threats.",
  },
];

const OurMission = () => {
  const [activeCard, setActiveCard] = useState(0);

  const contentVariants = {
    expanded: {
      flexGrow: 3,
      backgroundColor: "#615fff", // indigo-500
      transition: { duration: 1, ease: "easeInOut" },
    },
    collapsed: {
      flexGrow: 0,
      backgroundColor: "#141414",
      transition: { duration: 1, ease: "easeInOut" },
    },
    default: {
      flexGrow: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
    mobileExpanded: {
      height: "20rem",
      backgroundColor: "#615fff",
      transition: { duration: 1, ease: "easeInOut" },
    },
    mobileCollapsed: {
      height: "8rem",
      backgroundColor: "#141414",
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const textVariants = {
    active: {
      color: "#080808", // dark
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    inactive: {
      color: "#cacacc", // ashGray
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const arrowContainerVariants = {
    active: {
      backgroundColor: "#080808", // dark
      color: "#cacacc", // ashGray
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    inactive: {
      backgroundColor: "#615fff", // blue-700
      color: "#080808", // dark
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const descriptionVariants = {
    enter: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3 },
    },
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 1 },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 },
    },
  };

  const arrowVariants = {
    active: {
      scale: 1.05,
      rotate: 45,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        scale: { type: "spring", stiffness: 200, damping: 10 },
      },
    },
    inactive: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 pb-[20rem]">
      <div className="flex items-center flex-col md:flex-row">
        {contents.map((content, index) => (
          <motion.div
            variants={contentVariants}
            initial={index === 0 ? "expanded" : "collapsed"}
            key={index}
            className={`w-full md:w-[10rem] h-[40rem] p-10 relative overflow-hidden border-t-8 md:border-l-8 border-dark cursor-pointer md:cursor-default`}
            animate={
              window.innerWidth >= 768
                ? activeCard === null
                  ? index === 0
                    ? "expanded"
                    : "collapsed"
                  : activeCard === index
                  ? "expanded"
                  : "collapsed"
                : activeCard === index
                ? "mobileExpanded"
                : "mobileCollapsed"
            }
            onMouseEnter={() => {
              if (window.innerWidth >= 768) setActiveCard(index);
            }}
            onMouseLeave={() => {
              if (window.innerWidth >= 768) setActiveCard(0);
            }}
            onClick={() => {
              if (window.innerWidth < 768) {
                setActiveCard(activeCard === index ? 0 : index);
              }
            }}
          >
            <motion.div
              animate={activeCard === index ? "active" : "inactive"}
              variants={textVariants}
            >
              {/* description */}
              <AnimatePresence>
                {activeCard === index && (
                  <motion.p
                    className="sm:text-xl lg:text-3xl font-semibold max-w-md"
                    variants={descriptionVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    {content.description}
                  </motion.p>
                )}
              </AnimatePresence>

              <div className="absolute right-10 bottom-10">
                <div className="text-2xl sm:text-5xl font-bold rotate-text flex gap-x-10">
                  <h1>{content.title}</h1>
                  <div className="">
                    <motion.div
                      variants={arrowContainerVariants}
                      animate={activeCard === index ? "active" : "inactive"}
                      className="w-[41px] aspect-square rounded-full grid place-items-center"
                    >
                      <motion.div
                        variants={arrowVariants}
                        animate={activeCard === index ? "active" : "inactive"}
                      >
                        <RiArrowRightUpLongFill size={30} />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurMission;
