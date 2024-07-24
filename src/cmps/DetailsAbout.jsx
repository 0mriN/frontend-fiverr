import react from "react"

import { StarLevel } from "../cmps/StarLevel" 
export function DetailsAbout({ gig }) {

  return (
    <section className="details-about-section">
      <p className="about-title">About this gig</p>
      <div className="desc-div">
        <div
          className="about-desc"
          dangerouslySetInnerHTML={{ __html: gig.description }}
        ></div>
      </div>
      <hr className="divider" />
      <div
        className="about-file-details"
        dangerouslySetInnerHTML={{ __html: gig.aboutFiles }}
      ></div>
      <div className="about-get-to-know">
        <h4>Get to know {gig.owner.fullname}</h4>
        <div className="about-get-to-know-details">
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/f91b8760b6eae417acc9fc0adf178b80-1709314771112/401bbbdd-fbbf-4ce2-9ab9-fe68217db026.jpg"
            alt=""
          />
          <div className="get-to-know-container">
            <p>{gig.getToKnowDesc}</p>
            <div className="get-to-know-container-inside">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                  className="st-current"
                ></path>
              </svg>
              <p>{gig.reviews[0].rating}</p><p>     |             </p>
              <div className="gig-details-rate-comp"> <StarLevel gig={gig}/></div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
