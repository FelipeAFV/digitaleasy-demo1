import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

export default function SectionTitle({title}) {

  const lineRef = useRef()
  const [onViewport, setOnViewPort] = useState(false);

  let observer = new IntersectionObserver((entries) =>  {
    setOnViewPort(entries[0].isIntersecting);
    console.log('Entring on view port isInterseting: '  + entries[0].isIntersecting)
  })

  useEffect(() => {
    observer.observe(lineRef.current);
    return (() => {
      observer.unobserve(lineRef.current)
    })
  }, [])

  return (
    <div className='mb-4'>
        <h2 className='text-4xl font-bold text-white mb-4'>{title}</h2>
        <p ref={lineRef} className={'border-t border-2 w-[80%] text-center sm:w-[100%] my-4 ' + (onViewport ? 'from-left-animation' : '')} id=''></p>
    </div>
  )
}
