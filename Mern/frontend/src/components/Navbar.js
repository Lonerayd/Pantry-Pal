import { NavLink } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import '@fortawesome/fontawesome-free/css/all.min.css'
import NavCSS from './css/nav.module.css'
import logo from './images/logo.png'
import useNavjs from '../hooks/navscript'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  useNavjs()
 
  const handleClick = () => {
    logout()
    
  }

  return (
    <header>
      
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
           

          )}
          {!user && (
            // <div>
            //   <Link to="/login">Login</Link>
            //   <Link to="/signup">Signup</Link>
            // </div>
            
            <nav className={NavCSS.navbar}>
        <div className={NavCSS.burger}>
            <i className="fa-solid fa-bars"></i>
            
        </div>
        <div className={NavCSS['mobile-logo']}>
            <img src={logo} alt='logo'></img>
        </div>
        <ul className={NavCSS['nav-links']}>
            <li>Home</li>
            <li>Our Foods</li>
            <li>Story</li>
          <li className={NavCSS.logo}><img src={logo} alt='logo'></img></li>
          <li>Contact Us</li>
          <li><NavLink to="/login" className={NavCSS['reactlink']}> Login</NavLink></li>
          <li><NavLink to="/signup" className={NavCSS['reactlink']}>Sign Up</NavLink> </li>
        </ul>
      </nav>
      
          )}
        
        <script src=''></script>
        
    </header>
     
  )
  
}

export default Navbar