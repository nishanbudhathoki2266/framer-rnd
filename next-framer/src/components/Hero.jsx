"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionContainer from "./containers/SectionContainer";

const Hero = () => {
  return (
    <SectionContainer
      id="hero"
      className="relative pt-10 flex justify-center bg-gradient-to-br from-zinc-400 to-slate-200"
    >
      <motion.div
        className="relative flex-1 bg-red-200"
        whileInView={{
          // x: [-50, 0],
          opacity: [0, 1],
          transition: {
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
      >
        Hello FCK
      </motion.div>
      <motion.div
        className="relative flex-[2] lg:flex-1 aspect-square"
        whileInView={{
          // x: [-50, 0],
          opacity: [0, 1],
          transition: {
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
      >
        <Image
          alt="AI generated image of Nishan Budhathoki"
          src="/assets/hero.png"
          quality={100}
          fill
          objectFit="contain"
        />
      </motion.div>
      <motion.div
        className="relative flex-1 bg-red-200"
        whileInView={{
          // x: [-50, 0],
          opacity: [0, 1],
          transition: {
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
      >
        Hello FCK
      </motion.div>
    </SectionContainer>
  );
};

export default Hero;
