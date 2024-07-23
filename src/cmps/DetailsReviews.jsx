import React from 'react';
// import '../assets/styles/cmps/DetailsReviews.scss';





export function DetailsReviews({gig}) {


  return (
    <div className="reviews">
      {gig.reviews.map((review, index) => (
        <div key={index} className="review">
          <div className="review-header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdCgwQzbeV8Ved8t9QNY1azvb7tlGt24juw&s" alt="" />
            <div className='review-header-details'><span className="username">{review.username}</span><br></br>
            <span className="country">{review.country}</span></div>
          </div>
          <div className="rating2">
            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
          </div>
          <div className="date">{review.date}</div>
          <div className="text">{review.text}</div>
        </div>
      ))}
    </div>
  );
}