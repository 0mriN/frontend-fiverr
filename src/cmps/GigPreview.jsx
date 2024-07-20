import { Link } from 'react-router-dom'
import { gigService } from '../services/gig/gig.service.local.js';
import { LongTxt } from './LongTxt.jsx';

export function GigPreview({ gig }) {

    const starLevel = gigService.getStarLevel(gig)
    const avgRating = gigService.getAvgRating(gig.reviews);


    return <div className="basic-gig-card">
        <Link to={`/gig/${gig._id}`}>
            <div className="img-container">
                <img src={gig.imgUrls[0]} alt="" />
            </div></Link>
        <div className="card-seller">
            <div className="card-profile">
                <img src={gig.owner.imgUrl} alt="" />
                <div className='card-profile-name single-line-text'>
                    <span>{gig.owner.fullname} </span>
                </div>
            </div>
            <div className={`card-rate ${starLevel.isTopRated}`}>
                <p> {gig.owner.level}</p>
                <svg className='levelStar' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill={starLevel.color1}><path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg>
                <svg className='levelStar' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill={starLevel.color2}><path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg>
                <svg className='levelStar' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill={starLevel.color3}><path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg>
            </div>
        </div>
        <Link to={`/gig/${gig._id}`}>
            <div className='card-title'>
                <LongTxt txt={gig.title} />
            </div>
        </Link>
        <div className='card-bottomLine'>
            <div className='card-rating'>
                <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                {` ${avgRating}`}
                <span>{`(${gig.reviews.length})`}</span>
            </div>
            <Link to={`/gig/${gig._id}`}>
                <span className='card-from'>From<span>{`₪${gig.price}`}</span></span>
            </Link>
        </div>

    </div>
}