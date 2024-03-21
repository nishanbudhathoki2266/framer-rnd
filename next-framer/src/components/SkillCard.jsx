"use client";
import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        transition: {
          staggerChildren: 1,
          duration: 1,
          ease: "easeInOut",
        },
      }}
      className="bg-black/90 inline px-3 py-1 text-white rounded-lg shadow-md"
    >
      {skill}
    </motion.div>
  );
};

export default SkillCard;
