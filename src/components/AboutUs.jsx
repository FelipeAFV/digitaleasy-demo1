import React from 'react'
import Section from './Section'
import SectionTitle from './SectionTitle'

export default function AboutUs() {
    return (
        <Section id='quienessomos' className={'bg-[#f00] gradient2 snap-end  py-28 snap-always'}>
            <div className='max-w-[900px] w-[80%] text-white'>
                <SectionTitle title={'¿Quiénes somos?'} />
                <p className='text-justify mb-10'>

                    
                    Somos un emprendimiento

                </p>
                <SectionTitle title={'Ubicación'} />
                <p className='text-justify'>

                    Estamos ubicados en **Comuna** **Calle**



                </p>
            </div>

        </Section>
    )
}
