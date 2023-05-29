import Land from './css/landing.module.css'
import Footer from "./Footer"


// images
import LuzonImg1 from './images/luzonImages/L-poquipoqui.png'
import LuzonImg2 from './images/luzonImages/L-igado.png'
import LuzonImg3 from './images/luzonImages/L-dinakdakan.png'
import LuzonImg4 from './images/luzonImages/L-pancitbatil.png'
import LuzonImg5 from './images/luzonImages/L-sisig.png'

import VisImg1 from './images/visayasImages/img_2532-1 1.png'
import VisImg2 from './images/visayasImages/V-chickeninasal.png'
import VisImg3 from './images/visayasImages/V-humba.png'
import VisImg4 from './images/visayasImages/V-lumpiangubod.png'
import VisImg5 from './images/visayasImages/V-lapazbatchoy.png'

import MinImg1 from './images/mindanaoImages/M-beef kulma.png'
import MinImg2 from './images/mindanaoImages/M-chicken pyanggang.png'
import MinImg3 from './images/mindanaoImages/M-tiyula itim.png'
import MinImg4 from './images/mindanaoImages/M-rendang.png'
import MinImg5 from './images/mindanaoImages/M-kuning.png'
import { useState } from 'react'


const LandingBtnComp = () => {
  const [activeCategory, setActiveCategory] = useState('luzon');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  return (
    <div>
      <main>
        <div className={Land['p2']}>
          <h1 id='#ourFoods'>Choose from a variety of recipes from different parts of the country</h1>

          <div className={Land['categories']}>
            <button className={`${Land.cat1} ${Land.border}`} onClick={() => handleCategoryClick('luzon')}  id="luzonButton">
              Luzon
            </button>
            <button className={`${Land.cat2} ${Land.border}`}  onClick={() => handleCategoryClick('visayas')} id="visayasButton">
              Visayas
            </button>
            <button className={`${Land.cat3} ${Land.border}`} onClick={() => handleCategoryClick('mindanao')} id="mindanaoButton">
              Mindanao
            </button>
        </div>
      
        <section className={`${activeCategory === 'luzon' ? '' : Land.none} ${Land.foodsec}`} id="luzon" >
          <h1>Luzon</h1>
          <article className={Land['categories']}>
            <div className={Land['foodL']}>
                <img src={LuzonImg1} className={Land['imgStyle']}></img>
                <p>Poqui Poqui</p>
            </div>
            <div className={Land['foodL']}>
                <img src={LuzonImg2} className={Land['imgStyle']}></img>
                <p>Igado</p>
            </div>
            <div className={Land['foodL']}>
                <img src={LuzonImg3} className={Land['imgStyle']}></img>
                <p>Dinakdakan</p>
            </div>
            <div className={Land['foodL']}>
                <img src={LuzonImg4} className={Land['imgStyle']}></img>
                <p>Pancit Batil Patong</p>
            </div>
            <div className={Land['foodL']}>
                <img src={LuzonImg5} className={Land['imgStyle']}></img>
                <p>Sisig</p>
            </div>
          </article>
        </section>
        <section className={`${activeCategory === 'visayas' ? '' : Land.none} ${Land.foodsec}`} id="visayas">
          <h1>Visayas</h1>
          <article className={Land['categories']}>
            <div className={Land['foodL']}>
              <img src={VisImg1} className={Land['imgStyle']}></img>
              <p>Buriring</p>
            </div>
            <div className={Land['foodL']}>
              <img src={VisImg2} className={Land['imgStyle']}></img>
              <p>Chicken Inasal</p>
            </div>
            <div className={Land['foodL']}>
              <img src={VisImg3} className={Land['imgStyle']}></img>
              <p>Humba</p>
            </div>
            <div className={Land['foodL']}>
              <img src={VisImg4} className={Land['imgStyle']}></img>
              <p>Lumpiang Ubod</p>
            </div>
            <div className={Land['foodL']}>
              <img src={VisImg5} className={Land['imgStyle']}></img>
              <p>La Paz Batchoy</p>
            </div>
          </article>
        </section>
        <section className={`${activeCategory === 'mindanao' ? '' : Land.none} ${Land.foodsec}`} id="mindanao" >
          <h1>Mindanao</h1>
          <article className={Land['categories']}>
            <div className={Land['foodL']}>
              <img src={MinImg1} className={Land['imgStyle']}></img>
              <p>Beef Kulma</p>
            </div>
            <div className={Land['foodL']}>
              <img src={MinImg2} className={Land['imgStyle']}></img>
              <p>Chicken Pyanggang</p>
            </div>
            <div className={Land['foodL']}>
              <img src={MinImg3} className={Land['imgStyle']}></img>
              <p>Tiyula Itim</p>
            </div>
            <div className={Land['foodL']}>
              <img src={MinImg4} className={Land['imgStyle']}></img>
              <p>Rendang</p>
            </div>
            <div className={Land['foodL']}>
              <img src={MinImg5} className={Land['imgStyle']}></img>
              <p>Kuning</p>
            </div>
          </article>
        </section>
        </div>
      </main>
      
      
    </div>
  )
}

export default LandingBtnComp
