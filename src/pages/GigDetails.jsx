import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addGigMsg, loadGig } from "../store/actions/gig.actions"
import { PackModal } from "../cmps/PackModal"
import { HeroCarousel } from "../cmps/DetailsMainCarousel"
import { DetailsHeader } from "../cmps/DetailsHeader"
import { DetailsReviews } from "../cmps/DetailsReviews"
import { DetailsReview } from "../cmps/DetailsReview"
import { DetailsAbout } from "../cmps/DetailsAbout"
import { PackageComparison } from "../cmps/PackCompare"


export function GigDetails() {
  const { gigId } = useParams()
  const gig = useSelector((storeState) => storeState.gigModule.gig)

  useEffect(() => {
    loadGig(gigId)
  }, [gigId])


  return (
    <section className="gig-details">
      <div className="gig-details-main">
        {gig ? (
          <div>
            <DetailsHeader gig={gig} />
            <section className="main-carousel">
              <HeroCarousel gig={gig} />
            </section>
            <div>
              <DetailsAbout gig={gig} />
              {/* <DetailsReview gig={gig}/> */}
            </div>
            {/* <PackageComparison/> */}
            <DetailsReviews gig={gig} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="gig-buy-modal">
        {gig &&
          <PackModal gig={gig} />}
      </div>
    </section>
  )
}



// export function GigDetails() {
//   const { gigId } = useParams()
//   const gig = useSelector((storeState) => storeState.gigModule.gig)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     const fetchGig = async () => {
//       try {
//         await dispatch(loadGig(gigId))
//       } catch (error) {
//         console.error('Failed to load gig:', error)
//       }
//     }
//     fetchGig()
//   }, [gigId, dispatch])

//   if (!gig) {
//     return <p>Loading...</p>
//   }

//   const imgs = gig.imgUrls || []

//   return (
//     <section className="gig-details">
//       <div className="gig-details-main">
//         <DetailsHeader gig={gig} />
//         <HeroCarousel images={imgs} />
//         {/* <DetailsReview gig={gig}/> */}
//         <DetailsAbout gig={gig} />
//         {/* <PackageComparison/> */}
//         <DetailsReviews gig={gig} />
//       </div>

//       <div className="gig-buy-modal">
//         {/* {gig && */}
//         {/* // <PackModal gig={gig} />} */}
//       </div>
//     </section>
//   )
// }
