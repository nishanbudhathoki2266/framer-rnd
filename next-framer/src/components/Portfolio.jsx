"use client";

import React from "react";
import SectionContainer from "./containers/SectionContainer";
import { motion } from "framer-motion";
import Container from "./containers/Container";

const Portfolio = () => {
  return (
    <SectionContainer id="about" className="py-20 flex justify-center">
      <Container className="px-2">
        <motion.div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-5xl font-extrabold tracking-wide text-black/70">
            My
            <span className="text-blue-600">Work</span>
          </h1>
        </motion.div>
      </Container>
    </SectionContainer>
  );
};

export default Portfolio;
