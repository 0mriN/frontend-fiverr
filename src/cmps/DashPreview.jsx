import buyerImg from "../assets/img/profile.png"
import { orderService } from "../services/order/"
import { useState } from "react"

export function DashPreview({ order, fetchOrders }) {
    const { buyer, gig, status } = order
    const [currentStatus, setCurrentStatus] = useState(status)

    function getFirstName(fullName) {
        const nameParts = fullName.split(' ')
        const firstNameArray = nameParts.slice(0, 1)
        return firstNameArray[0]
    }

    function calcDaysToMake() {
        return gig.daysToMake
    }

    async function updateStatus(newStatus) {
        try {
            await orderService.update(order._id, newStatus)
            setCurrentStatus(newStatus)
            fetchOrders()
        } catch (error) {
            console.error("Failed to update order status", error)
        }
    }

    function handleApprove() {
        updateStatus("completed");
    }

    function handleReject() {
        updateStatus("rejected");
    }

    return (
        <div className="dash-preview">
            <div className="buyer-cols">
                <img src={buyerImg} alt="buyer" />
                <p>{getFirstName(buyer.fullname)}</p>
            </div>

            <div className="gig-cols">
                <span>{gig.title}</span>
            </div>
            <div className="total-cols">
                <span>{`$${gig.price}`}</span>
            </div>
            <div className="status-cols">
                {currentStatus === "pending" && (
                    <>
                        <button onClick={handleApprove} style={{ backgroundColor: "#1dbf73", color: "white", width: "89px", fontSize: "large" }}>
                            Approve
                        </button>
                        <button onClick={handleReject} style={{ backgroundColor: "#c43333", color: "white", width: "89px", fontSize: "large", marginTop: "5px" }}>
                            Reject
                        </button>
                    </>
                )}
                {currentStatus === "completed" && <span style={{ backgroundColor: "#1dbf73", color: "white" }}>Approved</span>}
                {currentStatus === "rejected" && <span style={{ backgroundColor: "#c43333", color: "white", padding: '5px' }}>Rejected</span>}
            </div>
        </div>
    )
}
