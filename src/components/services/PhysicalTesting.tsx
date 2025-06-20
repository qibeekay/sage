import React from "react";
import image from "../../assets/sheild3.jpg";
import SharedWhy from "./sharedCompoment/SharedWhy";
import SharedFeatures from "./sharedCompoment/SharedFeatures";
import GetStarted from "./sharedCompoment/GetStarted";
import SharedSteps from "./sharedCompoment/SharedSteps";
import SharedOverview from "./sharedCompoment/SharedOverview";
import SharedHero from "./sharedCompoment/SharedHero";
import { physicalOverview } from "../../constants/overview";
import { physicalSecurityApproach } from "../../constants/approach";
import { physicalSecurityFeatures } from "../../constants/features";
import { physicalRedTeamingWhy } from "../../constants/whydetails";

const PhysicalTesting = () => {
  return (
    <div>
      {/* hero section */}
      <SharedHero
        title={
          <>
            <span>Physical Security</span>
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
            <span>Benefits of Proactive</span>
            <span>Security Testing</span>
          </>
        }
        description={
          <>
            <span>
              While organizations invest heavily in digital security, physical
              access remains one of the most overlooked and exploited
              vulnerabilities. A single unlocked door, untrained receptionist,
              or misplaced access badge can compromise even the most
              sophisticated cybersecurity framework.
            </span>
            <span>
              Our Physical Security Assessment is a real-world test of your
              facility’s physical controls, personnel awareness, and access
              management protocols. Using Red Team tradecraft, we simulate
              unauthorized entries, insider threats, and social engineering
              techniques to identify weaknesses that adversaries could exploit
              to gain physical access to critical infrastructure or sensitive
              information.
            </span>
          </>
        }
        features={physicalOverview}
      />

      {/* timeline */}
      <SharedSteps
        title={
          <>
            <span>Our Approach to</span>
            <span>Identifying Vulnerabilities</span>
          </>
        }
        description=" Our methodology blends manual expert-driven testing with automated
          tools, ensuring a comprehensive security evaluation. Here’s how we do
          it:"
        badgeText="Our Process"
        timelineItems={physicalSecurityApproach}
      />

      {/* features */}
      <SharedFeatures
        title={
          <>
            <span>Key Features of</span>
            <span>Our Testing Services</span>
          </>
        }
        description="Comprehensive capabilities designed to give you complete visibility into your security posture."
        badgeText="Service Features"
        features={physicalSecurityFeatures}
      />

      {/* why us */}
      <SharedWhy
        title={
          <>
            <span>Why Choose Us for</span>
            <span>Penetration Testing?</span>
          </>
        }
        description="Experience the difference of working with cybersecurity experts who understand your business."
        badgeText="Why us?"
        features={physicalRedTeamingWhy}
      />

      {/* get started */}
      <GetStarted />
    </div>
  );
};

export default PhysicalTesting;
