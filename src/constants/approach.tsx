import {
  Map,
  Search,
  Bug,
  Zap,
  Shield,
  FileText,
  Eye,
  Key,
  MoveRight,
  Wifi,
  Target,
  AlertOctagon,
  Users,
  UserCog,
  AlarmSmoke,
  Camera,
  BookOpen,
  Monitor,
  Activity,
  AlertTriangle,
  HardDrive,
  Layers,
  Crosshair,
  Globe,
  ClipboardList,
  Folder,
  Smartphone,
  Laptop,
  Minimize2,
  Bell,
  Share2,
  Trash2,
  User,
  Lock,
  Cloud,
  Settings,
  Container,
  Network,
  Server,
  Mail,
  Cpu,
  Database,
  ShieldCheck,
  ListChecks,
  Scale,
  Briefcase,
  Clock,
  MessageSquare,
  Flag,
  HelpCircle,
  PieChart,
} from "lucide-react";
import { GiLockPicking } from "react-icons/gi";

export interface ApproachItem {
  id: number;
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  details: string[];
}

export const pentestApproach: ApproachItem[] = [
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

export const redTeamApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Step 1",
    title: "Reconnaissance & Threat Modeling",
    description: "Deep-dive OSINT to map your digital and human attack surface",
    icon: <Eye className="w-6 h-6" />,
    category: "Intelligence",
    details: [
      "Build a threat profile based on real adversaries targeting your sector",
      "Identify digital footprint and exposed assets",
      "Analyze human factors and social engineering opportunities",
    ],
  },
  {
    id: 2,
    step: "Step 2",
    title: "Initial Access",
    description: "Gain foothold access using various techniques",
    icon: <Key className="w-6 h-6" />,
    category: "Infiltration",
    details: [
      "Phishing simulations and credential stuffing",
      "Vulnerability exploitation",
      "Physical intrusion attempts",
    ],
  },
  {
    id: 3,
    step: "Step 3",
    title: "Lateral Movement & Persistence",
    description: "Expand access within the environment",
    icon: <MoveRight className="w-6 h-6" />,
    category: "Expansion",
    details: [
      "Exploit trust relationships and misconfigured privileges",
      "Escalate access through weak segmentation",
      "Establish persistence to simulate long-term dwell time",
    ],
  },
  {
    id: 4,
    step: "Step 4",
    title: "Command & Control (C2)",
    description: "Simulate adversary communication channels",
    icon: <Wifi className="w-6 h-6" />,
    category: "Control",
    details: [
      "Establish encrypted communication channels",
      "Simulate exfiltration and remote access",
      "Test payload delivery mechanisms",
    ],
  },
  {
    id: 5,
    step: "Step 5",
    title: "Objective Execution",
    description: "Simulate real attacker objectives",
    icon: <Target className="w-6 h-6" />,
    category: "Execution",
    details: [
      "Data exfiltration simulations",
      "Ransomware deployment testing",
      "Privilege abuse scenarios based on 'crown jewels'",
    ],
  },
  {
    id: 6,
    step: "Step 6",
    title: "Detection & Response Evaluation",
    description: "Test security monitoring capabilities",
    icon: <AlertOctagon className="w-6 h-6" />,
    category: "Evaluation",
    details: [
      "Test SIEM and EDR effectiveness",
      "Evaluate SOC team response",
      "Validate IR playbooks without prior warning",
    ],
  },
  {
    id: 7,
    step: "Step 7",
    title: "Debrief & Purple Team Workshop",
    description: "Collaborative improvement session",
    icon: <Users className="w-6 h-6" />,
    category: "Improvement",
    details: [
      "Joint walkthrough with Blue Team",
      "Align visibility gaps",
      "Co-design better detection strategies",
    ],
  },
];

export const physicalSecurityApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Step 1",
    title: "Reconnaissance & Surveillance",
    description:
      "Perform OSINT to map your physical premises, vendors, employee behaviors, and weak points",
    icon: <Eye className="w-6 h-6" />,
    category: "Intelligence Gathering",
    details: [
      "Stakeout target entry points and tailgating opportunities",
      "Identify camera blind spots and access control setups",
      "Analyze employee behaviors and security routines",
    ],
  },
  {
    id: 2,
    step: "Step 2",
    title: "Social Engineering & Pretexting",
    description: "Simulate various social engineering scenarios",
    icon: <UserCog className="w-6 h-6" />,
    category: "Human Exploitation",
    details: [
      "Fake IT technician entry attempts",
      "Vendor impersonation scenarios",
      "Emergency access requests simulation",
      "Badge cloning with RFID/NFC tools",
    ],
  },
  {
    id: 3,
    step: "Step 3",
    title: "Physical Intrusion Attempts",
    description: "Attempt unauthorized entry using various methods",
    icon: <GiLockPicking className="w-6 h-6" />,
    category: "Access Bypass",
    details: [
      "Lock picking and bypass tools demonstration",
      "Tailgating and piggybacking attempts",
      "Exploiting maintenance access, fire exits, or loading bays",
    ],
  },
  {
    id: 4,
    step: "Step 4",
    title: "Objective-based Operations",
    description: "Test access to sensitive areas once inside",
    icon: <Target className="w-6 h-6" />,
    category: "Mission Execution",
    details: [
      "Attempt access to server rooms and data centers",
      "Test access to HR or finance archives",
      "Check workstation security and unattended credentials",
      "Assess physical plant systems (HVAC, power, cameras)",
    ],
  },
  {
    id: 5,
    step: "Step 5",
    title: "Detection & Response Evaluation",
    description: "Measure security team response effectiveness",
    icon: <AlarmSmoke className="w-6 h-6" />,
    category: "Security Assessment",
    details: [
      "Time how long detection takes for suspicious activities",
      "Evaluate response to unbadged individuals",
      "Assess alert escalation procedures",
    ],
  },
  {
    id: 6,
    step: "Step 6",
    title: "Evidence Collection & Reporting",
    description: "Document security breaches and missed detections",
    icon: <Camera className="w-6 h-6" />,
    category: "Reporting",
    details: [
      "Provide photo/video evidence of unauthorized access",
      "Document all security breaches found",
      "Highlight missed detections and vulnerabilities",
      "Include timestamps and location data for all findings",
    ],
  },
];

