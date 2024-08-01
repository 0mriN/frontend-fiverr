import React from 'react'
import { DashPreview } from "./DashPreview"

export function DashList({ orders, fetchOrders }) {
    return (
        <div className="dash-list">
            <div className="dash-list-header">
                <div className='buyer-col'><h4>Buyer</h4></div>
                <div className='gig-col'><h4>Gig</h4></div>
                <div className='date-col'><h4>Date</h4></div>
                <div className='total-col'><h4>Total</h4></div>
                <div className='status-col'><h4>Status</h4></div>
            </div>
                {orders.map(order => (
                        <DashPreview order={order} fetchOrders={fetchOrders} key={order._id} />
                ))}
        </div>
    )
}
