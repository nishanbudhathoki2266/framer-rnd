"use client";

import React from "react";
import { motion } from "framer-motion";

const FramerPlayGround = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{ perspective: "60rem" }}
    >
      <motion.div
        className="bg-red-400 h-48 aspect-square"
        initial={{ scale: 1, translateX: "-1100px" }}
        animate={{ scale: 1.9, translateX: "200px", rotateY: "180deg" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};

export default FramerPlayGround;
