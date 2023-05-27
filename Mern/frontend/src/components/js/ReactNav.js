
  const handleScroll =()=>{
    window.addEventListener("scroll", function() {
        var navbar = document.querySelector(NavCss['navbar']);
        navbar.classList.toggle(NavCss['scrolled'], window.scrollY > 50);
    
       
      });
  }
    
        
    
   const handleClick =(event)=>{
    const links = document.querySelector(".nav-links");
            const burger = document.querySelector(".burger");
            const ul = document.querySelector("ul");
           
            // burger.addEventListener('click', ()=>{ul.classList.toggle('show');})
    
            // document.addEventListener('click', (event) => {
                const targetElement = event;
                if (!burger.contains(targetElement)) {
                    links.classList.remove('show');
                }
                if (burger.contains(targetElement)){
                    ul.classList.toggle('show')
                }
                // });
            // story js
   }
export {handleScroll,handleClick} 
            
        
      

