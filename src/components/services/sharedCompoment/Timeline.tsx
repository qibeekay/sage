import { useState, useEffect } from "react";
import { Search, Map, Shield, Bug, Zap, FileText } from "lucide-react";
import TimelineItem from "./TimelineItem";
import type { ApproachItem } from "../../../constants/approach";

interface TimelineProps {
  items: ApproachItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative max-w-7xl mx-auto my-[10rem]">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-indigo-400"></div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
