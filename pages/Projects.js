import React from "react";
import Project from "./components/project"
import { FaReact } from 'react-icons/fa'
import { SiMongodb, SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
const Projects = () => {
    return (
      <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h1 className="absolute top-24 uppercase tracking-[20px] text-white text-2xl">
            Proyectos
        </h1>
        <div className="relative w-full flex space-x-10 overflow-x-scroll lg:ml-[15rem] p-10 snap-mandatory snap-x scrollbar scrollbar-thumb-sky-600 scrollbar-track-gray-400/20 scroll-smooth">
          <Project 
          className="ml-10"
          image={'/images/portafolio-web.png'}
          icons={<div className="flex flex-row"><FaReact className="w-8 h-8 text-blue-500" /></div>} 
          title={"1er Portafolio Web"} 
          descrip={"Este fue mi primer portafio web que hice."}
          linkGit={"https://github.com/Nikk00/portafolioweb"}
          link={"https://nicolasluza.netlify.app/"}
          ></Project>
          <Project
          image={'/images/lookwhattoplay2.png'} 
          title={"Look What to Play"}
          icons={<div className="flex flex-row space-x-1"><TbBrandNextjs className="w-8 h-8 text-white" /><SiTailwindcss className="w-8 h-8 text-blue-500" /></div>}  
          descrip={"Página web creada con el fin de ver todos los juegos que han salido que son free to play, esta página utiliza la api de FreeToGame."}
          linkGit={"https://github.com/Nikk00/look-what-to-play"}
          link={'https://lookwhattoplay.netlify.app/'}
          ></Project>
          <Project
          image={'/images/standardlogin.png'} 
          title={"Standard Login"} 
          descrip={"Página web creada con el fin de refozar lo aprendido, en donde se codifico por parte de front y back end."}
          icons={<div className="flex flex-row space-x-1"><TbBrandNextjs className="w-8 h-8 text-white" /><SiTailwindcss className="w-8 h-8 text-blue-500" /><SiMongodb className="w-8 h-8 text-green-700"/></div>} 
          linkGit={"https://github.com/Nikk00/standardlogim"}
          link={'https://standardlogin.vercel.app/'}
          ></Project>
          <Project
          image={'/images/teresa-enzo.png'} 
          title={"Teresa y Enzo"}
          icons={<div className="flex flex-row space-x-1"><TbBrandNextjs className="w-8 h-8 text-white" /><SiTailwindcss className="w-8 h-8 text-blue-500" /></div>}   
          descrip={"Página web solicitada por un familiar el cual se iba a casar."}
          linkGit={"https://github.com/Nikk00/enzo-teresa"}
          link={'https://teresayenzo.vercel.app/'}
          ></Project>
        </div>
      </div>
    )
  }
  
  export default Projects