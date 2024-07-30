import React, { useEffect, useState } from 'react'
import { orderService } from '../services/order'
import { DashList } from '../cmps/DashList'
import { SummarySection } from '../cmps/SummarySection'
import { userService } from '../services/user'
import { ProfileProgress } from '../cmps/ProfileProgress'
import profilePic from "../assets/img/profile.png"
import { MobileDashboard } from '../cmps/MobileDashboard'


export function Dashboard() {
    const [orders, setOrders] = useState([])
    const [user, setUser] = useState(userService.getLoggedinUser())

    useEffect(() => {
        if (user) {
            setUser(user)
        }
    }, [])


    const fetchOrders = async () => {
        try {
            const orders = await orderService.query('dashboard')
            setOrders(orders)
        } catch (error) {
            console.error("Failed to load orders", error)
        }
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    if (!user) {
        return <div>You have to log in first !</div>
    }

    return (
        <section className="dashboard">
            <ProfileProgress user={user} orders={orders} totalOrders={orders.length} />
            <div className='seller-orders'>
                <SummarySection orders={orders} />
                <h2 className='headline'>Manage Orders</h2>
                <DashList orders={orders} fetchOrders={fetchOrders} />
            </div>
            <MobileDashboard user={user} orders={orders} fetchOrders={fetchOrders}/>
        </section>
    )
}
