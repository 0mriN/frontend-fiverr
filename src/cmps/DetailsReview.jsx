import react from 'react'
// import '../assets/styles/cmps/DetailsReview.scss'

export function DetailsReview({gig}){
return(
<div>
<p>What people loved about this freelancer</p>
<div className="details-review">
  <img
    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/be0207cba0c4e465f4b8721f97ad08b7-1714534350146/ef6594cd-43ea-4632-8971-eb8d13bb038a.jpg"
    alt=""
  />
  <div className='details-review-text'>
  <strong>Costumer Name</strong>
  <p>Appreciative of the willingness to make multiple revisions, however I do not believe much creative effort went into the first logo drafts. Maybe it was my industry (Tech), but I felt like the examples shown in the portfolio did not match the quality received. We were able to figure out something in the end with my input and design direction - but even then the logo still felt flat. Nonetheless, thank you. See less</p>
  </div>
</div>
</div>
)
}