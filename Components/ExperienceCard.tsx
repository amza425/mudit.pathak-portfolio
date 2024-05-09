import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <>
      <div className="flex justify-center gap-8 lg:flex-nowrap flex-wrap">
        <article
          className="flex flex-col rounded-l items-center
  space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900 px] 
  snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
  cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
        object-cover object-center"
            src="\Images\McDonalds.png"
            alt="McDonalds"
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">CREW TRAINER</h4>
            <p className="font-bold text-2xl mt-1">McDonald's</p>
            <div className="flex space-x-2 my-2"></div>
            <p className="uppercase py-5 text-gray-300">
              Started work - SEPT 2022 , Ended - Currently Working.
            </p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
              <li>
                <p>Learnt Customer Service and Communication</p>
              </li>
              <li>
                <p>Learnt Problem-Solving and Adaptability</p>
              </li>
              <li>
                <p>Learnt Teamwork and Collaboration</p>
              </li>
            </ul>
          </div>
        </article>
        {/*  */}
        <article
          className="flex flex-col rounded-l items-center
  space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900 px] 
  snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
  cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
        object-cover object-center"
            src="\Images\TimHortons.png"
            alt="TimHortons"
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light uppercase">CREW Member</h4>
            <p className="font-bold text-2xl mt-1">TimHorton's</p>
            <div className="flex space-x-2 my-2"></div>
            <p className="uppercase py-5 text-gray-300">
              Started work - april 2023 , Ended - august 2023.
            </p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
              <li>
                <p>Efficiency and Time Management </p>
              </li>
              <li>
                <p>Attention to Detail </p>
              </li>
              <li>
                <p>Learnt Teamwork and Collaboration</p>
              </li>
            </ul>
          </div>
        </article>
        {/*  */}
        <article
          className="flex flex-col rounded-l items-center
  space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900 px] 
  snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
  cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
        object-contain object-center"
            src="\Images\raj.jpg"
            alt="Raj It Service"
          />

          <div
            className="pn
          x-0 md:px-10"
          >
            <h4 className="text-4xl font-light uppercase">
              Junior software help
            </h4>
            <p className="font-bold text-2xl mt-1">Raj It Service</p>
            <div className="flex space-x-2 my-2"></div>
            <p className="uppercase py-5 text-gray-300">
              Started work - august 2021 , Ended may 2022.
            </p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
              <li>
                <p>Proficiency in Programming Languages</p>
              </li>
              <li>
                <p>Understanding of Software Development Methodologies</p>
              </li>
              <li>
                <p>Problem-Solving Skills
                  
                </p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </>
  );
}
