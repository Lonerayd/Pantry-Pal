// import Land from '../css/landing.module.css'
// import Footer from "../components/Footer"

// // images
// import LuzonImg1 from '../components/images/luzonImages/L-poquipoqui.png'
// import LuzonImg2 from '../components/images/luzonImages/L-igado.png'
// import LuzonImg3 from '../components/images/luzonImages/L-dinakdakan.png'
// import LuzonImg4 from '../components/images/luzonImages/L-pancitbatil.png'
// import LuzonImg5 from '../components/images/luzonImages/L-sisig.png'

// import VisImg1 from '../components/images/visayasImages/img_2532-1 1.png'
// import VisImg2 from '../components/images/visayasImages/V-chickeninasal.png'
// import VisImg3 from '../components/images/visayasImages/V-humba.png'
// import VisImg4 from '../components/images/visayasImages/V-lumpiangubod.png'
// import VisImg5 from '../components/images/visayasImages/V-lapazbatchoy.png'

// import MinImg1 from '../components/images/mindanaoImages/M-beef kulma.png'
// import MinImg2 from '../components/images/mindanaoImages/M-chicken pyanggang.png'
// import MinImg3 from '../components/images/mindanaoImages/M-tiyula itim.png'
// import MinImg4 from '../components/images/mindanaoImages/M-rendang.png'
// import MinImg5 from '../components/images/mindanaoImages/M-kuning.png'



// const Landing = () => {
  
//   return (
//     <div>
//       <main>
//         <div classNameName={Land['p2']}>
//           <h1>Choose from a variety of recipes from different parts of the country</h1>

//           <div classNameName={Land['categories']}>
//             <button className={`${Land.cat1} ${Land.border}`}  id="luzonButton">
//               Luzon
//             </button>
//             <button className={`${Land.cat2} ${Land.border}`}  id="visayasButton">
//               Visayas
//             </button>
//             <button className={`${Land.cat3} ${Land.border}`}  id="mindanaoButton">
//               Mindanao
//             </button>
//         </div>
      
//         <section className={`${Land.none} ${Land.foodsec}`} id="luzon" >
//           <h1>Luzon</h1>
//           <article className={Land['categories']}>
//             <div className={Land['food1L']}>
//                 <img src={LuzonImg1} className={Land['imgStyle']}></img>
//                 <p>Poqui Poqui</p>
//             </div>
//             <div className={Land['food2L']}>
//                 <img src={LuzonImg2} className={Land['imgStyle']}></img>
//                 <p>Igado</p>
//             </div>
//             <div className={Land['food3L']}>
//                 <img src={LuzonImg3} className={Land['imgStyle']}></img>
//                 <p>Dinakdakan</p>
//             </div>
//             <div className={Land['food4L']}>
//                 <img src={LuzonImg4} className={Land['imgStyle']}></img>
//                 <p>Pancit Batil Patong</p>
//             </div>
//             <div className={Land['food5L']}>
//                 <img src={LuzonImg5} className={Land['imgStyle']}></img>
//                 <p>Sisig</p>
//             </div>
//           </article>
//         </section>
//         <section className={`${Land.none} ${Land.foodsec}`} id="visayas">
//           <h1>Visayas</h1>
//           <article className={Land['categories']}>
//             <div className={Land['food1V']}>
//               <img src={VisImg1} className={Land['imgStyle']}></img>
//               <p>Buriring</p>
//             </div>
//             <div className={Land['food2V']}>
//               <img src={VisImg2} className={Land['imgStyle']}></img>
//               <p>Chicken Inasal</p>
//             </div>
//             <div className={Land['food3V']}>
//               <img src={VisImg3} className={Land['imgStyle']}></img>
//               <p>Humba</p>
//             </div>
//             <div className={Land['food4V']}>
//               <img src={VisImg4} className={Land['imgStyle']}></img>
//               <p>Lumpiang Ubod</p>
//             </div>
//             <div className={Land['food5V']}>
//               <img src={VisImg5} className={Land['imgStyle']}></img>
//               <p>La Paz Batchoy</p>
//             </div>
//           </article>
//         </section>
//         <section className={`${Land.none} ${Land.foodsec}`} id="mindanao" >
//           <h1>Mindanao</h1>
//           <article className={Land['categories']}>
//             <div className={Land['food1M']}>
//               <img src={MinImg1} className={Land['imgStyle']}></img>
//               <p>Beef Kulma</p>
//             </div>
//             <div className={Land['food2M']}>
//               <img src={MinImg2} className={Land['imgStyle']}></img>
//               <p>Chicken Pyanggang</p>
//             </div>
//             <div className={Land['food3M']}>
//               <img src={MinImg3} className={Land['imgStyle']}></img>
//               <p>Tiyula Itim</p>
//             </div>
//             <div className={Land['food4M']}>
//               <img src={MinImg4} className={Land['imgStyle']}></img>
//               <p>Rendang</p>
//             </div>
//             <div className={Land['food5M']}>
//               <img src={MinImg5} className={Land['imgStyle']}></img>
//               <p>Kuning</p>
//             </div>
//           </article>
//         </section>
//         </div>
//       </main>
//       <Footer></Footer>
//     </div>
//   )
// }

// export default Landing

import Landingcomp from "../components/Landing";

const  Landing =() => {


  return(
    <Landingcomp/>
  )
}
export default Landing