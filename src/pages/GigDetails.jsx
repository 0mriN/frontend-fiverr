import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { addGigMsg, loadGig } from '../store/actions/gig.actions'
import '../../src/assets/styles/pages/GigDetails.scss'


export function GigDetails() {

  const {gigId} = useParams()
  const gig = useSelector(storeState => storeState.gigModule.gig)

  useEffect(() => {
    loadGig(gigId)
    console.log(gigId)
    console.log(gig)
  }, [gigId])


//   async function onAddGigMsg(gigId) {
//     try {
//         await addGigMsg(gigId, 'bla bla ' + parseInt(Math.random()*10))
//         showSuccessMsg(`Gig msg added`)
//     } catch (err) {
//         showErrorMsg('Cannot add gig msg')
//     }        

// }

  return (
    <section className="gig-details">
   <div className='gig=details-main'>
      {gig && <div>
        <h6>/Graphics & Design/Logo Design</h6>
        <h1>{gig.title}</h1>
       
      </div>
      }
     

<p>what people loved about this freelancer</p>
<p className='about-title'>about this gig</p>
<div className="about-desc" dangerouslySetInnerHTML={{__html: gig.aboutDesc}}></div>
</div>
<div className='gig-buy-modal'>
  <p>herek</p>
</div>
    </section>

  )
}