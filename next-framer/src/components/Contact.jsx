"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <motion.div
      whileInView={{
        y: ["50%", 0],
        opacity: [0, 1],
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="container mx-auto flex flex-col justify-center items-center gap-20 px-4 py-32 text-white/80"
    >
      <div className="flex flex-col gap-1 justify-center items-center">
        <h1 className="text-8xl">Reach Out</h1>
        <p className="text-md font-light tracking-widest">
          Let's Capture Your Moment Together
        </p>
      </div>

      <Link
        href="mailto:nishanbudhathoki2266@gmail.com"
        className="text-4xl text-white font-semibold tracking-wide z-20 hover:underline"
      >
        nishanbudhathoki2266@gmail.com
      </Link>
    </motion.div>
  );
};

export default Contact;
