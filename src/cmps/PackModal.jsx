import React, { useState } from 'react';
import '../../src/assets/styles/cmps/PackModal.scss';
import PackModalToolbar from '../cmps/PackModalToolbar';
const packages = {
  basic: {
    name: "BRONZE PACKAGE",
    price: "₪190.98",
    description: "3 Logo Design + PNG + JPG + 3D Mockup",
    delivery: "3-day delivery",
    revisions: "5 Revisions",
  },
  standard: {
    name: "SILVER PACKAGE",
    price: "₪290.98",
    description: "5 Logo Design + PNG + JPG + 3D Mockup + Source Files",
    delivery: "5-day delivery",
    revisions: "10 Revisions",
  },
  premium: {
    name: "GOLD PACKAGE",
    price: "₪390.98",
    description: "Unlimited Logo Design + PNG + JPG + 3D Mockup + Source Files + Brand Guidelines",
    delivery: "7-day delivery",
    revisions: "Unlimited Revisions",
  }
};

const PackageModal = () => {
  const [activeTab, setActiveTab] = useState('basic');

  return (
    
    <div className="modal">
      <div className="modal-content">
                <PackModalToolbar/>
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
                <p>{packages[key].price} <span className="info-icon"><svg width="16" height="16" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg" fill="#404145" class="st-current"><g clip-path="url(#info-outline-icon_svg__a)"><path d="M6.3 4h1.4v1.4H6.3V4Zm0 2.8h1.4V11H6.3V6.8ZM7 .5c-3.864 0-7 3.136-7 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7Zm0 12.6a5.607 5.607 0 0 1-5.6-5.6c0-3.087 2.513-5.6 5.6-5.6 3.087 0 5.6 2.513 5.6 5.6 0 3.087-2.513 5.6-5.6 5.6Z" class=""></path></g><defs><clipPath id="info-outline-icon_svg__a"><path transform="translate(0 .5)" d="M0 0h14v14H0z"></path></clipPath></defs></svg></span></p>
              </div>
              <p>{packages[key].description}</p>
              <p><span className="icon">🕒</span> {packages[key].delivery} <span className="icon">🔄</span> {packages[key].revisions}</p>
              <p><a href="#" className="toggle-details">What's Included</a> <span className="icon">⬇️</span></p>
              <button className="continue-btn">Continue <span className="arrow-icon">➡️</span></button>
              <p className="compare-packages">Compare packages</p>
            </div>
          ))}
        </div>
        <div className="modal-footer">
          <button className="contact-btn">Contact me</button>
        </div>
      </div>
    </div>
  );
}

export default PackageModal;
