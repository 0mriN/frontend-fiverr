import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { addGig, loadGigs, removeGig, updateGig } from '../store/actions/gig.actions'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { gigService } from '../services/gig'
import { userService } from '../services/user'

import { GigList } from '../cmps/GigList'

import { Link } from 'react-router-dom'
import { GigFilter } from '../cmps/GigFilter'
import loader from '../assets/img/svg/thloader.svg'



export function GigIndex() {
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)
    const gigs = useSelector(storeState => storeState.gigModule.gigs)

    useEffect(() => {
        loadGigs(filterBy)
    }, [filterBy])


    return (
        <main className="gig-index">
            <GigFilter gigs={gigs} />
            <div className="loader-container">
                {!gigs.length && <img src={loader} className="thloader"/>}
            </div>
            {gigs && <GigList
                gigs={gigs}
            // onUpdateGig={onUpdateGig} 
            />}
        </main>
    )
}