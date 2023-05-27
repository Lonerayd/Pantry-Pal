import { useEffect, useRef,useLayoutEffect } from 'react';

const Landbtn = () => {
 

  useLayoutEffect(() => {
   
    var luzonButton = document.getElementById("luzonButton");
    var visayasButton = document.getElementById("visayasButton");
    var mindanaoButton = document.getElementById("mindanaoButton");
    
    var luzonSection = document.getElementById("luzon");
    var visayasSection = document.getElementById("visayas");
    var mindanaoSection = document.getElementById("mindanao");
    function showSection(section) {
        section.classList.remove("none");
      }
      
      function hideSection(section) {
        section.classList.add("none");
      }
    window.onload=showSection(luzonSection);

    const handleClick = (event) => {
       
        
       
       
        luzonButton.addEventListener("click", function() {
          showSection(luzonSection);
          hideSection(visayasSection);
          hideSection(mindanaoSection);
        });
        
        visayasButton.addEventListener("click", function() {
          hideSection(luzonSection);
          showSection(visayasSection);
          hideSection(mindanaoSection);
        });
        
        mindanaoButton.addEventListener("click", function() {
          hideSection(luzonSection);
          hideSection(visayasSection);
          showSection(mindanaoSection);
        });
        
    };

    
    document.addEventListener('click', handleClick);

    return () => {
      // Cleanup when component unmounts
     
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
};

export default Landbtn;
