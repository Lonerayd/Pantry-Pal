import { NavLink } from 'react-router-dom'
import Detail from './css/detail.module.css'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

import Dish from 'https://www.unileverfoodsolutions.com.ph/chef-inspiration/food-delivery/10-crowd-favorite-filipino-dishes/jcr:content/parsys/set1/row2/span12/columncontrol_copy_c_1458087071/columnctrl_parsys_2/textimage_copy/image.transform/jpeg-optimized/image.1637868215411.jpg' 

const Detailcomp = () => {

  return (
    <div className={`${Detail.container-fluid} ${Detail.first}`}>
  
      {/* <!-- CONTENT --> */}
      <div className={`${Detail.col-lg-12} ${Detail.right}`}>
        <nav className={Detail['navbar']}>
          <div className={`${Detail.container-fluid} ${Detail.navs}`}>
            {/* <!-- <a className="navbar-brand"></a> --> */}
            <div>
              <div className={Detail['navbar-toggle']}>
                <div className={Detail['bar']}></div>
                <div className={Detail['bar']}></div>
                <div className={Detail['bar']}></div>
              </div>
              <div className={Detail['navbar-logo']}>
                {/* <!-- Your logo or brand name goes here --> */}
              </div>
              <div className={Detail['sidebar-overlay']}></div>
              <div className={Detail['sidebar']}>
                <div className={Detail['sidebar-header']}>
                  <div className={Detail['sidebar-toggle']}>
                    <div className={Detail['bar']}></div>
                    <div className={Detail['bar']}></div>
                    <div className={Detail['bar']}></div>
                  </div>
                  <div className={Detail['sidebar-logo']}>
                    {/* <!-- Your logo or brand name goes here --> */}
                  </div>
                </div>
                <ul className={Detail['sidebar-menu']}>
                  <li><NavLink  to="/">Home</NavLink></li>
                  <li><NavLink  to="/">My recipes</NavLink></li>
                  <li><NavLink  to="/">Saved recipes</NavLink></li>
                  <li><NavLink  to="/">Meal planner</NavLink></li>
                </ul>
              </div>
            </div>



            <form className={Detail['d-flex']} role="search">
              <input className={`${Detail.form-control} ${Detail.me-2} ${Detail.search-bar}`} type="search" placeholder="Search" aria-label="Search"></input>
              <button type="button" className={`${Detail.btn} ${Detail.btn-outline-danger} ${Detail.search-button}`}type="submit">Search</button>
              <div className={Detail['small']}>
                <i className={`${Detail.fa-solid} ${Detail.fa-user} ${Detail.fa-xl}`} style="color: #970c10;"></i>
              </div>
            </form>
          </div>
        </nav>
        <hr/>
        {/* <!-- className PARENT??? --> */}
        <div className={Detail['parent']}>
          <div>
            <i className={`${Detail.fa-solid} ${Detail.fa-arrow-left} ${Detail.fa-lg}`}></i>
            <strong>Salmon Belly Sinigang with Miso</strong>
            {/* <!-- <span>|</span><b> Add New Recipes</b><br>
            <p>8 recipes</p> --> */}
          </div>
          <div className={Detail['filter-button']}>
            <button type="button" className={`${Detail.btn} ${Detail.btn-outline-danger} ${Detail.search-button}`} type="submit">
                Share
            </button>
          </div>
        </div>
        <br/>
        <hr/>


        <div className={`${Detail.container-fluid} ${Detail.bottom}`}>
          <div className={Detail['row']}>
            <div className={`${Detail.col-lg-6} ${Detail.col-md-12}`}>
              <div className={`${Detail.card} ${Detail.col-md-12}`}>
                <img src={Dish} className={Detail['card-img-top']} alt="..." height="326px"></img>
                <div className={Detail['card-body']}>
                  <p className={Detail['card-text']}>
                    <div className={Detail['top']}>
                      <div className={Detail['time']}>
                        <i className={`${Detail.fa-solid} ${Detail.fa-clock}`} style="color: #970c10;"></i>30 minutes &nbsp;
                        <i className={`${Detail.fa-solid} ${Detail.fa-mortar-pestle}`} style="color: #970c10;"></i>13 ingredients
                      </div>
                      <div className={Detail['modify']}>
                        <i className={`${Detail.fa-solid} ${Detail.fa-pen}`} style="color: #970c10;"></i>Edit &nbsp;
                        <i className={`${Detail.fa-solid} ${Detail.fa-trash}`} style="color: #970c10;"></i>Delete &nbsp;
                        <i className={`${Detail.fa-solid} ${Detail.fa-ellipsis-vertical}`} style="color: #970c10;"></i>More
                      </div>
                    </div>
                    <br/>
                    <hr/>
                    <div className={Detail['inst']}>
                      <p className={Detail['inst-header']}>
                        <br/>
                        Directions
                      </p>
                      
                      <b>1.</b> In a pot, add a bit of oil and sauté garlic, onions until translucent.<br>
                      <b>2.</b> Add the tomatoes and sauté until dry.<br>
                      <b>3.</b> Add the miso and slightly toast it.<br>
                      <b>4.</b> Add the water and radish. Bring to a boil.<br>
                      <b>5.</b> Simmer for 20 minutes until the radish is tender.<br>
                      <b>6.</b> Add the salmon belly and Knorr Sinigang Mix.<br>
                      <b>7.</b> Season with salt and pepper. Cook for around 8 minutes more.<br>
                      <b>8.</b> Cook mustard leaves for 3 minutes and add the calamansi juice.<br>
                      <b>9.</b> Serve the dish piping hot.<br>
                      
                    </div>
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- INGREDIENTS --> */}
            <div className={`${Detail.col} ${Detail.ing-column}`}>
              <div className={Detail['card']}>
                <div className={Detail['card-body']}>
                  <p className={Detail['ings-header']}>
                    Ingredients
                  </p>
                  <div className={Detail['serving']}>
                    <label for="points">
                      <br/>
                      {/* <!-- 3 servings --> */}
                    </label><br/>
                    <div className={Detail['prog']}>
                      3 servings
                      <div className={Detail['progress']} role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div className={Detail['progress-bar']} style="width: 30%">
                        </div>
                      </div>
                    </div>
                    <br/>
                  </div>
                  <p className={Detail['list']}>
                    <table className={`${Detail.table} ${Detail.table-borderless}`}>
                      <tbody>
                        <tr>
                          <td>262.50g</td>
                          <td>Salmon, sliced 2 inches in length</td>
                        </tr>
                        <tr>
                          <td>7.50g</td>
                          <td>Garlic, minced</td>
                        </tr>
                        <tr>
                          <td>18.750g</td>
                          <td>Onion, sliced</td>
                        </tr>
                        <tr>
                          <td>37.50g</td>
                          <td>Tomatoes, chopped</td>
                        </tr>
                        <tr>
                          <td>18.750g</td>
                          <td>Miso</td>
                        </tr>
                        <tr>
                          <td>525ml</td>
                          <td>Water</td>
                        </tr>
                        <tr>
                          <td>0.75g</td>
                          <td>Green Chili, whole</td>
                        </tr>
                        <tr>
                          <td>37.50g</td>
                          <td>Radish, sliced</td>
                        </tr>
                        <tr>
                          <td>11.25g</td>
                          <td>Sampalok Mix</td>
                        </tr>
                        <tr>
                          <td>75g</td>
                          <td>Mustard leaves</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>Black pepper, to taste</td>
                        </tr>
                        <tr>
                          <td>7.50ml</td>
                          <td>Calamansi</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>Salt, to taste</td>
                        </tr>
                      </tbody>
                    </table>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  )
}


export default Detailcomp