"use client";
import { motion } from "framer-motion";

const GridContainer = ({ className = "", children, whileInView = {} }) => {
  return (
    <motion.div
      whileInView={whileInView}
      className={`mx-4 grid grid-cols-4 gap-8 lg:mx-0 lg:grid-cols-12 lg:gap-8  ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GridContainer;
