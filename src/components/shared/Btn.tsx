import React from "react";

interface Props {
  children: React.ReactNode;
  color?: string;
}

export const Btn = ({ children, color = "white" }: Props) => {
  return (
    <button
      className={`max-w-[200px] py-3 px-6 rounded-full border text-sm font-bold cursor-pointer text-${color} w-full border-${color}/30 bg-transparent`}
    >
      {children}
    </button>
  );
};
