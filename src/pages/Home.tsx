import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/shared/Navbar";
import Hero from "../components/home/Hero";
import TrustedPartners from "../components/home/TrustedPartners";
import AboutUs from "../components/home/AboutUs";
import Services from "../components/home/Services";
import Cards from "../components/home/Cards";
import CaseStudies from "../components/home/CaseStudies";
import Blog from "../components/home/Blog";

const Home = () => {
  const [bgColor, setBgColor] = useState("#080808");

  return (
    <div className="text-neutral-300 antialiased">
      <Navbar />
      <motion.div>
        <Hero />
        <TrustedPartners />
        <AboutUs />
        <motion.div
          animate={{ backgroundColor: bgColor }}
          transition={{ duration: 0.4 }}
          style={{ minHeight: "100vh" }}
        >
          <Services onVisible={setBgColor} />
          <CaseStudies onVisible={setBgColor} />
        </motion.div>
        <Blog />
      </motion.div>
    </div>
  );
};

export default Home;
