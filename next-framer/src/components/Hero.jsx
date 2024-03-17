"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen relative flex justify-center items-end">
      {/* Intro */}
      <motion.div
        whileInView={{
          x: [-50, 0],
          opacity: [0, 1],
          transition: {
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
        className="bg-slate-100 py-4 px-6 rounded-xl shadow-md absolute top-10 left-10 flex justify-center items-center gap-4"
      >
        <span className="text-4xl">👋</span>
        <div className="flex flex-col justify-center">
          <span className="text-sm text-gray-400 font-medium tracking-wide">
            Hi, I am
          </span>
          <span className="font-semibold text-5xl">Nishan</span>
        </div>
      </motion.div>

      {/* Profession */}

      <motion.div
        whileInView={{
          x: [-50, 0],
          opacity: [0, 1],
          transition: {
            duration: 0.2,
            ease: "easeInOut",
            delay: 0.4,
          },
        }}
        className="bg-slate-100 text-gray-400 py-4 px-6 rounded-xl shadow-md absolute top-40 left-28 flex justify-center items-center gap-4"
      >
        <span className="">Software Engineer</span>
      </motion.div>

      {/* Image Div */}

      <motion.div
        className="relative min-h-[85dvh] w-[30rem]"
        whileInView={{
          opacity: [0, 1],
          transition: {
            duration: 0.2,
            ease: "easeInOut",
            delay: 0.4,
          },
        }}
      >
        <Image src="/assets/hero.png" fill objectFit="cover" />
      </motion.div>
    </div>
  );
};

export default Hero;
