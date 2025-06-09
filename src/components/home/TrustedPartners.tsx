import React from "react";
import { BRAND_LOGOS } from "../../constants";
import { motion } from "motion/react";

const TrustedPartners = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="">
        <div className="flex items-center gap-5">
          {/* header */}
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>

          {/* logos */}
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{
                translateX: "-50%",
              }}
              animate={{
                translateX: "0",
              }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 "
            >
              {BRAND_LOGOS.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
