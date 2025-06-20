import React from "react";
import image from "../../assets/firewall2.jpg";
import SharedHero from "./sharedCompoment/SharedHero";
import SharedOverview from "./sharedCompoment/SharedOverview";
import SharedSteps from "./sharedCompoment/SharedSteps";
import { networkSecurityApproach } from "../../constants/approach";
import SharedFeatures from "./sharedCompoment/SharedFeatures";
import { firewallFeatures } from "../../constants/features";
import SharedWhy from "./sharedCompoment/SharedWhy";
import { firewallNetworkSecurityWhy } from "../../constants/whydetails";
import GetStarted from "./sharedCompoment/GetStarted";
import { networkSecurityIssues } from "../../constants/overview";

const FirewallService = () => {
  return (
    <div>
      {/* hero section */}
      <SharedHero
        title={
          <>
            <span>Firewall & Network</span>
            <span>Security Management</span>
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
            <span>Why Network Security</span>
            <span>Still Fails</span>
          </>
        }
        description={
          <>
            <span>
              In today’s hybrid world of cloud-native systems, remote
              workforces, and IoT devices, your network is more exposed than
              ever. Attackers only need one weak point — but you need total
              visibility and control.
            </span>
            <span>
              Our Firewall & Network Security Management Services are designed
              to provide multi-layered, policy-driven protection across your
              entire infrastructure — cloud, on-premise, and hybrid. We
              implement and manage next-generation firewalls (NGFWs), intrusion
              detection and prevention systems (IDS/IPS), segmentation policies,
              VPN access, and more — all built for zero trust, resilience, and
              compliance.
            </span>
          </>
        }
        features={networkSecurityIssues}
      />

      {/* timeline */}
      <SharedSteps
        title={
          <>
            <span>Our Methodology:</span>
            <span>Defense at Every Layer</span>
          </>
        }
        description="We don't just “set it and forget it.” Our approach to firewall and network security is proactive, adaptive, and aligned with business risk."
        badgeText="Our Process"
        timelineItems={networkSecurityApproach}
      />

      {/* features */}
      <SharedFeatures
        title={
          <>
            <span>Key Features of</span>
            <span>Firewall & Network Security</span>
          </>
        }
        description="Comprehensive capabilities designed to give you complete visibility into your security posture."
        badgeText="Service Features"
        features={firewallFeatures}
      />

      {/* why us */}
      <SharedWhy
        title={
          <>
            <span>Why Choose Us for</span>
            <span>Firewall & Network Security?</span>
          </>
        }
        description="Experience the difference of working with cybersecurity experts who understand your business."
        badgeText="Why us?"
        features={firewallNetworkSecurityWhy}
      />

      {/* get started */}
      <GetStarted />
    </div>
  );
};

export default FirewallService;
