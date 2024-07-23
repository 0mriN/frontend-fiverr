import { Link } from 'react-router-dom'
import { gigService } from '../services/gig/gig.service.local.js'
import { LongTxt } from './LongTxt.jsx'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { responsive } from './GigCarousel'
import { StarLevel } from './StarLevel.jsx'
import ratingStar from '../assets/img/svg/RatingStar.svg'

export function GigPreview({ gig }) {

    const avgRating = gigService.getAvgRating(gig.reviews)
    const imgs = gig.imgUrls

    return <div className="basic-gig-card">


        <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {imgs.map((img, idx) => (
                <Link key={idx} to={`/gig/${gig._id}`}>
                    <img src={img} alt="" />
                </Link>
            ))}
        </Carousel>        <div className="card-seller">
            <div className="card-profile">
                <img src={gig.owner.imgUrl} alt="" />
                <div className='card-profile-name single-line-text'>
                    <LongTxt txt={gig.owner.fullname} length={15} />
                </div>
            </div>
            <div className='card-rate'>
                <StarLevel gig={gig} />
            </div>
        </div>
        <Link to={`/gig/${gig._id}`}>
            <div className='card-title'>
                <LongTxt txt={gig.title} />
            </div>
        </Link>
        <div className='card-lower-part'>
            <div className='card-rating'>
            <img src={ratingStar} alt="ratingstar" />
                {` ${avgRating}`}
                <span>{`(${gig.reviews.length})`}</span>
            </div>
            <Link to={`/gig/${gig._id}`}>
                <span className='card-from'>From<span>{`₪${gig.price}`}</span></span>
            </Link>
        </div>

    </div>
}
