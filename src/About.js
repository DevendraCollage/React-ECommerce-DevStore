import React from "react";
import HeroSection from "./Components/HeroSection";

const About = () => {
  const data = {
    name: "DevStore ECommerce",
  };
  return <HeroSection myName={data} />;
};

export default About;
