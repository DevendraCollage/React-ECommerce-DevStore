import React from "react";
import HeroSection from "./Components/HeroSection";
import Service from "./Components/Service";
import Trusted from "./Components/Trusted";

const Home = () => {
  const data = {
    name: "DevStore",
  };
  return (
    <>
      <HeroSection myName={data} />;
      <Service />;
      <Trusted />;
    </>
  );
};

export default Home;