export const continuousMonitoringApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Phase 1",
    title: "Threat Monitoring & Event Collection",
    description: "Aggregate security data from across your environment",
    icon: <Monitor className="w-6 h-6" />,
    category: "Data Collection",
    details: [
      "Collect logs, telemetry, and network traffic from all endpoints",
      "Monitor servers, firewalls, cloud, and SaaS platforms",
      "Leverage next-gen SIEM, XDR, and UEBA tools",
    ],
  },
  {
    id: 2,
    step: "Phase 2",
    title: "Real-Time Detection & Threat Intelligence",
    description: "Identify active threats using global intelligence",
    icon: <Activity className="w-6 h-6" />,
    category: "Threat Detection",
    details: [
      "Correlate IOCs and TTPs with global threat feeds",
      "Identify malware, ransomware, and lateral movement",
      "Detect privilege abuse, insider threats, and phishing",
    ],
  },
  {
    id: 3,
    step: "Phase 3",
    title: "Alert Triage & Prioritization",
    description: "Focus on verified threats that matter",
    icon: <AlertTriangle className="w-6 h-6" />,
    category: "Incident Management",
    details: [
      "Eliminate false positives using behavioral analytics",
      "Apply automated correlation rules",
      "Prioritize based on actual risk to the organization",
    ],
  },
  {
    id: 4,
    step: "Phase 4",
    title: "Incident Response & Containment",
    description: "Immediate action to limit damage",
    icon: <Shield className="w-6 h-6" />,
    category: "Response",
    details: [
      "Execute rapid response protocols",
      "Account isolation and endpoint quarantine",
      "Cloud access revocation when needed",
      "Immediate notification with actionable guidance",
    ],
  },
  {
    id: 5,
    step: "Phase 5",
    title: "Threat Hunting & Forensics",
    description: "Proactive search for hidden threats",
    icon: <Search className="w-6 h-6" />,
    category: "Proactive Defense",
    details: [
      "Hunt for stealthy adversaries and compromises",
      "Perform root cause analysis",
      "Reconstruct full attack chains",
    ],
  },
  {
    id: 6,
    step: "Phase 6",
    title: "Reporting & Compliance Support",
    description: "Comprehensive documentation and compliance",
    icon: <FileText className="w-6 h-6" />,
    category: "Reporting",
    details: [
      "Daily/weekly dashboards and executive summaries",
      "Detailed incident reports",
      "Support for ISO 27001, NIST, HIPAA, PCI DSS, GDPR",
    ],
  },
];

export const endpointDefenseApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Component 1",
    title: "Continuous Monitoring",
    description: "Comprehensive endpoint activity tracking",
    icon: <HardDrive className="w-6 h-6" />,
    category: "Visibility",
    details: [
      "Monitor process creation and file access",
      "Track registry edits and network connections",
      "Detect lateral movement and credential dumping",
      "Identify data exfiltration attempts",
    ],
  },
  {
    id: 2,
    step: "Component 2",
    title: "Threat Detection & Behavioral Analysis",
    description: "AI-driven detection of sophisticated attacks",
    icon: <Eye className="w-6 h-6" />,
    category: "Detection",
    details: [
      "Use AI/ML to detect suspicious patterns",
      "Identify zero-day exploits and multi-stage attacks",
      "Detect malware, ransomware, and phishing payloads",
      "Surface insider threats",
    ],
  },
  {
    id: 3,
    step: "Component 3",
    title: "Real-Time Response & Containment",
    description: "Instant action to stop threats",
    icon: <Zap className="w-6 h-6" />,
    category: "Response",
    details: [
      "Automatically isolate compromised endpoints",
      "Kill malicious processes immediately",
      "Quarantine suspicious files",
      "Revoke access instantly when needed",
    ],
  },
  {
    id: 4,
    step: "Component 4",
    title: "Forensics & Root Cause Analysis",
    description: "Understand the full attack story",
    icon: <Search className="w-6 h-6" />,
    category: "Investigation",
    details: [
      "Trace complete attack paths",
      "Visualize attack timelines",
      "Identify entry points and spread",
      "Determine attacker actions",
    ],
  },
  {
    id: 5,
    step: "Component 5",
    title: "Threat Intelligence Integration",
    description: "Context-aware protection",
    icon: <Layers className="w-6 h-6" />,
    category: "Intelligence",
    details: [
      "Enrich with global threat data",
      "Incorporate malware signatures",
      "Apply APT group TTPs",
      "Prioritize with contextual insight",
    ],
  },
];

export const threatIntelligenceApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Methodology",
    title: "Threat Hunting Framework",
    description: "Proactive identification of hidden threats",
    icon: <Crosshair className="w-6 h-6" />,
    category: "Proactive Defense",
    details: [
      "Hypothesis-Driven Hunting (MITRE ATT&CK)",
      "IOC & IOA Matching",
      "Threat Pattern and Behavior Analysis",
      "YARA and Sigma Rule-Based Analysis",
      "Memory & Endpoint Forensics",
      "Network Traffic Anomaly Detection",
    ],
  },
  {
    id: 2,
    step: "Sources",
    title: "Threat Intelligence Gathering",
    description: "Comprehensive threat data collection",
    icon: <Globe className="w-6 h-6" />,
    category: "Intelligence",
    details: [
      "OSINT and proprietary threat feeds",
      "Dark web monitoring",
      "Deep web forums and marketplaces",
      "Nation-state and APT tracking",
      "Real-time telemetry from global sensors",
      "Third-party intelligence alliances and ISACs",
    ],
  },
];

