"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "./containers/Container";

const About = () => {
  return (
    <>
      <div
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: `url(/assets/boy-photographer.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
        className="relative min-h-[50dvh] -mt-[80%] md:-mt-[20%]"
      ></div>
      <div className="bg-black py-20">
        <Container>
          <motion.div
            className="text-white/85 text-sm text-justify flex justify-center items-center flex-col gap-2"
            whileInView={{
              x: ["-50%", 0],
              opacity: [0, 1],
              transition: {
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
          >
            <p>
              I'm <strong>Nishan Budhathoki</strong>, a passionate artist
              dedicated to crafting visual stories that resonate deeply with
              viewers. With a focus on candid, street, traditional, and glamour
              portraits, I strive to capture the essence of individuals and the
              vibrant tapestry of human experiences.
            </p>

            <p>
              In candid portraits, I find joy in capturing genuine moments of
              connection, laughter, and love. Whether it's a stolen glance
              between lovers, the exuberant laughter of a child, or the quiet
              contemplation of a solitary figure, I aim to preserve the
              authenticity and beauty of these fleeting moments for generations
              to come.
            </p>

            <p>
              Venturing into the streets, I am endlessly inspired by the
              kaleidoscope of human experiences that unfold before me. Street
              portraits allow me to document the rich diversity of urban life,
              from the bustling energy of city streets to the quiet moments of
              reflection in hidden alleyways. Each photograph is a testament to
              the resilience, creativity, and spirit of the individuals who
              inhabit these spaces.
            </p>

            <p>
              Traditional portraits offer me the opportunity to pay homage to
              the timeless elegance and grace of classical portraiture while
              infusing my work with a modern sensibility. Guided by a commitment
              to authenticity and individuality, I collaborate closely with my
              subjects to create portraits that not only capture their physical
              appearance but also reveal their innermost selves.
            </p>

            <p>
              Glamour portraits, on the other hand, are a celebration of beauty,
              confidence, and self-expression. Whether it's a glamorous fashion
              shoot or an intimate boudoir session, I strive to empower my
              clients to embrace their unique beauty and showcase their
              personality in front of the camera.
            </p>

            <p>
              As a portrait photographer, my ultimate goal is to create images
              that resonate deeply with my viewers, sparking emotions, inspiring
              imaginations, and celebrating the beauty of the human experience.
              Whether you're looking to capture a cherished moment with your
              loved ones, showcase your unique style and personality, or simply
              celebrate the beauty of life itself, I invite you to join me on
              this journey of exploration, creativity, and discovery.
            </p>
          </motion.div>

          <motion.div className="w-24 h-24 bg-white mt-8">
            Collection of Photos here
          </motion.div>
        </Container>
      </div>
    </>
  );
};

export default About;
