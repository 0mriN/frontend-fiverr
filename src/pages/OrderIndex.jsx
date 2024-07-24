import React, { useEffect, useState } from 'react';
import { orderService } from '../services/order/order.service.local';
import { OrderList } from '../cmps/OrderList';
import { SummarySection } from '../cmps/SummarySection';
import { GigFilter } from '../cmps/GigFilter';
import { GigList } from '../cmps/GigList';

export function OrderIndex() {
    const [orders, setOrders] = useState([]);
    const [sortedGigs, setSortedGigs] = useState([]);

    const fetchOrders = async () => {
        try {
            const orders = await orderService.query();
            setOrders(orders);
            setSortedGigs(orders); // Initialize sortedGigs with all orders
        } catch (error) {
            console.error("Failed to load orders", error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    if (!orders.length) return <div>Loading...</div>;

    return (
        <section className="order-index">
            <h1>Manage Orders</h1>
            <SummarySection orders={orders} />
            <GigFilter gigs={orders} setSortedGigs={setSortedGigs} />
            <OrderList orders={sortedGigs} fetchOrders={fetchOrders} />
        </section>
    );
}
