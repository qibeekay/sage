import {
  CheckCircle,
  Zap,
  Monitor,
  UserCog,
  Server,
  Lock,
  AlertCircle,
  Layout,
  Activity,
  Cpu,
  Clipboard,
  ShieldCheck,
  Wifi,
  BarChart2,
  Globe,
  Bell,
  PieChart,
  ClipboardCheck,
  Layers,
  Cloud,
  Crosshair,
  BarChart,
  Users,
  FileText,
  Shield,
  BookOpen,
  Search,
  Eye,
  List,
  Map,
  Mail,
  HardDrive,
  MessageSquare,
  Key,
  Award,
  Link,
  Network,
} from "lucide-react";

export const pentestFeatures = [
  {
    feature: "Hybrid Testing",
    description:
      "Combines manual ethical hacking with automated tools for maximum coverage.",
    icon: Zap,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "PTaaS Dashboard",
    description:
      "Real-time visibility, test tracking, secure communication, and evidence access.",
    icon: Monitor,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "Remediation Support",
    description:
      "Detailed fixes with walkthrough sessions and post-remediation testing.",
    icon: Users,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Zero Downtime Testing",
    description:
      "Safe, controlled simulations that won't impact your operations.",
    icon: Shield,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Multi-Scope Testing",
    description:
      "Apps, networks, APIs, cloud, Active Directory, wireless, and IoT environments.",
    icon: CheckCircle,
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    feature: "Custom Reporting",
    description:
      "Tailored reports for technical teams, management, and auditors.",
    icon: FileText,
    gradient: "from-green-500 to-emerald-500",
  },
];

export const redTeamFeatures = [
  {
    feature: "Adversary Simulation",
    description:
      "Real-world threat actor tactics (APT, ransomware gangs, hacktivists)",
    icon: Crosshair,
    gradient: "from-red-500 to-orange-500",
  },
  {
    feature: "Social Engineering Scenarios",
    description:
      "Phishing, pretexting, baiting, USB drops, and physical tailgating",
    icon: UserCog,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    feature: "Command & Control Frameworks",
    description:
      "Custom C2 infrastructure using tools like Cobalt Strike, Mythic, or Sliver",
    icon: Server,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    feature: "Credential Capture & Replay",
    description: "Kerberoasting, Pass-the-Hash, Mimikatz, and more",
    icon: Key,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "Attack Path Mapping",
    description:
      "Visual graphs showing lateral movement and privilege escalation",
    icon: Layout,
    gradient: "from-green-500 to-teal-500",
  },
  {
    feature: "Detection Bypass",
    description: "Evasion techniques for AV, EDR, and behavioral analytics",
    icon: Eye,
    gradient: "from-gray-500 to-slate-500",
  },
  {
    feature: "Purple Team Integration",
    description:
      "Optional collaborative workshops to uplift Blue Team capabilities",
    icon: Users,
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    feature: "Post-Engagement Support",
    description:
      "Strategy documents, detection engineering, and retesting plans",
    icon: FileText,
    gradient: "from-emerald-500 to-cyan-500",
  },
];

export const physicalSecurityFeatures = [
  {
    feature: "Covert Entry Simulation",
    description:
      "Real-world testing of locks, alarms, barriers, and entry systems",
    icon: Lock,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "Badge Cloning & RFID Testing",
    description: "Assess weaknesses in ID card and proximity badge controls",
    icon: Shield,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "Employee Impersonation",
    description:
      "Test front desk protocols, contractor checks, and social defenses",
    icon: UserCog,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Tailgating & Surveillance",
    description: "Simulate common insider tactics to bypass access controls",
    icon: Eye,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "Facility Risk Mapping",
    description:
      "Floor plan-based threat map with access zones and high-risk areas",
    icon: Map,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Red Team Integration",
    description:
      "Combine physical intrusion with digital compromise for hybrid threat simulation",
    icon: Crosshair,
    gradient: "from-orange-500 to-red-500",
  },
  {
    feature: "Evidence-Based Reporting",
    description:
      "Time-stamped photos, breach timelines, and video footage as proof",
    icon: FileText,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    feature: "Remediation Recommendations",
    description:
      "Physical layout changes, access policy improvements, and staff training guides",
    icon: CheckCircle,
    gradient: "from-teal-500 to-cyan-500",
  },
];

