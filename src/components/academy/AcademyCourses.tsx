import { ArrowRight, MoveRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { programs } from "../../constants/academy";

const AcademyCourses = () => {
  const scrollText = [
    "Next Intake Starts: September 2025",
    "Application Deadline: August 20, 2025",
    "Limited slots. Only 25 students accepted per cohort.",
  ];

  return (
    <section className="pt-[10rem]">
      <div>
        <div className="pb-5">
          <h1 className="text-xl xs:text-3xl md:text-5xl mt-5 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent py-5 flex flex-col">
            What You'll Learn
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 group rounded-2xl"
            >
              <div className="p-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${program.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-300 mb-6 font-medium">
                  {program.subtitle}
                </p>
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">
                    What You'll Learn:
                  </h4>
                  <ul className="space-y-2">
                    {program.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 text-sm flex items-start"
                      >
                        <MoveRight className="w-4 h-4 mt-0.5 mr-2 text-cyan-400 flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">
                    Career Paths:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {program.jobs.map((job, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${program.gradient} text-white`}
                      >
                        {job}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Scrolling Text with Reflection */}
        <div className="pt-10 rotate-[1deg] group relative">
          {/* Original Scrolling Container */}
          <div className="border-t-2 border-b-2 border-indigo-500 flex flex-1 overflow-hidden py-7 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "0%" }}
              animate={{ translateX: "-50%" }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex flex-none gap-14"
            >
              {[...scrollText, ...scrollText].map((text, index) => (
                <div key={index} className="flex items-center gap-14">
                  <Sparkles className="w-5 h-5 text-white flex-shrink-0" />
                  <p className="text-white text-lg font-bold">{text}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Reflection Container */}
          <div className="border-t border-b border-indigo-500 flex flex-1 overflow-hidden py-7 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] absolute top-full left-0 w-full opacity-10 scale-y-[-1] group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0%" }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex flex-none gap-14"
            >
              {[...scrollText, ...scrollText].map((text, index) => (
                <div key={index} className="flex items-center gap-14">
                  <Sparkles className="w-5 h-5 text-white flex-shrink-0" />
                  <p className="text-white text-lg font-bold">{text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyCourses;
