import React from 'react';
import '../../src/assets/styles/cmps/PackModal.scss';
// import '../../src/assets/styles/cmps/OrderModal.scss';
const OrderModal = ({ packageInfo, onClose }) => {
  return (
    <div className="order-modal">
      <div className="order-modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{packageInfo.name}</h2>
        <p>{packageInfo.price}</p>
        <div className="extras">
          <label>
            <input type="checkbox" />
            Extra-fast 1-day delivery ₪229.59
          </label>
          <label>
            <input type="checkbox" />
            Include 3D mockup (+1 day) ₪38.26
          </label>
          <label>
            <input type="checkbox" />
            Additional logo (+1 day) ₪153.06
          </label>
          <label>
            <input type="checkbox" />
            Google Drive Link ₪38.26
          </label>
        </div>
        <button className="continue-btn">Continue (₪{packageInfo.price})</button>
      </div>
    </div>
  );
};

export default OrderModal;