export const incidentResponseMethodology: ApproachItem[] = [
  {
    id: 1,
    step: "Stage 1",
    title: "Preparation & IR Readiness",
    description: "Build incident response capabilities",
    icon: <ClipboardList className="w-6 h-6" />,
    category: "Readiness",
    details: [
      "Develop IR playbooks and procedures",
      "Conduct tabletop exercises",
      "Deploy EDR/XDR/SIEM solutions",
      "Baseline assets and threat models",
    ],
  },
  {
    id: 2,
    step: "Stage 2",
    title: "Detection & Triage",
    description: "Identify and assess potential incidents",
    icon: <AlertTriangle className="w-6 h-6" />,
    category: "Identification",
    details: [
      "Real-time alerting via security tools",
      "Confirm severity and scope",
      "Classify incident type (malware, phishing, etc.)",
      "Correlate with known IOCs/TTPs",
    ],
  },
  {
    id: 3,
    step: "Stage 3",
    title: "Containment",
    description: "Limit the spread of compromise",
    icon: <Shield className="w-6 h-6" />,
    category: "Response",
    details: [
      "Short-term and long-term containment strategies",
      "Isolate compromised systems",
      "Disable malicious accounts and access",
      "Identify persistence mechanisms",
    ],
  },
  {
    id: 4,
    step: "Stage 4",
    title: "Eradication",
    description: "Remove all malicious presence",
    icon: <Zap className="w-6 h-6" />,
    category: "Remediation",
    details: [
      "Remove malware and unauthorized access",
      "Patch vulnerabilities",
      "Harden configurations",
      "Rebuild affected systems when necessary",
    ],
  },
  {
    id: 5,
    step: "Stage 5",
    title: "Recovery & Monitoring",
    description: "Restore operations safely",
    icon: <Monitor className="w-6 h-6" />,
    category: "Restoration",
    details: [
      "Restore from clean backups",
      "Monitor for signs of reinfection",
      "Validate business operations",
      "Ensure communication channels are secure",
    ],
  },
  {
    id: 6,
    step: "Stage 6",
    title: "Digital Forensics & RCA",
    description: "Understand the attack thoroughly",
    icon: <Search className="w-6 h-6" />,
    category: "Investigation",
    details: [
      "Collect disk, memory, and logs",
      "Reconstruct attack timelines",
      "Analyze data exfiltration",
      "Create legal-grade forensic reports",
    ],
  },
  {
    id: 7,
    step: "Stage 7",
    title: "Reporting & Lessons Learned",
    description: "Improve future response",
    icon: <BookOpen className="w-6 h-6" />,
    category: "Improvement",
    details: [
      "Detailed incident reports",
      "Executive briefings",
      "Stakeholder debriefs",
      "Update IR plans based on findings",
    ],
  },
];

// Cloud Threat Monitoring
export const cloudThreatMonitoringApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Phase 1",
    title: "Discovery & Asset Inventory",
    description: "Identify all cloud assets and shadow IT",
    icon: <Cloud className="w-6 h-6" />,
    category: "Visibility",
    details: [
      "Identify all cloud assets — VMs, storage buckets, databases, APIs, containers",
      "Detect shadow IT, abandoned resources, and excessive permissions",
    ],
  },
  {
    id: 2,
    step: "Phase 2",
    title: "Configuration & Posture Assessment (CSPM)",
    description: "Continuous cloud security validation",
    icon: <Search className="w-6 h-6" />,
    category: "CSPM",
    details: [
      "Continuously scan for misconfigurations, open ports, public S3 buckets, unsecured keys",
      "Validate against benchmarks (CIS, NIST, CSA, ISO 27017)",
    ],
  },
  {
    id: 3,
    step: "Phase 3",
    title: "Identity & Access Monitoring",
    description: "Monitor IAM roles and access patterns",
    icon: <User className="w-6 h-6" />,
    category: "IAM",
    details: [
      "Monitor IAM roles, service principals, and conditional access policies",
      "Detect privilege escalations, unusual access patterns, and excessive permissions",
    ],
  },
  {
    id: 4,
    step: "Phase 4",
    title: "Real-Time Threat Detection",
    description: "Analyze logs and events for threats",
    icon: <Activity className="w-6 h-6" />,
    category: "Detection",
    details: [
      "Analyze logs, events, and flows using SIEM, UBA, and behavioral baselines",
      "Identify malware, lateral movement, exfiltration attempts, and rogue admin actions",
    ],
  },
  {
    id: 5,
    step: "Phase 5",
    title: "Container & Serverless Monitoring (CWPP)",
    description: "Secure containerized environments",
    icon: <Container className="w-6 h-6" />,
    category: "Workload Protection",
    details: [
      "Scan containers and serverless functions for vulnerabilities, runtime threats, and drift",
      "Monitor Kubernetes clusters for misconfigurations and attacks",
    ],
  },
  {
    id: 6,
    step: "Phase 6",
    title: "Automated Response & SOAR Integration",
    description: "Orchestrate security responses",
    icon: <Zap className="w-6 h-6" />,
    category: "Response",
    details: [
      "Use playbooks to auto-isolate workloads, revoke access, and raise tickets",
      "Integrate with SOAR platforms for orchestrated response across your ecosystem",
    ],
  },
  {
    id: 7,
    step: "Phase 7",
    title: "Compliance & Reporting",
    description: "Generate audit-ready reports",
    icon: <FileText className="w-6 h-6" />,
    category: "Governance",
    details: [
      "Generate real-time dashboards, compliance maps, and audit-ready reports",
      "Track alignment with standards like NDPR, GDPR, HIPAA, PCI-DSS, ISO 27001",
    ],
  },
];

