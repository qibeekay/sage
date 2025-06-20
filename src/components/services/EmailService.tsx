import React from "react";
import image from "../../assets/phish.jpg";
import SharedHero from "./sharedCompoment/SharedHero";
import SharedOverview from "./sharedCompoment/SharedOverview";
import { emailSecurityOutcomes } from "../../constants/overview";
import SharedSteps from "./sharedCompoment/SharedSteps";
import { emailSecurityApproach } from "../../constants/approach";
import SharedFeatures from "./sharedCompoment/SharedFeatures";
import { emailSecurityFeatures } from "../../constants/features";
import SharedWhy from "./sharedCompoment/SharedWhy";
import { emailProtectionSuiteWhy } from "../../constants/whydetails";
import GetStarted from "./sharedCompoment/GetStarted";

const EmailService = () => {
  return (
    <div>
      {/* hero section */}
      <SharedHero
        title={
          <>
            <span>Email Security</span>
            <span>and Antiphising</span>
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
            <span>Benefits of</span>
            <span>Email Security</span>
          </>
        }
        description={
          <>
            <span>
              Email remains the #1 attack vector for cybercriminals — whether
              it's phishing, business email compromise (BEC), malware delivery,
              or social engineering. A single misplaced click can lead to data
              breaches, financial loss, and brand damage.
            </span>
            <span>
              Our Email Security & Anti-Phishing Solutions deliver advanced,
              multi-layered protection that stops threats before they reach the
              inbox, educates users in real-time, and empowers organizations to
              detect, respond, and recover from email-based attacks — all while
              ensuring regulatory compliance and zero business disruption.
            </span>
          </>
        }
        features={emailSecurityOutcomes}
      />

      {/* timeline */}
      <SharedSteps
        title={
          <>
            <span>How Our Email</span>
            <span>Security Stack Works</span>
          </>
        }
        description=" Our methodology blends manual expert-driven testing with automated
      tools, ensuring a comprehensive security evaluation. Here’s how we do
      it:"
        badgeText="Our Process"
        timelineItems={emailSecurityApproach}
      />

      {/* features */}
      <SharedFeatures
        title={
          <>
            <span>Features of</span>
            <span>Email Security Service</span>
          </>
        }
        description="Comprehensive capabilities designed to give you complete visibility into your security posture."
        badgeText="Service Features"
        features={emailSecurityFeatures}
      />

      {/* why us */}
      <SharedWhy
        title={
          <>
            <span>Why Choose Our</span>
            <span>Email Protection Suite?</span>
          </>
        }
        description="Experience the difference of working with cybersecurity experts who understand your business."
        badgeText="Why us?"
        features={emailProtectionSuiteWhy}
      />

      {/* get started */}
      <GetStarted />
    </div>
  );
};

export default EmailService;