export const socFeatures = [
  {
    feature: "24/7/365 Monitoring",
    description: "Around-the-clock surveillance of your digital estate",
    icon: Activity,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "Cloud & On-Prem Integration",
    description:
      "Covers AWS, Azure, GCP, SaaS apps, hybrid environments, and traditional networks",
    icon: Cloud,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "SIEM/XDR Platform Support",
    description:
      "Works with Splunk, Sentinel, QRadar, CrowdStrike, SentinelOne, and more",
    icon: BarChart2,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Managed Detection & Response (MDR)",
    description: "Full-service detection, triage, containment, and support",
    icon: ShieldCheck,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Automated Playbooks",
    description: "Respond instantly to known threats via SOAR integrations",
    icon: Zap,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "Real-Time Dashboards",
    description:
      "Transparent, live visibility into alerts, incidents, and threat trends",
    icon: Monitor,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    feature: "Threat Intelligence Feeds",
    description:
      "Enrich alerts with global context from dark web, malware samples, and APT watchlists",
    icon: Globe,
    gradient: "from-orange-500 to-red-500",
  },
  {
    feature: "Compliance Mapping",
    description:
      "Aligns with industry-specific security standards and audit requirements",
    icon: Clipboard,
    gradient: "from-teal-500 to-cyan-500",
  },
];

export const edrFeatures = [
  {
    feature: "Real-Time Endpoint Telemetry",
    description: "Full visibility into every action taken on every endpoint",
    icon: Activity,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "Automated Threat Response",
    description: "Auto-isolation, file quarantine, process termination",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "MITRE ATT&CK Alignment",
    description: "Detection mapped to attacker tactics and techniques",
    icon: Crosshair,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Threat Hunting",
    description: "Proactive search for stealthy threats and dormant malware",
    icon: Search,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Cross-Platform Coverage",
    description: "Windows, macOS, Linux, Android, and iOS",
    icon: Cpu,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "Cloud Workload Protection",
    description: "Secure containers, virtual machines, and cloud apps",
    icon: Cloud,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    feature: "Zero Trust Enforcement",
    description: "Stop unknown and unsigned applications by default",
    icon: Shield,
    gradient: "from-orange-500 to-red-500",
  },
  {
    feature: "Policy Management",
    description: "Custom rules for different teams, geos, and departments",
    icon: List,
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    feature: "Dashboards & Reports",
    description: "Executive summaries and analyst-friendly views",
    icon: FileText,
    gradient: "from-gray-500 to-slate-500",
  },
];

export const threatIntelFeatures = [
  {
    feature: "Real-Time Threat Feeds",
    description: "Updated hourly with IOCs, malware hashes, TTPs",
    icon: Bell,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "Threat Attribution Engine",
    description: "Identify adversary groups and link patterns to campaigns",
    icon: Crosshair,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "Adversary Simulation",
    description: "Test defenses using TTPs from known APTs",
    icon: UserCog,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Insider Threat Detection",
    description:
      "Hunt for policy violations, privilege misuse, lateral movement",
    icon: Eye,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Forensic-Grade Endpoint Analysis",
    description:
      "Dig deep into file systems, memory, registry, and persistence",
    icon: Search,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "Dark Web Intelligence",
    description:
      "Identify stolen credentials, leaked data, or corporate targeting",
    icon: Globe,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    feature: "Threat Intelligence Reports",
    description: "Monthly and on-demand reports tailored to your industry",
    icon: FileText,
    gradient: "from-orange-500 to-red-500",
  },
  {
    feature: "Alert Enrichment & Context",
    description: "Add attacker details and confidence scoring to SIEM alerts",
    icon: PieChart,
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    feature: "Custom YARA/Sigma Rules",
    description: "Tune hunting based on your unique environment",
    icon: ShieldCheck,
    gradient: "from-gray-500 to-slate-500",
  },
];

