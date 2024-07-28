import { useNavigate } from "react-router"
import { addOrder } from "../store/actions/order.actions"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { orderService } from "../services/order/order.service.local"

export function CheckoutDetails({ orders }) {
    const navigate = useNavigate()
    const { gig, packageInfo } = orders[0]


    function calcServiceFee() {
        return 20
    }

    function calcVat() {
        return 15
    }

    function calcTotal() {
        const total = packageInfo.price + calcServiceFee() + calcVat()

        return total
    }

    async function onPay() {
        try {
            orderService.add(orders[0])
            navigate('/')
            showSuccessMsg(`Order saved !`)
        } catch (err) {
            showErrorMsg(`Cannot save order`)
            console.log('err:', err)
        }
    }

    return <section className="checkout-details">
        <article className="checkout-header">
            <img src={gig.imgUrls[0]} />
            <h2>{gig.title}</h2>
        </article>

        <article className="package-type">
            <p>{packageInfo.name}</p>
            <p>{packageInfo.price}</p>
        </article>

        <p>{packageInfo.description}</p>

        <article className="order-service-tax">
            <ul className="service">
                <li>Service fee</li>
                <li>{`₪${calcServiceFee()}`}</li>
            </ul>
            <ul className="tax">
                <li>VAT</li>
                <li>{`₪${calcVat()}`}</li>
            </ul>
        </article>

        <article className="order-payment">
            <ul className="final-pay">
                <li>Order total</li>
                {/* <li>{`${calcTotal()}`}</li> */}
                <li>{`₪${calcTotal()}`}</li>
            </ul>
        </article>

        <button className="btn" onClick={onPay}>Pay</button>
    </section>
}