import { useEffect, useRef } from 'react';
import { useAuthContext } from './useAuthContext';
import { useLocation } from 'react-router-dom';
const useEffect = ( user) => {
 const linksRef = useRef(null);
 const userNavRef =useRef(null);
  const userSideRef=useRef(null);
 useEffect(() => {
    const shouldApplyEffect = user;
  const userNav = userNavRef.current;
      const userSide = userSideRef;
      const targetElement = event.target;

      
    
      if (!userNav.contains(targetElement)) {
        userSide.classList.remove(".show");
        
      }
      if (userNav.contains(targetElement)) {
        userSide.classList.toggle(".show");
      }
 document.addEventListener('click', handleClick);
 return () => {
document.removeEventListener('click', handleClick);
  };
  }, [user]);
 return {  linksRef, userNavRef,userSideRef };
};

export default userEffect;