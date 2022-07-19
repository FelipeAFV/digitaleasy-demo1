import React from 'react'
import Section from '../components/Section'
import img from "../images/galery.jpg";
import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';

export default function Galery({ children }) {




    const images = [img, img, img, img]
    return (
        <Section id='galeria' className={'bg-[#f00] gradient snap-start snap-always pt-36 flex-col'}>
            <SectionTitle title={'Galería'}/>
            <div className='relative h-full min-h-[100vh] w-full flex flex-col items-center justify-around '>

                <div className='flex flex-wrap w-full items-center justify-center pb-40 max-w-[1200px]'>
                    {images.map((imgSrc, index) => {
                        return (
                            <>
                                <input type='checkbox' className='hidden'  id={'input-img-'+index}/>
                                <label className={'cursor-pointer lbl-img-'+index } htmlFor={'input-img-'+index}>

                                    <img src={imgSrc} className={'object-cover h-[400px] w-[250px] mx-10 my-4 ' + ('img-touched-'+index)} />
                                </label>
                            </>
                        )

                    })}

                </div>

                {children}
            </div>

        </Section>
    )
}
