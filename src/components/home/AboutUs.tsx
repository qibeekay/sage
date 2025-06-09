import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  animate,
  useMotionTemplate,
  motion,
  useMotionValue,
  useInView,
  type ValueAnimationTransition,
} from "motion/react"; // Fixed imports
import React, { useEffect, useRef, useState } from "react";

// Define the type for each card
interface Card {
  icon: string;
  title: string;
  paragraph: string;
}

// Define the props type for FeatureCards
interface FeatureCardsProps {
  icon: string;
  title: string;
  paragraph: string;
}

const cards = [
  {
    icon: "/assets/lottie/africa.lottie",
    title: "African Expertise",
    paragraph:
      "Deep understanding of the unique challenges facing African organizations",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
  },
  {
    icon: "/assets/lottie/innovate.lottie",
    title: "Experienced Team",
    paragraph:
      "Security experts with global certifications and real-world experience.",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
  },
  {
    icon: "/assets/lottie/Animation - 1746535544225.lottie",
    title: "Collaborative Approach",
    paragraph:
      "We work as an extension of your team, not just as external consultants.",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
  },
  {
    icon: "/assets/lottie/idea.lottie",
    title: "Innovation Focus",
    paragraph:
      "Constantly evolving our approaches to stay ahead of emerging threats.",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
  },
];

const AboutUs = () => {
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
        {/* Background elements */}
        <div className="absolute inset-0 bg-[#001129]/50 bg-blend-overlay [mask-image:radial-gradient(20%_20%_at_20%_80%,black,transparent)] group-hover:opacity-0 transition duration-700"></div>
        <div className="absolute inset-0 bg-[#001129]/50 bg-blend-overlay [mask-image:radial-gradient(20%_20%_at_70%_80%,black,transparent)] group-hover:opacity-0 transition duration-700"></div>

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
            Why us?
          </motion.p>

          {/* header text */}
          <motion.h1
            className="text-xl xs:text-3xl md:text-5xl lg:text-8xl mt-5 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent py-5 flex flex-col"
            variants={itemVariants}
          >
            <span>Built for Security.</span>
            <span>Chosen for Trust.</span>
          </motion.h1>

          {/* paragraph text */}
          <motion.p
            className="text-ashGray max-w-[900px] text-sm xs:text-base md:text-xl font-medium"
            variants={itemVariants}
          >
            At <span className="font-bold">SAGE Consolidated</span> we
            specialise in protecting your organization from digital threats. Our
            tailored services ensure your cybersecurity needs are met with
            precision and expertise.
          </motion.p>

          <motion.blockquote
            className="mt-10 max-w-3xl text-sm md:text-lg text-white border-l-4 pl-6 py-4 italic relative"
            style={{ borderColor: "#002752", backgroundColor: "#0a0a0a" }}
            variants={itemVariants}
          >
            “At <span className="font-bold text-white">SAGE Consolidated</span>,
            we believe security is not just a technology issue—it's a business
            imperative.”
          </motion.blockquote>
        </motion.div>

        {/* cards */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-10 flex-wrap relative z-10"
          variants={containerVariants}
        >
          {cards.map((card, index) => (
            <FeatureCards
              key={index}
              icon={card.icon}
              title={card.title}
              paragraph={card.paragraph}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// FeatureCards component with typed props
const FeatureCards: React.FC<FeatureCardsProps> = ({
  icon,
  title,
  paragraph,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [dotLottie, setDotLottie] = useState<any>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const borderOpacity = useMotionValue(0);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });
  let animationController: any = null;

  const dotLottieRefCallback = (
    dotLottieInstance: React.SetStateAction<any>
  ) => {
    setDotLottie(dotLottieInstance);
  };

  // Play animation when in view
  useEffect(() => {
    if (isInView && dotLottie) {
      dotLottie.play();
    }
  }, [isInView, dotLottie]);

  const handleMouseEnter = () => {
    if (dotLottie) {
      dotLottie.play();
    }
    borderOpacity.set(1);
    startBorderAnimation();
  };

  const handleMouseLeave = () => {
    borderOpacity.set(0);
    stopBorderAnimation();
  };

  const startBorderAnimation = () => {
    if (!cardRef.current) return;
    const { height, width } = cardRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animationController = [
      animate(xPercentage, [0, 100, 100, 0, 0], options),
      animate(yPercentage, [0, 0, 100, 100, 0], options),
    ];
  };

  const stopBorderAnimation = () => {
    if (animationController) {
      animationController.forEach((anim: any) => anim.stop());
      xPercentage.set(0);
      yPercentage.set(0);
      animationController = null;
    }
  };

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="max-w-[284px] p-6 bg-gradient-to-b from-[#080808]/0 to-[#080808]/40 border-2 border-white/10 rounded-[15px] flex flex-col items-center text-center shadow-card relative"
    >
      <motion.div
        style={{ maskImage, opacity: borderOpacity }}
        className="absolute inset-0 -m-px border border-cyberBlue rounded-[15px]"
      ></motion.div>
      <div className="">
        <DotLottieReact
          dotLottieRefCallback={dotLottieRefCallback}
          src={icon}
          autoplay={false}
        />
      </div>
      <h2 className="font-bold text-[#B0B3B8] text-lg mt-2">{title}</h2>
      <p className="text-[#A1A5AB] max-w-[200px] mt-4">{paragraph}</p>
    </motion.div>
  );
};

export default AboutUs;
