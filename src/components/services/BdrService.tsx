import React from "react";
import image from "../../assets/cloud.jpg";
import SharedHero from "./sharedCompoment/SharedHero";
import SharedOverview from "./sharedCompoment/SharedOverview";
import { backupBenefits } from "../../constants/overview";
import SharedSteps from "./sharedCompoment/SharedSteps";
import { bdrServiceApproach } from "../../constants/approach";
import SharedFeatures from "./sharedCompoment/SharedFeatures";
import { bdrFeatures } from "../../constants/features";
import SharedWhy from "./sharedCompoment/SharedWhy";
import { backupDRPlanningWhy } from "../../constants/whydetails";
import GetStarted from "./sharedCompoment/GetStarted";

const BdrService = () => {
  return (
    <div>
      {/* hero section */}
      <SharedHero
        title={
          <>
            <span>Backup & Disaster</span>
            <span>Recovery Planning</span>
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
            <span>Backup & DR Planning</span>
          </>
        }
        description={
          <>
            <span>
              Cyberattacks, natural disasters, hardware failure, or simple human
              error — disruptions are inevitable. What defines your organization
              is how quickly and completely you recover.
            </span>
            <span>
              Our Backup & Disaster Recovery (BDR) Planning Services ensure that
              your data is protected, operations resume quickly, and your
              business remains resilient in the face of disruption. With a focus
              on business continuity, regulatory compliance, and cost-effective
              recovery strategies, we help you build a fail-proof safety net —
              tailored to your unique environment. Whether you're facing
              ransomware threats, accidental data loss, or regional disasters,
              we architect, implement, and test solutions that keep you
              operational, no matter what.
            </span>
          </>
        }
        features={backupBenefits}
      />

      {/* timeline */}
      <SharedSteps
        title={
          <>
            <span>Our BDR Service</span>
            <span>Methodology</span>
          </>
        }
        description=" Our methodology blends manual expert-driven testing with automated
      tools, ensuring a comprehensive security evaluation. Here’s how we do
      it:"
        badgeText="Our Process"
        timelineItems={bdrServiceApproach}
      />

      {/* features */}
      <SharedFeatures
        title={
          <>
            <span>Key Features of</span>
            <span>Our BDR Solutions</span>
          </>
        }
        description="Comprehensive capabilities designed to give you complete visibility into your security posture."
        badgeText="Service Features"
        features={bdrFeatures}
      />

      {/* why us */}
      <SharedWhy
        title={
          <>
            <span>Why Choose Us for</span>
            <span>Backup & DR Planning?</span>
          </>
        }
        description="Experience the difference of working with cybersecurity experts who understand your business."
        badgeText="Why us?"
        features={backupDRPlanningWhy}
      />

      {/* get started */}
      <GetStarted />
    </div>
  );
};

export default BdrService;
