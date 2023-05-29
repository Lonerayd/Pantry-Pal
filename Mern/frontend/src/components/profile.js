import React from 'react';
import Prof from './css/profile.module.css';
import ProfilePic1 from './images/icons/profileIcon.png' 
import ProfilePic2 from './images/icons/icon11.png' 

const Profile = () => {
    return (
        <div className="container border border-2 rounded-4 border-light-subtle py-4 pt-4 mt-4">
            <div className="row">
                <div className="col-md-12">
                    <div className="text-end pe-2">
                        <a href="#"><button className="btnColor btn px-5">Update Profile</button></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="pt-3 px-5">
                        <img className="img-fluid rounded-5 bg-secondary-subtle" src={ProfilePic1}></img>
                    </div>
                    <div className="profile-img py-3 px-5 mx-2">
                        <a href="#"><button className="btnColor btn"><span><img className="pen-icon img-fluid mb-1" src={ProfilePic2}></img></span> Change Picture</button></a>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="area ms-0">
                        <div className="pt-4 pe-5">
                            First Name:
                            <br/><input type="text" className="name border border-secondary-subtle rounded-2"/>
                        </div>
                        <div className="area pt-4 pe-5">
                            Last Name:
                            <br/><input type="text" className="name border border-secondary-subtle rounded-2"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ps-5">
                <div className="col-md-12">
                    <div className="area pt-4">
                        Phone Number:
                        <br/><input type="number" className="number border border-secondary-subtle rounded-2"/>
                    </div>
                    <div className="area pt-4">
                        Email:
                        <br/><input type="email" className="email border border-secondary-subtle rounded-2"/>
                    </div>
                    <div className="area my-4">
                        Address:
                        <br/><input type="text" className="address border border-secondary-subtle rounded-2"/>
                    </div>
                    <div className="text-start ps-5">
                        <a href="#"><button className="btnColor btn px-5">Change Password</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;