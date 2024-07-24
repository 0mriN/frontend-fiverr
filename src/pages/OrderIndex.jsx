import React, { useEffect, useState } from 'react'
import { orderService } from '../services/order/order.service.local'
import { OrderList } from '../cmps/OrderList'
import { SummarySection } from '../cmps/SummarySection'

export function OrderIndex() {
    const [orders, setOrders] = useState([])

    const fetchOrders = async () => {
        try {
            const orders = await orderService.query()
            setOrders(orders)
        } catch (error) {
            console.error("Failed to load orders", error)
        }
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    if (!orders.length) return <div>Loading...</div>

    return (
        <section className="order-index">
            <h1>Manage Orders</h1>
            <SummarySection orders={orders} />
            <OrderList orders={orders} fetchOrders={fetchOrders} />
        </section>
    )
}
