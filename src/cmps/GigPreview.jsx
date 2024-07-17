import { Link } from 'react-router-dom'

export function GigPreview({ gig }) {
    console.log('gig:', gig);
    return <div className="basic-gig-card">
            <Link to={`/gig/${gig._id}`}>
            {/* <img src={gig.imgUrls} alt="Gig Preview Image" /> */}
        {/* <p>Speed: <span>{gig.speed.toLocaleString()} Km/h</span></p> */}
        {gig.owner && <p>Owner: <span>{gig.owner.fullname}</span></p>}
            </Link>
       </div> 
}