// import { useState, useEffect } from 'react';
// import NavCss from '../css/nav.module.css'

// export function useScrollResize() {
//     const [navbarSize, setNavbarSize] = useState(); // Replace with your initial navbar size class from the CSS module
  
//     useEffect(() => {
//       // Event listener callback function
//       function handleScroll() {
//         // Logic to adjust the navbar size based on scroll position
//         const shouldShrink = window.scrollY > 0; // Replace this condition with your desired logic
        
//         if (shouldShrink) {
//           setNavbarSize(NavCss['scrolled']); // Replace with your shrunk navbar size class from the CSS module
//         } else {
//           setNavbarSize(styles.expandedNavbarSize); // Replace with your expanded navbar size class from the CSS module
//         }
//       }
  
//       // Add scroll event listener when the component mounts
//       window.addEventListener('scroll', handleScroll);
  
//       // Remove scroll event listener when the component unmounts
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }, []); // Empty dependency array to run the effect only once
  
//     return navbarSize;
//   }
  