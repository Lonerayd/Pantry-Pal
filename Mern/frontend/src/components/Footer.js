import { NavLink } from 'react-router-dom'
import Foot from './css/footer.module.css'
import Facebook from './images/icons/facebook-24.png'
import Twitter from './images/icons/twitter-24.png'
import Insta from './images/icons/instagram-24.png'

const Footer = () => {
    

    return  ( 
      <div className='globalFooter'>
        <footer className={Foot['bg_footer']}>
          <section className={Foot['container2'] }>
            <div className={`${Foot.links_container} ${Foot.sec_1}`}>
                <section className={Foot['link_1'] }>
                
                  <p> <NavLink  to="/" className={Foot['text2']}><strong>Home</strong></NavLink> </p>
                  <p><NavLink to="/" className={Foot['text2']}><strong>Our Foods</strong></NavLink></p>
                  <p><NavLink to="/" className={Foot['text2']}><strong>Our Story</strong></NavLink></p>
                </section>
                <section className={Foot['link_2']}>
                  <p><NavLink to="/" className={Foot['text2']}>Get Help</NavLink></p>
                  <p><NavLink to="/" className={Foot['text3']}>Contact Us</NavLink></p>
                </section>
                <section className={Foot['link_3']}>
                  <p><NavLink to="/" className={Foot['text3']}>Privacy Policy</NavLink></p>
                  <p><NavLink to="/" className={Foot['text3']}>Terms of Use</NavLink></p>
                </section>
                <section className={Foot['link_4']}>
                    <h1 className={Foot['text2']}>Connect with Us</h1>
                    <NavLink to="/"> <img src={Facebook} alt='facebook'></img> </NavLink>
                    <NavLink to="/"> <img src={Twitter} alt='twitter'></img> </NavLink>
                    <NavLink to="/"> <img src={Insta} alt='instagram'></img></NavLink>
                </section>
            </div>
            <div className={Foot['sec_2']}>
                <p className={Foot['text4']}>© 2023 Pantry Pal. All Rights Reserved.</p>
            </div>
          </section>
        </footer>
      </div>
    
    )
}
export default Footer