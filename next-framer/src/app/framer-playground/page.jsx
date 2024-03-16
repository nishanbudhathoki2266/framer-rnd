"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  useInView,
} from "framer-motion";

const FramerPlayGround = () => {
  const rotateControls = useAnimationControls();

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  console.log(isInView);

  const [isVisible, setIsVisible] = useState(true);

  // Transform values are applied in a specific order: translate, scale, rotate, skew. However, you can customize this default order using the transormTemplate prop
  function template({ rotate, x }) {
    return `rotate(${rotate}) translateX(${x})`;
  }

  const handleClickRotate = () => {
    console.log(rotateControls);
    rotateControls.start("rotateDiv");
  };

  return (
    // <div className="min-h-screen bg-red-200 flex justify-center items-center flex-col gap-8 py-8">
    <>
      {/* Basic of motion and AnimatePresence */}
      {/* <motion.button
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
            initial={{ y: 0 }}
            animate={{ y: [0, 150, 200, 200, 10] }}
            exit={{ scale: 1.1 }}
            transition={{
              duration: 2,
              ease: "easeIn",
              times: [0, 0.25, 0.5, 1],
            }}
          />
        )}
      </AnimatePresence> */}
      {/* useAnimationControls */}
      {/* <motion.button
        className="bg-black text-white px-4 py-2 rounded-lg"
        onClick={handleClickRotate}
      >
        Rotate
      </motion.button>

      <motion.div
        className="bg-blue-400 mx-auto w-80 aspect-square rounded-lg"
        variants={{
          initial: {
            rotate: 0,
          },
          rotateDiv: {
            rotate: "360deg",
          },
        }}
        initial="initial"
        animate={rotateControls}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      /> */}

      {/* View based animations */}

      <div className="min-h-[150vh] bg-red-400"></div>
      <motion.div
        className="min-h-screen bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div
        ref={ref}
        className={`min-h-screen ${
          isInView ? "bg-blue-600" : "bg-red-600"
        } transition-colors duration-100`}
      />
    </>
  );
};

export default FramerPlayGround;
