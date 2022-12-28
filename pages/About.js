import React from "react";
import AboutHero from "./components/AboutHero";

import AboutSection from "./components/AboutSection";
const About = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full">
        <AboutHero />
      </div>
      <AboutSection />
    </div>
  );
};

export default About;
