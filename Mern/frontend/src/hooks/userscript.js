import { useEffect, useRef } from 'react';
import { useAuthContext } from './useAuthContext';
import { useLocation } from 'react-router-dom';
const useEffect = (NavCSS, user) => {
 const linksRef = useRef(null);
 const userNavRef =useRef(null);
  const userSideRef=useRef(null);
 useEffect(() => {
    const shouldApplyEffect = user;
  const userNav = userNavRef.current;
      const userSide = userSideRef;
      const targetElement = event.target;

      
      if (!burger.contains(targetElement)) {
        links.classList.remove(NavCSS.show);
        
      }
      if (burger.contains(targetElement)) {
        links.classList.toggle(NavCSS.show);
      }
      if (!userNav.contains(targetElement)) {
        userSide.classList.remove(NavCSS.show);
        
      }
      if (userNav.contains(targetElement)) {
        userSide.classList.toggle(NavCSS.show);
      }
 document.addEventListener('click', handleClick);
 return () => {
document.removeEventListener('click', handleClick);
  };
  }, [user]);
 return {  linksRef, userNavRef,userSideRef };
};

export default userEffect;