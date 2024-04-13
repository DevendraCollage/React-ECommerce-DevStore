import React, { useContext } from "react";
import HeroSection from "./Components/HeroSection";
import { useMyCustomHook } from "./context/productcontext";

const About = () => {
  const myName = useMyCustomHook();

  const data = {
    name: "DevStore ECommerce",
  };

  return (
    <>
      {myName.myName}
      <HeroSection myName={data} />
    </>
  );
};

export default About;
