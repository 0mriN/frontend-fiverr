import { useSelector } from "react-redux"
import { CheckoutDetails } from "./CheckoutDetails"
import { CheckoutMain } from "./CheckoutMain"


export function OrderCheckout() {
    const orders = useSelector(storeState => storeState.orderModule.orders)

    return <section className="order-checkout">
        <CheckoutMain orders={orders} />
        <article className="checkout-details-container">
            <CheckoutDetails orders={orders} />
        </article>
    </section>
}