import React from "react";
import HeroSection from "./Components/HeroSection";
import Service from "./Components/Service";
import Trusted from "./Components/Trusted";
import FeatureProducts from "./Components/FeatureProducts";

const Home = () => {
  const data = {
    name: "DevStore",
  };
  return (
    <>
      <HeroSection myName={data} />;
      <FeatureProducts />
      <Service />;
      <Trusted />;
    </>
  );
};

export default Home;
