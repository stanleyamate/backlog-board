import React, { useContext } from 'react'
import Logo from "../../logo.svg";
import './Sidebar.css'
import { Link } from "react-router-dom";
import { BiLink, BiHome, BiMenuAltLeft } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import Button from '../Button/Button';
import { AppContext } from '../../context/AppProvider';

const Sidebar = () => {
    const { open, setOpen, clearAllIssues } = useContext(AppContext)
    const bg="light"
    const text="clear"
    const handleToggle=() =>{
     setOpen(!open)
    }
  return (
    <aside className={open? "sidebar":"sidebar sidebar--close"}>
        <div className="sidebar__top">
        <div className="logo-hamburger-wrapper">
          <div className="logo-wrapper">
            <img src={Logo} className="logo" alt="logo" />
              <h2 className={!open?"logo-name disable": "logo-name"}>My Logo</h2>
          </div>
         </div>
     <BiMenuAltLeft
     className='icon icon--hamburger icon--white'
     onClick={handleToggle}
     />
      <nav className="nav">
        <ul>
          <li>
            <Link className='nav__link' to="/">
              <BiHome className='icon'/>
                <div className={!open?"disable": null}>Home</div>
            </Link>
          </li>
          <li>
            <Link className='nav__link' to="/route1">
              <BiLink className='icon'/>
              <div className={!open?"disable": null}>Route1</div>
            </Link>
          </li>
          <li>
            
            <Link className='nav__link' to="/route2">
              <BiLink className='icon'/>
              <div className={!open?"disable": null}>Route2</div>
              </Link>
          </li>
          <li>
            
            <Link className='nav__link' to="/route3">
              <BiLink className='icon'/>
              <div className={!open?"disable": null}>Route3</div>
              </Link>
          </li>
        </ul>
      </nav>
        </div>
      <Button bg={bg} submit={false}  icon={<AiFillDelete className='icon' text={text} onClick={clearAllIssues}/> }/>
    </aside>
  )
}
export default Sidebar