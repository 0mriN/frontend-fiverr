import React, { useState, useEffect } from 'react'
import profilePic from "../assets/img/profile.png"
import { calculateProgress } from '../services/util.service'

export function ProfileProgress({ user, orders, totalOrders }) {
    const [progress, setProgress] = useState(calculateProgress(orders, totalOrders))
    const [statusPercentages, setStatusPercentages] = useState(calculateStatusPercentages(orders, totalOrders))


    useEffect(() => {
        setProgress(calculateProgress(orders, totalOrders))
        setStatusPercentages(calculateStatusPercentages(orders, totalOrders))
    }, [orders, totalOrders])



    function calculateStatusPercentages(orders, totalOrders) {
        const statusCounts = {
            Completed: 0,
            Pending: 0,
            Rejected: 0,
        }


        orders.forEach(order => {
            if (order.status in statusCounts) {
                statusCounts[order.status]++
            }
        })

        const statusPercentages = {
            completed: Math.round((statusCounts.Completed / totalOrders) * 100),
            pending: Math.round((statusCounts.Pending / totalOrders) * 100),
            rejected: Math.round((statusCounts.Rejected / totalOrders) * 100),
        }

        return statusPercentages
    }

    // user.imgUrl
    return (
        <section className="profile-progress">
            <div className="profile-wrapper">
                <div className="img-container">
                    <img src={profilePic} alt={profilePic} />
                </div>
                <div className="user-desc">
                    <div className="profile-item">
                        <p>Positive Rating</p>
                        <b>100%</b>
                    </div>
                    <div className="profile-item">
                        <p>Resopnse Time</p>
                        <b>2 Hrs</b>
                    </div>
                </div>
            </div>
            <div className="progress-wrapper">

                <article className="progress-item">
                    <div className='text-wrapper'>
                        <b>Response Rate</b>
                        <p>93%</p>
                    </div>
                    <div className="progress-bar">
                        <div className='progress-fill' style={{ width: `93%` }}></div>
                    </div>
                </article>

                <article className="progress-item">
                    <div className="text-wrapper">
                        <b>Orders Pending</b>
                        <p>{`${statusPercentages.pending}%`}</p>
                    </div>
                    <div className="progress-bar">
                        <div className='progress-fill' style={{ width: `${statusPercentages.pending}%` }}></div>
                    </div>
                </article>

                <article className="progress-item">
                    <div className="text-wrapper">
                        <b>Orders Completed</b>
                        <p>{`${statusPercentages.completed}%`}</p>
                    </div>
                    <div className="progress-bar">
                        <div className='progress-fill' style={{ width: `${statusPercentages.completed}%` }}></div>
                    </div>
                </article>

                <article className="progress-item">
                    <div className="text-wrapper">
                        <b>Orders Rejected</b>
                        <p>{`${statusPercentages.rejected}%`}</p>
                    </div>
                    <div className="progress-bar">
                        <div className='progress-fill' style={{ width: `${statusPercentages.rejected}%` }}></div>
                    </div>
                </article>

                <article className="progress-item">
                    <div className="text-wrapper">
                        <b>Delivered on Time</b>
                        <p>95%</p>
                    </div>
                    <div className="progress-bar">
                        <div className='progress-fill' style={{ width: `95%` }}></div>
                    </div>
                </article>

            </div>
        </section>
    )
}