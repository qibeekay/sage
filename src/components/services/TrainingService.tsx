import React from "react";
import image from "../../assets/train.jpg";
import SharedHero from "./sharedCompoment/SharedHero";
import SharedOverview from "./sharedCompoment/SharedOverview";
import { awareOverview } from "../../constants/overview";
import SharedSteps from "./sharedCompoment/SharedSteps";
import { cyberHygieneApproach } from "../../constants/approach";
import SharedFeatures from "./sharedCompoment/SharedFeatures";
import { trainingFeatures } from "../../constants/features";
import SharedWhy from "./sharedCompoment/SharedWhy";
import { cyberAwarenessWhy } from "../../constants/whydetails";
import GetStarted from "./sharedCompoment/GetStarted";

const TrainingService = () => {
  return (
    <div>
      {/* hero section */}
      <SharedHero
        title={
          <>
            <span>Cyber Hygiene</span>
            <span>Training & Awareness</span>
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
            <span>Benefits of Building a</span>
            <span>Security-Aware Culture</span>
          </>
        }
        description={
          <>
            <span>
              Most cyberattacks don’t begin with a firewall breach — they start
              with a click. Our Cyber Hygiene Training & Awareness Services
              equip your workforce with the knowledge, behaviors, and instincts
              needed to recognize threats, avoid mistakes, and become active
              participants in your cybersecurity strategy.
            </span>
            <span>
              From phishing simulations to dark web awareness and social
              engineering resistance, we deliver training that goes beyond
              lectures — it creates lasting behavioral change. Whether you're an
              SMB or a global enterprise, we tailor content to your industry,
              risk level, and workforce maturity.
            </span>
          </>
        }
        features={awareOverview}
      />

      {/* timeline */}
      <SharedSteps
        title={
          <>
            <span>Our Cyber</span>
            <span>Hygiene Framework</span>
          </>
        }
        description=" Our methodology blends manual expert-driven testing with automated
      tools, ensuring a comprehensive security evaluation. Here’s how we do
      it:"
        badgeText="Our Process"
        timelineItems={cyberHygieneApproach}
      />

      {/* features */}
      <SharedFeatures
        title={
          <>
            <span>Key Features of Our</span>
            <span>Training & Awareness Solutions</span>
          </>
        }
        description="Comprehensive capabilities designed to give you complete visibility into your security posture."
        badgeText="Service Features"
        features={trainingFeatures}
      />

      {/* why us */}
      <SharedWhy
        title={
          <>
            <span>Why Choose Us for</span>
            <span>Cyber Awareness?</span>
          </>
        }
        description="Experience the difference of working with cybersecurity experts who understand your business."
        badgeText="Why us?"
        features={cyberAwarenessWhy}
      />

      {/* get started */}
      <GetStarted />
    </div>
  );
};

export default TrainingService;
