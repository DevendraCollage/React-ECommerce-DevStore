import React from "react";
import HeroSection from "./Components/HeroSection";

const Home = () => {
  const data = {
    name: "DevStore",
  };
  return <HeroSection myName={data} />;
};

export default Home;
