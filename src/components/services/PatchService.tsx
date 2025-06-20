import React from "react";
import image from "../../assets/patch.jpg";
import SharedHero from "./sharedCompoment/SharedHero";
import SharedOverview from "./sharedCompoment/SharedOverview";
import { vulnerabilityManagement } from "../../constants/overview";
import SharedSteps from "./sharedCompoment/SharedSteps";
import { remediationLifecycleApproach } from "../../constants/approach";
import SharedFeatures from "./sharedCompoment/SharedFeatures";
import SharedWhy from "./sharedCompoment/SharedWhy";
import { patchRemediationFeatures } from "../../constants/features";
import { remediationExpertiseWhy } from "../../constants/whydetails";
import GetStarted from "./sharedCompoment/GetStarted";

const PatchService = () => {
  return (
    <div>
      {/* hero section */}
      <SharedHero
        title={
          <>
            <span>Patch Management & </span>
            <span>Vulnerability Remediation</span>
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
            <span>What Makes Our </span>
            <span>Approach Different?</span>
          </>
        }
        description={
          <>
            <span>
              Every unpatched system is a door left cracked open for attackers.
              With new vulnerabilities emerging every day, organizations must go
              beyond discovery — they must act swiftly and intelligently. Our
              Patch Management & Vulnerability Remediation service ensures your
              systems are secure, compliant, and resilient through automated,
              policy-driven patching, prioritized vulnerability fixes, and
              comprehensive post-remediation validation.
            </span>
            <span>
              We combine threat intelligence, risk scoring, and automation to
              eliminate weaknesses before they're exploited — without disrupting
              business operations. Whether you're managing hundreds of endpoints
              or a complex hybrid cloud infrastructure, we help you stay several
              steps ahead of attackers — not one patch behind.
            </span>
          </>
        }
        features={vulnerabilityManagement}
      />

      {/* timeline */}
      <SharedSteps
        title={
          <>
            <span>Our Proven</span>
            <span>Remediation Lifecycle</span>
          </>
        }
        description="We don’t just push patches — we prioritize by risk, tailor by environment, and verify with precision. This service includes:"
        badgeText="Our Process"
        timelineItems={remediationLifecycleApproach}
      />

      {/* features */}
      <SharedFeatures
        title={
          <>
            <span>Key Capabilities of Our</span>
            <span>& Remediation Service</span>
          </>
        }
        description="Comprehensive capabilities designed to give you complete visibility into your security posture."
        badgeText="Service Features"
        features={patchRemediationFeatures}
      />

      {/* why us */}
      <SharedWhy
        title={
          <>
            <span>Why Clients Trust</span>
            <span>Our Remediation Expertise</span>
          </>
        }
        description="Experience the difference of working with cybersecurity experts who understand your business."
        badgeText="Why us?"
        features={remediationExpertiseWhy}
      />

      {/* get started */}
      <GetStarted />
    </div>
  );
};

export default PatchService;
