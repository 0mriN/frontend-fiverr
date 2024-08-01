import React, { useEffect, useState } from 'react'
import { orderService } from '../services/order'
import { OrderList } from '../cmps/OrderList'
import { SummarySection } from '../cmps/SummarySection'
import { userService } from '../services/user'
import { store } from '../store/store'
import loader from '../assets/img/svg/loader.svg'

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


    return (
        <section className="order-index">
            <div className="loader-container">
                {!orders.length && <img src={loader} />}
            </div>
            {orders && <OrderList orders={orders} loadOrders={loadOrders} />}
        </section>
    )
}