export const irForensicsFeatures = [
  {
    feature: "24/7 Emergency Response",
    description:
      "Global response team available within minutes via hotline or secure portal",
    icon: AlertCircle,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "Incident Response Retainer",
    description:
      "Annual subscription with guaranteed SLA, discounted hourly rates, and preparedness assessments",
    icon: FileText,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "Advanced Forensic Toolkit",
    description:
      "Tools like EnCase, FTK, Volatility, Magnet AXIOM, X-Ways, Autopsy",
    icon: Search,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Cloud & SaaS Forensics",
    description:
      "Microsoft 365, Azure, AWS, Google Workspace, Salesforce investigations",
    icon: Cloud,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Endpoint Forensics (EDR)",
    description:
      "Leverage Carbon Black, CrowdStrike, SentinelOne, Microsoft Defender for Endpoint",
    icon: Cpu,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "Chain of Custody Management",
    description:
      "Legally defensible evidence handling for HR/legal/regulatory action",
    icon: Clipboard,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    feature: "Dark Web Monitoring",
    description:
      "Identify leaked credentials, data dumps, and targeted chatter",
    icon: Globe,
    gradient: "from-orange-500 to-red-500",
  },
  {
    feature: "Post-Breach Consulting",
    description:
      "Legal, insurance, PR coordination, and incident impact minimization",
    icon: Users,
    gradient: "from-teal-500 to-cyan-500",
  },
];

export const cloudSecurityFeatures = [
  {
    feature: "Multi-Cloud Visibility",
    description:
      "Unified dashboards for AWS, Azure, GCP, OCI, and hybrid infrastructure",
    icon: Cloud,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "CSPM Engine",
    description: "Continuous config auditing and remediation recommendations",
    icon: ShieldCheck,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "CWPP Protection",
    description:
      "Runtime security for containers, VMs, and serverless workloads",
    icon: Cpu,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "SIEM Integration",
    description:
      "Native support for Splunk, Azure Sentinel, QRadar, Sumo Logic, and more",
    icon: Wifi,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "AI/ML Threat Analytics",
    description: "Behavioral anomaly detection using AI/ML models",
    icon: PieChart,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "Alert Correlation & Triage",
    description: "Prioritized alerts to reduce noise and false positives",
    icon: Bell,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    feature: "SOAR Automation",
    description:
      "Automated playbooks for faster, orchestrated incident response",
    icon: Zap,
    gradient: "from-orange-500 to-red-500",
  },
  {
    feature: "Compliance Mapping",
    description:
      "Built-in checks for PCI, HIPAA, NIST, NDPR, CIS, ISO, and more",
    icon: Clipboard,
    gradient: "from-teal-500 to-cyan-500",
  },
];

export const riskAssessmentFeatures = [
  {
    feature: "Standards-Based Frameworks",
    description: "NIST CSF, ISO 27001, CIS v8, NDPR, PCI-DSS, HIPAA, COBIT5.",
    icon: ClipboardCheck,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "Multi-Layer Risk Analysis",
    description:
      "Evaluate risk across technology, people, process, and supply chain.",
    icon: Layers,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Cloud & On-Prem Assessments",
    description:
      "Covers hybrid environments, SaaS, IaaS, containers, endpoints, and IoT.",
    icon: Cloud,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Threat Modeling",
    description:
      "Scenario-based modeling using STRIDE, MITRE ATT&CK, or PASTA methods.",
    icon: Crosshair,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "Quantitative Risk Scoring",
    description:
      "CVSS for tech, FAIR or DREAD for business/enterprise risk quantification.",
    icon: BarChart,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "Interactive Risk Dashboards",
    description:
      "Custom dashboards that track risk posture, trends, and remediation progress.",
    icon: Activity,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    feature: "Third-Party Risk Reviews",
    description:
      "Assess vendor and partner risks in your supply chain or digital ecosystem.",
    icon: Users,
    gradient: "from-orange-500 to-red-500",
  },
  {
    feature: "Executive & Technical Reports",
    description:
      "Tailored reports for leadership, security teams, and compliance officers.",
    icon: FileText,
    gradient: "from-teal-500 to-cyan-500",
  },
];

