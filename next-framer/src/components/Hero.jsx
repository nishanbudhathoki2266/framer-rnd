"use client";

import React, { useRef } from "react";
import { FaRegCompass } from "react-icons/fa";
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
        className="min-h-screen flex justify-center items-center relative"
        ref={ref}
      >
        <motion.h1
          whileInView={{
            opacity: [0, 0.8],
            y: [100, 0],
            transition: {
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          initial={{ opacity: 0 }}
          style={{ y: textY }}
          className="font-extrabold text-white uppercase text-7xl md:text-9xl relative z-10 -top-32"
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
        className="min-h-[200dvh] px-8 w-full bg-black relative z-30"
      >
        <p className="absolute -top-8 text-white flex justify-center items-center gap-2 before:bg-black/70 before:px-4 before:py-4 before:rounded-lg before:w-full before:absolute before:h-full before:-z-20">
          <motion.span
            animate={{
              rotate: "360deg",
              transition: {
                duration: 1.8,
                repeatDelay: 0.5,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <FaRegCompass size={25} />
          </motion.span>
          <span className="text-sm">26°41'58.3"N, 87°17'23.9"E</span>
        </p>
      </motion.div>
    </>
  );
};

export default Hero;
