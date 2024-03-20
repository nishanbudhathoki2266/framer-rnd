"use client";

import React from "react";
import SectionContainer from "./containers/SectionContainer";
import { motion } from "framer-motion";
import Container from "./containers/Container";
import styles from "./About.module.css";

const AboutPage = () => {
  return (
    <SectionContainer id="about" className="py-20 flex justify-center">
      <Container>
        <motion.div
          className="flex flex-col justify-center items-center gap-4"
          whileInView={{
            y: [50, 0],
            opacity: [0, 1],
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
        >
          <h1 className="text-5xl font-extrabold tracking-wide text-black/70">
            {"About".split("").map((child, idx) => (
              <span className={styles.hoverText} key={idx}>
                {child}
              </span>
            ))}{" "}
            <span className="text-blue-600">Me</span>
          </h1>
          <p className="text-lg tracking-wide text-justify leading-tight">
            Hello world! My name is Nishan Budhathoki. I'm a passionate
            JavaScript developer who thrives on turning ideas into reality
            through the power of code. My journey in the tech world has led me
            to master the MERN stack, with a special focus on Next.js for
            creating captivating web experiences. I'm equally comfortable
            working with SQL and NoSQL databases, shaping data into meaningful
            insights. Beyond the web, I've dived into the world of IoT, using
            Raspberry Pi to bring innovative ideas to life. I believe that in
            the ever-evolving landscape of technology, endless possibilities
            await, and I'm here to explore and create. Let's build the future
            together!
          </p>
        </motion.div>
      </Container>
    </SectionContainer>
  );
};

export default AboutPage;
