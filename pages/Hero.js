import React from "react";
import Image from "next/image";
import Headerr from './Header'
import {Cursor, useTypewriter } from 'react-simple-typewriter'
import Typewriter from 'typewriter-effect';
import {motion} from 'framer-motion'
import fotoPerfil from '../public/images/fotoperfil.jpeg'

const Hero = () => {

  return (
    <>
      <div className="text-white text-center h-screen">
      <Headerr />
        <motion.div
            initial={{
              opacity: 0}}
            animate={{
              scale:[1,2,2,3,1],
              opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1]
            }}
            transition={{
              duration:2.5
            }}
            className="grid grid-cols-3 justify-center items-center place-content-center"
          >
            <div className="col-span-3 flex flex-col justify-center items-center">
              <div className="border border-sky-400 rounded-full h-96 w-96 mt-64 animate-ping"></div>
              <div className="absolute mt-52">
                <div className="flex flex-col items-center">
                  <picture>
                    <img src="/images/fotoperfil.jpeg" className="rounded-full" alt="" width="124" height="124"></img>
                  </picture>
                </div>
                {/* <Image src={fotoPerfil} alt="" className="rounded-full" width={124} height={124}/> */}
                <h2 className="text-sm uppercase text-gray-400 tracking-[5px]">
                  Ingeniero Civil Informático
                </h2>
                <h1 className="text-xl font-semibold">
                  <span>
                    <Typewriter
                      options={{
                        strings: [
                          "Hola, Mi nombre es Nicolás Luza",
                          "y me apasiona la codificación.",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: "50"
                      }}
                    />
                  </span>
                </h1>
                <h2 className="text-sm uppercase text-gray-400 tracking-[5px]">
                    Desarrollador FullStack
                </h2>
              </div>
            </div>

        </motion.div>
      </div>
      </>
    )
  }
  
  export default Hero