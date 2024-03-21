"use client";
import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-black/90 inline px-3 py-1 text-white rounded-lg shadow-md">
      {skill}
    </div>
  );
};

export default SkillCard;
