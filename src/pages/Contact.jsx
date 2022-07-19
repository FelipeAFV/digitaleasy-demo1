import React from 'react'
import Mailing from '../components/Mailing'
import Section from '../components/Section'

export default function Contact() {
    return (
        <Section id='contacto' className={'bg-[#f0f] gradient2 snap-start snap-always md:pt-24 xl:pt-10'}>
            <div className='flex flex-col h-full min-h-[100vh] w-full mt-20  justify-center items-center text-center'>
                <h2 className='text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold mb-2 md:mb-10'>¿Quieres contratar nuestros servicios?</h2>
                <p className='text-xl font-light md:text-2xl lg:text-3xl text-white sm:font-thin px-8 sm:px-0'>Escríbenos en la casilla de correo o a través de WhatsApp</p>
                <Mailing ></Mailing>
            </div>
        </Section>
    )
}