// Risk Assessment Methodology
export const riskAssessmentMethodology: ApproachItem[] = [
  {
    id: 1,
    step: "Stage 1",
    title: "Business & Threat Landscape Understanding",
    description: "Identify critical assets and threats",
    icon: <Map className="w-6 h-6" />,
    category: "Discovery",
    details: [
      "Identify critical assets, operational dependencies, and regulatory requirements",
      "Map industry-specific threats, emerging risks, and attack vectors",
    ],
  },
  {
    id: 2,
    step: "Stage 2",
    title: "Asset & Data Discovery",
    description: "Inventory digital assets and data",
    icon: <Database className="w-6 h-6" />,
    category: "Inventory",
    details: [
      "Inventory digital assets (applications, endpoints, cloud, IoT, data)",
      "Classify data by sensitivity, compliance needs, and exposure risk",
    ],
  },
  {
    id: 3,
    step: "Stage 3",
    title: "Vulnerability & Gap Analysis",
    description: "Assess security gaps",
    icon: <ShieldCheck className="w-6 h-6" />,
    category: "Assessment",
    details: [
      "Run vulnerability scans across network, cloud, and endpoint layers",
      "Assess people, processes, and technologies against control baselines",
    ],
  },
  {
    id: 4,
    step: "Stage 4",
    title: "Risk Scoring & Heat Mapping",
    description: "Prioritize risks effectively",
    icon: <ListChecks className="w-6 h-6" />,
    category: "Analysis",
    details: [
      "Use qualitative and quantitative scoring (e.g., CVSS, FAIR) to measure risk",
      "Prioritize risks based on likelihood, impact, exploitability, and detectability",
    ],
  },
  {
    id: 5,
    step: "Stage 5",
    title: "Compliance Readiness Check",
    description: "Assess regulatory alignment",
    icon: <Scale className="w-6 h-6" />,
    category: "Compliance",
    details: [
      "Assess alignment with standards like ISO 27001, NIST 800-53, NDPR, HIPAA, PCI-DSS",
      "Identify control deficiencies, compensating controls, and remediation paths",
    ],
  },
  {
    id: 6,
    step: "Stage 6",
    title: "Executive Reporting & Action Plan",
    description: "Deliver actionable insights",
    icon: <Briefcase className="w-6 h-6" />,
    category: "Reporting",
    details: [
      "Deliver board-level risk summaries, heatmaps, and threat narratives",
      "Provide technical deep dives, remediation priorities, and improvement timelines",
    ],
  },
];

// Compliance & Audit Readiness
export const complianceAuditApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Step 1",
    title: "Framework Selection & Scoping",
    description: "Identify relevant compliance standards",
    icon: <ClipboardList className="w-6 h-6" />,
    category: "Planning",
    details: [
      "Identify the relevant compliance standard(s) based on your industry and data type",
      "Define assessment scope: business units, cloud environments, vendors, and assets",
    ],
  },
  {
    id: 2,
    step: "Step 2",
    title: "Gap Analysis & Control Review",
    description: "Evaluate existing controls",
    icon: <Search className="w-6 h-6" />,
    category: "Assessment",
    details: [
      "Evaluate existing policies, procedures, and controls against the selected framework",
      "Identify technical, procedural, and documentation gaps",
    ],
  },
  {
    id: 3,
    step: "Step 3",
    title: "Remediation Planning & Advisory",
    description: "Develop improvement roadmap",
    icon: <Layers className="w-6 h-6" />,
    category: "Remediation",
    details: [
      "Develop a prioritized roadmap with timelines and milestones",
      "Provide advisory on how to implement controls and create missing documentation",
    ],
  },
  {
    id: 4,
    step: "Step 4",
    title: "Control Implementation Support",
    description: "Assist with security controls deployment",
    icon: <Settings className="w-6 h-6" />,
    category: "Implementation",
    details: [
      "Assist with deployment of security controls — technical and administrative",
      "Offer templates, training, and coaching for compliance teams",
    ],
  },
  {
    id: 5,
    step: "Step 5",
    title: "Internal Audit & Readiness Review",
    description: "Conduct simulated audits",
    icon: <AlertTriangle className="w-6 h-6" />,
    category: "Validation",
    details: [
      "Conduct simulated audits with evidence reviews, interviews, and artifact validation",
      "Score maturity, readiness level, and audit preparedness",
    ],
  },
  {
    id: 6,
    step: "Step 6",
    title: "External Audit Preparation",
    description: "Prepare for official audits",
    icon: <Shield className="w-6 h-6" />,
    category: "Preparation",
    details: [
      "Prepare documentation packets and walkthroughs",
      "Coordinate with auditors and stakeholders",
    ],
  },
];

// Policy Development
export const policyDevelopmentApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Phase 1",
    title: "Policy Needs Assessment & Gap Analysis",
    description: "Identify documentation gaps",
    icon: <FileText className="w-6 h-6" />,
    category: "Analysis",
    details: [
      "Review existing documentation (if any)",
      "Identify gaps against compliance frameworks and best practices",
      "Conduct stakeholder interviews to understand operational reality",
    ],
  },
  {
    id: 2,
    step: "Phase 2",
    title: "Framework Alignment",
    description: "Map policy requirements",
    icon: <BookOpen className="w-6 h-6" />,
    category: "Mapping",
    details: [
      "Map policy requirements to relevant standards: ISO 27001, NIST 800-53/CSF, NDPR, GDPR, HIPAA, etc.",
      "Determine mandatory, recommended, and optional policies based on risk and business need",
    ],
  },
  {
    id: 3,
    step: "Phase 3",
    title: "Custom Policy Development",
    description: "Create tailored policies",
    icon: <Settings className="w-6 h-6" />,
    category: "Development",
    details: [
      "Create customized policies, procedures, and standards specific to your business context",
      "Ensure clarity, consistency, and enforceability across all documentation",
    ],
  },
  {
    id: 4,
    step: "Phase 4",
    title: "Review & Stakeholder Validation",
    description: "Collaborate for acceptance",
    icon: <Users className="w-6 h-6" />,
    category: "Validation",
    details: [
      "Collaborate with internal departments for review and acceptance",
      "Align policies with HR, legal, IT, compliance, and executive leadership",
    ],
  },
  {
    id: 5,
    step: "Phase 5",
    title: "Awareness & Training Support",
    description: "Ensure policy adoption",
    icon: <MessageSquare className="w-6 h-6" />,
    category: "Training",
    details: [
      "Develop policy rollout strategies",
      "Create training materials and deliver workshops to ensure adoption",
    ],
  },
  {
    id: 6,
    step: "Phase 6",
    title: "Governance & Maintenance Planning",
    description: "Establish review cycles",
    icon: <Clock className="w-6 h-6" />,
    category: "Maintenance",
    details: [
      "Establish review cycles, ownership responsibilities, and update protocols",
      "Embed policies into risk management, compliance, and HR workflows",
    ],
  },
];

