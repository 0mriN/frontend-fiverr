import React, { useEffect, useState } from 'react'
import { orderService } from '../services/order/order.service.local'
import { DashList } from '../cmps/DashList'
import { SummarySection } from '../cmps/SummarySection'
import { userService } from '../services/user/user.service.local'


console.log(userService.getLoggedinUser())
export function DashIndex() {
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
            <DashList orders={orders} fetchOrders={fetchOrders} />
        </section>
    )
}
