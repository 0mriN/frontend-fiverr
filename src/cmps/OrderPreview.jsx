import sellerImg from "../assets/img/profile.png"
import { useState } from "react"

export function OrderPreview({ order }) {
    const { seller, gig } = order
    const deliveryDate = new Date(order.deliveryDate).toLocaleDateString()

    return <section className="order-preview">
        <article className="img-container">
            <img src={gig.imgUrls[0]} alt="Gig img" />
        </article>

        <article className="gig-info-container">
            <p className="gig-info">{gig.title}</p>
            <p className="gig-seller">by {seller.fullname}</p>
        </article>
    </section>
}
// (
//     <>
//         <td className="order-preview flex">
//             <img src={sellerImg} alt="seller" />
//             <p>{seller.fullname}</p>
//         </td>
//         <td>
//             <p>{gig.title}</p>
//         </td>
//         <td>
//             <p>{deliveryDate}</p>
//         </td>
//         <td>
//             <p>{gig.price}</p>
//         </td>
//     </>
// )
