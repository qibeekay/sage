import AboutHero from "../components/about/AboutHero";
import AboutUs from "../components/home/AboutUs";
import OurStories from "../components/about/OurStories";
import OurMission from "../components/about/OurMission";

const About = () => {
  return (
    <div className="text-neutral-300 antialiased">
      <AboutHero />
      <AboutUs />
      <OurStories />
      <OurMission />
    </div>
  );
};

export default About;
