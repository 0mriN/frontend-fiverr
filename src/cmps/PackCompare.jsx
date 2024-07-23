import React from 'react'

import { FaCheck, FaTimes } from 'react-icons/fa'

const packages = [
  {
    name: 'Basic',
    price: 153.05,
    features: [
      { name: 'Logo transparency', available: false },
      { name: 'Vector file', available: false },
      { name: 'Printable file', available: true },
      { name: '3D mockup', available: false },
      { name: 'Source file', available: false },
      { name: 'Revisions', available: true, quantity: 1 },
      { name: 'Delivery Time', available: true, time: '2 days', extraCost: '1 day (+₪153.05)' }
    ],
  },
  {
    name: 'Standard',
    price: 382.63,
    features: [
      { name: 'Logo transparency', available: true },
      { name: 'Vector file', available: true },
      { name: 'Printable file', available: true },
      { name: '3D mockup', available: false },
      { name: 'Source file', available: true },
      { name: 'Revisions', available: true, quantity: 2 },
      { name: 'Delivery Time', available: true, time: '5 days', extraCost: '1 day (+₪382.63)' }
    ],
  },
  {
    name: 'Premium',
    price: 535.68,
    features: [
      { name: 'Logo transparency', available: true },
      { name: 'Vector file', available: true },
      { name: 'Printable file', available: true },
      { name: '3D mockup', available: true },
      { name: 'Source file', available: true },
      { name: 'Revisions', available: true, quantity: 3 },
      { name: 'Delivery Time', available: true, time: '5 days', extraCost: '1 day (+₪382.63)' }
    ],
  },
]

export function PackageComparison() {
  const featureNames = [
    'Logo transparency',
    'Vector file',
    'Printable file',
    '3D mockup',
    'Source file',
    'Revisions',
    'Delivery Time'
  ]

  return (
    <div className="package-comparison">
      <h2>Compare Packages</h2>
      <div className="package-table">
        <div className="feature-column">
          <div className="feature-header">Package</div>
          {featureNames.map((feature, index) => (
            <div key={index} className="feature-name">{feature}</div>
          ))}
          <div className="feature-name">Total</div>
        </div>
        {packages.map((pkg, index) => (
          <div key={index} className="package">
            <div className="package-header">
              <h3>{pkg.name}</h3>
              <p>₪{pkg.price}</p>
            </div>
            {featureNames.map((feature, i) => {
              const pkgFeature = pkg.features.find(f => f.name === feature)
              if (feature === 'Revisions') {
                return (
                  <div key={i} className="feature-value">
                    {pkgFeature?.available ? pkgFeature.quantity : <FaTimes className="icon-unavailable" />}
                  </div>
                )
              }
              if (feature === 'Delivery Time') {
                return (
                  <div key={i} className="feature-value">
                    {pkgFeature?.available ? (
                      <div>
                        <label>
                          <input type="radio" name={`delivery-${index}`} defaultChecked />
                          {pkgFeature.time}
                        </label>
                        <label>
                          <input type="radio" name={`delivery-${index}`} />
                          {pkgFeature.extraCost}
                        </label>
                      </div>
                    ) : <FaTimes className="icon-unavailable" />}
                  </div>
                )
              }
              return (
                <div key={i} className="feature-value">
                  {pkgFeature?.available ? <FaCheck className="icon-available" /> : <FaTimes className="icon-unavailable" />}
                </div>
              )
            })}
            <div className="feature-value">
              <button className="select-btn">Select</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
