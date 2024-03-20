"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <div className="min-h-screen flex justify-center items-end bg-gradient-to-br from-zinc-400 to-slate-200">
      <div className="relative w-full aspect-square">
        <Image src="/assets/hero.png" quality={100} fill objectFit="contain" />
      </div>
    </div>
  );
};

export default Hero;
