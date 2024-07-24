import React from 'react'

export function SummarySection({ orders }) {
    const totalOrders = orders.length
    const completedOrders = orders.filter(order => order.status === 'Completed').length
    const pendingOrders = orders.filter(order => order.status === 'Pending').length

    return (
        <section className="summary-section">
            <div className="summary-item">
                <h3>Total Orders</h3>
                <p>{totalOrders}</p>
            </div>
            <div className="summary-item">
                <h3>Completed Orders</h3>
                <p>{completedOrders}</p>
            </div>
            <div className="summary-item">
                <h3>Pending Orders</h3>
                <p>{pendingOrders}</p>
            </div>
        </section>
    )
}
