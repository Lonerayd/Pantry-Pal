import NavCSS from '../components/css/nav.module.css'
import { useEffect } from 'react';



const useNavjs = (src) => {
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, [src]);
};
export default useNavjs






