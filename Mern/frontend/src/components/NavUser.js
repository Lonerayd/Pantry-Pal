import NavCSS from './css/nav.module.css'
import logo from './images/logo.png'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { applyNavScript } from '../hooks/navscript'
export default function NavUser(){
    
    return (
        <nav className={NavCSS.navbar}>
        <div className={NavCSS.burger}>
            <i className="fa-solid fa-bars"></i>
            
        </div>
        <div className={NavCSS['mobile-logo']}>
            <img src={logo} alt='logo'></img>
        </div>
        <ul className={NavCSS['nav-links']}>
            <li>Home</li>
            <li>Our Foods</li>
            <li>Story</li>
          <li className={NavCSS.logo}><img src={logo} alt='logo'></img></li>
          <li>Contact Us</li>
          <li><NavLink to="/login" className={NavCSS['reactlink']}> Login</NavLink></li>
          <li><NavLink to="/signup" className={NavCSS['reactlink']}>Sign Up</NavLink> </li>
        </ul>
        </nav>
    )
  
}
