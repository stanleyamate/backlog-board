import React, { useState } from 'react'
import {Link} from "react-router-dom"
import './Header.css'
import UserImage from '../../img/pic.jpg'
import { IoIosArrowDown, IoIosSettings, IoIosLogOut} from 'react-icons/io';
import Button from '../Button/Button';

const Header = () => {
  const [open, setOpen]= useState(false)
  return (
      <header className="header container">
          <div className="user-wrapper">           
            <img src={UserImage} className="user-image" alt="userimage"/>
               <IoIosArrowDown className="icon icon--arrow-down icon--white" onClick={() => {setOpen(!open)}}/>
               {
                open?
                 <div className="dropdown">
                   <Link to={'/'}>
                     <IoIosSettings className='icon icon--white icon--setiing'/>
                  </Link>
                  <Button bg="dark" icon={<IoIosLogOut className='icon icon--white'/>}/>
                 </div>
                : null
               }
          </div>
      </header>
  )
}

export default Header