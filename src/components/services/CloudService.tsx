import React from "react";
import image from "../../assets/csec1.jpg";
import SharedHero from "./sharedCompoment/SharedHero";
import { cloudOverview } from "../../constants/overview";
import SharedSteps from "./sharedCompoment/SharedSteps";
import { cloudThreatMonitoringApproach } from "../../constants/approach";
import SharedFeatures from "./sharedCompoment/SharedFeatures";
import SharedOverview from "./sharedCompoment/SharedOverview";
import { cloudSecurityFeatures } from "../../constants/features";
import SharedWhy from "./sharedCompoment/SharedWhy";
import GetStarted from "./sharedCompoment/GetStarted";
import { cloudSecurityMonitoringWhy } from "../../constants/whydetails";

const CloudService = () => {
  return (
    <div>
      {/* hero section */}
      <SharedHero
        title={
          <>
            <span>Cloud Security</span>
            <span>Monitoring Services</span>
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
            <span>Benefits 24/7</span>
            <span> Cloud Security Monitoring</span>
          </>
        }
        description={
          <>
            <span>
              The cloud enables agility, scalability, and innovation — but it
              also introduces complex and evolving security risks.
              Misconfigurations, identity threats, exposed data, and shadow
              assets can all leave your organization vulnerable. Our Cloud
              Security Monitoring Services provide continuous visibility,
              real-time threat detection, and automated response across your
              multi-cloud and hybrid environments.
            </span>
            <span>
              We leverage a combination of Cloud Security Posture Management
              (CSPM), Cloud Workload Protection (CWPP), SIEM/SOAR integrations,
              and AI-driven analytics to detect, analyze, and respond to threats
              at cloud scale. Whether you're using AWS, Azure, Google Cloud, or
              multi-cloud platforms, our tailored solutions help you maintain
              compliance, visibility, and security — 24/7.
            </span>
          </>
        }
        features={cloudOverview}
      />

      {/* timeline */}
      <SharedSteps
        title={
          <>
            <span>Our Approach to</span>
            <span>Cloud Threat Monitoring</span>
          </>
        }
        description="We follow a layered, cloud-native monitoring strategy, designed to secure all layers of your cloud architecture — from identity to infrastructure to data."
        badgeText="Our Process"
        timelineItems={cloudThreatMonitoringApproach}
      />

      {/* features */}
      <SharedFeatures
        title={
          <>
            <span>Key Features of</span>
            <span>Cloud Security Monitoring</span>
          </>
        }
        description="Comprehensive capabilities designed to give you complete visibility into your security posture."
        badgeText="Service Features"
        features={cloudSecurityFeatures}
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
        features={cloudSecurityMonitoringWhy}
      />

      {/* get started */}
      <GetStarted />
    </div>
  );
};

export default CloudService;
