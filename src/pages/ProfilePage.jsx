import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import country from '../assets/img/svg/country.svg'
import member from '../assets/img/svg/member.svg'
import img from '../assets/img/profile.png'
import { useSelector } from 'react-redux'
import { loadGigs, removeGig } from '../store/actions/gig.actions'
import { UserGigPreview } from '../cmps/UserGigPreview'
import { userService } from '../services/user'
export function ProfilePage() {
    const user = useSelector(storeState => storeState.userModule.user)
    const gigs = useSelector(storeState => storeState.gigModule.gigs)


    const navigate = useNavigate()

    useEffect(() => {
        loadGigs(gigs)
    }, [gigs])

    function onAddGig() {
        navigate('/gig/edit')
    }

    async function onRemoveGig(gigId) {
        const isConfirmed = window.confirm('Are you sure you want to delete this gig?')
        if (!isConfirmed) return
        try {
            const removedToy = await removeGig(gigId)
            loadGigs(gigs)
            showSuccessMsg('Toy removed')
        } catch (err) {
            console.log('Cannot remove gig', err)
            showErrorMsg('Cannot remove gig')
        }
    }

    const userGigs = gigs.filter(gig => gig.owner.fullname.toLowerCase() === user.fullname.toLowerCase())

    if (!user) return <div>You have to log in first !</div>

    return (
        <div className="profile-page">
            <div className="profile-info">
                <div className='profile-info-main'>
                    <div className='profile-img-container'>
                        <img className='profile-img' src={img}></img>
                    </div>
                    <h2>{user.fullname}</h2>
                    <div className="profile-details">
                        <div className="profile-details-country">
                            <div className='country-wrapper'>
                                <img src={country}></img>
                                <p>Country:</p>
                            </div>
                            <span> {user.flag}</span>
                            <span> {user.country || 'N/A'}</span>
                        </div>
                        <div className="profile-details-date">
                            <div className='date-wrapper'>
                                <img src={member}></img>
                                <p>Member Since:</p>
                            </div>
                            <span>{user.memberSince || 'N/A'}</span>
                        </div>
                    </div>
                </div>

                <div className="profile-description">
                    <h3>Description</h3>
                    <p>{user.description || 'No description available'}</p>
                </div>
                <button className="messages-btn">Messages</button>
            </div>
            <div className='gig-status'>
                <div className='headline-container'>
                    <h2 className='headline underlined'>Active Gigs</h2>
                </div>


                <section className='user-gigs-container'>
                    <ul className="user-gig-list">
                        <button onClick={onAddGig}>
                            <span>+</span>
                            <p>Create New Gig</p>
                        </button>
                        {userGigs.map(gig =>
                            <li className={'profile-gig-preview'} key={gig._id}>
                                <UserGigPreview gig={gig} onRemoveGig={onRemoveGig} />
                                <div className="actions">
                                </div>
                            </li>)
                        }
                    </ul>

                </section>
            </div>
        </div>
    )
}