export const complianceServiceFeatures = [
  {
    feature: "Multi-Framework Expertise",
    description:
      "ISO 27001, NIST 800-53, NIST CSF, NDPR, GDPR, PCI-DSS, HIPAA, SOC 2, COBIT, etc.",
    icon: Shield,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "Gap & Readiness Assessments",
    description:
      "Evaluate your current status and identify what's missing to achieve compliance.",
    icon: Search,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Policy & Procedure Templates",
    description:
      "Provide editable documentation aligned to each framework and audit requirement.",
    icon: FileText,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Control Mapping",
    description:
      "Map existing technical controls to required framework controls and objectives.",
    icon: Map,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "Internal Audit Services",
    description:
      "Conduct full internal audits using certified auditors (CISA, ISO 27001 LA, etc.).",
    icon: ClipboardCheck,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "Audit Readiness Dashboard",
    description:
      "Visual dashboard of compliance status, maturity scores, and remediation progress.",
    icon: Activity,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    feature: "Ongoing Compliance Monitoring",
    description: "Integrate GRC tools for continuous tracking and reporting.",
    icon: Eye,
    gradient: "from-orange-500 to-red-500",
  },
  {
    feature: "Training & Awareness",
    description:
      "Security awareness sessions for employees and compliance coaching for teams.",
    icon: Users,
    gradient: "from-teal-500 to-cyan-500",
  },
];

export const policyServiceFeatures = [
  {
    feature: "Framework-Aligned Policies",
    description:
      "Built to match ISO 27001, NIST, NDPR, GDPR, HIPAA, PCI-DSS, and more.",
    icon: Shield,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "Fully Customizable Documents",
    description:
      "Tailored to your industry, organization size, and risk environment.",
    icon: FileText,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Policy Kits",
    description:
      "Receive a full suite: policies, procedures, standards, and guidelines.",
    icon: BookOpen,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Policy Rollout Plans",
    description:
      "Includes communication templates, awareness strategies, and adoption tips.",
    icon: MessageSquare,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "Version Control Support",
    description:
      "Versioning guidance and templates to manage lifecycle and compliance logs.",
    icon: List,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "Training & Awareness Packs",
    description:
      "Presentation decks, e-learning content, and FAQ documents for employees.",
    icon: Users,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    feature: "Templates & Toolkits",
    description:
      "Includes editable MS Word, PDF, and GRC import-ready versions.",
    icon: ClipboardCheck,
    gradient: "from-orange-500 to-red-500",
  },
  {
    feature: "Audit-Ready Documentation",
    description:
      "Structured for ease of review by internal and external auditors.",
    icon: Search,
    gradient: "from-teal-500 to-cyan-500",
  },
];

export const privacyServiceFeatures = [
  {
    feature: "Privacy Gap Assessments",
    description:
      "Map your current posture against GDPR, NDPR, CCPA, HIPAA, and other laws.",
    icon: Search,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "Data Discovery & Mapping",
    description:
      "Visualize how personal data flows through your organization and vendors.",
    icon: Map,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Consent & DSR Workflows",
    description:
      "Automate and document consent management and rights fulfillment.",
    icon: ClipboardCheck,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Custom Privacy Policies",
    description:
      "Public-facing and internal policies tailored to your business.",
    icon: FileText,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "DPIA & Breach Templates",
    description:
      "Ready-to-use templates and support for critical privacy events.",
    icon: Shield,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "Privacy Technology Advisory",
    description: "Guidance on privacy-enhancing tools and platforms.",
    icon: Cpu,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    feature: "Employee Training Packs",
    description: "Modular privacy training materials and awareness campaigns.",
    icon: Users,
    gradient: "from-orange-500 to-red-500",
  },
  {
    feature: "Ongoing Compliance Monitoring",
    description:
      "Subscription options for continuous updates, audits, and regulatory alerts.",
    icon: Bell,
    gradient: "from-teal-500 to-cyan-500",
  },
];

