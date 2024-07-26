import React from 'react'
import { OrderPreview } from "./OrderPreview"

export function OrderList({ orders }) {
    return (
        <table className="order-list">
            <thead className="order-list-header">
                <tr>
                    <th>Seller</th>
                    <th>Gig Title</th>
                    <th>Delivery Date</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody className="order-list-body">
                {orders.map(order => (
                    <tr key={order._id}>
                        <OrderPreview order={order} />
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
