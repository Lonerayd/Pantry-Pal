import { useEffect, useRef } from 'react';

const useNavbarEffect = (NavCSS) => {
  const navbarRef = useRef(null);
  const burgerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbar = navbarRef.current;
        navbar.classList.toggle(NavCSS.scrolled, window.scrollY > 50);
      }
    };

    const handleClick = (event) => {
      const links = linksRef.current;
      const burger = burgerRef.current;

      const targetElement = event.target;
      if (!burger.contains(targetElement)) {
        links.classList.remove(NavCSS.show);
      }
      if (burger.contains(targetElement)) {
        links.classList.toggle(NavCSS.show);
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

  return { navbarRef, burgerRef, linksRef };
};

export default useNavbarEffect;
