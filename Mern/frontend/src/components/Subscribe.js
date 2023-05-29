import subscribeCss from './css/subscribe.module.css';

const Subscribe = () => {
    return (
        <div className={subscribeCss['parent']}>
            <div className={subscribeCss['right']}>
                <img src="https://color-hex.org/colors/f7edd0.png" alt="" width="55%" height="640px" className={subscribeCss['bg']}></img>
                <h1 className={subscribeCss['meal-header']}>Meal Planner</h1>
                <p className={subscribeCss['left']}>
                    {/* <img src="images/meal-plan.png" alt="" height="300px" width="300px" className={subscribeCss['plan']} class="plan"></img> */}
                </p>
                <p className={subscribeCss['red']}>
                    <span>Premium Plan worth $5.99 per month!</span><br></br>
                    <br></br>
                    Get a premium subscription to gain access on our meal planner!<br></br>
                        Easy to use ◈
                        Organized List ◈
                        Budget-wise ◈
                        Personalized<br></br>
                    <br></br>
                    <label for="email">Email:</label>
                    <input type="email" name="email" placeholder="Type your email" required></input><br></br>
                    <br></br>
                    <button><b>Get Premium</b></button>
                </p>
            </div>
        </div>
    )
}
export default Subscribe