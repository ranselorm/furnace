import ProductHero from "@/components/ProductHero";
import TheCesarWay from "@/components/TheCesarWay";
import WhoIsCesar from "@/components/WhoIsCesar";
import React from "react";

const About = () => {
  return (
    <div>
      <ProductHero
        title="About"
        backgroundImage="/images/support.jpg"
        subtitle="Crafting Excellence and Comfort for Everyone"
      />
      <WhoIsCesar />
      <TheCesarWay />
    </div>
  );
};

export default About;
