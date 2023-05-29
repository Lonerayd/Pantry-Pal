import contactCss from './css/contact.module.css'

const Contact = () => {
    return(
        <div className={contactCss['contactUsBody']}>
            <h1>Contact Us</h1>
            <div className={contactCss['form-container']}>
                <form>
                    <table>
                        <tr>
                            <th><label for="firstname">First Name*</label></th>
                            <th><label for="lastname">Last Name*</label></th>
                        </tr>
                        <tr>
                            <td><input type="text" name="firstname"></input></td>
                            <td><input type="text" name="lastname"></input></td>
                        </tr>
                        <tr>
                            <th><label for="email">Email*</label></th>
                            <th><label for="phoneNumber">Phone Number*</label></th>
                        </tr>
                        <tr>
                            <td><input type="email" name="email"></input></td>
                            <td><input type="number" name="phoneNumber"></input></td>
                        </tr>
                        <tr>
                            <th><label for="address">Address*</label></th>
                            <th><label for="postalCode">Postal Code*</label></th>
                        </tr>
                        <tr>
                            <td><input type="text" name="address"></input></td>
                            <td><input type="number" name="postalCode"></input></td>
                        </tr>
                        <tr>
                            <th><label for="message">Message*</label></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td rowspan="2" colspan="2"><textarea name="message" rows="4" cols="45"></textarea></td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <td rowspan="2" colspan="2" className={contactCss['submit-container']}><button  className={contactCss['submitbtn']}>Submit</button></td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}
export default Contact