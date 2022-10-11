import React from "react";
import {motion} from 'framer-motion'
import Image from "next/image";
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiJavascript, SiMongodb, SiTailwindcss } from 'react-icons/si'
import { FaReact, FaNodeJs, FaGit } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
const Skills = () => {
    return (
      <div className="grid grid-cols-3 place-content-center h-screen">
        <div className="col-span-3 justify-center items-center text-center">
          <h1 className="uppercase tracking-[20px] text-white text-2xl mb-10">
              Habilidades
          </h1>
        </div>
        <motion.div className="col-span-3 flex flex-col text-center md:text-left xl:flex-row xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
              initial={{ opacity:0 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
        >
          <div className="grid grid-cols-3 lg:grid-cols-4 md:grid-cols-4 gap-4 z-10">
            <AiFillHtml5 className="w-24 h-24 rounded-full text-orange-600 border border-gray-500 p-1"></AiFillHtml5> 
            <DiCss3 className="w-24 h-24 rounded-full text-blue-700 border border-gray-500 p-1 "></DiCss3>
            <SiJavascript className="w-24 h-24 rounded-full text-yellow-500 border border-gray-500 p-1"></SiJavascript>
            <FaReact className="w-24 h-24 rounded-full text-blue-500 border border-gray-500 p-1"></FaReact>
            <FaNodeJs className="w-24 h-24 rounded-full text-green-600 border border-gray-500 p-1"></FaNodeJs>
            <SiMongodb className="w-24 h-24 rounded-full text-green-800 border border-gray-500 p-1"></SiMongodb>
            <FaGit className="w-24 h-24 rounded-full text-red-600 border border-gray-500"></FaGit>
            <TbBrandNextjs className="w-24 h-24 rounded-full text-white border border-gray-500"></TbBrandNextjs>
            <SiTailwindcss className="w-24 h-24 rounded-full text-sky-500 border border-gray-500 p-1"></SiTailwindcss>
          </div>
        </motion.div>
      </div>
    )
  }
export default Skills