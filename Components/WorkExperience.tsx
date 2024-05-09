import React from 'react';
import { motion } from "framer-motion";
import { EXPORT_MARKER } from 'next/dist/shared/lib/constants';
import ExperienceCard from './ExperienceCard';

type Props = {};

function WorkExperience({}: Props) {
  return (
  <motion.div
  initial={{  opacity: 0}}
  animate={{ opacity: 1}}
  transition={{ duration: 1}}
  className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
  max-w-full px-10 justify-evenly mx-auto items-center">
  <h3
  className="absolute top-24 uppercase tracking-[20px]
  text-gray-500 text-2xl">
    Experience
    </h3>
    <div className="w-full flex  space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#C60001]/80">
    <ExperienceCard />
   
    </div>
  </motion.div>
  );
}

export default WorkExperience;