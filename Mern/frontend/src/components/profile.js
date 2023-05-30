import React from 'react';
import Prof from './css/profile.module.css';
import ProfilePic1 from './images/icons/profileIcon.png' 
import ProfilePic2 from './images/icons/icon11.png' 

const Profile = () => {
    return (
        <div className={"container border border-2 rounded-4 border-light-subtle py-4 pt-4 mt-4" + " " + `${Prof.Background}`}>
            <div className="row">
                <div className="col-md-12">
                    <div className="text-end pe-2">
                        <button className={`${Prof["btnColor"]} "btn px-5"`}>Update Profile</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className={`${Prof["profImg"]} "py-3"`}>
                        <img className="img-fluid rounded-5 bg-secondary-subtle" src={ProfilePic1}></img>
                    </div>
                    <div className="profile-img py-2 px-5 mx-2">
                        <button className={`${Prof["btnColor"]} "btn"`}><img className={`${Prof["pen-icon"]} "img-fluid mb-1"`} src={ProfilePic2}></img> Change Picture</button>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="area ms-0">
                        <div className="pt-4 pe-5">
                            First Name:
                            <br/><input type="text" className={`${Prof["name"]} "border border-secondary-subtle rounded-2"`}/>
                        </div>
                        <div className="area pt-4 pe-5">
                            Last Name:
                            <br/><input type="text" className={`${Prof["name"]} "border border-secondary-subtle rounded-2"`}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ps-5">
                <div className="col-md-12">
                    <div className="area pt-4 me-5">
                        Phone Number:
                        <br/><input type="number" className={`${Prof["number"]} "border border-secondary-subtle rounded-2"`}/>
                    </div>
                    <div className="area pt-4 me-5">
                        Email:
                        <br/><input type="email" className={`${Prof["email"]} "border border-secondary-subtle rounded-2"`}/>
                    </div>
                    <div className="area my-4 me-5">
                        Address:
                        <br/><input type="text" className={`${Prof["address"]} "border border-secondary-subtle rounded-2"`}/>
                    </div>
                    <div className="text-start ps-5">
                        <button className={`${Prof["btnColor"]} "btn px-5"`}>Change Password</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;