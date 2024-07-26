import buyerImg from "../assets/img/profile.png"
import { orderService } from "../services/order/order.service.local.js"
import { useState } from "react"

export function DashPreview({ order, fetchOrders }) {
    const { buyer, gig, status } = order
    const [currentStatus, setCurrentStatus] = useState(status)

    function calcDaysToMake() {
        return gig.daysToMake
    }

    async function handleStatusChange(event) {
        const newStatus = event.target.value
        try {
            await orderService.update(order._id, newStatus)
            setCurrentStatus(newStatus)
            fetchOrders()
        } catch (error) {
            console.error("Failed to update order status", error)
        }
    }

    function getSelectStyle() {
        switch (currentStatus) {
            case "Pending":
                return { backgroundColor: "#ffbe5b", color: "white" };
            case "Completed":
                return { backgroundColor: "#1dbf73", color: "white" };
            case "Rejected":
                return { backgroundColor: "#c43333", color: "white" };
            default:
                return { backgroundColor: "white", color: "black" };
        }
    }


    return (
        <div className="dash-preview">
            <div className="buyer-cols">
                <img src={buyerImg} alt="buyer" />
                <p>{buyer.fullname}</p>
            </div>

            <div className="gig-cols">
                <span>{gig.title}</span>
            </div>

            <div className="date-cols">
                <span>{calcDaysToMake()}</span>
            </div>

            <div className="total-cols">
                <span>{`$${gig.price}`}</span>
            </div>

            <div className="status-cols">
                <select value={currentStatus} onChange={handleStatusChange} className={`status ${currentStatus.toLowerCase()}`} style={getSelectStyle()}>
                    <option value="Pending" style={{ backgroundColor: '#ffbe5b' }}>Pending</option>
                    <option value="Completed" style={{ backgroundColor: '#1dbf73' }}>Completed</option>
                    <option value="Rejected" style={{ backgroundColor: '#c43333' }}>Rejected</option>
                </select>
            </div>
        </div>
    )
}
