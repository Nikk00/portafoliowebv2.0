import React from "react";
import {motion} from 'framer-motion'
import Image from "next/image";
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiJavascript, SiMongodb, SiTailwindcss } from 'react-icons/si'
import { FaReact, FaNodeJs, FaGit } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { Tooltip} from "@material-tailwind/react";

const Skills = () => {
    return (
      <div className="grid grid-cols-3 place-content-center h-screen">
        <div className="col-span-3 justify-center items-center text-center">
          <h1 data-bs-target="tooltip-animation" className="uppercase tracking-[20px] text-white text-2xl mb-10">
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
            <Tooltip
              className="text-black bg-white font-bold z-10"
              content="HTML"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
            <div>
              <AiFillHtml5 className="w-24 h-24 rounded-full text-orange-600 border border-gray-500 p-1"  ></AiFillHtml5>
            </div>
            </Tooltip>
            <Tooltip
              className="text-black bg-white font-bold z-10"
              content="CSS"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <DiCss3 className="w-24 h-24 rounded-full text-blue-700 border border-gray-500 p-1 "></DiCss3>
              </div>
            </Tooltip>

            <Tooltip
              className="text-black bg-white font-bold z-10"
              content="JavaScript"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
            <div>
              <SiJavascript className="w-24 h-24 rounded-full text-yellow-500 border border-gray-500 p-1"></SiJavascript>
            </div>
            </Tooltip>

            <Tooltip
              className="text-black bg-white font-bold z-10"
              content="React"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
            <div>
              <FaReact className="w-24 h-24 rounded-full text-blue-500 border border-gray-500 p-1"></FaReact>
            </div>
            </Tooltip>

            <Tooltip
              className="text-black bg-white font-bold z-10"
              content="NodeJS"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
            <div>
              <FaNodeJs className="w-24 h-24 rounded-full text-green-600 border border-gray-500 p-1"></FaNodeJs>
            </div>
            </Tooltip>

            <Tooltip
              className="text-black bg-white font-bold z-10"
              content="MongoDB"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
            <div>
              <SiMongodb className="w-24 h-24 rounded-full text-green-800 border border-gray-500 p-1"></SiMongodb>
            </div>
            </Tooltip>
            
            <Tooltip
              className="text-black bg-white font-bold z-10"
              content="Git"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
            <div>
              <FaGit className="w-24 h-24 rounded-full text-red-600 border border-gray-500"></FaGit>
            </div>
            </Tooltip>

            <Tooltip
              className="text-black bg-white font-bold z-10"
              content="NextJS"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
            <div>
              <TbBrandNextjs className="w-24 h-24 rounded-full text-white border border-gray-500"></TbBrandNextjs>
            </div>
            </Tooltip>

            <Tooltip
              className="text-black bg-white font-bold z-10"
              content="TailwindCSS"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
            <div>
              <SiTailwindcss className="w-24 h-24 rounded-full text-sky-500 border border-gray-500 p-1"></SiTailwindcss>
            </div>
            </Tooltip>
          </div>
        </motion.div>
      </div>
    )
  }
export default Skills