import React from "react";
//import developer from '../public/images/software-developer.jpg'
import developer from '../public/images/Programmer-rafiki.png'
import Image from "next/image";
import {motion} from 'framer-motion'
const About = () => {
    return (
      <div className="grid grid-cols-3 place-content-center h-screen">
        <div className="col-span-3 flex flex-col justify-center items-center place-content-center">
          <motion.div 
          initial={{ opacity:0 }}
          transition={{ duration:1.5 }}
          whileInView={{ x:0 ,opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col w-3/5 text-center z-10 items-center">
            <picture>
              <img src="/images/Programmer-rafiki.png" alt="" width="300" height="300"></img>
              {/* <Image src={developer} alt="" className="rounded-full" width={300} height={300} quality={100}/> */}
            </picture>
            <h1 className="text-2xl lg:text-2xl  md:text-2xl mt-5 text-white uppercase tracking-[20px]">Sobre Mi</h1>
            <p className="text-white text-md lg:text-xl md:text-xl mt-5 font-semibold">
            Hola! Soy Nicolás Luza, me titulé como Ingeniero Civil en Informática en la Universidad de Tarapacá el año 2022. 
            Me considero una persona autodidacta que le apasiona la programación y conocer nuevas tecnologías.
            </p>
          </motion.div>
        </div>
      </div>
    )
  }
  
export default About