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


  const navbarRef = useRef(null);
  const burgerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbar = navbarRef.current;
        navbar.classList.toggle(NavCSS.scrolled, window.scrollY > 50);
      }
    };

    const handleClick = (event) => {
      const links = document.querySelector(NavCSS['nav-links']);
      const burger = document.querySelector(NavCSS['burger']);
      const ul = document.querySelector(NavCSS['ul']);

      const targetElement = event;
      if (!burger.contains(targetElement)) {
        links.classList.remove('show');
      }
      if (burger.contains(targetElement)) {
        ul.classList.toggle('show');
      }
    };

    handleScroll(); // Call the handleScroll function immediately
    document.addEventListener('scroll', handleScroll); // Attach event listener for scroll events
    document.addEventListener('click', handleClick);
    

    return () => {
      // Cleanup when component unmounts
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, []);


//  useNavjs();


  return (
    <header>
      
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
           

          )}
          {!user && ( 
          
          
          <nav className={NavCSS['navbar']} ref={navbarRef} > 
          <div className={NavCSS['burger']} ref={burgerRef}>
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
        </nav>
)}

{/* <nav className="navbar" >
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
      </nav> */}

   
            
      
        
    </header>
     
  )
  
}

export default Navbar