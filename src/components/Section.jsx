import React from 'react'

export default function Section({id, color, children, className}) {
  return (
    <section id={id} className={'w-[100vw] min-h-[100vh] h-[100%]   flex  justify-center items-center ' + className}>
        {children}
    </section>
  )
}