// Privacy Consulting
export const privacyConsultingApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Component 1",
    title: "Privacy Risk Assessment & Gap Analysis",
    description: "Identify gaps in data handling",
    icon: <Shield className="w-6 h-6" />,
    category: "Assessment",
    details: [
      "Review current data handling processes and policies",
      "Identify gaps against applicable privacy laws and industry standards",
      "Deliver a prioritized roadmap with remediation steps",
    ],
  },
  {
    id: 2,
    step: "Component 2",
    title: "Data Mapping & Record of Processing Activities (ROPA)",
    description: "Catalog personal data flows",
    icon: <Map className="w-6 h-6" />,
    category: "Mapping",
    details: [
      "Catalog personal data flows across departments, systems, vendors, and geographies",
      "Build and document a complete ROPA as required by GDPR, NDPR, and other laws",
    ],
  },
  {
    id: 3,
    step: "Component 3",
    title: "Policy & Procedure Development",
    description: "Create privacy documentation",
    icon: <FileText className="w-6 h-6" />,
    category: "Development",
    details: [
      "Draft or refine privacy notices, data subject rights (DSR) procedures, breach notification processes, and consent management policies",
    ],
  },
  {
    id: 4,
    step: "Component 4",
    title: "Privacy by Design Integration",
    description: "Embed privacy into processes",
    icon: <Cpu className="w-6 h-6" />,
    category: "Implementation",
    details: [
      "Integrate privacy requirements into application design, data lifecycle management, and procurement processes",
    ],
  },
  {
    id: 5,
    step: "Component 5",
    title: "Data Protection Impact Assessments (DPIA)",
    description: "Assess high-risk processing",
    icon: <ListChecks className="w-6 h-6" />,
    category: "Assessment",
    details: [
      "Conduct DPIAs for high-risk data processing activities",
      "Provide templates, workflows, and guidance for future assessments",
    ],
  },
  {
    id: 6,
    step: "Component 6",
    title: "Staff Awareness & Training",
    description: "Educate your workforce",
    icon: <Users className="w-6 h-6" />,
    category: "Training",
    details: [
      "Deliver organization-wide privacy training and role-specific workshops",
      "Equip your team to respond to subject access requests, breaches, and audits",
    ],
  },
  {
    id: 7,
    step: "Component 7",
    title: "Regulatory Readiness & Support",
    description: "Prepare for audits",
    icon: <Scale className="w-6 h-6" />,
    category: "Compliance",
    details: [
      "Prepare for audits and regulatory engagements",
      "Provide breach response guidance, incident reporting templates, and communication scripts",
    ],
  },
];

// Vendor Risk Management
export const vendorRiskApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Step 1",
    title: "Vendor Discovery & Classification",
    description: "Inventory all third parties",
    icon: <Network className="w-6 h-6" />,
    category: "Inventory",
    details: [
      "Inventory all third parties — active and shadow",
      "Categorize vendors by access level, data sensitivity, and criticality",
    ],
  },
  {
    id: 2,
    step: "Step 2",
    title: "Risk Tiering & Inherent Risk Scoring",
    description: "Assess vendor impact",
    icon: <AlertTriangle className="w-6 h-6" />,
    category: "Assessment",
    details: [
      "Assess each vendor's potential impact on your data, systems, and services",
      "Assign risk tiers to prioritize assessment depth and frequency",
    ],
  },
  {
    id: 3,
    step: "Step 3",
    title: "Due Diligence & Security Assessments",
    description: "Evaluate vendor security",
    icon: <Search className="w-6 h-6" />,
    category: "Evaluation",
    details: [
      "Send custom or industry-standard questionnaires (SIG, CAIQ, etc.)",
      "Review vendor security practices: encryption, access control, incident response, regulatory alignment",
    ],
  },
  {
    id: 4,
    step: "Step 4",
    title: "Continuous Monitoring & Threat Intelligence",
    description: "Track vendor posture",
    icon: <Eye className="w-6 h-6" />,
    category: "Monitoring",
    details: [
      "Track vendors' security posture over time with real-time threat feeds",
      "Get alerts for data breaches, dark web exposure, regulatory sanctions, and more",
    ],
  },
  {
    id: 5,
    step: "Step 5",
    title: "Contractual Controls & Risk Mitigation",
    description: "Enhance vendor contracts",
    icon: <FileText className="w-6 h-6" />,
    category: "Mitigation",
    details: [
      "Insert appropriate data protection clauses and SLAs into vendor contracts",
      "Recommend remediation actions and security improvements",
    ],
  },
  {
    id: 6,
    step: "Step 6",
    title: "Offboarding & Residual Risk Management",
    description: "Securely terminate relationships",
    icon: <Shield className="w-6 h-6" />,
    category: "Termination",
    details: [
      "Securely terminate vendor relationships, ensuring proper data return/destruction",
      "Evaluate any lingering access or vulnerabilities post-contract",
    ],
  },
];

// Network Security
export const networkSecurityApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Phase 1",
    title: "Network Assessment & Design Review",
    description: "Analyze existing architecture",
    icon: <Server className="w-6 h-6" />,
    category: "Assessment",
    details: [
      "Analyze your existing architecture and traffic flow",
      "Identify bottlenecks, exposure points, and misconfigurations",
      "Redesign topology based on least privilege, segmentation, and performance",
    ],
  },
  {
    id: 2,
    step: "Phase 2",
    title: "Firewall Implementation & Optimization",
    description: "Deploy and configure NGFWs",
    icon: <Wifi className="w-6 h-6" />,
    category: "Implementation",
    details: [
      "Deploy, configure, and harden NGFWs (Palo Alto, Fortinet, Cisco, Sophos, Check Point, etc.)",
      "Set up granular rulesets, logging policies, and application-aware filtering",
      "Enforce zero-trust network access (ZTNA) policies",
    ],
  },
  {
    id: 3,
    step: "Phase 3",
    title: "Threat Prevention & Deep Packet Inspection",
    description: "Enable advanced protections",
    icon: <ShieldCheck className="w-6 h-6" />,
    category: "Protection",
    details: [
      "Enable Intrusion Detection/Prevention Systems (IDS/IPS)",
      "Deploy malware sandboxing, encrypted traffic inspection, and threat intelligence feeds",
      "Filter based on app behavior, not just ports and IPs",
    ],
  },
  {
    id: 4,
    step: "Phase 4",
    title: "Secure Remote Access & VPN Management",
    description: "Enable safe remote work",
    icon: <Lock className="w-6 h-6" />,
    category: "Remote Access",
    details: [
      "Deploy site-to-site and client VPNs with MFA and device posture checks",
      "Ensure secure access for hybrid and remote users without compromising performance",
    ],
  },
  {
    id: 5,
    step: "Phase 5",
    title: "Network Segmentation & Microsegmentation",
    description: "Isolate sensitive zones",
    icon: <Network className="w-6 h-6" />,
    category: "Segmentation",
    details: [
      "Isolate business units, workloads, and sensitive data zones",
      "Implement VLANs, ACLs, SDN firewalls, and microsegmentation for east-west traffic control",
    ],
  },
  {
    id: 6,
    step: "Phase 6",
    title: "24/7 Monitoring, Alerting & Response",
    description: "Continuous network protection",
    icon: <Activity className="w-6 h-6" />,
    category: "Monitoring",
    details: [
      "Real-time monitoring of logs, events, and anomalies",
      "Automated alerts integrated with SIEM/SOAR for response orchestration",
    ],
  },
];

