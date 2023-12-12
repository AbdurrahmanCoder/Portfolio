import React from 'react';
import {Link}from 'react-scroll';
import { useState } from 'react';
import logo from "../photos/4.png"
import '../styling/style.css'
const Navbar = () => {

  

return(
  
    <div className="navbar">
      <img src={logo} alt='Logo Image' style={{ backgroundColor: "black", width: "100px", height: "100px" }} />
      <ul>
        <li><Link to="Home" spy={true} smooth={true} offset={50} duration={2222}>Home</Link></li>
        <li><Link to="Skills" spy={true} smooth={true} offset={50} duration={2222}>Skills</Link></li>
        <li><Link to="Projet" spy={true} smooth={true} offset={50} duration={0}>Portfolio</Link></li>
        <li><Link to="SkillsToShow" spy={true} smooth={true} offset={50} duration={0}>About</Link></li>
        <li><Link to="Contact" spy={true} smooth={true} offset={50} duration={0}>Contact</Link></li>
      </ul>
    </div>  
)
}
export default Navbar ;

 

{/* <div className='header'>
<nav className='navbar'>
    <a href='/' className='logo'>
        <img src={logo} alt='logo' />
    </a>
    <div className='hamburger' onClick={handleClick}>
        {/* {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
            : (<FaBars size={30} style={{ color: '#ffffff' }} />)} */}

//     </div>
//     <ul className={click ? "nav-menu active" : "nav-menu"}>
//         <li className='nav-item'>
//         <Link to="SkillsToShow" spy="true " smooth={true} offset={50} duration={0} > Homeeee</Link>
//         </li>
//         <li className='nav-item'>
//             <a href='#about' onClick={closeMenu}>About</a>
//         </li>
//         <li className='nav-item'>
//             <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
//         </li>
//         <li className='nav-item'>
//             <a href='#demo' onClick={closeMenu}>Demo</a>
//         </li>
//     </ul>
// </nav>
// </div> */}
