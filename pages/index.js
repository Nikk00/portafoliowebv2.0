import Head from 'next/head'
import Image from 'next/image'
import Hero from './Hero'
import Headerr from './Header'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
const Home = () => {
  return (
    <div className='bg-[rgb(36,36,36)] max-w-full h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory z-0 scrollbar scrollbar-thumb-sky-600 scrollbar-track-gray-400/20'>
      <Head>
        <title>Portafolio Nicolás</title>
      </Head>
      <section id='Hero' className='snap-start'>
      <div
        className="relative overflow-hidden bg-no-repeat bg-auto"
        style={{
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(rgba(0, 0,0, 0.4), rgba(0, 0,0, 0.9)),url('/images/computer.png')`,
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
        }}
      >
      {/* <Headerr /> */}
      {/* Hero */}
      <Hero />
      </div>
      </section>
      {/* About */}
      <section id='About' className='snap-center'>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0,0, 0.4), rgba(0, 0,0, 0.5)),url('/images/blob-scene-haikei (2).png')`,
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
        }}
        >
          <About />
        </div>
      </section>
      {/* Skills */}
      <section id='Skills' className='snap-center'>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0,0, 0.4), rgba(0, 0,0, 0.5)),url('/images/blob-scene-haikei (2).png')`,
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
        }}
        >
          <Skills />
        </div>
      </section>
      {/* Projects */}
      <section id='Projects' className='snap-center'>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0,0, 0.4), rgba(0, 0,0, 0.5)),url('/images/blob-scene-haikei (2).png')`,
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
        }}
        >
          <Projects />
        </div>
      </section>
      {/* Contacto */}
      <section id='Contact' className='snap-center'>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0,0, 0.4), rgba(0, 0,0, 0.5)),url('/images/blob-scene-haikei (2).png')`,
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
        }}
        >
          <Contact />
        </div>
      </section>
    </div>
  )
}

export default Home
