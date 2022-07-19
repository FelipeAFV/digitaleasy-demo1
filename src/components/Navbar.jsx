import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import ToogleNavbar from './ToogleNavbar'

export default function Navbar() {

  const [showNavBar, setShowNavbar] = useState(false)

  const handleClick = (isChecked) => {


      setShowNavbar((prev) => !prev)
      console.log('changing')


  }

  const navbarRef = useRef()
  return (
    <>

      <div className='hidden md:block sticky top-0 z-10 tracking-wide w-full bg-[#000000aa]'>
        <div className='flex text-white text-lg justify-around'>
          <a className='my-4' href='#home'>Negocio</a>
          <div className='flex'>
            <a href='#quienessomos' className='mx-4 py-4' >Quienes somos</a>
            <a href='#servicios' className='mx-4 py-4'>Servicios</a>
            <a href='#contacto' className='mx-4 py-4'>Contacto</a>
            <a href='#galeria' className='mx-4 py-4' >Galería</a>

          </div>
        </div>

      </div>
      <div  className={'md:hidden fixed text-white top-0 z-[10] w-full  bg-[#000000bb] ' + (showNavBar ? 'h-full' : '')} >
        <div className={'flex  flex-row text-white text-lg justify-around items-center '}>
          <a className='my-4' href='#home'>Negocio</a>


          <ToogleNavbar handleClick={handleClick} />
        </div>
        <div id='responsive-navbar' className={'font-bold flex-col items-center justify-center h-full ' + (showNavBar ? 'flex' : 'hidden')} ref={navbarRef}>
          <a href='#quienessomos' className='mx-4 py-4' >Quienes somos</a>
          <a href='#servicios' className='mx-4 py-4'>Servicios</a>
          <a className='mx-4 py-4' href="#contacto">Contacto</a>
          <a href='#galeria' className='mx-4 py-4' >Galería</a>

        </div>


      </div>
    </>
  )
}
