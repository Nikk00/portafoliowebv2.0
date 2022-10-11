import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../public/images/logo-nl.png";
import { BsFillPersonFill, BsBookFill } from 'react-icons/bs'
import { AiOutlineFundProjectionScreen, AiFillCode } from 'react-icons/ai'
import { MdOutlineContactPhone } from 'react-icons/md'
import { FaLaptopCode } from 'react-icons/fa'
const Header = () => {
  return (
    <>
      <div className="lg:grid md:grid sm:grid hidden">
        <div className="fixed top-0 p-3 flex items-start justify-self-center justify-between w-full lg:w-3/4 z-20 text-sm lg:text-lg md:text-lg sm:text-lg text-white bg-[rgb(58,58,58)] rounded-2xl mt-1 bg-opacity-40">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row"
          >
            <Link href="#Hero">
              <a className="inline-flex">
                <Image src={logo} alt="" width={32} height={32} />
                <p className="text-sky-500 font-semibold">Nicolás</p>
                <p className="font-semibold text-white">Luza</p>
              </a>
            </Link>
          </motion.div>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row items-center justify-center mt-1 lg:mt-0 md:mt-0 sm:mt-0"
          >
            <ul className="inline-flex">
              <li className="mr-5 hover:text-sky-500 active:text-sky-500">
                <Link href="#About">
                  <a>Sobre mi</a>
                </Link>
              </li>
              <li className="mr-5 hover:text-sky-500 active:text-sky-500">
                <Link href="#Skills">
                  <a>Habilidades</a>
                </Link>
              </li>
              <li className="mr-5 hover:text-sky-500 active:text-sky-500">
                <Link href="#Projects">
                  <a>Proyectos</a>
                </Link>
              </li>
              <li className="hover:text-sky-500 active:text-sky-500">
                <Link href="#Contact">
                  <a>Contacto</a>
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-row lg:hidden md:hidden sm:hidden text-sm bg-[rgb(58,58,58)] bg-opacity-40 fixed top-0 p-3  items-start justify-self-center w-full justify-between z-20">
            <Link href="#Hero">
              <a className="inline-flex mt-1">
                <Image src={logo} alt="" width={40} height={40} />
              </a>
            </Link>
      <ul className="text-white inline-flex text-center">
              <li className="ml-2 hover:text-sky-500 active:text-sky-500">
                <Link href="#About">
                  <a className="text-center">
                  <BsFillPersonFill className="w-8 h-8 ml-3"></BsFillPersonFill>
                  Sobre mi</a>
                </Link>
              </li>
              <li className="ml-5 hover:text-sky-500 active:text-sky-500">
                <Link href="#Skills">
                  <a>
                  <BsBookFill className="w-8 h-8 ml-5"></BsBookFill>Habilidades</a>
                </Link>
              </li>
              <li className="ml-5 hover:text-sky-500 active:text-sky-500">
                <Link href="#Projects">
                  <a>
                  <FaLaptopCode className="w-8 h-8 ml-3"></FaLaptopCode>Proyectos</a>
                </Link>
              </li>
              <li className="ml-5 mr-2 hover:text-sky-500 active:text-sky-500">
                <Link href="#Contact">
                  <a>
                  <MdOutlineContactPhone className="w-8 h-8 ml-3"></MdOutlineContactPhone>Contacto</a>
                </Link>
              </li>
            </ul>
      </div>
    </>
  );
};

export default Header;
