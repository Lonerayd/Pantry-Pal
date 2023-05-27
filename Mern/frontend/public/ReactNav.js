

  





            window.addEventListener("scroll", function() {
                var navbar = document.querySelector(".navbar");
                navbar.classList.toggle("scrolled", window.scrollY > 50);
            
               
              });
          
            
                
            
          
            const links = document.querySelector(".nav-links");
                    const burger = document.querySelector(".burger");
                    const ul = document.querySelector("ul");
                   
                    // burger.addEventListener('click', ()=>{ul.classList.toggle('show');})
            
                    document.addEventListener('click', (event) => {
                        const targetElement = event.target;
                        if (!burger.contains(targetElement)) {
                            links.classList.remove('show');
                        }
                        if (burger.contains(targetElement)){
                            ul.classList.toggle('show')
                        }
                        });
                    // story js
          
            
        
           