import { useSelector } from 'react-redux'
import { OrderList } from '../cmps/OrderList'
import { orderService } from '../services/order/order.service.local'
import { loadOrders } from '../store/actions/order.actions'

export function OrderIndex() {
    const orders = useSelector(storeState => storeState.orderModule.orders)

    // async function onLoadOrders() {
    //     try {
    //         const orders = await loadOrders()
    //         return orders
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // const orders = onLoadOrders()
    if (!orders) return <div>Loading...</div>
    console.log('orders',orders);
    
    return <section className="order-index">
        <h1>Manage Orders</h1>
        {orders &&
            <OrderList orders={orders} />}
    </section>
}