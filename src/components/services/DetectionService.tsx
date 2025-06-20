import React from "react";
import image from "../../assets/detect.jpg";
import SharedHero from "./sharedCompoment/SharedHero";
import SharedSteps from "./sharedCompoment/SharedSteps";
import { mdrFrameworkApproach } from "../../constants/approach";
import SharedFeatures from "./sharedCompoment/SharedFeatures";
import { mdrPlatformFeatures } from "../../constants/features";
import SharedWhy from "./sharedCompoment/SharedWhy";
import GetStarted from "./sharedCompoment/GetStarted";
import { mdrWhy } from "../../constants/whydetails";
import SharedOverview from "./sharedCompoment/SharedOverview";
import { mdrServices } from "../../constants/overview";

const DetectionService = () => {
  return (
    <div>
      {/* hero section */}
      <SharedHero
        title={
          <>
            <span>Managed Detection &</span>
            <span>Response (MDR)</span>
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
            <span>MDR Unique?</span>
          </>
        }
        description={
          <>
            <span>
              In a world where cyberattacks are fast, stealthy, and relentless,
              traditional monitoring is not enough. You need real-time threat
              hunting, expert-driven analysis, and immediate response.
            </span>
            <span>
              Our Managed Detection & Response (MDR) service provides
              around-the-clock threat detection, investigation, and rapid
              containment — powered by elite cybersecurity analysts and
              AI-driven technology. From endpoints and networks to cloud
              workloads and SaaS apps, we monitor every signal, validate every
              alert, and take decisive action before damage is done. We don’t
              just notify — we neutralize.
            </span>
          </>
        }
        features={mdrServices}
      />

      {/* timeline */}
      <SharedSteps
        title={
          <>
            <span>Our MDR Framework: </span>
            <span>Detect. Investigate. Contain. Learn</span>
          </>
        }
        description="Whether you’re a fast-scaling startup or a regulated enterprise, we adapt our response to your industry, architecture, and risk profile."
        badgeText="Our Process"
        timelineItems={mdrFrameworkApproach}
      />

      {/* features */}
      <SharedFeatures
        title={
          <>
            <span>Key Capabilities of</span>
            <span>Our MDR Platform</span>
          </>
        }
        description="Comprehensive capabilities designed to give you complete visibility into your security posture."
        badgeText="Service Features"
        features={mdrPlatformFeatures}
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
        features={mdrWhy}
      />

      {/* get started */}
      <GetStarted />
    </div>
  );
};

export default DetectionService;