export const tpvrmFeatures = [
  {
    feature: "End-to-End Lifecycle Model",
    description:
      "Covers discovery, onboarding, assessments, monitoring, and offboarding.",
    icon: Layers,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "Custom Risk Frameworks",
    description:
      "Aligns with ISO 27001, NIST, SOC 2, PCI-DSS, HIPAA, NDPR, and more.",
    icon: Shield,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Automated Risk Workflows",
    description:
      "Integrate with GRC tools for tracking approvals, scoring, and mitigation.",
    icon: Zap,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Live Vendor Risk Dashboard",
    description: "Real-time metrics, tiered risk views, and automated alerts.",
    icon: Activity,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "Breach Monitoring",
    description:
      "Get notified of vendor incidents from threat intelligence and breach feeds.",
    icon: Bell,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "Policy & Process Development",
    description:
      "Establish governance for third-party onboarding and security review.",
    icon: FileText,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    feature: "Vendor Awareness Materials",
    description:
      "Educate your vendors with best practices, checklists, and training.",
    icon: Users,
    gradient: "from-orange-500 to-red-500",
  },
];

export const firewallFeatures = [
  {
    feature: "Next-Gen Firewall Management",
    description:
      "Full lifecycle support for leading firewall vendors and virtual appliances.",
    icon: Shield,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "Zero Trust Network Access",
    description:
      "Enforce user-identity and device-based access with continuous validation.",
    icon: Lock,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Network Segmentation",
    description:
      "Prevent lateral movement with logical boundaries and microsegmentation.",
    icon: Network,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Threat Intelligence Feeds",
    description:
      "Real-time updates from sources like AlienVault, Anomali, MISP, and more.",
    icon: Globe,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "Encrypted Traffic Inspection",
    description: "Decrypt and inspect TLS/SSL traffic for hidden threats.",
    icon: Eye,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "VPN & Remote Access Security",
    description: "Secure, fast, and auditable access for hybrid teams.",
    icon: Wifi,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    feature: "Cloud Firewall Integration",
    description:
      "Azure NSGs/Firewalls, AWS WAF/Security Groups, GCP firewalls, and more.",
    icon: Cloud,
    gradient: "from-orange-500 to-red-500",
  },
  {
    feature: "Automated Rule Review & Cleanup",
    description:
      "Eliminate stale rules and reduce attack surface through policy automation.",
    icon: Zap,
    gradient: "from-teal-500 to-cyan-500",
  },
];

export const mdrPlatformFeatures = [
  {
    feature: "24/7 Monitoring & Response",
    description:
      "Global SOC coverage to detect and neutralize threats anytime.",
    icon: Activity,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "EDR/XDR Integration",
    description:
      "We plug into platforms like CrowdStrike, SentinelOne, Microsoft Defender, Palo Alto Cortex, and more.",
    icon: Cpu,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Cloud Threat Monitoring",
    description:
      "Coverage for Azure, AWS, GCP, O365, Google Workspace, and containers.",
    icon: Cloud,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "SOAR-Driven Automation",
    description:
      "Accelerated triage, ticketing, and remediation via tools like TheHive, Tines, or XSOAR.",
    icon: Zap,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "Threat Intelligence Fusion",
    description:
      "Use of commercial, open-source, and internal intel to detect emerging threats.",
    icon: Globe,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "Compliance Mapping",
    description:
      "Alerting and reporting aligned with PCI-DSS, NDPR, HIPAA, ISO 27001, NIST, etc.",
    icon: ClipboardCheck,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    feature: "Identity & Access Monitoring",
    description:
      "Anomaly detection for user behavior, MFA bypass attempts, and privilege misuse.",
    icon: Key,
    gradient: "from-orange-500 to-red-500",
  },
  {
    feature: "Dark Web & External Recon",
    description:
      "Monitoring for leaked credentials, phishing kits, and malicious infrastructure.",
    icon: Eye,
    gradient: "from-teal-500 to-cyan-500",
  },
];

