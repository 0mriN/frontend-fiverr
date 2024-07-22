import { useSelector } from 'react-redux'
import { OrderList } from '../cmps/OrderList'

export function OrderIndex() {
    const orders = useSelector(storeState => storeState.orderModule.orders)

    return <section className="order-index">
        <h1>Manage Orders</h1>
        <OrderList orders={orders} />
    </section>
}