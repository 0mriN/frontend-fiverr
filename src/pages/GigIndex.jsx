import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { addGig, loadGigs, removeGig, updateGig } from '../store/actions/gig.actions'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { gigService } from '../services/gig'
import { userService } from '../services/user'

import { GigList } from '../cmps/GigList'
import { GigFilter } from '../cmps/GigFilter'
import homeBreadcrump from '../assets/img/svg/home-breadcrumb.svg'
import { Link } from 'react-router-dom'



export function GigIndex() {
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)
    const gigs = useSelector(storeState => storeState.gigModule.gigs)

    useEffect(() => {
        loadGigs(filterBy)
    }, [filterBy, gigs])

    async function onRemoveGig(gigId) {
        try {
            await removeGig(gigId)
            showSuccessMsg('Gig removed')
        } catch (err) {
            showErrorMsg('Cannot remove gig')
        }
    }
    if (!gigs) return <div>Loading...</div>
    return (
        <main className="gig-index">
            <header>
                <div className='title-wrapper'>
                    <ul className='breadcrumbs'>
                        <li><Link to="/"> <img src={homeBreadcrump} alt="Fiverr"></img></Link></li>
                        <li> / Programming & Tech </li>
                    </ul>
                    <h1>Website Development</h1>
                    <div><p class="index-subtitle">Create, build, and develop your website with skilled website developers</p></div>
                    {/* {userService.getLoggedinUser() && <button onClick={onAddGig}>Add a Gig</button>} */}
                </div>
            </header>
            <GigList
                gigs={gigs}
                onRemoveGig={onRemoveGig}
            // onUpdateGig={onUpdateGig} 
            />
        </main>
    )
}