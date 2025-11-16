"use client";
import React from 'react'
import TermsConditions_component from './termsconditions_component'
import Nav from '@/component/Nav';
import Footer from '@/component/Footer';

const page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* <Nav /> */}

            <main className='grow'>
                <TermsConditions_component />
            </main>

            {/* <Footer /> */}
        </div>
    )
}

export default page
