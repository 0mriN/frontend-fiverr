import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { loadGig } from "../store/actions/gig.actions"
import { PackModal } from "../cmps/PackModal"
import { DetailsMainCarousel } from "../cmps/DetailsMainCarousel"
import { DetailsHeader } from "../cmps/DetailsHeader"
import { DetailsReviews } from "../cmps/DetailsReviews"
import { DetailsAbout } from "../cmps/DetailsAbout"
// import { PackageComparison } from "../cmps/PackCompare"


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
          <div className="gig-details-wrapper">
            <DetailsHeader gig={gig} />
            <section className="main-carousel">
              <DetailsMainCarousel imgUrls={gig.imgUrls} />
            </section>
            <DetailsAbout gig={gig} />
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