export const patchRemediationFeatures = [
  {
    feature: "Automated Patch Orchestration",
    description:
      "Policy-driven scheduling, deployment, and rollback handling across systems.",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "Dynamic Risk Prioritization",
    description:
      "Focus remediation efforts on what matters most to your threat profile.",
    icon: AlertCircle,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Cloud-Native Compatibility",
    description:
      "Supports Azure, AWS, GCP, and containerized environments like Kubernetes.",
    icon: Cloud,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Real-Time Dashboards",
    description:
      "Visualize your patch status, SLAs, vulnerabilities, and remediation progress.",
    icon: Activity,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "Legacy & EOL Software Strategy",
    description:
      "Specialized remediation for unsupported or out-of-support systems.",
    icon: Server,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "Compliance Reporting",
    description:
      "Align with NIST CSF, ISO 27001, NDPR, PCI-DSS, and industry best practices.",
    icon: FileText,
    gradient: "from-indigo-500 to-blue-500",
  },
];

export const emailSecurityFeatures = [
  {
    feature: "AI-Powered Phishing Detection",
    description:
      "Stops both generic and targeted phishing attempts using behavioral AI.",
    icon: Cpu,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "URL Sandboxing & Rewriting",
    description:
      "Neutralizes embedded threats before users can engage with them.",
    icon: Link,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Email Encryption",
    description:
      "Protects sensitive communications and ensures message confidentiality.",
    icon: Lock,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Phishing Simulation & Training",
    description:
      "Custom campaigns to raise awareness and build muscle memory against threats.",
    icon: Users,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "Executive Protection",
    description:
      "Shields C-suite from impersonation and targeted spear-phishing attacks.",
    icon: Shield,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "Integration with SIEM/SOAR",
    description: "Seamless alerting and incident response orchestration.",
    icon: Zap,
    gradient: "from-indigo-500 to-blue-500",
  },
];

export const bdrFeatures = [
  {
    feature: "Immutable & Encrypted Backups",
    description:
      "Protect data from tampering, ransomware, and unauthorized access.",
    icon: Lock,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "Automated DR Orchestration",
    description:
      "Reduce human error and recovery times through scripted workflows.",
    icon: Zap,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Cloud-Native & Hybrid Support",
    description:
      "Works across AWS, Azure, GCP, on-premises, and hybrid infrastructure.",
    icon: Cloud,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Granular Recovery Options",
    description:
      "Recover entire systems, individual files, or application-level data.",
    icon: HardDrive,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "Geo-Redundant Failover Sites",
    description:
      "Ensure service continuity even in regional outages or disasters.",
    icon: Globe,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "Compliance-Focused Design",
    description:
      "Align with HIPAA, ISO 27001, NDPR, NIST, and industry-specific standards.",
    icon: ShieldCheck,
    gradient: "from-indigo-500 to-blue-500",
  },
];

export const trainingFeatures = [
  {
    feature: "Phishing & BEC Simulations",
    description:
      "Realistic mock attacks to test and train against Business Email Compromise",
    icon: Mail,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    feature: "Role-Based Training Paths",
    description:
      "Customized content for HR, finance, IT, legal, and executive leadership",
    icon: Users,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    feature: "Behavioral Analytics",
    description:
      "Track learning retention and identify risky users for focused reinforcement",
    icon: BarChart,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    feature: "Gamified Learning",
    description:
      "Points, badges, leaderboards, and storytelling to drive engagement",
    icon: Award,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    feature: "Multilingual & Accessible",
    description: "Inclusive training available in major global languages",
    icon: Globe,
    gradient: "from-red-500 to-pink-500",
  },
  {
    feature: "Compliance-Aligned Content",
    description:
      "Aligns with ISO 27001, NIST, GDPR, HIPAA, and NDPR awareness requirements",
    icon: ClipboardCheck,
    gradient: "from-indigo-500 to-blue-500",
  },
];
