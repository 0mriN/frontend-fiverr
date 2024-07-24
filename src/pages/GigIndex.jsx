import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { addGig, loadGigs, removeGig, updateGig } from '../store/actions/gig.actions'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { gigService } from '../services/gig'
import { userService } from '../services/user'

import { GigList } from '../cmps/GigList'

import { Link } from 'react-router-dom'
import { GigFilter } from '../cmps/GigFilter'



export function GigIndex() {
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)
    const gigs = useSelector(storeState => storeState.gigModule.gigs)

    useEffect(() => {
        loadGigs(filterBy)
    }, [filterBy])

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
                
            </header>
            <GigFilter gigs={gigs}/>
            <GigList
                gigs={gigs}
                onRemoveGig={onRemoveGig}
            // onUpdateGig={onUpdateGig} 
            />
        </main>
    )
}