import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { addGig, loadGigs, removeGig, updateGig } from '../store/actions/gig.actions'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { gigService } from '../services/gig'
import { userService } from '../services/user'

import { GigList } from '../cmps/GigList'


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
              
                {/* {userService.getLoggedinUser() && <button onClick={onAddGig}>Add a Gig</button>} */}
            </header>
            <GigList
                gigs={gigs}
                onRemoveGig={onRemoveGig}
                // onUpdateGig={onUpdateGig} 
                />
        </main>
    )
}