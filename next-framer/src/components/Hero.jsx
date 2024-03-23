"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import { FaRegCompass } from "react-icons/fa";
import GridContainer from "./containers/GridContainer";
import Container from "./containers/Container";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    title: "Candid",
    src: "/assets/candid.jpg",
    alt: "Candid Photograph",
  },
  {
    id: 2,
    title: "Street",
    src: "/assets/street.jpg",
    alt: "Street Photograph",
  },
  {
    id: 3,
    title: "Glamour",
    src: "/assets/glamour.jpg",
    alt: "Glamour Photograph",
  },
  {
    id: 4,
    title: "Traditional",
    src: "/assets/traditional.jpg",
    alt: "Traditional Photograph",
  },
];

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const shutterY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <>
      <div
        id="hero"
        className="min-h-[120vh] flex justify-center items-center relative"
        ref={ref}
      >
        <motion.h4
          whileInView={{
            marginTop: "2rem",
            opacity: [0, 1],
            transition: {
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="absolute z-20 self-start opacity-0 text-white font-light tracking-wider"
        >
          Portrait Photographer
        </motion.h4>

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
          className="font-extrabold text-center text-white uppercase text-7xl md:text-9xl relative z-10 -top-28 lg:-top-48"
        >
          Nishan <span className="hidden lg:block">Budhathoki</span>
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
          className="h-full w-full z-20 absolute inset-0 brightness-90"
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

      {/* About section */}
      <motion.div
        style={{ y: shutterY }}
        className="flex justify-center items-center px-2 w-full bg-black pt-36 pb-36 md:pb-64 relative z-30"
      >
        {/* Location */}
        <p className="absolute -top-8 text-white flex justify-center items-center px-2 py-1 gap-2 before:bg-black/75 before:rounded-lg before:w-full before:absolute before:h-full before:-z-20">
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

        <Container className="text-center">
          <GridContainer
            whileInView={{
              opacity: [0, 1],
              y: [50, 1],
              transition: {
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
            className="opacity-0"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                serialNumber={index + 1}
                title={service.title}
                src={service.src}
                alt={service.alt}
              />
            ))}
          </GridContainer>
        </Container>
      </motion.div>
    </>
  );
};

export default Hero;
