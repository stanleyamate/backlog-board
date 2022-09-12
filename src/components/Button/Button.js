import React from 'react'
import './Button.css'

const Button = ({submit, bg, text, icon}) => {

  return (
    <>
    <button 
          className={ 
           bg === "light"?"btn btn--light":bg === "dark"?"btn btn--dark": null
            }
          type={ submit? "submit":null} >
            {icon && text? icon && text: icon || text  }
       </button>
    </>
  )
}
export default Button