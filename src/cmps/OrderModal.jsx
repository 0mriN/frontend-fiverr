import React from 'react'
import '../../src/assets/styles/cmps/PackModal.scss'

import { useNavigate } from 'react-router';
import { userService } from '../services/user';
import { Link } from 'react-router-dom';
import { addOrder } from '../store/actions/order.actions';
import { makeId } from '../services/util.service';
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service';

export function OrderModal({ packageInfo, onClose, gig }) {
  const navigate = useNavigate()
  // packageInfo, user, gig.owner
  async function onContinue() {
    const user = userService.getLoggedinUser()

    const order = {
      _id: makeId(),
      buyer: userService.getLoggedinUser(),
      seller: gig.owner,
      gig,
      status: 'pending',
    }

    try {
      const savedOrder = await addOrder(order)
      navigate('/orders')
      showSuccessMsg(`Order saved !`)
    } catch (err) {
      showErrorMsg(`Cannot save order`)
      console.log('err:', err)
    }    
  }

  return (
    <div className="order-modal-container">
      <div className="order-modal">
        <div className="order-modal-content">
          <button className="close-btn" onClick={onClose}>×</button>
          <h2>{packageInfo.name}</h2>
          <p>{packageInfo.price}</p>
          <div className="extras">
            <label>
              <input type="checkbox" />
              {/* Extra-fast 1-day delivery {`₪${gig.price + 229.59}`} */}
              Extra-fast 1-day delivery ( + ₪229.59 )
            </label>
            <label>
              <input type="checkbox" />
              Include 3D mockup (+1 day) ( + ₪38.26 )
            </label>
            <label>
              <input type="checkbox" />
              Additional logo (+1 day) ( + ₪153.06 )
            </label>
            <label>
              <input type="checkbox" />
              Google Drive Link ( + ₪38.26 )
            </label>
          </div>
          <button className="continue-btn" onClick={onContinue}>Continue ({packageInfo.price})</button>
        </div>
      </div>
    </div>
  )
}
