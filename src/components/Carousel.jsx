import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import img from "../images/galery.jpg";

export default function Carousel() {

    const imgs = [img, img,img]

    const [currentImg, setCurrentImage] = useState(0)



    const changeImage = (change) => {
        setCurrentImage((prev)=> {
            let next = prev+change;
            if (next > imgs.length-1) {
                next = 0
                console.log('reseting iamages')
            }

            if (next < 0) {
                next = imgs.length-1
            }




            console.log('next image ' + next)
            return next;
        })
    }

    return (
        <div className='flex w-full justify-center'>
            <button onClick={changeImage.bind(this, -1)}>\\</button>
            <div className='carousel-container'>
                {
                    imgs.map((img, index) => {
                        return <img src={img} className={'carousel-image ' + (currentImg == index ? 'carousel-move-image': 'carousel-reset-image')}></img>
                    })
                }
            </div>
            <button onClick={changeImage.bind(this, 1)}>\\</button>
        </div>
    )
}
