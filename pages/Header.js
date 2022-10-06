import React from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from 'framer-motion'
import logo from '../public/images/logo-nl.png'
const Header = () => {
    return (
    <div className="grid overflow-hidden">
    <div className="fixed top-0 p-3 flex items-start justify-self-center justify-between w-full lg:w-3/4 z-20 text-sm lg:text-lg md:text-lg text-white bg-[rgb(58,58,58)] rounded-2xl mt-1 bg-opacity-40">
        <motion.div 
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
        transition={{
            duration: 1.5
        }}
        className="flex flex-row items-center">
        <Image src={logo} alt="" width={32} height={32}/>
        <p className="text-sky-500 font-semibold">Nicolás</p><p className="font-semibold text-white">Luza</p>
        </motion.div>
        <motion.div 
        initial={{
            x:500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className="flex flex-row items-center justify-center mt-1 lg:mt-0 md:mt-0">
            <ul className="inline-flex">
                <li className="mr-5 hover:text-sky-500 active:text-sky-500">
                    <Link href="#About"><a>Sobre mi</a></Link>
                </li>
                <li className="mr-5 hover:text-sky-500 active:text-sky-500">
                    <Link href="#Skills"><a>Habilidades</a></Link>
                </li>
                <li className="hover:text-sky-500 active:text-sky-500">
                    <Link href="#Projects"><a>Proyectos</a></Link>
                </li>
            </ul>
        </motion.div>
      </div>
    </div>
      
    )
  }
  
  export default Header