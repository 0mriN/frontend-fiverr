import { gigService } from "../services/gig";
import levelStar from "../assets/img/svg/levelStar.svg"

export function StarLevel({ gig }) {
    const starLevel = gigService.getStarLevel(gig)

    return (
        <div className={starLevel.isTopRated}>
            <p> {gig.owner.level}</p>
            {/* <img className='levelStar' src={levelStar} alt="levelStar" fill='blue' />       */}
            <svg className='level-star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill={starLevel.color1}><path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg>
            <svg className='level-star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill={starLevel.color2}><path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg>
            <svg className='level-star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill={starLevel.color3}><path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg>
        </div>
    )
}