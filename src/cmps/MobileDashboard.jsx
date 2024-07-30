import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { DashList } from "./DashList";


export function MobileDashboard({ user, orders, fetchOrders }) {


    return <section className="mobile-dashboard">
        <h1>Hi {user.fullname}</h1>
        <h2>Welcome back</h2>
        <article className="user-info-container">

            <div className="user-stats">
                <div className="user-level">
                    <p>My level</p>
                    <p>{user.level}</p>
                </div>

                <div className="user-success-score">
                    <p>Success score</p>
                    <p>{user.score}</p>
                </div>

                <div className="user-rating">
                    <p>Rating</p>
                    <p>4.9</p>
                </div>

                <div className="user-response-rate">
                    <p>Response rate</p>
                    <p>97%</p>
                </div>
            </div>

            <Accordion>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Orders
                </AccordionSummary>
                <AccordionDetails>
                    <DashList orders={orders} fetchOrders={fetchOrders} />
                    {/* <MobileDashList orders={orders} fetchOrders={fetchOrders} /> */}
                </AccordionDetails>
            </Accordion>
        </article>
    </section>
}