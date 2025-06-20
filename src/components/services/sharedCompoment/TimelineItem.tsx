import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ApproachItem {
  id: number;
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  details: string[];
}

interface TimelineItemProps {
  item: ApproachItem;
  index: number;
}

const colorPalette = [
  { id: 1, gradient: "from-green-400 to-emerald-500", text: "text-green-400" },
  { id: 2, gradient: "from-blue-400 to-cyan-500", text: "text-blue-400" },
  { id: 3, gradient: "from-purple-400 to-violet-500", text: "text-purple-400" },
  { id: 4, gradient: "from-orange-400 to-red-500", text: "text-orange-400" },
  { id: 5, gradient: "from-pink-400 to-rose-500", text: "text-pink-400" },
  { id: 6, gradient: "from-indigo-400 to-blue-500", text: "text-indigo-400" },
  { id: 7, gradient: "from-teal-400 to-cyan-600", text: "text-teal-400" },
];

const getCategoryColor = (item: ApproachItem) => {
  const color = colorPalette.find((entry) => entry.id === item.id);
  return color ? color.gradient : "from-gray-400 to-gray-500";
};

const getCategoryTextColor = (item: ApproachItem) => {
  const color = colorPalette.find((entry) => entry.id === item.id);
  return color ? color.text : "text-gray-400";
};

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: isEven ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: isEven ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2,
      },
    },
  };

  const detailItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.05,
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`relative flex items-center ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      data-id={item.id}
    >
      {/* Content Card */}
      <motion.div
        variants={cardVariants}
        className={`flex-1 ml-10 md:ml-0 ${isEven ? "md:pr-8" : "md:pl-8"}`}
      >
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-[#141414] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-[#141414] group"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ type: "spring", delay: 0.3 }}
              className={`p-2 rounded-lg bg-gradient-to-r text-white shadow-md ${getCategoryColor(
                item
              )}`}
            >
              {item.icon}
            </motion.div>
            <div>
              <span className="text-sm font-medium text-ashGray uppercase tracking-wide">
                {item.step}
              </span>
              <h3 className={`text-xl font-bold ${getCategoryTextColor(item)}`}>
                {item.title}
              </h3>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-ashGray mb-4 leading-relaxed"
          >
            {item.description}
          </motion.p>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-ashGray mb-2">
              Key Activities:
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.details.map((detail, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={detailItemVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {detail}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Timeline Node */}
      <motion.div className="absolute left-2.5 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
        <div
          className={`w-4 h-4 rounded-full border-4 border-white shadow-lg bg-gradient-to-r ${getCategoryColor(
            item
          )}`}
        ></div>
      </motion.div>

      {/* Category Badge */}
      <motion.div
        variants={categoryVariants}
        className={`hidden md:flex flex-1 items-center ${
          isEven ? "justify-start pl-8" : "justify-end pr-8"
        }`}
      >
        <div
          className={`bg-gradient-to-r text-white px-4 py-2 rounded-full shadow-lg font-bold text-lg ${getCategoryColor(
            item
          )}`}
        >
          {item.category}
        </div>
      </motion.div>

      {/* Mobile Category */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.1 }}
        className="md:hidden absolute left-20 -top-3"
      >
        <div
          className={`bg-gradient-to-r text-white px-3 py-1 rounded-full shadow-md font-semibold text-sm ${getCategoryColor(
            item
          )}`}
        >
          {item.step}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;
