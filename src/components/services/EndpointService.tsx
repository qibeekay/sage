import React from "react";
import SharedHero from "./sharedCompoment/SharedHero";
import image from "../../assets/node4.jpg";
import SharedOverview from "./sharedCompoment/SharedOverview";
import SharedSteps from "./sharedCompoment/SharedSteps";
import { endpointOverview } from "../../constants/overview";
import { endpointDefenseApproach } from "../../constants/approach";
import SharedFeatures from "./sharedCompoment/SharedFeatures";
import { edrFeatures } from "../../constants/features";
import SharedWhy from "./sharedCompoment/SharedWhy";
import { edrSolutionWhy } from "../../constants/whydetails";
import GetStarted from "./sharedCompoment/GetStarted";

const EndpointService = () => {
  return (
    <div>
      {/* hero section */}
      <SharedHero
        title={
          <>
            <span>Endpoint Detection</span>
            <span>& Response (EDR)</span>
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
              Endpoints — including laptops, servers, mobile devices, and cloud
              workloads — are the frontline targets of most cyberattacks. With
              traditional antivirus solutions unable to keep up with modern
              threats like ransomware, fileless malware, and zero-day exploits,
              organizations need a proactive, intelligent, and responsive
              solution
            </span>
            <span>
              Our EDR service delivers real-time threat visibility, automated
              detection, and rapid incident response directly at the endpoint
              level. Powered by machine learning, behavioral analysis, and
              threat intelligence, our solution gives you total control over
              every endpoint, whether it’s on-premises, remote, or in the cloud.
            </span>
          </>
        }
        features={endpointOverview}
      />

      {/* timeline */}
      <SharedSteps
        title={
          <>
            <span>Our Approach to</span>
            <span>Endpoint Threat Defense</span>
          </>
        }
        description="We combine best-in-class EDR platforms with expert-led management to give you a holistic, proactive defense that not only detects and responds, but learns and evolves with every incident."
        badgeText="Our Process"
        timelineItems={endpointDefenseApproach}
      />

      {/* features */}
      <SharedFeatures
        title={
          <>
            <span>Key Features of</span>
            <span>EDR Service</span>
          </>
        }
        description="Comprehensive capabilities designed to give you complete visibility into your security posture."
        badgeText="Service Features"
        features={edrFeatures}
      />

      {/* why us */}
      <SharedWhy
        title={
          <>
            <span>What Makes Our</span>
            <span>EDR Solution Stand Out</span>
          </>
        }
        description="Experience the difference of working with cybersecurity experts who understand your business."
        badgeText="Why us?"
        features={edrSolutionWhy}
      />

      {/* get started */}
      <GetStarted />
    </div>
  );
};

export default EndpointService;
