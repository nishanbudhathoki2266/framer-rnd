"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionContainer from "./containers/SectionContainer";
import { Container } from "postcss";
import GridContainer from "./containers/GridContainer";

//   whileInView={{
//   x: [-50, 0],
//   opacity: [0, 1],
//   transition: {
//     duration: 0.4,
//     ease: "easeInOut",
//   },
// }}

const Hero = () => {
  return (
    <SectionContainer
      id="hero"
      className="min-h-screen flex justify-center items-end bg-gradient-to-br from-zinc-400 to-slate-200"
    >
      <GridContainer className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5">
        <div className="relative col-span-full aspect-square">
          <Image
            alt="AI generated image of Nishan Budhathoki"
            src="/assets/hero.png"
            quality={100}
            fill
            objectFit="contain"
          />
        </div>
      </GridContainer>
    </SectionContainer>
  );
};

export default Hero;
