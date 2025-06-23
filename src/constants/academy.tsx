import {
  Shield,
  BarChart3,
  Brain,
  ArrowRight,
  Clock,
  Laptop,
  Calendar,
  Award,
  Star,
  UserCheck,
  MessageSquare,
} from "lucide-react";
import img from "../assets/illustrations/illust2.png";
import img1 from "../assets/illustrations/illust4.png";
import img2 from "../assets/illustrations/new.png";
import img3 from "../assets/illustrations/ca1.png";

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

export const details = [
  {
    title: "IT Professionals ",
    desc: "Upskilling for promotion or pivot",
    gradient: "from-green-400 to-emerald-600",
    image: img2,
  },

  {
    title: "Students & Graduates ",
    desc: "Eager to specialize and stand out",
    image: img1,
    gradient: "from-orange-400 to-pink-500",
  },
  {
    title: "Career Changers",
    desc: "Ready to break into tech",
    image: img,
    gradient: "from-purple-500 to-indigo-600",
  },

  {
    title: "Entrepreneurs & Freelancers ",
    desc: "Building marketable skills for 2025 and beyond",
    image: img3,
    gradient: "from-purple-600 to-pink-600",
  },
];

export const experiences = [
  {
    feature: "Duration",
    description: "4 Months Intensive",
    icon: Clock,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "Format",
    description: "100% Online + Live Mentorship",
    icon: Laptop,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "Schedule",
    description: "Weeknights & Weekends (Flexible)",
    icon: Calendar,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Assessment",
    description: "Final Capstone + Real-World Labs",
    icon: Award,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Access",
    description: "Lifetime to Materials, Updates & Community",
    icon: Star,
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    feature: "Entry",
    description: "By Application + Interview",
    icon: UserCheck,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Support",
    description: "Career Coaching + Mentorship + Job Readiness",
    icon: MessageSquare,
    gradient: "from-red-500 to-pink-500",
  },
];

export const differences = [
  {
    title: "Built by Practicing Experts",
    description: "We’re not just teachers, we’re in the trenches daily.",
  },
  {
    title: "Real-World Tools",
    description:
      "Train on Splunk, Sentinel, Burp Suite, Power BI, Python, etc.",
  },
  {
    title: "Job-Focused Design",
    description: "Everything we teach connects to a real job role",
  },
  {
    title: "Capstone Portfolio Projects",
    description: "Show recruiters you’re not just certified — you’re skilled.",
  },
  {
    title: "Soft Skills + Hard Skills",
    description: "Interviews. Communication. Presenting your value",
  },
  {
    title: "Community-Driven",
    description:
      "Access our alumni network, mentors & career support for life.",
  },
];
