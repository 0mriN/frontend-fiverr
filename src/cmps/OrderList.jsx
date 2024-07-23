import { OrderPreview } from "./OrderPreview"

export function OrderList({ orders }) {
    console.log(orders)
    return <table className="order-list">
        <thead className="order-list-header">
            <tr>
                <td>BUYER</td>
                <td>GIG</td>
                <td>DELIVERED AT</td>
                <td>TOTAL</td>
                <td>STATUS</td>
            </tr>
        </thead>
        <tbody className="order-list-body">
            {orders &&
                orders.map(order =>
                    <tr key={order._id}>
                        <OrderPreview order={order} />
                    </tr>)
            }
        </tbody>
    </table>
}