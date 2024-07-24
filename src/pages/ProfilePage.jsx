import React, { useEffect, useState } from 'react';
import {userService} from '../services/user/user.service.local'
import country from '../assets/img/svg/country.svg'
import member from '../assets/img/svg/member.svg'
import img from '../assets/img/profile.png'
export function ProfilePage() {
    const [user, setUser] = useState(null);
    <img src =''></img>
// const img=user.imgUrl
    useEffect(() => {
        const loggedInUser = (userService.getLoggedinUser());
        console.log(loggedInUser)
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-page">
            <div className="profile-info">
                <div className='profile-info-main'>
<img className='profile-info-main-img' src={img}></img>
                {/* <img src={img || 'default-profile.png'} alt={`${user.fullname}'s profile`} /> */}
                <h2>{user.fullname}</h2>
                <div className="profile-details">
                <div className="single-line-text profile-details-singleline"><div className='single-line-text profile-details-singleline-innerdiv'><img src ={country}></img>  <p><strong> Country:</strong></p></div><span> {user.country || 'N/A'}</span></div>
                <div className="single-line-text profile-details-singleline"><div className='single-line-text profile-details-singleline-innerdiv'><img src ={member}></img>   <p><strong> Member Since:</strong></p></div> <span>{user.memberSince || 'N/A'}</span></div>
                   
                </div>
                </div>
            
                <div className="profile-description">
                    <h3>Description</h3>
                    <p>{user.description || 'No description available'}</p>
                </div>
            <button className="messages-btn">Messages</button>
            </div>
        </div>
    );
}
