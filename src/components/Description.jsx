import React, { useState } from "react"; // Added useState to handle activeImage
import { images } from "../utils/slidersData";
import { motion } from "framer-motion";
import Image from "next/image";

const Description = ({ activeImage, clickNext, clickPrev }) => {
  const totalImages = images.length;

  return (
    <div className="grid place-items-start w-full bg-[#e7dfd9] relative md:rounded-tr-3xl md:rounded-br-3xl">
      <div className="uppercase text-sm absolute right-4 top-2 underline-offset-4 underline">
        4Piece Store
      </div>
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-left relative"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="py-16 text-5xl font-extrabold">{elem.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600">
              {elem.desc}
            </div>
          </motion.div>

          {/* Move button inside the image container */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <button className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md">
              order now
            </button>
          </div>

          {/* Navigation arrows */}
          <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
            <div
              className="absolute bottom-2 right-10 cursor-pointer"
              onClick={clickPrev}
            >
              <Image src="/left.svg" alt="Previous" width={30} height={30} />
            </div>

            <div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <Image src="/right.svg" alt="Next" width={30} height={30} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
