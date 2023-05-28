import L1CSS from './css/LandFirst.module.css'

 const LandFirst = () =>{

    return (
        <div className={L1CSS["p1"]}>
            <div className={L1CSS["metaTag"]}>
                <h2>Savor the taste of the Philippines - join our community of home cooks and foodies!</h2>
           
                <div className={L1CSS["toClick"]}>
                    <button className={L1CSS["toClickBtnLeft"]}>View Pinoy Recipes</button>
                    <button className={L1CSS["toClickBtnRight"]}>Share Your Recipe</button>
                </div>
                
            </div>
        </div>
    )
}
export default LandFirst