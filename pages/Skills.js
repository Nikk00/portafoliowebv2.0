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
      <div className="flex relative flex-col text-center md:text-left xl:flex-row xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      >
        <h1 className="absolute top-24 uppercase tracking-[20px] text-white text-2xl z-10">
            Habilidades
        </h1>
        <motion.div className="grid grid-cols-3 lg:grid-cols-4 md:grid-cols-4 gap-4 z-10"
        initial={{ 
          x:-500,
          opacity:0,
          scale:0.5 
        }}
        animate={{ 
          x:0,
          opacity:1,
          scale: 1
         }}
        transition={{ duration: 2 }}
        >
          <AiFillHtml5 className="w-24 h-24 rounded-full text-orange-600 border border-gray-500 p-1"></AiFillHtml5> 
          <DiCss3 className="w-24 h-24 rounded-full text-blue-700 border border-gray-500 p-1 "></DiCss3>
          <SiJavascript className="w-24 h-24 rounded-full text-yellow-500 border border-gray-500 p-1"></SiJavascript>
          <FaReact className="w-24 h-24 rounded-full text-blue-500 border border-gray-500 p-1"></FaReact>
          <FaNodeJs className="w-24 h-24 rounded-full text-green-600 border border-gray-500 p-1"></FaNodeJs>
          <SiMongodb className="w-24 h-24 rounded-full text-green-800 border border-gray-500 p-1"></SiMongodb>
          <FaGit className="w-24 h-24 rounded-full text-red-600 border border-gray-500"></FaGit>
          <TbBrandNextjs className="w-24 h-24 rounded-full text-white border border-gray-500"></TbBrandNextjs>
          <SiTailwindcss className="w-24 h-24 rounded-full text-sky-500 border border-gray-500 p-1"></SiTailwindcss>
        </motion.div>
      </div>
    )
  }
  
  export default Skills