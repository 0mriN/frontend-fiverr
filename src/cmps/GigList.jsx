import { userService } from '../services/user'
import { GigPreview } from './GigPreview'

export function GigList({ gigs, onRemoveGig, onUpdateGig }) {

    function shouldShowActionBtns(gig) {
        const user = userService.getLoggedinUser()

        if (!user) return false
        if (user.isAdmin) return true
        return gig.owner?._id === user._id
    }

    return <section className='gig-list-container'>
        <div className='sort-container'>
            <div className='top-filters'>
                <button>Service options</button>
                <button>Seller details</button>
                <button>budget</button>
                <button>Delivery time</button>
            </div>
            <div className='sort-by-wrapper'>
                <p>{gigs.length}+ Results</p>
                <div className='sort-by'>
                    <span>Sort By:</span>
                    <select className='sort-selector'>Best selling
                        <option value="">Best selling</option>
                        <option value="">Recommended</option>
                        <option value="">Newest arrivals</option>
                    </select>
                </div>
            </div>
        </div>
        <ul className="gig-list">
            {gigs.map(gig =>
                <li key={gig._id}>
                    <GigPreview gig={gig} />
                    {shouldShowActionBtns(gig) && <div className="actions">
                        <button onClick={() => onUpdateGig(gig)}>Edit</button>
                        <button onClick={() => onRemoveGig(gig._id)}>x</button>
                    </div>}
                </li>)
            }
        </ul>
    </section>
}