// MDR Framework
export const mdrFrameworkApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Stage 1",
    title: "Threat Surface Mapping & Onboarding",
    description: "Discover and onboard assets",
    icon: <Eye className="w-6 h-6" />,
    category: "Onboarding",
    details: [
      "Discovery of endpoints, cloud assets, user identities, and network zones",
      "Integration with SIEM, EDR, XDR, and log sources (Windows, Linux, AWS, Azure, O365, firewalls, SaaS, etc.)",
      "Threat modeling tailored to your attack surface",
    ],
  },
  {
    id: 2,
    step: "Stage 2",
    title: "Real-Time Threat Detection",
    description: "Identify active threats",
    icon: <Bell className="w-6 h-6" />,
    category: "Detection",
    details: [
      "Behavioral analytics, anomaly detection, and signature-based alerts",
      "Correlation of network, endpoint, cloud, and identity telemetry",
      "AI-enhanced triage to reduce false positives",
    ],
  },
  {
    id: 3,
    step: "Stage 3",
    title: "Human-Led Threat Hunting",
    description: "Proactively hunt for threats",
    icon: <Target className="w-6 h-6" />,
    category: "Hunting",
    details: [
      "Continuous hunting for advanced persistent threats (APTs), insider threats, and unknown TTPs",
      "Use of MITRE ATT&CK and threat intelligence to guide campaigns",
      "Custom rules, YARA signatures, and adversary emulation",
    ],
  },
  {
    id: 4,
    step: "Stage 4",
    title: "Incident Analysis & Root Cause Investigation",
    description: "Investigate every alert",
    icon: <Search className="w-6 h-6" />,
    category: "Investigation",
    details: [
      "Every alert is investigated by certified security analysts (OSCP, GCIH, CEH)",
      "Chain-of-events analysis, IOC extraction, and kill chain mapping",
      "Immediate classification: false positive, suspicious, or confirmed incident",
    ],
  },
  {
    id: 5,
    step: "Stage 5",
    title: "Rapid Response & Containment",
    description: "Contain threats immediately",
    icon: <Zap className="w-6 h-6" />,
    category: "Response",
    details: [
      "Quarantine endpoints, disable compromised accounts, block IPs/domains",
      "Deploy remediation scripts, isolate cloud assets, and revoke tokens in real-time",
      "SLA-driven response playbooks and escalation protocols",
    ],
  },
  {
    id: 6,
    step: "Stage 6",
    title: "Reporting, Lessons Learned & Hardening",
    description: "Improve defenses",
    icon: <FileText className="w-6 h-6" />,
    category: "Improvement",
    details: [
      "Post-incident reports with full timelines, impact assessments, and remediation steps",
      "Executive summaries + technical deep dives",
      "Continuous tuning of detection rules and response logic",
    ],
  },
];

// Remediation Lifecycle
export const remediationLifecycleApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Step 1",
    title: "Discovery & Asset Mapping",
    description: "Identify and classify assets",
    icon: <Map className="w-6 h-6" />,
    category: "Inventory",
    details: [
      "Identify and classify all IT and cloud assets",
      "Group systems by criticality, ownership, and operating environment",
      "Integrate with tools like SCCM, Intune, WSUS, AWS Systems Manager, etc.",
    ],
  },
  {
    id: 2,
    step: "Step 2",
    title: "Vulnerability Scanning & Threat Contextualization",
    description: "Find and analyze vulnerabilities",
    icon: <Search className="w-6 h-6" />,
    category: "Assessment",
    details: [
      "Conduct automated and agent-based scans using tools like Qualys, Nessus, OpenVAS, or Rapid7",
      "Enrich vulnerabilities with exploit intelligence, MITRE CVEs, and live attack data",
      "Identify vulnerabilities with known ransomware or exploit kit associations",
    ],
  },
  {
    id: 3,
    step: "Step 3",
    title: "Risk-Based Prioritization",
    description: "Focus on what matters most",
    icon: <Flag className="w-6 h-6" />,
    category: "Prioritization",
    details: [
      "Use CVSS scores, asset value, exposure level, and exploit availability to triage",
      "Distinguish between high-severity, actively exploited, and compliance-related vulnerabilities",
    ],
  },
  {
    id: 4,
    step: "Step 4",
    title: "Patch Deployment & Validation",
    description: "Remediate vulnerabilities",
    icon: <ShieldCheck className="w-6 h-6" />,
    category: "Remediation",
    details: [
      "Schedule and deploy patches with minimal business disruption",
      "Automate via tools like PDQ Deploy, Ivanti, Microsoft Endpoint Manager, or Ansible",
      "Test in staging environments when necessary before production rollout",
    ],
  },
  {
    id: 5,
    step: "Step 5",
    title: "Remediation for Non-Patchable Issues",
    description: "Implement compensating controls",
    icon: <HelpCircle className="w-6 h-6" />,
    category: "Mitigation",
    details: [
      "Apply compensating controls: WAF rules, ACLs, GPOs, registry tweaks, or configuration changes",
      "Remove vulnerable software versions or disable affected features/services",
    ],
  },
  {
    id: 6,
    step: "Step 6",
    title: "Post-Remediation Verification",
    description: "Confirm resolution",
    icon: <ListChecks className="w-6 h-6" />,
    category: "Verification",
    details: [
      "Rescan to confirm resolution and prevent regression",
      "Run validation scripts and endpoint integrity checks",
      "Document and archive changes for audits and baselines",
    ],
  },
];

