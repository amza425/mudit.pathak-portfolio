import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="relative flex cursor-pointer justify-center items-center space-x-4 flex-wrap">
      <div className="flex gap-3 items-center group">
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="/Images/javalogo.png"
          className="rounded-full border border-gray-500
                object-cover w-24 h-24 md:w-28 md:h-32 xl:w-32 xl:h-32
                filter group-hover:grayscale transition-duration-300
                ease-in-out m-4"
        />
        <div className="range">
          <div className="range__label">Progress</div>
        </div>
      </div>
      <div className="flex gap-3 items-center group">
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="/Images/pythonimg.png"
          className="rounded-full border border-gray-500
                object-cover w-24 h-24 md:w-28 md:h-32 xl:w-32 xl:h-32
                filter group-hover:grayscale transition-duration-300
                ease-in-out m-4"
        />
        <div className="range">
          <div className="range__label">Progress</div>
        </div>
      </div>
      <div className="flex gap-3 items-center group">
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="/Images/htmlimgpng.png"
          className="rounded-full border border-gray-500
                object-cover w-24 h-24 md:w-28 md:h-32 xl:w-32 xl:h-32
                filter group-hover:grayscale transition-duration-300
                ease-in-out m-4"
        />
        <div className="range">
          <div className="range__label">Progress</div>
        </div>
      </div>
      <div className="flex gap-3 items-center group">
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="/Images/cssimg.png"
          className="rounded-full border border-gray-500
                object-cover w-24 h-24 md:w-28 md:h-32 xl:w-32 xl:h-32
                filter group-hover:grayscale transition-duration-300
                ease-in-out m-4"
        />
        <div className="range">
          <div className="range__label">Progress</div>
        </div>
      </div>
      <div className="flex gap-3 items-center group">
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="/Images/javascriptimh.png"
          className="rounded-full border border-gray-500
                object-cover w-24 h-24 md:w-28 md:h-32 xl:w-32 xl:h-32
                filter group-hover:grayscale transition-duration-300
                ease-in-out m-4"
        />
        <div className="range">
          <div className="range__label">Progress</div>
        </div>
      </div>
      <div className="flex gap-3 items-center group">
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="/Images/mysql.png"
          className="rounded-full border border-gray-500
                object-cover w-24 h-24 md:w-28 md:h-32 xl:w-32 xl:h-32
                filter group-hover:grayscale transition-duration-300
                ease-in-out m-4"
        />
        <div className="range">
          <div className="range__label">Progress</div>
        </div>
      </div>
      <div className="flex gap-3 items-center group">
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="/Images/reactimg.png"
          className="rounded-full border border-gray-500
                object-cover w-24 h-24 md:w-28 md:h-32 xl:w-32 xl:h-32
                filter group-hover:grayscale transition-duration-300
                ease-in-out m-4"
        />
        <div className="range">
          <div className="range__label">Progress</div>
        </div>
      </div>
      <div className="flex gap-3 items-center group">
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="/Images/nextjs.png"
          className="rounded-full border border-gray-500
                object-cover w-24 h-24 md:w-28 md:h-32 xl:w-32 xl:h-32
                filter group-hover:grayscale transition-duration-300
                ease-in-out m-4"
        />
        <div className="range">
          <div className="range__label">Progress</div>
        </div>
      </div>

      {/* <div
        className="absolute opacity-0 group-hover:opacity-80
             transition duration-300 ease-in-out
             group-hover:bg-white h-24 w-24 md:w-28 md:h-32 xl:w-32
             xl:h-32 rounded-full z-0 "
      >
        <div className="flex items-center justify center h-full ">
          <p
            className="text-3xl font-bold
                text-black opacity-100"
          >
            100%
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Skill;
