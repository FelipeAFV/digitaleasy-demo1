import logo from './logo.svg';
import './App.css';
import bgimg from './images/bg.jpg'


import Section from './components/Section';
import Navber from './components/Navbar';
import Navbar from './components/Navbar';

import Service from './components/Service';
import { AiOutlineInstagram } from "react-icons/ai";
import Mailing from './components/Mailing';
import Galery from './pages/Galery';
import SectionTitle from './components/SectionTitle';
import Contact from './pages/Contact';
import { useEffect, useRef } from 'react';
import AboutUs from './components/AboutUs';
import Services from './pages/Services';
import Carousel from './components/Carousel';
import WhatsApp from './components/WhatsApp';

function App() {

  const descriptionRef = useRef()
  useEffect(() => {
    console.log('asd')
    setTimeout(() => {
      descriptionRef.current.className += 'description-animation '
    }, 1000)
  }, [])

  return (
    <>
      <Navbar></Navbar>

      <Section id={'home'} className={'gradient  snap-start snap-always flex-col relative'}>
        <img className='absolute object-cover w-[100vw] h-[100vh] ' src={bgimg} />
        <div className='absolute w-[100vw] h-[100vh] bg-[#00000099] '></div>
        <div className='up-down-animation flex z-[5] justify-center flex-col items-center'>

          <h1 className='text-6xl md:text-6xl xl:text-7xl text-center text-white font-bold '>Mi Negocio</h1>
          <p className='border-t border-1 w-[80%] text-center sm:w-[100%] my-4' id='subline-title'></p>
          <p ref={descriptionRef} className='text-white text-center md:text-lg px-10 invisible '>
            Bienvenido a mi emprendimiento
          </p>
        </div>
      </Section>
      <AboutUs />
      <Services/>
      <Contact />
      <Galery >

        <div className='absolute bottom-0 py-8 bg-[#00000055] w-full  flex items-center justify-center'>

          <a href='https://www.instagram.com/digitaleasy.cl/' target='_blank' className='ml-4'>
            <AiOutlineInstagram color='white' size={'30px'} className='rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></AiOutlineInstagram>
          </a>
        </div>


      </Galery>

      <WhatsApp/>
    </>
  );
}

export default App;