// Email Security
export const emailSecurityApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Component 1",
    title: "Pre-Delivery Threat Prevention",
    description: "Block malicious emails",
    icon: <Mail className="w-6 h-6" />,
    category: "Prevention",
    details: [
      "Inspect inbound email traffic using AI/ML threat engines",
      "Detect and block phishing, spear-phishing, spoofing, malware, and domain impersonation",
      "Integrate with Microsoft 365, Google Workspace, or on-prem Exchange",
    ],
  },
  {
    id: 2,
    step: "Component 2",
    title: "Advanced Attachment & URL Analysis",
    description: "Analyze suspicious content",
    icon: <FileText className="w-6 h-6" />,
    category: "Analysis",
    details: [
      "Use sandboxing and detonation chambers to open attachments in virtual environments",
      "Rewrite and scan URLs in real-time upon click — preventing delayed payload activation",
    ],
  },
  {
    id: 3,
    step: "Component 3",
    title: "Brand Spoofing & Identity Validation",
    description: "Prevent impersonation",
    icon: <User className="w-6 h-6" />,
    category: "Authentication",
    details: [
      "Enforce DMARC, DKIM, and SPF policies",
      "Block lookalike domains, homoglyph attacks, and executive impersonation",
    ],
  },
  {
    id: 4,
    step: "Component 4",
    title: "Real-Time User Coaching & Simulated Phishing",
    description: "Educate users",
    icon: <MessageSquare className="w-6 h-6" />,
    category: "Training",
    details: [
      "Deliver banner warnings, risk scoring, and real-time alerts to educate users",
      "Run custom phishing simulation campaigns with reporting on user susceptibility",
    ],
  },
  {
    id: 5,
    step: "Component 5",
    title: "Threat Intelligence & AI Analytics",
    description: "Leverage advanced detection",
    icon: <PieChart className="w-6 h-6" />,
    category: "Intelligence",
    details: [
      "Leverage global threat feeds and behavioral analytics",
      "Detect BEC patterns, tone shifts, and anomalous message flows using natural language analysis",
    ],
  },
  {
    id: 6,
    step: "Component 6",
    title: "Automated Email Incident Response",
    description: "Respond to threats",
    icon: <Zap className="w-6 h-6" />,
    category: "Response",
    details: [
      "Quarantine or retract emails across all user inboxes",
      "Automatically remediate threats based on severity",
    ],
  },
];

// BDR Service Methodology
export const bdrServiceApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Phase 1",
    title: "Business Impact & Risk Assessment",
    description: "Identify critical systems",
    icon: <HardDrive className="w-6 h-6" />,
    category: "Assessment",
    details: [
      "Identify critical systems, applications, and data dependencies",
      "Quantify acceptable RTOs (Recovery Time Objectives) and RPOs (Recovery Point Objectives)",
      "Map regulatory, operational, and customer obligations",
    ],
  },
  {
    id: 2,
    step: "Phase 2",
    title: "Backup Strategy Design",
    description: "Implement comprehensive backups",
    icon: <Database className="w-6 h-6" />,
    category: "Backup",
    details: [
      "Implement tiered backups — on-prem, hybrid, and cloud — aligned with data criticality",
      "Support immutable backups, air-gapped storage, and ransomware-resistant repositories",
    ],
  },
  {
    id: 3,
    step: "Phase 3",
    title: "Disaster Recovery Planning",
    description: "Design recovery playbooks",
    icon: <Shield className="w-6 h-6" />,
    category: "Recovery",
    details: [
      "Design DR playbooks for various failure scenarios (cyberattack, power outage, natural disaster, insider threat)",
      "Establish failover systems, geo-redundancy, and automated orchestration",
    ],
  },
  {
    id: 4,
    step: "Phase 4",
    title: "Testing & Simulation",
    description: "Validate recovery plans",
    icon: <Activity className="w-6 h-6" />,
    category: "Validation",
    details: [
      "Conduct tabletop exercises and live failover drills to validate plans",
      "Provide performance benchmarks and recovery gap analysis",
    ],
  },
  {
    id: 5,
    step: "Phase 5",
    title: "Continuous Monitoring & Compliance Reporting",
    description: "Ensure ongoing protection",
    icon: <Eye className="w-6 h-6" />,
    category: "Monitoring",
    details: [
      "Integrate with SIEM/SOAR platforms to detect anomalies before they escalate",
      "Generate compliance reports for audits",
    ],
  },
];

// Cyber Hygiene Framework
export const cyberHygieneApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Step 1",
    title: "Workforce Risk Profiling",
    description: "Evaluate employee roles",
    icon: <Users className="w-6 h-6" />,
    category: "Assessment",
    details: [
      "Evaluate employee roles, access levels, and past incident data",
      "Identify high-risk departments (e.g., finance, HR, executive teams)",
    ],
  },
  {
    id: 2,
    step: "Step 2",
    title: "Customized Training Content",
    description: "Develop tailored modules",
    icon: <BookOpen className="w-6 h-6" />,
    category: "Content",
    details: [
      "Develop industry-specific modules aligned with your operations",
      "Tailor lessons for non-technical and technical teams alike",
    ],
  },
  {
    id: 3,
    step: "Step 3",
    title: "Engaging Delivery Channels",
    description: "Use multiple formats",
    icon: <MessageSquare className="w-6 h-6" />,
    category: "Delivery",
    details: [
      "Use microlearning, videos, gamified quizzes, and scenario-based simulations",
      "Offer flexible formats: virtual, on-site, LMS-integrated, or hybrid",
    ],
  },
  {
    id: 4,
    step: "Step 4",
    title: "Simulated Attacks & Reinforcement",
    description: "Test with real-world scenarios",
    icon: <Target className="w-6 h-6" />,
    category: "Testing",
    details: [
      "Run real-world phishing simulations, USB drop tests, and social engineering campaigns",
      "Provide instant feedback and coaching moments after mistakes",
    ],
  },
  {
    id: 5,
    step: "Step 5",
    title: "Progress Tracking & Risk Scoring",
    description: "Measure effectiveness",
    icon: <PieChart className="w-6 h-6" />,
    category: "Metrics",
    details: [
      "Monitor user behavior, quiz performance, and simulation responses",
      "Assign cyber risk scores to departments and individuals",
    ],
  },
  {
    id: 6,
    step: "Step 6",
    title: "Executive & Technical Workshops",
    description: "Deep-dive training",
    icon: <Briefcase className="w-6 h-6" />,
    category: "Leadership",
    details: [
      "Offer deep-dive training for leadership, IT admins, and developers",
      "Align security awareness with strategic decision-making",
    ],
  },
];

