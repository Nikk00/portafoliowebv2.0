import React from "react";
import developer from '../public/images/software-developer.jpg'
import Image from "next/image";
import {motion} from 'framer-motion'
const About = () => {
    return (
      <motion.div className="flex flex-col justify-center items-center place-content-center h-screen">
          <div className="w-3/5 text-center z-10">
            <Image src={developer} alt="" className="rounded-full" width={300} height={300} quality={100}/>
            <h1 className="text-2xl lg:text-2xl  md:text-2xl mt-5 text-white uppercase tracking-[20px]">Sobre Mi</h1>
            <p className="text-white text-md lg:text-xl md:text-xl mt-5 font-semibold">
            Hola! Soy Nicolás Luza, me titulé como Ingeniero Civil en Informática en la Universidad de Tarapacá el año 2022. 
            Me considero una persona autodidacta que le apasiona la programación y conocer nuevas tecnologías.
            </p>
          </div>
      </motion.div>
    )
  }
  
export default About