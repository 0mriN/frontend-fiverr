import React from 'react'

export function DetailsHeader({gig}){
return  (
  <div><h6>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M12.773 14.5H3.227a.692.692 0 0 1-.482-.194.652.652 0 0 1-.2-.468V7.884H.5l7.041-6.212a.694.694 0 0 1 .918 0L15.5 7.884h-2.046v5.954a.652.652 0 0 1-.2.468.692.692 0 0 1-.481.194Zm-4.091-1.323h3.409V6.664L8 3.056 3.91 6.664v6.513h3.408v-3.97h1.364v3.97Z"></path>
              </svg>
              /Graphics & Design/Logo Design
            </h6>
            <h1>{gig.title}</h1>
            <div className="details-owner">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/f91b8760b6eae417acc9fc0adf178b80-1709314771112/401bbbdd-fbbf-4ce2-9ab9-fe68217db026.jpg"
                alt=""
              />
              <p>{gig.owner.fullname}</p>
              <p>{gig.reviews[0].rate}</p>
            </div>
            </div>
)
}