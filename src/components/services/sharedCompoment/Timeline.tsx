import { useState, useEffect } from "react";
import { Search, Map, Shield, Bug, Zap, FileText } from "lucide-react";
import TimelineItem from "./TimelineItem";

interface ApproachItem {
  id: number;
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  details: string[];
}

const approachData: ApproachItem[] = [
  {
    id: 1,
    step: "Step 1",
    title: "Scoping & Risk Mapping",
    description: "Understand your environment, industry, and threat landscape.",
    icon: <Map className="w-6 h-6" />,
    category: "Planning",
    details: [
      "Define assets, attack surfaces, and risk tolerance",
      "Identify critical systems and data flows",
      "Establish testing boundaries and rules of engagement",
    ],
  },
  {
    id: 2,
    step: "Step 2",
    title: "Vulnerability Scanning",
    description:
      "Use industry-grade tools to identify misconfigurations, outdated software, and exploitable flaws.",
    icon: <Search className="w-6 h-6" />,
    category: "Automation",
    details: [
      "Comprehensive system scanning",
      "Identification of known vulnerabilities",
      "Configuration and patch level analysis",
    ],
  },
  {
    id: 3,
    step: "Step 3",
    title: "Manual Exploitation & Advanced Techniques",
    description:
      "Simulate real-world attacker behavior using manual techniques.",
    icon: <Bug className="w-6 h-6" />,
    category: "Expertise",
    details: [
      "Leverage custom scripts and exploit chains",
      "Privilege escalation and lateral movement",
      "Business logic and chained vulnerability testing",
    ],
  },
  {
    id: 4,
    step: "Step 4",
    title: "Automated Penetration Testing",
    description:
      "Deploy scalable tools for continuous scanning and exploitation simulations.",
    icon: <Zap className="w-6 h-6" />,
    category: "Efficiency",
    details: [
      "Ideal for rapid DevSecOps cycles",
      "Frequent validation of security controls",
      "Continuous security monitoring",
    ],
  },
  {
    id: 5,
    step: "Step 5",
    title: "Penetration Testing as a Service (PTaaS)",
    description:
      "Web-based platform for on-demand security testing and collaboration.",
    icon: <Shield className="w-6 h-6" />,
    category: "Service",
    details: [
      "Initiate tests and track findings in real-time",
      "Download comprehensive reports anytime",
      "Collaborate directly with security experts",
    ],
  },
  {
    id: 6,
    step: "Step 6",
    title: "Reporting & Executive Summaries",
    description:
      "Deliver clear, actionable reports with risk ratings and remediation guidelines.",
    icon: <FileText className="w-6 h-6" />,
    category: "Delivery",
    details: [
      "Technical walkthroughs for IT teams",
      "Executive summaries for stakeholders",
      "Prioritized remediation roadmap",
    ],
  },
];

const Timeline = () => {
  return (
    <div className="relative max-w-7xl mx-auto my-[10rem]">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-indigo-400"></div>

      <div className="space-y-12">
        {approachData.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
