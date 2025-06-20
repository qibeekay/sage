import React from "react";
import image from "../../assets/tpv.jpg";
import SharedHero from "./sharedCompoment/SharedHero";
import SharedOverview from "./sharedCompoment/SharedOverview";
import SharedSteps from "./sharedCompoment/SharedSteps";
import SharedFeatures from "./sharedCompoment/SharedFeatures";
import { vendorRiskApproach } from "../../constants/approach";
import { tpvrmFeatures } from "../../constants/features";
import SharedWhy from "./sharedCompoment/SharedWhy";
import GetStarted from "./sharedCompoment/GetStarted";
import { thirdPartyRiskWhy } from "../../constants/whydetails";
import { vendorRisks } from "../../constants/overview";

const VendorService = () => {
  return (
    <div>
      {/* hero section */}
      <SharedHero
        title={
          <>
            <span>Third-Party Vendor</span>
            <span>Risk Management Services</span>
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
            <span>The Hidden Risks of</span>
            <span>Unmanaged Vendors</span>
          </>
        }
        description={
          <>
            <span>
              You can have the strongest cybersecurity fortress — but if your
              vendors leave a backdoor open, attackers will find their way in.
              Today’s businesses are deeply interconnected. From cloud platforms
              to payment processors and marketing tools, third parties are
              critical — yet often the least secure parts of your ecosystem. Our
              Third-Party Vendor Risk Management (TPVRM) service gives you
              full-spectrum visibility and control over the security risks that
              come with vendor relationships.
            </span>
            <span>
              We don’t just provide checklists — we help you build, automate,
              and scale a mature vendor risk program that’s transparent,
              compliant, and future-proof. Whether you're onboarding a new SaaS
              tool, undergoing a compliance audit, or already managing hundreds
              of vendors, we bring clarity to the chaos.
            </span>
          </>
        }
        features={vendorRisks}
      />

      {/* timeline */}
      <SharedSteps
        title={
          <>
            <span>Our Approach to</span>
            <span>Vendor Risk Management</span>
          </>
        }
        description="We design and implement a risk-first, lifecycle-based approach to third-party risk management — aligning cybersecurity, procurement, legal, and compliance functions around one shared goal: secure partnerships."
        badgeText="Our Process"
        timelineItems={vendorRiskApproach}
      />

      {/* features */}
      <SharedFeatures
        title={
          <>
            <span>Key Features of</span>
            <span>Our TPVRM Services</span>
          </>
        }
        description="Comprehensive capabilities designed to give you complete visibility into your security posture."
        badgeText="Service Features"
        features={tpvrmFeatures}
      />

      {/* why us */}
      <SharedWhy
        title={
          <>
            <span>Why Choose Us for</span>
            <span>Third-Party Risk?</span>
          </>
        }
        description="Experience the difference of working with cybersecurity experts who understand your business."
        badgeText="Why us?"
        features={thirdPartyRiskWhy}
      />

      {/* get started */}
      <GetStarted />
    </div>
  );
};

export default VendorService;
