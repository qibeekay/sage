import React, { useState } from "react";
import logo from "../../assets/sage-white-icon.png";
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";
import { Btn } from "./Btn";
import { AnimeBtn } from "./AnimeBtn";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // toggle hamburer menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggles the services sub-dropdown within the mobile menu
  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  const services = [
    { name: "Penetration Testing", path: "/services/penetration-testing" },
    {
      name: "Physical Security Assessment",
      path: "/services/physical-security-assessment",
    },
    {
      name: "Backup and Disaster Recovery",
      path: "/services/backup-and-disaster",
    },
    {
      name: "Cloud Security Monitoring",
      path: "/services/cloud-security-monitoring",
    },
    {
      name: "Compliance Readiness and Auditing",
      path: "/services/compliance-readiness-and-auditing",
    },
    {
      name: "Managed Detection and Response",
      path: "/services/managed-detection-and-response",
    },
    {
      name: "Email Security and Anti-Phishing",
      path: "/services/email-security-and-antiphising",
    },
    {
      name: "Endpoint Detection and Response",
      path: "/services/endpoint-detection-and-response",
    },
    {
      name: "Firewall and Network Security",
      path: "/services/firework-and-network",
    },
    { name: "Incident Response", path: "/services/incident-response" },
    { name: "Patch Management", path: "/services/patch-management" },
    { name: "Security Policy Development", path: "/services/security-policy" },
    {
      name: "Data Protection and Privacy",
      path: "/services/data-protection-and-privacy",
    },
    {
      name: "Cybersecurity Risk Assessment",
      path: "/services/cybersecurity-risk-assessment",
    },
    {
      name: "Security Operations Center",
      path: "/services/security-operations-center",
    },
    {
      name: "Threat Intelligence and Hunting",
      path: "/services/threat-intelligence-and-hunting",
    },
    {
      name: "Cyber Hygiene Training",
      path: "/services/cyber-hygiene-training",
    },
    {
      name: "Third Party Vendor Security",
      path: "/services/third-party-vendor",
    },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl px-4 py-3 mx-auto flex justify-between items-center rounded-xl border border-neutral-800 relative">
        {/* left logo */}
        <a href="/">
          <img src={logo} alt="logo" className="w-14 h-10" />
        </a>

        {/* center links */}
        <div className="hidden md:flex space-x-6 items-center relative">
          <a href="/" className="hover:text-neutral-200">
            Home
          </a>
          <a href="/about" className="hover:text-neutral-200">
            About
          </a>
          <div
            className="relative"
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            <button className="hover:text-neutral-200 flex items-center">
              Services
            </button>
          </div>
          <a href="/academy" className="hover:text-neutral-200">
            Academy
          </a>
        </div>

        {/* right buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <div className="w-full">
            <AnimeBtn>Consult Us Now</AnimeBtn>
          </div>
        </div>

        {/* hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none cursor-pointer"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isServicesHovered && (
          <motion.div
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full mt-2 w-full max-w-7xl mx-auto bg-black/60 backdrop-blur-md rounded-xl border border-neutral-800 z-40 p-10"
          >
            <div className="w-full h-8 bg-transparent absolute -top-8"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.path}
                  className="text-lg text-neutral-500 hover:text-neutral-200 pl-2"
                  onClick={toggleMenu}
                >
                  {service.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2">
          <div className="flex flex-col space-y-4">
            <a
              href="/"
              className="text-neutral-500 hover:text-neutral-200"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="/about"
              className="text-neutral-500 hover:text-neutral-200"
              onClick={toggleMenu}
            >
              About
            </a>
            <div className="flex flex-col space-y-3">
              <span
                className="font-medium cursor-pointer text-neutral-500 hover:text-neutral-200"
                onClick={toggleMobileServices}
              >
                Services
              </span>
              <AnimatePresence>
                {isMobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 mt-2 border-l border-neutral-700 pl-4 space-y-2 overflow-hidden"
                  >
                    {services.map((service) => (
                      <a
                        key={service.path}
                        href={service.path}
                        className="block text-neutral-500 hover:text-neutral-100 transition-colors duration-200"
                        onClick={() => setIsOpen(false)} // Close both mobile menu and sub-dropdown on link click
                      >
                        {service.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a
              href="/academy"
              className="hover:text-neutral-200"
              onClick={toggleMenu}
            >
              Academy
            </a>
            <a
              href="#"
              className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
              onClick={toggleMenu}
            >
              Get a Demo
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
