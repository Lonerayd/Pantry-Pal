import { NavLink } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavCSS from './css/nav.module.css';
import logo from './images/logo.png';
import { useState, useEffect } from 'react';
import useNavbarEffect from '../hooks/navscript';

import useScrollToSection from '../hooks/scrollTo';
import  './css/addrecipe.css';


const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  


  const handleClick = () => {
    logout();
  };

  const { navbarRef, burgerRef, linksRef,userNavRef, userSideRef} = useNavbarEffect(NavCSS, user);
   const {foodsRef}=  useScrollToSection(user);
  
  


  


  



  return (
    <header>
      {user && (
         <div className="col-lg-12 right">
         <nav className="navbaruser"ref={userNavRef}>
             <div className="container-fluid navs">
             <a className="navbar-brand"></a> 
               <div>
                 <div className="navbar-toggle">
                   <div className="bar"></div>
                   <div className="bar"></div>
                   <div className="bar"></div>
                 </div>
                 <div className="navbar-logo">
               
                 </div>
                
                 <div className="sidebar">
                   <div className="sidebar-header">
                     <div className="sidebar-toggle">
                       <div className="bar"></div>
                       <div className="bar"></div>
                       <div className="bar"></div>
                     </div>
                     <div className="sidebar-logo">
                      
                     </div>
                   </div>
                   <ul className="sidebar-menu" ref={userSideRef}>
                     <li><a href="#">Home</a></li>
                     <li><a href="#">My recipes</a></li>
                     <li><a href="#">Saved recipes</a></li>
                     <li><a href="#">Meal planner</a></li>
                   </ul>
                   
                 </div>
               </div>




               <form className="d-flex" role="search">
                 <input className="form-control me-2 search-bar" type="search" placeholder="Search" aria-label="Search"/>
                 <button type="button" className="btn btn-outline-danger search-button" >Search</button>
                 <div className="small">
                   <i className="fa-solid fa-user fa-xl" ></i>
                 </div>
               </form>
             </div>
         </nav>
       </div>
      )}
      {!user && (
        <nav className={NavCSS['navbar']} ref={navbarRef}>
          <div className={NavCSS['burger']} ref={burgerRef}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className={NavCSS['mobile-logo']}>
            <img src={logo} alt='logo'></img>
          </div>
          <ul className={NavCSS['nav-links']} ref={linksRef}>
            <li><NavLink to="/pantrypal" activeclassname="selected" className={NavCSS['reactlink']}> Home </NavLink></li>
            <li ref={foodsRef}>
                Our Foods
             </li>
            <li><NavLink to="/OurStory" activeclassname="selected" className={NavCSS['reactlink']}> Story </NavLink> </li>
            <li className={NavCSS['logo']}><img src={logo} alt='logo'></img></li>
            <li><NavLink to="/ContactUs" activeclassname="selected" className={NavCSS['reactlink']}>Contact Us</NavLink> </li>
            <li><NavLink to="/login" activeclassname="selected" className={NavCSS['reactlink']}> Login</NavLink></li>
            <li><NavLink to="/signup" activeclassname="selected" className={NavCSS['reactlink']}>Sign Up</NavLink> </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
