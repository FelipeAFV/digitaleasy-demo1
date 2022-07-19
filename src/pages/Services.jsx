import React from 'react'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Service from '../components/Service'

import img from "../images/galery.jpg";

export default function Services() {

    const services = [
        {
            imgSrc: '',
            title: 'Servicio 1',
            price: '??.???',
            description: 'Descripción servicio 1...'
        },
        {
            imgSrc: '',
            title: 'Servicio 2',
            price: '??.???',
            description: 'Descripción servicio 2...'
        },
    ]

    const images = [img, img, img, img, img, img, img, img, img]
    return (
        <Section id={'servicios'} className={'gradient snap-start snap-always flex-col items-center justify-center pt-36 flex-wrap '}>

            <SectionTitle title={'Servicios'} />
            <div className='flex flex-row flex-wrap  justify-center'>

                {
                    services.map(service => {
                        return (
                            <Service imgSrc={img} title={service.title} price={service.price}
                                description={service.description}
                            />
                        )
                    })
                }
            </div>

        </Section>
    )
}
