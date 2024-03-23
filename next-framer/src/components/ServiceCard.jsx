"use client";

import Image from "next/image";
import React from "react";

const ServiceCard = ({ src, alt, title, serialNumber }) => {
  return (
    <div
      className={`aspect-[3/4.5] relative group cursor-pointer flex justify-center items-center col-span-full md:col-span-2 lg:col-span-3 hover:contrast-[1.2] transition-all ${
        serialNumber % 2 !== 0 && "md:top-1/4"
      }`}
    >
      <Image alt={alt} src={src} layout="fill" objectFit="cover" />

      <h3 className="text-4xl group-hover:scale-[1.02] transition-all ease-in-out duration-100 font-extrabold uppercase text-white absolute z-40">
        {title}
      </h3>
    </div>
  );
};

export default ServiceCard;
