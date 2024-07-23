import buyerImg from "../assets/img/profile.png"
export function OrderPreview({ order }) {
    const { buyer, gig, status } = order

    function calcDaysToMake() { // Returns when will the gig be ready in a date format
        return gig.daysToMake
    }

    return <>
        <td className="order-preview flex">
            {/* <img src={buyer.imgUrl} /> */}
            <img src={buyerImg} />
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
            <p>{status}</p>
        </td>
    </>
}
