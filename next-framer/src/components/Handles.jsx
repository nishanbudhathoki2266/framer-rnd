import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Handles = () => {
  return (
    <div className="absolute lg:fixed right-4 top-10 lg:top-1/2 text-white z-50 flex flex-col justify-center items-center gap-4">
      <FaInstagram
        size={20}
        className="cursor-pointer transition-all hover:text-white/50"
      />
      <FaGithub
        size={20}
        className="cursor-pointer transition-all hover:text-white/50"
      />
      <FaLinkedin
        size={20}
        className="cursor-pointer transition-all hover:text-white/50"
      />
      <FaFacebook
        size={20}
        className="cursor-pointer transition-all hover:text-white/50"
      />
    </div>
  );
};

export default Handles;
