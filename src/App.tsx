import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/shared/Footer";
import About from "./pages/About";
import Navbar from "./components/shared/Navbar";
import PenTesting from "./pages/services/PenTesting";
import PhysicalTestService from "./pages/services/PhysicalTestService";
import BdrPage from "./pages/services/BdrPage";
import CloudPage from "./pages/services/CloudPage";
import CompliancePage from "./pages/services/CompliancePage";
import DetectionPage from "./pages/services/DetectionPage";
import EmailPage from "./pages/services/EmailPage";
import EndpointPage from "./pages/services/EndpointPage";
import FirewallPage from "./pages/services/FirewallPage";
import IrServicePage from "./pages/services/IrServicePage";
import PatchPage from "./pages/services/PatchPage";
import PolicyPage from "./pages/services/PolicyPage";
import PrivacyPage from "./pages/services/PrivacyPage";
import RiskPage from "./pages/services/RiskPage";
import SocPage from "./pages/services/SocPage";
import ThreatIntelPage from "./pages/services/ThreatIntelPage";
import TrainingPage from "./pages/services/TrainingPage";
import VendorPage from "./pages/services/VendorPage";

function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/penetration-testing" element={<PenTesting />} />
        <Route
          path="/services/physical-security-assessment"
          element={<PhysicalTestService />}
        />
        <Route path="/services/backup-and-disaster" element={<BdrPage />} />
        <Route
          path="/services/cloud-security-monitoring"
          element={<CloudPage />}
        />
        <Route
          path="/services/compliance-readiness-and-auditing"
          element={<CompliancePage />}
        />
        <Route
          path="/services/managed-detection-and-response"
          element={<DetectionPage />}
        />
        <Route
          path="/services/email-security-and-antiphising"
          element={<EmailPage />}
        />
        <Route
          path="/services/endpoint-detection-and-response"
          element={<EndpointPage />}
        />
        <Route
          path="/services/firework-and-network"
          element={<FirewallPage />}
        />
        <Route path="/services/incident-response" element={<IrServicePage />} />
        <Route path="/services/patch-management" element={<PatchPage />} />
        <Route path="/services/security-policy" element={<PolicyPage />} />
        <Route
          path="/services/data-protection-and-privacy"
          element={<PrivacyPage />}
        />
        <Route
          path="/services/cybersecurity-risk-assessment"
          element={<RiskPage />}
        />
        <Route
          path="/services/security-operations-center"
          element={<SocPage />}
        />
        <Route
          path="/services/threat-intelligence-and-hunting"
          element={<ThreatIntelPage />}
        />
        <Route
          path="/services/cyber-hygiene-training"
          element={<TrainingPage />}
        />
        <Route path="/services/third-party-vendor" element={<VendorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
