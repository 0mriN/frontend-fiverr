import { useSelector } from "react-redux"
import { CheckoutDetails } from "./CheckoutDetails"


export function OrderCheckout() {
    const orders = useSelector(storeState => storeState.orderModule.orders)


    return <section className="order-checkout">
        <h1>Order Checkout</h1>
        <article className="checkout-details-container">
            <CheckoutDetails orders={orders} />
        </article>
    </section>
}