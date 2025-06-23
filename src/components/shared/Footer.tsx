import { section } from "motion/react-client";
import AcademyGetStarted from "../footer/AcademyGetStarted";
import FooterBase from "../footer/FooterBase";

const Footer = () => {
  return (
    <div className="relative">
      {/* get started */}
      <section className="absolute -top-[7rem] sm:-top-[13rem] w-full px-4 z-1">
        <AcademyGetStarted />
      </section>

      <footer className="relative bg-indigo-500 rounded-t-[45px] min-h-[90vh] mt-[10rem] overflow-hidden">
        {/* footer */}
        <FooterBase />

        {/* Huge Sage wordmark */}
        <div className="pointer-events-none select-none absolute w-full -bottom-4 xl:-bottom-16 z-0 overflow-hidden flex items-center justify-center">
          <span
            className="block text-[clamp(7rem,16vw,20rem)] font-black leading-none tracking-tight text-[#dadff7] opacity-[0.15] -skew-x-12 footer-text"
            style={{
              textShadow:
                "-0.3px -0.3px 0px rgba(0,0,0,0.6), 0.3px 0.3px 0px rgba(255,255,255,0.25)",
            }}
          >
            SAGE
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
