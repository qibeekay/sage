import React from "react";
import image from "../../assets/soc1.jpg";
import SharedHero from "./sharedCompoment/SharedHero";
import SharedOverview from "./sharedCompoment/SharedOverview";
import { continuousMonitoringApproach } from "../../constants/approach";
import SharedSteps from "./sharedCompoment/SharedSteps";
import { socOverview } from "../../constants/overview";
import SharedFeatures from "./sharedCompoment/SharedFeatures";
import { socFeatures } from "../../constants/features";
import SharedWhy from "./sharedCompoment/SharedWhy";
import { socaasWhy } from "../../constants/whydetails";
import GetStarted from "./sharedCompoment/GetStarted";

const SocSevice = () => {
  return (
    <div>
      <div>
        {/* hero section */}
        <SharedHero
          title={
            <>
              <span>Security Operations</span>
              <span>Center (SOC)</span>
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
              <span>Benefits of Our</span>
              <span>Managed SOCaaS</span>
            </>
          }
          description={
            <>
              <span>
                In today’s threat landscape, cyberattacks are relentless,
                sophisticated, and constantly evolving. Most organizations —
                especially small and mid-sized enterprises — struggle to build
                and maintain a full-fledged 24/7 Security Operations Center
                (SOC) due to the high costs of infrastructure, staffing, and
                expertise.
              </span>
              <span>
                Our SOC as a Service (SOCaaS) provides you with around-the-clock
                threat monitoring, detection, incident response, and reporting —
                without the burden of managing your own in-house team. Delivered
                remotely by elite cybersecurity experts using world-class tools,
                our SOCaaS integrates seamlessly with your environment to
                protect, detect, and respond in real time.
              </span>
            </>
          }
          features={socOverview}
        />

        {/* timeline */}
        <SharedSteps
          title={
            <>
              <span>Our Approach to</span>
              <span>Continuous Security Monitoring</span>
            </>
          }
          description=" Our methodology blends manual expert-driven testing with automated
          tools, ensuring a comprehensive security evaluation. Here’s how we do
          it:"
          badgeText="Our Process"
          timelineItems={continuousMonitoringApproach}
        />

        {/* features */}
        <SharedFeatures
          title={
            <>
              <span>Key Features of</span>
              <span>SOC as a Service</span>
            </>
          }
          description="Comprehensive capabilities designed to give you complete visibility into your security posture."
          badgeText="Service Features"
          features={socFeatures}
        />

        {/* why us */}
        <SharedWhy
          title={
            <>
              <span>What Makes Our</span>
              <span>SOCaaS Different</span>
            </>
          }
          description="Experience the difference of working with cybersecurity experts who understand your business."
          badgeText="Why us?"
          features={socaasWhy}
        />

        {/* get started */}
        <GetStarted />
      </div>
    </div>
  );
};

export default SocSevice;
