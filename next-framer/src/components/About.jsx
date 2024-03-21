"use client";

import React, { useRef, useState } from "react";
import SectionContainer from "./containers/SectionContainer";
import { motion, useInView } from "framer-motion";
import Container from "./containers/Container";
import styles from "./About.module.css";
import SkillCard from "./SkillCard";
import { LuMouse } from "react-icons/lu";

const About = () => {
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

  const isSKillsDivInView = useInView(skillsRef);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <SectionContainer id="about" className="py-20 flex justify-center">
      <Container className="px-2">
        <motion.div
          className="flex flex-col justify-center items-center gap-8"
          ref={aboutRef}
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

          {/* Skills */}
          <div
            className={`w-full flex flex-col gap-2 transition-all delay-100 duration-200 ${
              isSKillsDivInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-40 opacity-0"
            }`}
            ref={skillsRef}
          >
            <h3 className="text-2xl font-semibold text-black/70">Skills</h3>
            <div className="flex gap-2 items-center flex-wrap w-1/2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Git",
                "Node.js",
                "Express.js",
                "MongoDB",
                "React.js",
                "Redux",
                "Sass",
                "Next.js",
                "SWR",
                "React Query",
                "Framer Motion",
                "IoT",
                "RESTful APIs",
                "GraphQL",
                "Webpack",
                "Babel",
                "Axios",
                "JWT",
                "OAuth",
                "Socket.IO",
                "Mongoose",
                "Authentication & Authorization",
                "Responsive Design",
                "Performance Optimization",
                "Data Structures & Algorithms",
                "Caching Strategies",
                "Data Visualization",
              ].map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </div>

            {/* Mouse scroll  */}
            <motion.span
              className="mt-6"
              animate={{
                y: [-20, 0],
                opacity: [0, 0.8],
              }}
              transition={{
                duration: 0.9,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <LuMouse size={40} />
            </motion.span>
          </div>
        </motion.div>
      </Container>
    </SectionContainer>
  );
};

export default About;
