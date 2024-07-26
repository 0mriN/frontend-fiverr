import React from 'react'

export function SummarySection({ orders }) {
    const totalOrders = orders.length
    const completedOrders = orders.filter(order => order.status === 'Completed').length
    const pendingOrders = orders.filter(order => order.status === 'Pending').length
    const totalRevenue = calculateTotalRevenue(orders)
    const annualRevenue = totalRevenue;
    const monthlyRevenue = totalRevenue / 12


    function calculateTotalRevenue(orders) {
        return orders.reduce((total, order) => {
            if (order.status === 'Completed') {
                return total + order.gig.price
            }
            return total
        }, 0)
    }

    return (
        <section className="summary-section">

            <div className="summary-item">
                <span>Annual Revenue</span>
                <h3>{`$${annualRevenue}`}</h3>
            </div>

            <div className="summary-item">
                <span>Monthly Revenue</span>
                <h3>{`$${monthlyRevenue.toFixed(2)}`}</h3>
            </div>

            <div className="summary-item">
                <span>Total Orders</span>
                <h3>{totalOrders}</h3>
            </div>

            <div className="summary-item">
                <span>Completed Orders</span>
                <h3>{completedOrders}</h3>
            </div>

            <div className="summary-item">
                <span>Pending Orders</span>
                <h3>{pendingOrders}</h3>
            </div>

        </section>
    )
}
