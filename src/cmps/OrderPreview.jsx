import sellerImg from "../assets/img/profile.png"
import { useState } from "react"

export function OrderPreview({ order }) {
    const { owner, gig } = order
    const deliveryDate = new Date(order.deliveryDate).toLocaleDateString()

    return <section className="order-preview">
        <article className="img-container">
            <img src={gig.imgUrls[0]} alt="Gig img" />
        </article>

        <article className="gig-info-container">
            <p className="gig-info">{gig.title}</p>
            <p className="gig-seller">by {owner.fullname}</p>
        </article>
    </section>
}