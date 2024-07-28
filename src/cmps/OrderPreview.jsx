import sellerImg from "../assets/img/profile.png"
import { useState } from "react"

export function OrderPreview({ order }) {
    const { owner, gig } = order
    const deliveryDate = new Date(order.deliveryDate).toLocaleDateString()

    return (
        <>
            <td className="order-preview flex">
                <img src={sellerImg} alt="seller" />
                <p>{owner.fullname}</p>
            </td>
            <td>
                <p>{gig.title}</p>
            </td>
            <td>
                <p>{deliveryDate}</p>
            </td>
            <td>
                <p>{gig.price}</p>
            </td>
        </>
    )
}
