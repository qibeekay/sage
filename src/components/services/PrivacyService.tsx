import React from "react";
import image from "../../assets/data2.jpg";
import SharedHero from "./sharedCompoment/SharedHero";
import SharedOverview from "./sharedCompoment/SharedOverview";
import SharedSteps from "./sharedCompoment/SharedSteps";
import { dataOverview } from "../../constants/overview";
import { privacyConsultingApproach } from "../../constants/approach";
import SharedFeatures from "./sharedCompoment/SharedFeatures";
import { policyServiceFeatures } from "../../constants/features";
import SharedWhy from "./sharedCompoment/SharedWhy";
import { dataProtectionConsultingWhy } from "../../constants/whydetails";
import GetStarted from "./sharedCompoment/GetStarted";

const PrivacyService = () => {
  return (
    <div>
      {/* hero section */}
      <SharedHero
        title={
          <>
            <span>Data Protection</span>
            <span>& Privacy Consulting</span>
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
            <span>Why Data Privacy</span>
            <span>Matters More Than Ever</span>
          </>
        }
        description={
          <>
            <span>
              With increasing regulatory scrutiny and the rising cost of data
              breaches, data protection is not just a legal requirement — it’s a
              competitive differentiator. Our Data Protection & Privacy
              Consulting Services help organizations understand, implement, and
              sustain privacy compliance aligned with global and local
              regulations such as NDPR, GDPR, CCPA, HIPAA, and more.
            </span>
            <span>
              We work closely with your teams to build a privacy-by-design
              framework, ensuring that your data handling practices — from
              collection to deletion — are secure, transparent, and compliant.
              Whether you're preparing for an audit, responding to a breach, or
              embedding privacy into product development, we provide actionable
              guidance, practical frameworks, and ongoing support.
            </span>
          </>
        }
        features={dataOverview}
      />

      {/* timeline */}
      <SharedSteps
        title={
          <>
            <span>Our Privacy</span>
            <span>Consulting Framework</span>
          </>
        }
        description="Our methodology blends legal compliance, cybersecurity, and business process optimization to provide comprehensive, implementable solutions."
        badgeText="Our Process"
        timelineItems={privacyConsultingApproach}
      />

      {/* features */}
      <SharedFeatures
        title={
          <>
            <span>Key Features of</span>
            <span>Our Privacy Services</span>
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
            <span>Why Choose Us for</span>
            <span>Data Protection Consulting?</span>
          </>
        }
        description="Experience the difference of working with cybersecurity experts who understand your business."
        badgeText="Why us?"
        features={dataProtectionConsultingWhy}
      />

      {/* get started */}
      <GetStarted />
    </div>
  );
};

export default PrivacyService;
