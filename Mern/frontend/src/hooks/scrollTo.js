import { useEffect,useRef } from 'react';

const useScrollToSection = (user) => {
    const foodsRef = useRef(null);
  useEffect(() => {
    if (user){
        return;
    }
    const handleClick = (event) => {
        const foods = foodsRef.current;
        const targetElement = event.target;
        if (foods.contains(targetElement)){
           
            const element = document.getElementById('ourFoods');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
              
            }
        }
    }
    const handleScroll = () => {
        if (foodsRef.current) {
          const foods = foodsRef.current;
          const scrollPosition=  ((window.scrollY)/(window.innerHeight)*100)
          foods.classList.toggle('active',scrollPosition > 99 && scrollPosition <199);

        }
      };
      
    document.addEventListener('scroll',handleScroll)
    document.addEventListener('click', handleClick);

    return ()=>{
        document.addEventListener('scroll',handleScroll)
        document.removeEventListener('click', handleClick);
    }

  }, [user]);
  return {foodsRef}
};

export default useScrollToSection;
