import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Define props interface for SpotlightButton
interface SpotlightButtonProps {
  children: React.ReactNode;
}

export const AnimeBtn: React.FC<SpotlightButtonProps> = ({ children }) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const [glowPosition, setGlowPosition] = useState(80); // Start closer to the right

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!btnRef.current || !spanRef.current) return;

      const { width } = btnRef.current.getBoundingClientRect();
      const offset = e.offsetX;
      const leftPercent = (offset / width) * 100; // Calculate position as percentage

      setGlowPosition(leftPercent); // Update glow position state
      spanRef.current.animate(
        { left: `${leftPercent}%` },
        { duration: 250, fill: "forwards" }
      );
    };

    const handleMouseLeave = () => {
      if (!spanRef.current) return;

      setGlowPosition(80); // Reset to center on mouse leave
      spanRef.current.animate(
        { left: "80%" },
        { duration: 500, fill: "forwards" }
      );
    };

    const button = btnRef.current;
    if (button) {
      button.addEventListener("mousemove", handleMouseMove);
      button.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (button) {
        button.removeEventListener("mousemove", handleMouseMove);
        button.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Calculate the glow's offset for the pseudo-element
  const glowOffset = `${glowPosition}%`;

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-[200px] overflow-hidden rounded-full border border-white/30 px-6 py-3 cursor-pointer text-sm font-bold bg-white text-gray-800"
    >
      <span className="pointer-events-none relative z-10 capitalize tracking-wide">
        {children}
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-y-[50%] -translate-x-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(77,140,255,0.8)_0%,transparent_70%)]"
      />
      {/* Pseudo-element for localized border glow */}
      <span
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: `0 0 15px 5px rgba(77, 140, 255, ${
            Math.abs(50 - glowPosition) / 50
          })`,
          background: `radial-gradient(circle at ${glowOffset} 50%, rgba(77, 140, 255, 0.5), transparent 50%)`,
          mixBlendMode: "overlay",
          opacity: glowPosition < 25 || glowPosition > 75 ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </motion.button>
  );
};
