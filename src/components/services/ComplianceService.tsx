import image from "../../assets/comp.jpg";
import { complianceAuditApproach } from "../../constants/approach";
import { complianceServiceFeatures } from "../../constants/features";
import { complianceOverview } from "../../constants/overview";
import { complianceServicesWhy } from "../../constants/whydetails";
import GetStarted from "./sharedCompoment/GetStarted";
import SharedFeatures from "./sharedCompoment/SharedFeatures";
import SharedHero from "./sharedCompoment/SharedHero";
import SharedOverview from "./sharedCompoment/SharedOverview";
import SharedSteps from "./sharedCompoment/SharedSteps";
import SharedWhy from "./sharedCompoment/SharedWhy";

const ComplianceService = () => {
  return (
    <div>
      {/* hero section */}
      <SharedHero
        title={
          <>
            <span>Compliance Readiness</span>
            <span>& Auditing Services</span>
          </>
        }
        badgeText="Service"
        imageSrc={image}
      />

      {/* overview section */}
      <SharedOverview
        badgeText="Our Advantages"
        title={
          <>
            <span>Why Compliance</span>
            <span>Readiness Matters</span>
          </>
        }
        description={
          <>
            <span>
              In today’s regulatory landscape, compliance isn’t optional — it’s
              critical for maintaining trust, avoiding fines, and operating
              securely in any industry. Our Compliance Readiness & Auditing
              Services are designed to help organizations assess, align, and
              demonstrate conformance with cybersecurity and data protection
              standards — both local and international.
            </span>
            <span>
              From ISO 27001, NIST, PCI-DSS, and HIPAA, to NDPR, GDPR, and SOC
              2, we provide end-to-end support: readiness assessments, gap
              analysis, policy development, control implementation, internal
              audits, and audit preparation. Whether you're preparing for a
              third-party audit or proactively improving your security
              governance, we tailor every engagement to your industry, data
              classification, and regulatory exposure.
            </span>
          </>
        }
        features={complianceOverview}
      />

      {/* timeline */}
      <SharedSteps
        title={
          <>
            <span>Our Compliance & Audit</span>
            <span>Readiness Methodology</span>
          </>
        }
        description="We take a structured, framework-aligned approach that ensures both compliance and security maturity, going beyond checkbox auditing to real operational value."
        badgeText="Our Process"
        timelineItems={complianceAuditApproach}
      />

      {/* features */}
      <SharedFeatures
        title={
          <>
            <span>Key Features of</span>
            <span>Our Compliance Services</span>
          </>
        }
        description="Comprehensive capabilities designed to give you complete visibility into your security posture."
        badgeText="Service Features"
        features={complianceServiceFeatures}
      />

      {/* why us */}
      <SharedWhy
        title={
          <>
            <span>Why Choose Us for</span>
            <span>Compliance Services?</span>
          </>
        }
        description="Experience the difference of working with cybersecurity experts who understand your business."
        badgeText="Why us?"
        features={complianceServicesWhy}
      />

      {/* get started */}
      <GetStarted />
    </div>
  );
};

export default ComplianceService;
