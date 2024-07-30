import React, { useEffect, useRef, useState } from 'react'
import { PackModalToolbar } from '../cmps/PackModalToolbar'
import { OrderModal } from './OrderModal.jsx'
import { makeId } from '../services/util.service.js'
import { addOrder } from '../store/actions/order.actions.js'
import { useNavigate } from 'react-router'
import { showErrorMsg } from '../services/event-bus.service.js'

const CLOCKICON = <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg>
const refresh = <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path><path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path></svg>
const arrowR = <span aria-hidden="true" ><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path></svg></span>
export function PackModal({ gig }) {
  const [activeTab, setActiveTab] = useState('basic')
  const [showOrderModal, setShowOrderModal] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)
  const navigate = useNavigate()
  const modalRef = useRef(null)
 

  const packages = {
    basic: {
      name: "Basic",
      // price: `₪ 10`,
      price: gig.price,
      description: "3 Logo Design + PNG + JPG + 3D Mockup",
      delivery: `${gig.daysToMake}-day delivery`,
      revisions: "5 Revisions",
      promo: "Wind - For Start Ups "
    },
    standard: {
      name: "Standard",
      // price: `$ 10`,
      price: gig.price + 20,
      description: "5 Logo Design + PNG + JPG + 3D Mockup + Source Files",
      delivery: `${gig.daysToMake + 2}-day delivery`,
      revisions: "10 Revisions",
      promo: "Tornado - Best Choice "
    },
    premium: {
      name: "Premium",
      // price: `$ 10`,
      price: gig.price + 40,
      description: "Unlimited Logo Design + PNG + JPG + 3D Mockup + Source Files + Brand Guidelines",
      delivery: `${gig.daysToMake + 4}-day delivery`,
      revisions: "Unlimited Revisions",
      promo: "Hurricane - Selected By PRO "
    }
  }

  const handleContinue = (packageKey) => {
    setSelectedPackage(packages[packageKey])
    onContinue(selectedPackage)
    // setShowOrderModal(true)
  }

  const handleCloseModal = () => {
    setShowOrderModal(false)
  }

  async function onContinue(packageInfo) {
    const user = userService.getLoggedinUser()

    const order = {
      _id: makeId(),
      buyer: userService.getLoggedinUser(),
      owner: gig.owner,
      gig,
      // packageInfo,
      packageInfo: {
        name: "Premium",
        price: gig.price,
        // price: `₪ ${gig.price + 80}`,
        description: "Unlimited Logo Design + PNG + JPG + 3D Mockup + Source Files + Brand Guidelines",
        delivery: "7-day delivery",
        revisions: "Unlimited Revisions",
      },
      status: 'pending',
    }
    try {
      await addOrder(order)
      navigate('/checkout')
    } catch (err) {
      showErrorMsg(`Oops, something went wrong`)
      console.log('err:', err)
    }

  }

  useEffect(() => {
    const handleScroll = () => {
      if (modalRef.current) {
        const scrollY = window.scrollY
        const stickyOffset = 140
        const rect = modalRef.current.getBoundingClientRect()
        if (scrollY >= stickyOffset) {
          modalRef.current.style.top = `${stickyOffset}px`
        } else {
          modalRef.current.style.top = '0px' 
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="modal" ref={modalRef}>
      <div className="modal-content">
        <PackModalToolbar likedByUsers={gig.likedByUsers.length} />
        <div className='modal-packages'>

          <div className="modal-header">
            {Object.keys(packages).map((key) => (
              <button
                key={key}
                className={`tab ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
          <div className="modal-body">
            <div className="package-content">

              {Object.keys(packages).map((key) => (
                <div
                  key={key}
                  id={key}
                  className={`tab-content ${activeTab === key ? 'active' : ''}`}
                >
                  <header>
                    {/* <div className="package-info"> */}
                    <h3>
                      <div className='price-wrapper'>
                        {/* {packages[key].name} */}

                        <span className='price-with-icon'>
                          <span className='modal-price'>
                            {`US$${packages[key].price}`}
                          </span>
                          <div className="info-icon">
                            <svg width="16" height="16" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg" fill="#404145" className="st-current">
                              <g clipPath="url(#info-outline-icon_svg__a)">
                                <path d="M6.3 4h1.4v1.4H6.3V4Zm0 2.8h1.4V11H6.3V6.8ZM7 .5c-3.864 0-7 3.136-7 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7Zm0 12.6a5.607 5.607 0 0 1-5.6-5.6c0-3.087 2.513-5.6 5.6-5.6 3.087 0 5.6 2.513 5.6 5.6 0 3.087-2.513 5.6-5.6 5.6Z" className="">
                                </path>
                              </g><defs><clipPath id="info-outline-icon_svg__a">
                                <path transform="translate(0 .5)" d="M0 0h14v14H0z"></path></clipPath></defs>
                            </svg>
                          </div>
                        </span>
                        <div className='save-up'>
                          <span>Save up to 15% with
                            <span> Subscribe to Save</span>
                            <div className='questionIcon'>
                              <span><svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill='#74767e' fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.66669 6.2222C6.66669 5.99407 6.74244 5.63209 6.94361 5.35269C7.11215 5.11861 7.40085 4.88886 8.00003 4.88886C8.73426 4.88886 9.11567 5.27671 9.24475 5.66556C9.38071 6.07511 9.26479 6.53293 8.84029 6.81593C8.13871 7.28365 7.62193 7.73677 7.34968 8.37204C7.10944 8.93259 7.11027 9.54684 7.11105 10.1244L7.11114 10.2222H8.88892C8.88892 9.49449 8.90421 9.25784 8.98371 9.07235C9.04479 8.92984 9.19468 8.71629 9.82643 8.29513C10.9709 7.53217 11.2994 6.21221 10.932 5.10547C10.5577 3.97803 9.48801 3.11108 8.00003 3.11108C6.82143 3.11108 5.99902 3.62208 5.50089 4.31392C5.03539 4.96045 4.88892 5.70958 4.88892 6.2222H6.66669ZM8.88886 12.8889V11.1111H7.11108V12.8889H8.88886Z"></path></svg></span>
                            </div>
                          </span>
                        </div>
                      </div>
                    </h3>
                    <p className='modal-desc'> <b>{packages[key].promo}</b> {packages[key].description}</p>
                  </header>
                  <article>
                    <div className='additional-info'>
                      <div className='delivery-wrapper'>
                        <span className="icon">{CLOCKICON}</span>
                        {packages[key].delivery}
                      </div>
                      <div className='revision-wrapper'>
                        <span className="icon">{refresh}</span>
                        {packages[key].revisions}
                      </div>
                    </div>
                  </article>
                  <footer className="modal-footer">
                    <button className="continue-btn" onClick={() => handleContinue(key)}>Continue
                      <span className="arrow-icon">{arrowR}</span></button>
                  </footer>
                </div>
              ))}
            </div>
          </div>


        </div>
        <div className='contact-wrapper'>
          <button className="contact-btn">Contact me</button>
        </div>
      </div>
      {showOrderModal && (
        <div className="modal-overlay">
          <OrderModal packageInfo={selectedPackage} onClose={handleCloseModal} gig={gig} />
        </div>
      )}
    </div>
  )
}


