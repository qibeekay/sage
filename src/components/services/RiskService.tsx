import React from "react";
import image from "../../assets/risk.jpg";
import SharedHero from "./sharedCompoment/SharedHero";
import SharedOverview from "./sharedCompoment/SharedOverview";
import SharedSteps from "./sharedCompoment/SharedSteps";
import { riskOverview } from "../../constants/overview";
import { riskAssessmentMethodology } from "../../constants/approach";
import SharedFeatures from "./sharedCompoment/SharedFeatures";
import { riskAssessmentFeatures } from "../../constants/features";
import SharedWhy from "./sharedCompoment/SharedWhy";
import { riskAssessmentsWhy } from "../../constants/whydetails";
import GetStarted from "./sharedCompoment/GetStarted";

const RiskService = () => {
  return (
    <div>
      {/* hero section */}
      <SharedHero
        title={
          <>
            <span>Cybersecurity Risk</span>
            <span>Assessment</span>
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
            <span>Why Conduct a</span>
            <span>Cyber Risk Assessment?</span>
          </>
        }
        description={
          <>
            <span>
              In today's hyper-connected digital environment, cybersecurity is
              no longer optional — it's a strategic priority. But before you can
              defend, you must understand what you’re defending against. Our
              Cybersecurity Risk Assessment Services provide a holistic analysis
              of your digital ecosystem to identify vulnerabilities, evaluate
              risks, and prioritize mitigation strategies based on business
              impact.
            </span>
            <span>
              Using global standards like NIST CSF, ISO 27001, and CIS Controls,
              we help organizations uncover gaps, measure maturity, and build a
              roadmap toward improved cyber resilience. Whether you're preparing
              for compliance, launching a new system, or safeguarding your
              operations, our assessments align security with your business
              goals.
            </span>
          </>
        }
        features={riskOverview}
      />

      {/* timeline */}
      <SharedSteps
        title={
          <>
            <span>Our Risk Assessment</span>
            <span> Methodology</span>
          </>
        }
        description="We follow a structured, framework-based approach that blends technical scanning, process audits, and stakeholder interviews to produce a 360° view of your cybersecurity posture."
        badgeText="Our Process"
        timelineItems={riskAssessmentMethodology}
      />

      {/* features */}
      <SharedFeatures
        title={
          <>
            <span>Key Features of Our</span>
            <span>Cyber Risk Assessments</span>
          </>
        }
        description="Comprehensive capabilities designed to give you complete visibility into your security posture."
        badgeText="Service Features"
        features={riskAssessmentFeatures}
      />

      {/* why us */}
      <SharedWhy
        title={
          <>
            <span>Why Choose Us for</span>
            <span>Risk Assessments?</span>
          </>
        }
        description="Experience the difference of working with cybersecurity experts who understand your business."
        badgeText="Why us?"
        features={riskAssessmentsWhy}
      />

      {/* get started */}
      <GetStarted />
    </div>
  );
};

export default RiskService;
