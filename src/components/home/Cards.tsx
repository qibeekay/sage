import React from "react";
import { motion } from "motion/react";

const Cards = () => {
  return (
    <div className="mt-[50vh]">
      <div className="h-screen flex items-center justify-center top-0 sticky">
        <div className="bg-red-500 w-[1000px] h-[500px] relative top-[10%]"></div>
      </div>
      <div className="h-screen flex items-center justify-center top-0 sticky">
        <div className="bg-purple-500 w-[1000px] h-[500px] relative top-[10%]"></div>
      </div>
      <div className="h-screen flex items-center justify-center top-0 sticky">
        <div className="bg-cyan-500 w-[1000px] h-[500px] relative top-[10%]"></div>
      </div>
    </div>
  );
};

export default Cards;
