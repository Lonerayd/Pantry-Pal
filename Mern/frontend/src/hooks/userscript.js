import { useEffect, useRef } from 'react';
import { useAuthContext } from './useAuthContext';
import { useLocation } from 'react-router-dom';

const useUserNavEffect = (user) => {
  const linksRef = useRef(null);
  const userNavRef = useRef(null);
  const userSideRef = useRef(null);

  useEffect(() => {
    const shouldApplyEffect = user;
    const handleClick = (event) => {
      const userNav = userNavRef.current;
      const userSide = userSideRef.current;
      const targetElement = event.target;

      if (userNav.contains(targetElement)) {
        userSide.classList.toggle("active");
      } else {
        userSide.classList.remove("active");
      }
    };

    if (shouldApplyEffect == null) {
      return; // Skip the effect if the user is not logged in
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [user]);

  return { linksRef, userNavRef, userSideRef };
};

export default useUserNavEffect;
