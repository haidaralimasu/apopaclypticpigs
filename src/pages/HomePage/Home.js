import React from "react";
import { homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from "./Data";
import { InfoSection, Pricing, Hero } from "../../components";

function Home() {
  return (
    <>
      <Hero />

      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
    </>
  );
}

export default Home;
