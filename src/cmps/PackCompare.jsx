import React from 'react';
import '../assets/styles/cmps/PackCompare.scss'

const packages = [
  {
    name: 'Basic',
    price: 344.38,
    concepts: 2,
    features: [
      { name: 'Logo transparency', available: true },
      { name: 'Vector file', available: true },
      { name: 'Printable file', available: true },
      { name: '3D mockup', available: false },
      { name: 'Source file', available: true },
      { name: 'Stationery designs', available: false },
      { name: 'Social media kit', available: false },
    ],
    deliveryOptions: [
      { time: '2 days', extraCost: 0 },
      { time: '1 day', extraCost: 229.59 },
    ],
  },
  {
    name: 'Standard',
    price: 535.71,
    concepts: 3,
    features: [
      { name: 'Logo transparency', available: true },
      { name: 'Vector file', available: true },
      { name: 'Printable file', available: true },
      { name: '3D mockup', available: true },
      { name: 'Source file', available: true },
      { name: 'Stationery designs', available: true },
      { name: 'Social media kit', available: false },
    ],
    deliveryOptions: [
      { time: '2 days', extraCost: 0 },
      { time: '1 day', extraCost: 229.59 },
    ],
  },
  {
    name: 'Premium',
    price: 1072,
    concepts: 4,
    features: [
      { name: 'Logo transparency', available: true },
      { name: 'Vector file', available: true },
      { name: 'Printable file', available: true },
      { name: '3D mockup', available: true },
      { name: 'Source file', available: true },
      { name: 'Stationery designs', available: true },
      { name: 'Social media kit', available: true },
    ],
    deliveryOptions: [
      { time: '3 days', extraCost: 0 },
      { time: '2 days', extraCost: 229.59 },
      { time: '1 day', extraCost: 229.59 },
    ],
  },
];

export function PackageComparison() {
  return (
    <div className="package-comparison">
      <h2>Compare packages</h2>
      <div className="package-table">
        {packages.map((pkg, index) => (
          <div key={index} className="package">
            <h3>{pkg.name}</h3>
            <p>₪{pkg.price}</p>
            <ul>
              {pkg.features.map((feature, i) => (
                <li key={i} className={feature.available ? 'available' : 'unavailable'}>
                  {feature.name}
                </li>
              ))}
            </ul>
            <p>Number of concepts included: {pkg.concepts}</p>
            <div className="delivery-options">
              <p>Delivery Time</p>
              {pkg.deliveryOptions.map((option, i) => (
                <label key={i}>
                  <input type="radio" name={`delivery-${index}`} />
                  {option.time} {option.extraCost ? `(₪${option.extraCost})` : ''}
                </label>
              ))}
            </div>
            <button className="select-btn">Select</button>
          </div>
        ))}
      </div>
    </div>
  );
}
