"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FramerPlayGround = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Transform values are applied in a specific order: translate, scale, rotate, skew. However, you can customize this default order using the transormTemplate prop
  function template({ rotate, x }) {
    return `rotate(${rotate}) translateX(${x})`;
  }

  return (
    <div className="min-h-screen bg-red-200 flex justify-center items-center flex-col gap-8 py-8">
      <motion.button
        className="bg-black text-white px-4 py-2 rounded-lg"
        onClick={() => setIsVisible(!isVisible)}
        layout
      >
        Toggle Box
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            className="bg-blue-400 mx-auto w-80 aspect-square rounded-lg"
            initial={{ rotate: "0deg" }}
            animate={{ rotate: "180deg" }}
            exit={{ rotate: "-180deg" }}
            transition={{
              duration: 1,
              type: "spring",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FramerPlayGround;
