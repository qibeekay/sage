import React from "react";
import { Globe } from "lucide-react";
import {
  RiWhatsappFill,
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterXFill,
  RiInstagramFill,
} from "react-icons/ri";
import logo from "../../assets/sage-black.png";

const links = {
  explore: [
    { label: "College Search", url: "#" },
    { label: "Scouting Reports", url: "#" },
    { label: "Open Tryouts", url: "#" },
    { label: "Blog", url: "#" },
  ],
  about: [
    { label: "Contact Us", url: "#" },
    { label: "Leadership", url: "#" },
  ],
  upcoming: [
    { label: "Scholarship", url: "#" },
    { label: "NIL", url: "#" },
  ],
  bottom: [
    { label: "Cookie Settings", url: "#" },
    { label: "Privacy Policy", url: "#" },
    { label: "Terms & Conditions", url: "#" },
  ],
  socialLinks: [
    { icon: RiTwitterXFill, href: "#", label: "twitter" },
    { icon: RiInstagramFill, href: "#", label: "instagram" },
    { icon: RiFacebookFill, href: "#", label: "facebook" },
    { icon: RiLinkedinFill, href: "#", label: "linkedin" },
    { icon: RiWhatsappFill, href: "#", label: "message" },
  ],
};

const FooterBase = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-[17rem]">
      <div className="flex flex-col lg:flex-row justify-between gap-20 border-b border-black/10 pb-10 font-medium">
        {/* about company */}
        <div className="max-w-[30rem]">
          {/* logo */}
          <div>
            <div className="max-w-[20rem]">
              <img src={logo} className="w-full h-full object-cover" alt="" />
            </div>
          </div>

          {/* short description */}
          <div className="mt-7">
            <p>
              SAGE Consolidated is a forward-thinking cybersecurity consulting
              company dedicated to protecting organizations across Africa and
              beyond from evolving digital threats.
            </p>
          </div>
        </div>

        {/* links */}
        <div className="w-full flex flex-wrap justify-between lg:justify-end md:items-start gap-10 lg:gap-[5rem] font-medium">
          <div className="">
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2 text-muted-foreground">
              {links.explore.map((l) => (
                <li key={l.label}>
                  <a href={l.url} className="hover:underline transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2 text-muted-foreground">
              {links.about.map((l) => (
                <li key={l.label}>
                  <a href={l.url} className="hover:underline transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold text-white mb-4">Upcoming</h3>
            <ul className="space-y-2 text-muted-foreground">
              {links.upcoming.map((l) => (
                <li key={l.label}>
                  <a href={l.url} className="hover:underline transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs text-muted-foreground relative z-10 py-10 font-medium">
        <div className="flex items-center space-x-2">
          <span>2025 © ScoutUS College</span>
          <span className="hidden md:block">·</span>
          <div className="flex items-center ml-0 md:ml-2">
            <Globe className="inline mr-1 w-4 h-4" />
            <select className="bg-transparent border-none focus:outline-none text-xs">
              <option>English</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-2">
          {links.socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="rounded-full transition cursor-pointer bg-dark text-ashGray hover:text-white duration-300 ease-in-out p-2"
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <span>
            Designed by{" "}
            <a
              href=""
              target="_blank"
              className="cursor-pointer font-bold border-b border-black"
            >
              Qi_beekay
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default FooterBase;
