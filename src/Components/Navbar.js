//react features
import React, {useState, useEffect} from 'react'

//styling
import "../navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
 const [toggleMenu, setToggleMenu] = useState(false)
 const [screenWidth, setScreenWidth] = useState(window.innerWidth)


 const toggleNav = () => {
  setToggleMenu(!toggleMenu)
}

useEffect(() => {

 const changeWidth = () => {
   setScreenWidth(window.innerWidth);
 }

 window.addEventListener('resize', changeWidth)

}, [])
 
 return(
  <nav>
   {(toggleMenu || screenWidth > 500) && (
   <ul className="list">
   <li className="items">Home</li>
   <li className="items">About</li>
   <li className="items">Search</li> 
 </ul>
   )}
   <FontAwesomeIcon onClick={toggleNav} className="btn" icon={faBars} />
  </nav>
 )
}