// Identity Protection Approach
export const identityProtectionApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Phase 1",
    title: "Identity & Data Exposure Scanning",
    description: "Detect where your personal information is exposed",
    icon: <User className="w-6 h-6" />,
    category: "Discovery",
    details: [
      "Scan for SSNs, bank details, emails, and passwords",
      "Crawl breaches, leaks, and black markets",
      "Monitor surface, deep, and dark web",
    ],
  },
  {
    id: 2,
    step: "Phase 2",
    title: "Real-Time Dark Web Monitoring",
    description: "Continuous surveillance for compromised credentials",
    icon: <Eye className="w-6 h-6" />,
    category: "Monitoring",
    details: [
      "Track stolen credentials and payment card leaks",
      "Detect impersonation attempts",
      "Immediate alert system for compromises",
    ],
  },
  {
    id: 3,
    step: "Phase 3",
    title: "Identity Theft Prevention & Remediation",
    description: "Comprehensive protection and recovery support",
    icon: <Shield className="w-6 h-6" />,
    category: "Remediation",
    details: [
      "Secure digital habit development",
      "Full reporting to recovery support",
      "Legal guidance for identity theft cases",
    ],
  },
  {
    id: 4,
    step: "Phase 4",
    title: "Privacy Hardening & Digital Hygiene",
    description: "Strengthen your online privacy footprint",
    icon: <Lock className="w-6 h-6" />,
    category: "Hardening",
    details: [
      "Remove data from people-search sites and brokers",
      "Set up alerts for identity misuse",
      "Monitor social media impersonation and credit fraud",
    ],
  },
];

// Home Office Security Approach
export const homeOfficeSecurityApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Component 1",
    title: "Secure Network Design",
    description: "Protect your home network infrastructure",
    icon: <Wifi className="w-6 h-6" />,
    category: "Network",
    details: [
      "Network segmentation and IoT isolation",
      "Install secure DNS and firewalls",
      "Configure encrypted Wi-Fi (WPA3)",
    ],
  },
  {
    id: 2,
    step: "Component 2",
    title: "Device Hardening & Encryption",
    description: "Fortify all endpoint devices",
    icon: <Laptop className="w-6 h-6" />,
    category: "Endpoint",
    details: [
      "Harden OS settings across devices",
      "Implement full-disk encryption",
      "Deploy antivirus and remote wipe capabilities",
    ],
  },
  {
    id: 3,
    step: "Component 3",
    title: "Zero Trust Remote Access",
    description: "Secure access to cloud resources",
    icon: <Smartphone className="w-6 h-6" />,
    category: "Access",
    details: [
      "Set up VPNs and MFA",
      "Audit login methods and access logs",
      "Review admin privileges",
    ],
  },
  {
    id: 4,
    step: "Component 4",
    title: "Safe File Sharing & Backup Systems",
    description: "Secure collaboration and data protection",
    icon: <Folder className="w-6 h-6" />,
    category: "Data",
    details: [
      "Deploy secure collaboration tools",
      "Configure automated cloud backups",
      "Implement ransomware-resilient storage",
    ],
  },
  {
    id: 5,
    step: "Component 5",
    title: "Physical Security Enhancements",
    description: "Protect against physical threats",
    icon: <Camera className="w-6 h-6" />,
    category: "Physical",
    details: [
      "Recommend webcam covers and privacy filters",
      "Suggest secured cabinets for sensitive materials",
      "Advise on workspace security best practices",
    ],
  },
];

// Digital Minimalism Approach
export const digitalMinimalismApproach: ApproachItem[] = [
  {
    id: 1,
    step: "Step 1",
    title: "OSINT Profile & Exposure Assessment",
    description: "Analyze your digital footprint",
    icon: <Search className="w-6 h-6" />,
    category: "Assessment",
    details: [
      "Perform comprehensive OSINT scans",
      "Identify exposed data and metadata",
      "Analyze social media and geolocation leaks",
    ],
  },
  {
    id: 2,
    step: "Step 2",
    title: "Automated Data Removal & Opt-Outs",
    description: "Reduce your online exposure",
    icon: <Trash2 className="w-6 h-6" />,
    category: "Removal",
    details: [
      "Remove info from data broker sites",
      "Submit opt-out requests across platforms",
      "Monitor removal progress",
    ],
  },
  {
    id: 3,
    step: "Step 3",
    title: "Privacy Configuration for Platforms",
    description: "Lock down your social accounts",
    icon: <Share2 className="w-6 h-6" />,
    category: "Configuration",
    details: [
      "Secure Facebook, Instagram, LinkedIn etc.",
      "Disable tracking and search indexing",
      "Limit data sharing and tagging",
    ],
  },
  {
    id: 4,
    step: "Step 4",
    title: "Social Media Detox & Strategy",
    description: "Redesign your online presence",
    icon: <Minimize2 className="w-6 h-6" />,
    category: "Optimization",
    details: [
      "Help reduce or reset social presence",
      "Offer rebranding strategies",
      "Create pseudonymous profiles for sensitive roles",
    ],
  },
  {
    id: 5,
    step: "Step 5",
    title: "Ongoing Monitoring & Alerts",
    description: "Maintain your digital minimalism",
    icon: <Bell className="w-6 h-6" />,
    category: "Maintenance",
    details: [
      "Monthly exposure reports",
      "Breach monitoring",
      "New activity alerts",
    ],
  },
];
