// import NavCSS from '../components/css/nav.module.css'
// import { useEffect } from 'react';



// const useNavjs = (src) => {
  
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = src;
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       // Cleanup script when component unmounts
//       document.body.removeChild(script);
//     };
//   }, [src]);
// };
// export default useNavjs

import NavCSS from '../components/css/nav.module.css'
import { useLayoutEffect } from 'react';

const useNavjs = () => {
  useLayoutEffect(() => {
    const handleScroll = () => {
      window.addEventListener('scroll', function() {
        var navbar = document.querySelector(NavCSS.navbar);
        navbar.classList.toggle(NavCSS['scrolled'], window.scrollY > 50);
      });
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
    document.addEventListener('click', handleClick); // Attach event listener for click events

    return () => {
      // Cleanup when component unmounts
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null; // Since this is a hook, it doesn't render any JSX, so you can return null
};

export default useNavjs;







