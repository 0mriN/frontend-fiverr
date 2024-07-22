import React, { useState } from 'react'
import { PackModalToolbar } from '../cmps/PackModalToolbar'
import { OrderModal } from './OrderModal.jsx'

const CLOCKICON = <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg>;

export function PackModal({ gig }) {
  const [activeTab, setActiveTab] = useState('basic');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = {
    basic: {
      name: "Basic",
      // price: `₪ 10`,
      price: gig.price,
      description: "3 Logo Design + PNG + JPG + 3D Mockup",
      delivery: "3-day delivery",
      revisions: "5 Revisions",
    },
    standard: {
      name: "Standard",
      // price: `₪ 10`,
      price: gig.price + 50,
      description: "5 Logo Design + PNG + JPG + 3D Mockup + Source Files",
      delivery: "5-day delivery",
      revisions: "10 Revisions",
    },
    premium: {
      name: "Premium",
      // price: `₪ 10`,
      price: gig.price + 80,
      description: "Unlimited Logo Design + PNG + JPG + 3D Mockup + Source Files + Brand Guidelines",
      delivery: "7-day delivery",
      revisions: "Unlimited Revisions",
    }
  }

  const handleContinue = (packageKey) => {
    setSelectedPackage(packages[packageKey])
    setShowOrderModal(true)
  }

  const handleCloseModal = () => {
    setShowOrderModal(false)
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <PackModalToolbar />
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
          {Object.keys(packages).map((key) => (
            <div
              key={key}
              id={key}
              className={`tab-content ${activeTab === key ? 'active' : ''}`}
            >
              <div className="package-info">
                <h3>{packages[key].name}</h3>
                <p className='modal-price'>{`₪${packages[key].price}`} <span className="info-icon"><svg width="16" height="16" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg" fill="#404145" className="st-current"><g clipPath="url(#info-outline-icon_svg__a)"><path d="M6.3 4h1.4v1.4H6.3V4Zm0 2.8h1.4V11H6.3V6.8ZM7 .5c-3.864 0-7 3.136-7 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7Zm0 12.6a5.607 5.607 0 0 1-5.6-5.6c0-3.087 2.513-5.6 5.6-5.6 3.087 0 5.6 2.513 5.6 5.6 0 3.087-2.513 5.6-5.6 5.6Z" className=""></path></g><defs><clipPath id="info-outline-icon_svg__a"><path transform="translate(0 .5)" d="M0 0h14v14H0z"></path></clipPath></defs></svg></span></p>
              </div>
              <p>{packages[key].description}</p>
              <p><span className="icon">{CLOCKICON}</span> {packages[key].delivery} <span className="icon">🔄</span> {packages[key].revisions}</p>
              <p><a href="#" className="toggle-details">What's Included</a> <span className="icon">⬇️</span></p>
              <button className="continue-btn" onClick={() => handleContinue(key)}>Continue <span className="arrow-icon">➡️</span></button>
              <p className="compare-packages">Compare packages</p>
            </div>
          ))}
        </div>
        <div className="modal-footer">
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


