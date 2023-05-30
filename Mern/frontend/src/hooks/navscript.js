import { useEffect, useRef } from 'react';
import { useAuthContext } from './useAuthContext';
import { useLocation } from 'react-router-dom';

const useNavbarEffect = (NavCSS, user) => {
  const navbarRef = useRef(null);
  const burgerRef = useRef(null);
  const linksRef = useRef(null);
  const userNavRef =useRef(null);
  const userSideRef=useRef(null);
  const location = useLocation();

 
  useEffect(() => {
    const shouldApplyEffect = user; // Check if the user object is truthy
   
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbar = navbarRef.current;
        navbar.classList.toggle(NavCSS.scrolled, window.scrollY > 50);
      }
    };

    const handleClass = ()=>{
      
    }
    const handleClick = (event) => {
      const links = linksRef.current;
      const burger = burgerRef.current;
      const userNav = userNavRef.current;
      const userSide = userSideRef;
      const targetElement = event.target;

      
      if (!burger.contains(targetElement)) {
        links.classList.remove(NavCSS.show);
        
      }
      if (burger.contains(targetElement)) {
        links.classList.toggle(NavCSS.show);
      }
     
    };

    if (shouldApplyEffect!==null) {
      return ; // Skip the effect if the user is not logged in
    }
    document.addEventListener('click', handleClick);
    
    
    handleScroll(); // Call the handleScroll function immediately
    document.addEventListener('scroll', handleScroll); // Attach event listener for scroll events
    

    return () => {
      // Cleanup when component unmounts
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, [user]); // Add user as a dependency to reapply the effect when it changes

  return { navbarRef, burgerRef, linksRef};
};

export default useNavbarEffect;
