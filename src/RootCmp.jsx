import React from 'react'
import { Routes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'
import { GigIndex } from './pages/GigIndex.jsx'
import { ReviewIndex } from './pages/ReviewIndex.jsx'
import { ChatApp } from './pages/Chat.jsx'
import { AdminIndex } from './pages/AdminIndex.jsx'
import { ProfilePage } from './pages/ProfilePage.jsx'

import { GigDetails } from './pages/GigDetails.jsx'
import { UserDetails } from './pages/UserDetails'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { UserMsg } from './cmps/UserMsg.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { Login } from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'
import { GigEdit } from './cmps/GigEdit.jsx'

import { Dashboard } from './pages/Dashboard.jsx'
import { OrderCheckout } from './cmps/OrderCheckout.jsx'

export function RootCmp() {
    return (
        <div className="main-container">
            <AppHeader />
            {/* <UserMsg /> */}

            <main>
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="gig" element={<GigIndex />} />
                    <Route path="gig/:gigId" element={<GigDetails />} />
                    <Route path="/gig/edit/" element={<GigEdit />} />
                    <Route path="/gig/edit/:gigId?" element={<GigEdit />} />
                    {/* <Route path="user/:id" element={<UserDetails />} /> */}
                    {/* <Route path="review" element={<ReviewIndex />} /> */}
                    {/* <Route path="chat" element={<ChatApp />} /> */}
                    <Route path="admin" element={<AdminIndex />} />
                    <Route path="login" element={<LoginSignup />}>
                        <Route index element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </Route>
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/checkout" element={<OrderCheckout />} />
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}


