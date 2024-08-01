import { useNavigate } from "react-router"
import { addOrder } from "../store/actions/order.actions"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { orderService } from "../services/order/"

export function CheckoutDetails({ orders }) {
    const navigate = useNavigate()
    const { gig, packageInfo } = orders[0]
console.log(`packageInfo:`,packageInfo)
    function getDeliveryDays() {
        const deliveryString = packageInfo.delivery
        const numberMatch = deliveryString.match(/\d+/)
        return numberMatch ? numberMatch[0] : ''
    }

    function calcServiceFee() {
        return 5.50
    }

    function calcVat() {
        return 17.93
    }

    const totalPay = (calcTotal())
    function calcTotal() {
        const total = packageInfo.price + calcServiceFee() + calcVat()

        return total
    }

    function calcCurrency(total) {
        return parseFloat((total * 3.73).toFixed(2))
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
        <div className="order-details-wrapper">
            <article className="checkout-header">
                <img src={gig.imgUrls[0]} />
                <h2>{gig.title}</h2>
            </article>

            <article className="package-type">
                <p>{packageInfo.name}</p>
                <p className="pckg-price">{`US$${packageInfo.price}`}</p>
            </article>

            <div className="pckg-desc">
                <span className="order-details-item-icon" aria-hidden="true" style={{ width: '16px', height: '16px', fill: 'rgb(0,0,0)' }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z"></path></svg></span>
                <p>5 Logo Design</p>
            </div>
            <div className="pckg-desc">
                <span className="order-details-item-icon" aria-hidden="true" style={{ width: '16px', height: '16px', fill: 'rgb(0,0,0)' }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z"></path></svg></span>
                <p>PNG</p>
            </div>
            <div className="pckg-desc">
                <span className="order-details-item-icon" aria-hidden="true" style={{ width: '16px', height: '16px', fill: 'rgb(0,0,0)' }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z"></path></svg></span>
                <p>JPG</p>
            </div>
            <div className="pckg-desc">
                <span className="order-details-item-icon" aria-hidden="true" style={{ width: '16px', height: '16px', fill: 'rgb(0,0,0)' }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z"></path></svg></span>
                <p>3D Mockup</p>
            </div>
            <div className="pckg-desc">
                <span className="order-details-item-icon" aria-hidden="true" style={{ width: '16px', height: '16px', fill: 'rgb(0,0,0)' }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z"></path></svg></span>
                <p>Source Files</p>
            </div>
        </div>

        <div className="check">
            <article className="order-service-tax">
                <ul className="service">
                    <li>Service fee</li>
                    <li>{`US$${calcServiceFee()}`}</li>
                </ul>
                <ul className="tax">
                    <li>VAT</li>
                    <li>{`US$${calcVat()}`}</li>
                </ul>
            </article>

            <article className="order-payment">
                <ul className="final-pay">
                    <li>Order total</li>
                    {/* <li>{`${calcTotal()}`}</li> */}
                    <li>{`US$${totalPay}`}</li>
                </ul>
            </article>

            <div className="currency-pay">
                <span>You’ll pay</span>
                <p>{`₪${calcCurrency(totalPay)}`}</p>
            </div>

            <div className="package-delivery">
                <span>Total delivery time</span>
                <p>{`1 day`}</p>
                {/* <p>{`${getDeliveryDays()} days`}</p> */}
            </div>

            <button className="btn" onClick={onPay}>Pay In ILS</button>

            <div className="secure-payment">
                <span className="lock-icon" aria-hidden="true" style={{ width: '16px', height: '16px' }}><svg width="14" height="16" fill="#74767e" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 7C12.9062 7 13.25 7.15625 13.5625 7.4375C13.8438 7.75 14 8.09375 14 8.5V14.5C14 14.9375 13.8438 15.2812 13.5625 15.5625C13.25 15.875 12.9062 16 12.5 16H1.5C1.0625 16 0.71875 15.875 0.4375 15.5625C0.125 15.2812 0 14.9375 0 14.5V8.5C0 8.09375 0.125 7.75 0.4375 7.4375C0.71875 7.15625 1.0625 7 1.5 7H2.25V4.75C2.25 3.90625 2.4375 3.125 2.875 2.375C3.3125 1.65625 3.875 1.09375 4.625 0.65625C5.34375 0.21875 6.125 0 7 0C7.84375 0 8.625 0.21875 9.375 0.65625C10.0938 1.09375 10.6562 1.65625 11.0938 2.375C11.5312 3.125 11.75 3.90625 11.75 4.75V7H12.5ZM8.25 12.25V10.75C8.25 10.4062 8.125 10.125 7.875 9.875C7.625 9.625 7.34375 9.5 7 9.5C6.625 9.5 6.34375 9.625 6.09375 9.875C5.84375 10.125 5.75 10.4062 5.75 10.75V12.25C5.75 12.625 5.84375 12.9062 6.09375 13.1562C6.34375 13.4062 6.625 13.5 7 13.5C7.34375 13.5 7.625 13.4062 7.875 13.1562C8.125 12.9062 8.25 12.625 8.25 12.25ZM9.25 7V4.75C9.25 4.125 9.03125 3.59375 8.59375 3.15625C8.15625 2.71875 7.625 2.5 7 2.5C6.375 2.5 5.84375 2.71875 5.40625 3.15625C4.96875 3.59375 4.75 4.125 4.75 4.75V7H9.25Z"></path></svg></span>
                <span>SSL Secure Payment</span>
            </div>
        </div>
        {/* <section className="currency-suggestion">
            <span className="currency-suggestion-wrapper">
                <article className="currency-selector-container">
                    <div className="currency-selector">
                        <div className="selector-title">
                            Payment currency options
                        </div>
                        <div className="selector-arrow">
                            <span className="arrow" aria-hidden="true" style={{ width: '14px', height: '14px' }}><svg width="8" height="16" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path></svg></span>
                        </div>

                    </div>
                    <div style={{ height: '0px' }}>
                    </div>
                </article>
            </span>
        </section> */}
    </section>
}