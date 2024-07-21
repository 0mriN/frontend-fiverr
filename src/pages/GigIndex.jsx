import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { addGig, loadGigs, removeGig, updateGig } from '../store/actions/gig.actions'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { gigService } from '../services/gig'
import { userService } from '../services/user'

import { GigList } from '../cmps/GigList'
import { GigFilter } from '../cmps/GigFilter'


export function GigIndex() {

    const [filterBy, setFilterBy] = useState(gigService.getDefaultFilter())
    const gigs = useSelector(storeState => storeState.gigModule.gigs)
  
    useEffect(() => {
        loadGigs(filterBy)
    }, [filterBy,gigs])

    async function onRemoveGig(gigId) {
        try {
            await removeGig(gigId)
            showSuccessMsg('Gig removed')
        } catch (err) {
            showErrorMsg('Cannot remove gig')
        }
    }

    return (
        <main className="gig-index">
            <header>
                <h2>Gigs</h2>
                {/* {userService.getLoggedinUser() && <button onClick={onAddGig}>Add a Gig</button>} */}
            </header>
            <GigFilter filterBy={filterBy} setFilterBy={setFilterBy} />
            <GigList
                gigs={gigs}
                onRemoveGig={onRemoveGig}
                // onUpdateGig={onUpdateGig} 
                />
        </main>
    )
}