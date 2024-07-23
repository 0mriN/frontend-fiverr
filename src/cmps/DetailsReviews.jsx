import React from 'react'
// import '../assets/styles/cmps/DetailsReviews.scss'

export function DetailsReviews({gig}) {

  return (
    <div className="reviews">
      {gig.reviews.map((review, idx) => (
        <div key={idx} className="review">
          <div className="review-header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdCgwQzbeV8Ved8t9QNY1azvb7tlGt24juw&s" alt="" />
            <div className='review-header-details'><span className="username">{review.name}</span><br></br>
            <span className="country">{review.country}</span></div>
          </div>
          <div className="rating2">
            {'★'.repeat(review.rate)}{'☆'.repeat(5 - review.rate)}
          </div>
          <div className="date">{review.date}</div>
          <div className="text">{review.txt}</div>
        </div>
      ))}
    </div>
  )
}