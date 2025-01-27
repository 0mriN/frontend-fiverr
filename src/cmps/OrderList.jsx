import React from 'react'
import { OrderPreview } from "./OrderPreview"

export function OrderList({ orders }) {
    return (
        <ul className="order-list">
                {orders.map(order => (
                    <li key={order._id}>
                        <OrderPreview order={order} />
                    </li>
                ))}
        </ul>
    )
}
