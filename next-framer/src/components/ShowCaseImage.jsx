import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ShowCaseImage = ({ src, alt, className = "", rotate = 20 }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{
        scale: [0, 1],
        rotate: [0, rotate],
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        rotate: 0,
        scale: 1.15,
        transition: {
          duration: 0.4,
          ease: "linear",
        },
      }}
      className={`flex-1 aspect-square relative transition-all hover:z-50 ring-offset-8 ring-white/90 ring-offset-black rounded-md hover:ring-4 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="rounded-md overflow-hidden"
      />
    </motion.div>
  );
};

export default ShowCaseImage;
