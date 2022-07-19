import React from 'react'

export default function Service({ title, description, price, imgSrc }) {
    return (
        <div className='bg-[#00000088] basis-6/12 2xl:basis-4/12 grow  min-w-[300px] md:min-w-[400px] p-4 px-16 py-16 flex-col sm:flex-col flex items-center  text-white  font-bold '>
            <div className='basis-6/12 px-4 mb-10 sm:mb-[0] flex items-center  flex-col'>
                <h2 className='text-white mb-4 md:text-xl lg:text-2xl font-semibold'>{title}</h2>
                <p className='mb-4 text-[#c3c3c3] font-light'>{description}</p>
                <p className='px-4 max-w-[150px]  text-center py-2 mb-4 font-semibold bg-[#1F1D36] rounded'>{price}</p>
            </div>
            <div className='basis-6/12 px-4'>
                <img className='object-cover w-[300px] h-[200px]' src={imgSrc}  />
            </div>
        </div>
    )
}
