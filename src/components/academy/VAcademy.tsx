import React from "react";
import AcademyHero from "./AcademyHero";
import AcademyExplained from "./AcademyExplained";
import AcademyAudience from "./AcademyAudience";
import AcademyExperience from "./AcademyExperience";
import AcademyWhy from "./AcademyWhy";
import AcademyWhat from "./AcademyWhat";

const VAcademy = () => {
  return (
    <div>
      {/* hero section */}
      <AcademyHero />

      {/* Future in tech */}
      <AcademyExplained />

      {/* who it s for */}
      <AcademyAudience />

      {/* how it will go */}
      <AcademyExperience />

      {/* why choose us */}
      <AcademyWhy />

      {/* what you gain */}
      <AcademyWhat />
    </div>
  );
};

export default VAcademy;
