import React from 'react'
import profile from '../assets/img/profile.png'

export function DetailsReviews({ gig }) {

  return (
    <div className="reviews">
      {gig.reviews.map((review, idx) => (

        <div key={idx} className="review">
          <div className="review-header">
            <img src={profile} alt="" />
            <div className='review-header-details'>
              <span className="username">{review.name}</span><br></br>
              <div className='country-wrapper'>
                <img src={review.flag} alt="" />
                <span className="country">{review.country}</span></div>
            </div>
          </div>
          <div className='review-details'>

            <div className="review-rating-wrapper">
              <div className="review-rating">
                {'★'.repeat(review.rate)}{'☆'.repeat(5 - review.rate)}
              </div>
              <strong className='review-score'>{review.rate}</strong>
              <div className="review-date">{review.date}</div>
            </div>

            <p className="review-text">{review.txt}</p>
          </div>
        </div>
      ))}
    </div>
  )
}