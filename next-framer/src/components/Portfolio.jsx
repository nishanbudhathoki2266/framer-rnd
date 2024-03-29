"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import works from "@/app/consts/Works";
import { BsMouse } from "react-icons/bs";

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div
      className="container mx-auto min-h-[600dvh] relative"
      id="portfolio"
      ref={ref}
    >
      <div className="flex items-center justify-center text-8xl text-center pt-8 text-white/80">
        My Works
      </div>
      <motion.div
        animate={{
          top: [0, 25],
          opacity: [1, 0.2],
          transition: {
            duration: 1.8,
            ease: "linear",
            repeat: Infinity,
          },
        }}
        className="flex items-center justify-center mt-8 relative"
      >
        <BsMouse size={50} className="text-white/80" />
      </motion.div>
      <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
        <motion.div
          style={{ x: translateX }}
          className="flex items-stretch gap-8"
        >
          {works.map((item) => (
            <div
              className="h-screen w-screen flex items-center justify-center"
              key={item.id}
            >
              <div className="flex bg-white flex-col px-3 py-4 rounded-md gap-2 justify-center items-center">
                <div className="h-[50vh] aspect-square relative">
                  <Image src={item.src} alt={item.alt} fill objectFit="cover" />
                </div>
                <h2 className="text-3xl font-semibold italic">{item.title}</h2>
                <p className="font-medium text-md -mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
