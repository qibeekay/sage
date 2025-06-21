import React from "react";
import AcademyHero from "./AcademyHero";
import AcademyExplained from "./AcademyExplained";
import AcademyAudience from "./AcademyAudience";

const VAcademy = () => {
  return (
    <div>
      {/* hero section */}
      <AcademyHero />

      {/* Future in tech */}
      <AcademyExplained />

      {/* who it s for */}
      <AcademyAudience />
    </div>
  );
};

export default VAcademy;
