import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsWhatsapp, BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
const Contact = () => {
  return (
    <div className="grid grid-cols-3 place-content-center justify-center items-center h-screen">
        <div className="col-span-3 text-center mb-5">
            <h1 className="uppercase tracking-[20px] text-white text-2xl z-10">
            Contáctame
            </h1>
        </div>
        <div className="col-span-3">
        <div className="flex flex-col justify-center items-center">
        <motion.div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 place-content-center"
        initial={{ opacity:0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        >
          <div className="bg-gray-700 w-full h-44 lg:w-96 lg:h-52 bg-opacity-50 border-solid rounded-xl p-5 flex flex-col items-center">
            <h1 className="uppercase tracking-[5px] text-sky-500 text-xl text-center">
              Correo Electrónico
            </h1>
            <p className="mt-5 text-center text-white text-lg">
              Envíame un email:
            </p>
            <Link href="mailto:nicolas.luza.pino@gmail.com">
              <button className="place-self-center inline-flex items-center justify-center bg-gray-900 rounded-lg ring-offset-0 ring-2 ring-red-600 p-3 mt-2">
                <span className="text-white font-semibold">Email</span>
                <CgMail className="text-white ml-2"></CgMail>
              </button>
            </Link>
          </div>
          <div className="bg-gray-700 w-full h-44 lg:w-96 lg:h-52 bg-opacity-50 border-solid rounded-xl p-5 flex flex-col items-center">
            <h1 className="uppercase tracking-[5px] text-sky-500 text-xl text-center">
              Mensaje
            </h1>
            <p className="mt-5 text-center text-white text-lg">
              Escríbeme a mi número:
            </p>
            <Link href="https://wa.me/56958597458" target="_blank">
              <button className="place-self-center mt-2 inline-flex items-center justify-center bg-gray-900 rounded-lg ring-offset-0 ring-2 ring-green-500 p-3">
                <span className="text-white font-semibold">WhatsApp</span>
                <BsWhatsapp className="text-white ml-2"></BsWhatsapp>
              </button>
            </Link>
          </div>
          <div className="bg-gray-700 w-full h-44 lg:w-96 lg:h-52 bg-opacity-50 border-solid rounded-xl p-5 flex flex-col items-center">
            <h1 className="uppercase tracking-[5px] text-sky-500 text-xl text-center">
              Curriculum
            </h1>
            <p className="mt-5 text-center text-white text-lg">
              Aquí puedes ver mi Curriculum:
            </p>

            <button className="place-self-center mt-2 inline-flex items-center justify-center bg-gray-900 rounded-lg ring-offset-0 ring-2 ring-sky-500 p-3">
              <a
                className="text-white font-semibold"
                href="/files/Curriculum-NicolásLuzaPino.pdf"
                target="_blank"
              >
                Visualizar
              </a>
              <BsFillFileEarmarkPdfFill className="text-white ml-2"></BsFillFileEarmarkPdfFill>
            </button>
          </div>
        </motion.div>
      </div>
        </div>

    </div>
  );
};

export default Contact;
