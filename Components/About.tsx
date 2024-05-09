import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col relative h-screen text-center 
   md:text-left md:flex-row max-w-7xl px-10 
   justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px]
    text-gray-500 text-2xl"
      >
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 0.7 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="\Images\portfoliopic.jpeg"
        alt="Mudit Pathak"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
  md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">My Background</h4>
      </div>
      <p className="text-base">
        I am Mudit Pathak, an enthusiastic and skilled software developer
        located in Calgary, Canada. With a passion for technology and a
        continuous drive to learn and innovate, I bring a solid foundation in
        software development principles and a commitment to delivering
        high-quality, user-centric solutions. My academic journey at the
        Southern Alberta Institute of Technology has equipped me with a strong
        technical skill set and a deep understanding of software development
        methodologies. I am excited about the possibility of leveraging my
        skills in a dynamic and forward-thinking environment. Open to
        opportunities both locally and globally, I am keen to contribute to and
        grow with a team that values innovation, collaboration, and excellence
        in the tech industry.
      </p>
    </motion.div>
  );
}
