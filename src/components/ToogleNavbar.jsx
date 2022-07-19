import React from 'react'
import { useRef } from 'react'

export default function ToogleNavbar({handleClick}) {

  const inputRef = useRef()

  const checkInput = () => {
    const isChecked = inputRef.current.checked
    inputRef.current.checked = !isChecked
    console.log(isChecked)
    handleClick(isChecked);
  }
  return (
    <div id='toggle-navbar' onClick={(e) => {
      e.preventDefault()
      checkInput();
      console.log('handle click on toggle')
    }}  >
        <input ref={inputRef} type={'checkbox'} id='toggle'/> 
        <label htmlFor='toggle' style={{
        
        
        }}>
          
        </label>

    </div>
  )
}
