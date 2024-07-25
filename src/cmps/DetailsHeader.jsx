import React from 'react'
import { StarLevel } from "../cmps/StarLevel"
import homeBreadcrump from '../assets/img/svg/home-breadcrumb.svg'
import { Link } from 'react-router-dom'
import profileImg from "../../src/assets/img/profile.png"
import ratingStar from '../assets/img/svg/RatingStar.svg'
import { gigService } from '../services/gig'
import trophy from '../assets/img/trophy.png'

export function DetailsHeader({ gig }) {
  const avgRating = gigService.getAvgRating(gig.reviews)

  return (
    <div className='gig-details-header-container'>

      <div className='Details-breadcrumbs'>
        <Link to="/"> <img src={homeBreadcrump} alt="Fiverr"></img></Link>
        <Link to="/gig"> / Logo Design </Link>
      </div>
      <div className='gig-overview'>
        <h1>{gig.title}</h1>
        <div className="details-owner">
          <img src={gig.owner.imgUrl} alt={profileImg} />

          <div className='gig-detail-owner-info'>
            <div className='gig-details-header-owner'>
              <div className='name-wrapper'>
                <div className='full-name single-line-text'>{gig.owner.fullname}</div>
              </div>
              <div className='border-line'></div>
              <div className='gig-owner-level'>
                <StarLevel gig={gig} />
              </div>
            </div>
            <div className='rate-wrapper'>
              <div className='gig-owner-rate'>
                <img src={ratingStar} alt="ratingstar" />
                {` ${avgRating}`}
                <span>{`(${gig.reviews.length})`}</span>
              </div>
              <div className='border-line'></div>
              <div className='owner-rep'>
                484 orders in queue
              </div>
            </div>
          </div>
        </div>
        <div className='seller-loyalty-wrapper'>
          <div className='seller-loyalty'>
            <img src={trophy} alt="animated trophy" data-impression-collected="true" />
            <b>People keep coming back!</b>
            This seller has many repeat buyers.
          </div>
        </div>
      </div>
    </div>
  )
}