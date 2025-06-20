import React from "react";
import image from "../../assets/policy2.jpg";
import SharedHero from "./sharedCompoment/SharedHero";
import SharedOverview from "./sharedCompoment/SharedOverview";
import SharedSteps from "./sharedCompoment/SharedSteps";
import { securityOverview } from "../../constants/overview";
import SharedFeatures from "./sharedCompoment/SharedFeatures";
import { policyDevelopmentApproach } from "../../constants/approach";
import SharedWhy from "./sharedCompoment/SharedWhy";
import { policyServiceFeatures } from "../../constants/features";
import { policyProcedureDevelopmentWhy } from "../../constants/whydetails";
import GetStarted from "./sharedCompoment/GetStarted";

const PolicyService = () => {
  return (
    <div>
      {/* hero section */}
      <SharedHero
        title={
          <>
            <span>Security Policy & </span>
            <span>Procedures Matter</span>
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
            <span>Why Policies & </span>
            <span>Security Testing</span>
          </>
        }
        description={
          <>
            <span>
              Robust cybersecurity begins with clear, enforceable, and
              business-aligned policies. Our Security Policy & Procedures
              Development Services empower organizations to create, formalize,
              and enforce security governance across people, processes, and
              technology.
            </span>
            <span>
              We work with you to define a tailored, compliant, and
              operationally relevant policy framework that reflects your risk
              posture, industry standards, and regulatory requirements — from
              NDPR and ISO 27001 to NIST, PCI-DSS, HIPAA, and beyond. Whether
              you're building from scratch or refining outdated policies, we
              ensure your organization is equipped with the right security
              documentation to support secure behavior, reduce risk, and stand
              up to audits.
            </span>
          </>
        }
        features={securityOverview}
      />

      {/* timeline */}
      <SharedSteps
        title={
          <>
            <span>Our Policy</span>
            <span>Development Methodology</span>
          </>
        }
        description="We combine deep regulatory knowledge with practical experience to deliver policies that are compliant, implementable, and culturally aligned."
        badgeText="Our Process"
        timelineItems={policyDevelopmentApproach}
      />

      {/* features */}
      <SharedFeatures
        title={
          <>
            <span>Key Features of</span>
            <span>Our Policy Services</span>
          </>
        }
        description="Comprehensive capabilities designed to give you complete visibility into your security posture."
        badgeText="Service Features"
        features={policyServiceFeatures}
      />

      {/* why us */}
      <SharedWhy
        title={
          <>
            <span>Why Choose Us?</span>
          </>
        }
        description="Experience the difference of working with cybersecurity experts who understand your business."
        badgeText="Why us?"
        features={policyProcedureDevelopmentWhy}
      />

      {/* get started */}
      <GetStarted />
    </div>
  );
};

export default PolicyService;
