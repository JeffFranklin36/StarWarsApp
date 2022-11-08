//react features
import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

//styling
import "../navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/bluesaber.png' 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'

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
   <Container>
   {(toggleMenu || screenWidth > 500) && (
   <Nav className="list">
    <Nav.Item className="items">
     <Link className='link' to='/'>
      <img src={logo}/>
     </Link>
    </Nav.Item>
    <Nav.Item className="items">
     <Link className='link' to='/about'>
      About
     </Link>
    </Nav.Item>
 </Nav>
   )}
   <FontAwesomeIcon onClick={toggleNav} className="btn" icon={faBars} />
   </Container>
  </nav>
 )
}