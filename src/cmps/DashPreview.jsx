import buyerImg from "../assets/img/profile.png"
import { orderService } from "../services/order/order.service.local.js"
import { useState } from "react"

export function DashPreview({ order, fetchOrders }) {
    const { buyer, gig, status } = order
    const [currentStatus, setCurrentStatus] = useState(status)

    function calcDaysToMake() {
        return gig.daysToMake
    }

    const handleStatusChange = async (event) => {
        const newStatus = event.target.value
        try {
            await orderService.update(order._id, newStatus)
            setCurrentStatus(newStatus)
            fetchOrders()  // Trigger re-fetching of orders
        } catch (error) {
            console.error("Failed to update order status", error)
        }
    }

    return (
        <>
            <td className="order-preview flex">
                <img src={buyerImg} alt="buyer" />
                <p>{buyer.fullname}</p>
            </td>
            <td>
                <p>{gig.title}</p>
            </td>
            <td>
                <p>{calcDaysToMake()}</p>
            </td>
            <td>
                <p>{gig.price}</p>
            </td>
            <td>
                <select value={currentStatus} onChange={handleStatusChange} className={`status ${currentStatus.toLowerCase()}`}>
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Completed">Completed</option>
                </select>
            </td>
        </>
    )
}
