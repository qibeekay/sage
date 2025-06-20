import React from "react";
import image from "../../assets/threat4.jpg";
import SharedHero from "./sharedCompoment/SharedHero";
import SharedOverview from "./sharedCompoment/SharedOverview";
import { threatOverview } from "../../constants/overview";
import SharedSteps from "./sharedCompoment/SharedSteps";
import { threatIntelligenceApproach } from "../../constants/approach";
import SharedFeatures from "./sharedCompoment/SharedFeatures";
import { threatIntelFeatures } from "../../constants/features";
import SharedWhy from "./sharedCompoment/SharedWhy";
import GetStarted from "./sharedCompoment/GetStarted";
import { threatIntelligenceHuntingWhy } from "../../constants/whydetails";

const ThreatIntelService = () => {
  return (
    <div>
      {/* hero section */}
      <SharedHero
        title={
          <>
            <span>Threat Intelligence</span>
            <span>& Threat Hunting</span>
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
            <span>Benefits of Proactive</span>
            <span>Intelligence & Hunting</span>
          </>
        }
        description={
          <>
            <span>
              In today’s threat landscape, traditional security tools can no
              longer keep up with adversaries who use stealth, speed, and
              sophisticated techniques to breach defenses. Organizations need
              more than reactive alerts — they need actionable intelligence and
              the ability to proactively hunt down threats before they cause
              damage.
            </span>
            <span>
              Our Threat Intelligence & Threat Hunting service combines human
              expertise with AI-driven insights to expose advanced threats
              hiding within your environment. We go beyond signatures and IOCs —
              diving deep into attacker behavior, adversary tactics, and
              indicators of compromise to stop attacks at every stage of the
              kill chain.
            </span>
          </>
        }
        features={threatOverview}
      />

      {/* timeline */}
      <SharedSteps
        title={
          <>
            <span>Our Approach to</span>
            <span>Threat Intelligence</span>
          </>
        }
        description="We combine strategic, operational, and tactical threat intelligence with deep threat hunting capabilities to identify:"
        badgeText="Our Process"
        timelineItems={threatIntelligenceApproach}
      />

      {/* features */}
      <SharedFeatures
        title={
          <>
            <span>Key Features of</span>
            <span>Threat Intelligence & Hunting</span>
          </>
        }
        description="Comprehensive capabilities designed to give you complete visibility into your security posture."
        badgeText="Service Features"
        features={threatIntelFeatures}
      />

      {/* why us */}
      <SharedWhy
        title={
          <>
            <span>Why Choose Us for</span>
            <span>Intelligence & Hunting</span>
          </>
        }
        description="Experience the difference of working with cybersecurity experts who understand your business."
        badgeText="Why us?"
        features={threatIntelligenceHuntingWhy}
      />

      {/* get started */}
      <GetStarted />
    </div>
  );
};

export default ThreatIntelService;
