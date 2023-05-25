
// window.addEventListener("scroll", function() {
//     var navbar = document.querySelector("nav");
//     navbar.classList.toggle("scrolled", window.scrollY > 50);

   
//   });
        // sidebar
        const navbarToggle = document.querySelector('.navbar-toggle');
        const sidebar = document.querySelector('.sidebar');
        const sidebarToggle = document.querySelector('.sidebar-toggle');
        
      
        navbarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        });
        sidebarToggle.addEventListener('click', () => {
        sidebar.classList.remove('active');
        });

       

        

        document.addEventListener('click', (event) => {
        const targetElement = event.target;
        if (!sidebar.contains(targetElement) && !navbarToggle.contains(targetElement)) {
            sidebar.classList.remove('active');
        }
        });
        // sidebar
