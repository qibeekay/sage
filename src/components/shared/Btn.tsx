import React from "react";

export const Btn = ({ children }: any) => {
  return (
    <button
      className={`max-w-[200px] py-3 px-6 rounded-full border text-sm font-bold cursor-pointer text-white w-full border-white/30 bg-transparent`}
    >
      {children}
    </button>
  );
};
