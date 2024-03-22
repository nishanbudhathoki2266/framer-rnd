"use client";

import React, { useRef } from "react";
import SectionContainer from "./containers/SectionContainer";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const shutterY = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  return (
    <>
      <div
        id="hero"
        className="min-h-screen flex justify-center items-start relative"
        ref={ref}
      >
        <motion.h1
          whileInView={{
            opacity: [0, 1],
            y: [100, 0],
            transition: {
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          initial={{ opacity: 0 }}
          style={{ y: textY }}
          className="font-extrabold text-white uppercase text-7xl md:text-8xl mt-44 relative z-10"
        >
          Nishan
        </motion.h1>

        <motion.div
          style={{ y: backgroundY }}
          className="h-full w-full z-0 absolute inset-0"
        >
          <Image
            src="/assets/hike.jpg"
            alt="Hiking full image."
            layout="fill"
            objectFit="cover"
            className="blur-[1px] brightness-90"
            style={{
              backgroundPosition: "bottom",
            }}
            quality={100}
          />
        </motion.div>

        <motion.div
          style={{ y: backgroundY }}
          className="h-full w-full z-20 absolute inset-0"
        >
          <Image
            src="/assets/model.png"
            alt="Hiking full image."
            layout="fill"
            objectFit="cover"
            style={{
              backgroundPosition: "bottom",
            }}
            quality={100}
          />
        </motion.div>
      </div>
      <motion.div
        style={{ y: shutterY }}
        className="min-h-[200dvh] w-full bg-black relative z-30 blur-[2px]"
      ></motion.div>
    </>
  );
};

export default Hero;
