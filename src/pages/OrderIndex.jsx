import React, { useEffect, useState } from 'react'
import { orderService } from '../services/order'
import { OrderList } from '../cmps/OrderList'
import { SummarySection } from '../cmps/SummarySection'
import { userService } from '../services/user'
import { store } from '../store/store'

export function OrderIndex() {
    const [orders, setOrders] = useState([])

    async function loadOrders() {
        try {
            const orders = await orderService.query('orders')
            setOrders(orders)
        } catch (error) {
            console.error("Failed to load orders", error)
            throw error
        }
    }

    useEffect(() => {
        loadOrders()
    }, [])

    if (!orders.length) return <div>Loading...</div>

    return (
        <section className="order-index">
            <OrderList orders={orders} loadOrders={loadOrders} />
        </section>
    )
}
