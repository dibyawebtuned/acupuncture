"use client";
import React from 'react';
import Gallerycomponent from './gallerycomponent';
import Nav from '@/component/Nav';
import Footer from '@/component/Footer';

const page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />

            <main className="grow">
                <Gallerycomponent />
            </main>

            <Footer />
        </div>
    )
}

export default page