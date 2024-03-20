"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionContainer from "./containers/SectionContainer";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNode, FaReact } from "react-icons/fa";
import { LuMouse } from "react-icons/lu";

const Hero = () => {
  return (
    <SectionContainer
      id="hero"
      className="pt-10 relative flex justify-center bg-gradient-to-br from-zinc-400 to-slate-200"
    >
      <motion.div
        className="relative flex-1"
        whileInView={{
          x: [-100, 0],
          opacity: [0, 1],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
          },
        }}
      >
        <div className="bg-gray-200 flex justify-center items-center gap-2 py-3 px-4 absolute shadow-xl rounded-md top-1/4 left-1/2">
          <span className="text-3xl">👋</span>
          <div className="flex flex-col justify-center items-start">
            <span className="text-sm text-black/60">Hello, I am </span>
            <span className="text-5xl font-semibold tracking-wide">Nishan</span>
          </div>
        </div>

        <div className="bg-gray-200 flex justify-center items-center gap-2 py-3 px-4 absolute shadow-xl rounded-md top-1/2 left-2/3">
          <span className="text-md text-black/60 uppercase">
            Software Engineer
          </span>
        </div>
      </motion.div>
      <motion.div
        className="relative flex-[2] lg:flex-1 aspect-square"
        whileInView={{
          opacity: [0, 1],
          transition: {
            duration: 0.6,
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
        whileInView={{
          scale: [0.1, 1],
          transition: {
            duration: 0.9,
            ease: "easeInOut",
          },
        }}
        className="relative flex-1"
      >
        <span className="-left-32 bg-gray-200 p-4 rounded-full absolute shadow-xl hover:scale-105 transition-all top-8">
          <FaReact size={50} className="text-blue-400" />
        </span>
        <span className="-left-16 bg-gray-200 p-4 rounded-full absolute shadow-xl hover:scale-105 transition-all top-1/3">
          <TbBrandNextjs size={80} className="text-black/70" />
        </span>
        <span className="-left-16 bg-gray-200 p-4 rounded-full absolute shadow-xl hover:scale-105 transition-all top-3/4">
          <FaNode size={60} className="text-green-700" />
        </span>
      </motion.div>

      {/* Mouse scroll  */}
      <motion.span
        className="absolute left-1/3 bottom-4"
        animate={{
          bottom: ["20px", "4px"],
          opacity: [1, 0.1],
        }}
        transition={{
          duration: 1.3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <LuMouse size={40} />
      </motion.span>
    </SectionContainer>
  );
};

export default Hero;
