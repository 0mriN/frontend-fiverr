import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { addGigMsg, loadGig } from "../store/actions/gig.actions"
// import "../../src/assets/styles/pages/GigDetails.scss"
import {PackageModal} from "../cmps/PackModal"
import {HeroCarousel} from "../cmps/DetailsMainCarousel"
import { DetailsHeader } from "../cmps/DetailsHeader"
import { DetailsReviews } from "../cmps/DetailsReviews"
import { DetailsReview } from "../cmps/DetailsReview"
import { DetailsAbout } from "../cmps/DetailsAbout"
import images from "../cmps/DetailsMainCarousel"
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
            <div>
             
              <DetailsHeader gig={gig}/>
              <HeroCarousel images={images} />
            </div>
         <DetailsReview gig={gig}/>
         <DetailsAbout gig={gig}/>
         <PackageComparison/>
         <DetailsReviews gig={gig}/>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="gig-buy-modal">
        <PackageModal />
      </div>
    </section>
  )
}
