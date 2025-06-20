import React from "react";
import image from "../../assets/incident2.jpg";
import SharedHero from "./sharedCompoment/SharedHero";
import SharedOverview from "./sharedCompoment/SharedOverview";
import SharedSteps from "./sharedCompoment/SharedSteps";
import { incidentOverview } from "../../constants/overview";
import { incidentResponseMethodology } from "../../constants/approach";
import SharedFeatures from "./sharedCompoment/SharedFeatures";
import { irForensicsFeatures } from "../../constants/features";
import SharedWhy from "./sharedCompoment/SharedWhy";
import { incidentResponseForensicsWhy } from "../../constants/whydetails";
import GetStarted from "./sharedCompoment/GetStarted";

const IrService = () => {
  return (
    <div>
      {/* hero section */}
      <SharedHero
        title={
          <>
            <span>Incident Response &</span>
            <span>Digital Forensics Services</span>
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
            <span>Benefits of Rapid</span>
            <span>& Professional Response</span>
          </>
        }
        description={
          <>
            <span>
              In today’s threat landscape, a breach is not a matter of if, but
              when. Timely detection, response, and analysis are critical to
              minimize damage, restore operations, and preserve evidence. Our
              Incident Response & Digital Forensics Services are designed to
              help organizations respond decisively to security events, contain
              threats, investigate root causes, and prevent future incidents.
            </span>
            <span>
              We combine proactive readiness planning with real-time incident
              response, advanced forensics, and post-incident recovery. Whether
              you’re facing a ransomware outbreak, insider threat, business
              email compromise, or cloud breach — our team is ready to engage
              within minutes through our Incident Response Retainer or On-Demand
              Emergency Response models.
            </span>
          </>
        }
        features={incidentOverview}
      />

      {/* timeline */}
      <SharedSteps
        title={
          <>
            <span>Our Methodology:</span>
            <span>From Detection to Recovery</span>
          </>
        }
        description="Our process follows a structured, proven framework based on NIST 800-61, SANS, and MITRE ATT&CK, ensuring efficient, thorough, and defensible incident handling."
        badgeText="Our Process"
        timelineItems={incidentResponseMethodology}
      />

      {/* features */}
      <SharedFeatures
        title={
          <>
            <span>Key Features of</span>
            <span>IR & Forensics Services</span>
          </>
        }
        description="Comprehensive capabilities designed to give you complete visibility into your security posture."
        badgeText="Service Features"
        features={irForensicsFeatures}
      />

      {/* why us */}
      <SharedWhy
        title={
          <>
            <span>Why Choose Us for</span>
            <span>Incident Response & Forensics?</span>
          </>
        }
        description="Experience the difference of working with cybersecurity experts who understand your business."
        badgeText="Why us?"
        features={incidentResponseForensicsWhy}
      />

      {/* get started */}
      <GetStarted />
    </div>
  );
};

export default IrService;
