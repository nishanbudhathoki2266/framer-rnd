"use client";

import React, { useRef } from "react";
import Container from "./containers/Container";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const works = [
  {
    id: 5,
    src: "/assets/showcase-5.png",
    alt: "Rowan on horse",
    title: "Rowan on horse",
    description: "Taken at a race competition that was held during Tihar.",
  },
  {
    id: 6,
    src: "/assets/showcase-6.png",
    alt: "Keshav dai's seminar",
    title: "Keshav dai's seminar",
    description:
      "Taken while attending kd's seminar on today's software industry.",
  },
  {
    id: 7,
    src: "/assets/showcase-7.png",
    alt: "Suraj in uniform",
    title: "Suraj in uniform",
    description: "Clicked on Suraj's promotion to Lieutenant.",
  },
  {
    id: 8,
    src: "/assets/showcase-8.png",
    alt: "Dr. Sunil",
    title: "Dr. Sunil",
    description: "Was taken at an awareness program held on BPKHIS.",
  },
  {
    id: 9,
    src: "/assets/showcase-9.jpg",
    alt: "Nishan on set",
    title: "Nishan on set",
    description: "Taken on the set of one of the Nishan's plays.",
  },
  {
    id: 10,
    src: "/assets/showcase-10.jpg",
    alt: "Durbar's friday night",
    title: "Durbar's friday night",
    description: "Taken on Durbar when Sabin Rai was playing.",
  },
  {
    id: 2,
    src: "/assets/showcase-2.jpg",
    alt: "Showcase two",
    title: "Into the woods (Abhi)",
    description: "Taken during a ride of Abhi and Me to charkose jhadi.",
  },
  {
    id: 3,
    src: "/assets/showcase-3.jpg",
    alt: "Showcase three",
    title: "Siddhika's wedding",
    description: "Pre-wedding ceremony of Subash & Siddhika.",
  },
  {
    id: 4,
    src: "/assets/showcase-4.jpg",
    alt: "Showcase four",
    title: "Neha's glow",
    description: "Taken on the set of NishOnWheels ep 1.",
  },
];

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const translateX = useTransform(scrollYProgress, [0, 1], ["-1.1%", "-90%"]);

  return (
    <div className="container mx-auto min-h-[600dvh] relative" ref={ref}>
      <div className="flex items-center justify-center text-8xl text-center pt-8 text-white/80">
        My Works
      </div>
      <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
        <motion.div style={{ x: translateX }} className="flex items-center">
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
