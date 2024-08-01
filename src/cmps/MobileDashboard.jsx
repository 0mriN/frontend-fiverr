import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { DashList } from "./DashList";
import { ProfileProgress } from "./ProfileProgress";
import profilePic from "../assets/img/profile.png"

export function MobileDashboard({ user, orders, fetchOrders }) {
    function getFirstName(fullName) {
        const nameParts = fullName.split(' ')
        const firstNameArray = nameParts.slice(0, 1)
        return firstNameArray[0]
    }
    
    console.log('user:', user);
    return <section className="mobile-dashboard">
        <div className="greeting">
            <div className="welcome">
                <h1>Hi {`${getFirstName(user.fullname)},`}</h1>
                <h2>Welcome back</h2>
            </div>
            <div className="img-profile-container">
                <img src={profilePic} alt="" />
                {/* <img src={user.imgUrl} alt="" /> */}
            </div>
        </div>
        <article className="user-info-container">

            {/* <div className="user-stats">
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
            </div> */}
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    Statistics
                </AccordionSummary>
                <AccordionDetails>
                    <ProfileProgress user={user} orders={orders} totalOrders={orders.length} />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Orders
                </AccordionSummary>
                <AccordionDetails>
                    <DashList orders={orders} fetchOrders={fetchOrders} />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    User info
                </AccordionSummary>
                <AccordionDetails>
                Under Development
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    My Gigs
                </AccordionSummary>
                <AccordionDetails>
                Under Development
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    To-Dos
                </AccordionSummary>
                <AccordionDetails>
                Under Development
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Earnings
                </AccordionSummary>
                <AccordionDetails>
                    Under Development
                </AccordionDetails>
            </Accordion>
        </article>
    </section>
}