"use client";

import React from "react";
import { motion } from "framer-motion";

const ChallengeOne = () => {
  const transitionVariant = {
    duration: 1.1,
    delay: 0.2,
    ease: "linear",
    times: [0, 0.5, 1],
  };

  return (
    <div className="bg-pink-600/70 text-white clip-custom uppercase min-h-screen flex flex-col gap-2 text-center pt-72 items-center">
      <motion.h1
        className="text-8xl font-semibold tracking-widest"
        animate={{ opacity: [0, 1, 1], x: [-70, 30, 0] }}
        transition={transitionVariant}
      >
        Sessami
      </motion.h1>
      <motion.p
        className="text-xl font-normal tracking-wide"
        animate={{ opacity: [0, 1, 1], x: [70, -30, 0] }}
        transition={transitionVariant}
      >
        Where every ticket tells you a story
      </motion.p>
      <motion.button
        className="py-4 px-6 mt-4 rounded-lg bg-gray-900"
        animate={{ opacity: [0, 0, 1], y: [40, 40, 0] }}
        transition={{ ...transitionVariant }}
      >
        Explore Now
      </motion.button>
    </div>
  );
};

export default ChallengeOne;

// Starter
{
  /* import React from "react";

const ChallengeOne = () => {
  return (
    <div className="bg-pink-600/70 text-white clip-custom uppercase min-h-screen flex flex-col gap-4 text-center pt-72 items-center">
      <h1 className="text-8xl font-semibold tracking-widest">Sessami</h1>
      <p className="text-xl font-normal tracking-wide">
        Where every ticket has a story
      </p>
      <button className="py-4 px-6 mt-4 rounded-lg bg-gray-900">
        Explore Now
      </button>
    </div>
  );
};

export default ChallengeOne;
*/
}
