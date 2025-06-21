import { Shield, BarChart3, Brain, ArrowRight } from "lucide-react";

export const programs = [
  {
    icon: Shield,
    title: "🛡️ Cybersecurity",
    subtitle: "Defend, detect, and outsmart threats.",
    skills: [
      "Security Operations & SIEM (Splunk, Sentinel, QRadar)",
      "Network & Endpoint Protection",
      "Ethical Hacking & Vulnerability Assessment",
      "Cloud & Identity Security (Azure, AWS)",
      "Malware Analysis, Threat Hunting, GRC & More",
    ],
    jobs: [
      "SOC Analyst",
      "Cybersecurity Analyst",
      "Ethical Hacker",
      "GRC Associate",
    ],
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: BarChart3,
    title: "📊 Data Analytics",
    subtitle: "Tell stories with data. Drive decisions with insight.",
    skills: [
      "Excel, SQL, and Data Modeling",
      "Power BI & Google Data Studio",
      "Python for Analytics (Pandas, NumPy, Matplotlib)",
      "Dashboard Design & Data Storytelling",
      "Introduction to Machine Learning",
    ],
    jobs: [
      "Data Analyst",
      "Business Analyst",
      "BI Developer",
      "Junior Data Scientist",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "🤖 AI in Cybersecurity",
    subtitle: "Smarter security. Predictive defense. Welcome to the future.",
    skills: [
      "AI Fundamentals & Machine Learning Models",
      "Threat Prediction with ML",
      "AI in SIEM & Incident Response",
      "Adversarial AI & Red Team Simulation",
      "Building Intelligent Security Tools",
    ],
    jobs: [
      "Cyber AI Specialist",
      "Security Data Scientist",
      "Threat Intel Analyst",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
];
