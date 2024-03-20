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
    <div className="min-h-[300vh] bg-gray-400">
      {/* <Image src="/assets/hero.png" fill objectFit="cover" /> */}
    </div>
  );
};

export default Hero;
