"use client"
import React from 'react'
import Nav from '@/component/Nav';
import Footer from '@/component/Footer';
import PrivacyPolicy from "./privacypolicy_component";

const page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />

            <main className="grow">
                <PrivacyPolicy />
            </main>

            <Footer />
        </div>
    )
}

export default page
