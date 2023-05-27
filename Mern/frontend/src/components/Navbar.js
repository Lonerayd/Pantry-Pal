import { NavLink } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import '@fortawesome/fontawesome-free/css/all.min.css'
import NavCSS from './css/nav.module.css'
import logo from './images/logo.png'
import { useEffect, useRef} from 'react'

import './css/nav.css'
import useNavjs from '../hooks/navscript'


const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
 
  
  const handleClick = () => {
    logout()
  }
  useNavjs('./ReactNav.js');


 


  return (
    <header>
      
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
           

          )}
          {!user && ( 
          

      <nav className="navbar" >
        <div className="burger">
            <i className="fa-solid fa-bars"></i>
            
        </div>
        <div className='mobile-logo'>
            <img src={logo} alt='logo'></img>
        </div>
        <ul className='nav-links'>
            <li>Home</li>
            <li>Our Foods</li>
            <li>Story</li>
          <li className='logo'><img src={logo} alt='logo'></img></li>
          <li>Contact Us</li>
          <li><NavLink to="/login" className='reactlink'> Login</NavLink></li>
          <li><NavLink to="/signup" className='reactlink'>Sign Up</NavLink> </li>
        </ul>
      </nav>

)}

      
   
             {/* <nav className={NavCSS['navbar']}  >
        <div className={NavCSS['burger']}>
            <i className="fa-solid fa-bars"></i>
            
        </div>
        <div className={NavCSS['mobile-logo']}>
            <img src={logo} alt='logo'></img>
        </div>
        <ul className={NavCSS['nav-links']}>
            <li>Home</li>
            <li>Our Foods</li>
            <li>Story</li>
          <li className={NavCSS['logo']}><img src={logo} alt='logo'></img></li>
          <li>Contact Us</li>
          <li><NavLink to="/login" className={NavCSS['reactlink']}> Login</NavLink></li>
          <li><NavLink to="/signup" className={NavCSS['reactlink']}>Sign Up</NavLink> </li>
        </ul>
      </nav> */}
      
        
    </header>
     
  )
  
}

export default Navbar