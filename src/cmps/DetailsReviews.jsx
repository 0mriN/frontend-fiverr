import React from 'react'
import profile from '../assets/img/profile.png'

export function DetailsReviews({ gig }) {
  const imgs = [
    'https://res.cloudinary.com/dpn9a26j5/image/upload/v1722725621/review5_rfofoh.jpg',
    'https://res.cloudinary.com/dpn9a26j5/image/upload/v1722725621/review4_xwrqp0.jpg',
    'https://res.cloudinary.com/dpn9a26j5/image/upload/v1722725621/review1_s6l4qi.jpg',
    'https://res.cloudinary.com/dpn9a26j5/image/upload/v1722725621/review3_kir1vq.jpg',
    'https://res.cloudinary.com/dpn9a26j5/image/upload/v1722725621/review2_jtghnu.jpg',
  ]
  return (
    <div className="reviews">
      {gig.reviews.map((review, idx) => (

        <div key={idx} className="review">
          <div className="review-header">
            <img src={imgs[idx]} alt="" />
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