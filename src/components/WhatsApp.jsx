import React from 'react'
import { BsWhatsapp } from "react-icons/bs";

export default function WhatsApp({ phoneNumber }) {
    return (
        <div className='fixed bottom-[90px] p-3 rounded-full bg-[rgb(79,202,91)] z-10 right-[30px]'>

            <a className='' target={'_blanck'} href={'https://wa.me/' + phoneNumber}>
                <BsWhatsapp className='m-0' size={'50px'} color='#fff'></BsWhatsapp>
            </a>
        </div>
    )
}