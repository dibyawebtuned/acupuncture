"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [treatmentsOpen, setTreatmentsOpen] = useState(false);
    const pathname = usePathname();

    // Close menus on route change
    useEffect(() => {
        setMobileOpen(false);
        setTreatmentsOpen(false);
    }, [pathname]);

    const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);
    const closeMobile = useCallback(() => setMobileOpen(false), []);
    const toggleTreatments = useCallback(() => setTreatmentsOpen((v) => !v), []);

    return (
        <div className="nav-wrapper relative">

            {/* Banner */}
            <div className="bg-[#0B3D91] text-white text-center py-2 text-sm">
                Acupuncture in Gold Coast | <strong>Vantage Point Acupuncture</strong>
            </div>

            {/* NAVBAR */}
            <header className="flex justify-between items-center py-3 px-6 lg:px-16 bg-white shadow-sm relative z-[200]">

                {/* LOGO */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/assets/img/logoo.png"
                        alt="Logo"
                        width={200}
                        height={60}
                        priority
                    />
                </Link>

                {/* HAMBURGER - CLEAN + NO DESIGN ISSUES */}
                <button
                    aria-label="Menu"
                    aria-expanded={mobileOpen}
                    onClick={toggleMobile}
                    className="lg:hidden flex flex-col justify-between w-7 h-5 focus:outline-none"
                >
                    <span
                        className={`block h-[2px] w-full bg-[#0B3D91] transition-all duration-300 ${mobileOpen ? "translate-y-[6px] rotate-45" : ""
                            }`}
                    ></span>

                    <span
                        className={`block h-[2px] w-full bg-[#0B3D91] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                            }`}
                    ></span>

                    <span
                        className={`block h-[2px] w-full bg-[#0B3D91] transition-all duration-300 ${mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
                            }`}
                    ></span>
                </button>

                {/* DESKTOP MENU */}
                <nav className="hidden lg:flex gap-6 items-center text-[#0B3D91] font-semibold">

                    <Link href="/about">About Us</Link>

                    {/* Dropdown */}
                    <div className="relative group cursor-pointer">
                        <button className="flex items-center gap-1">
                            Our Treatments
                            <svg width="12" height="12" fill="#0B3D91" viewBox="0 0 24 24">
                                <path d="M7 10l5 5 5-5z" />
                            </svg>
                        </button>

                        <div className="absolute left-0 top-full mt-2 w-56 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                            <Link href="/chinese-herbal" className="block px-4 py-2 hover:bg-gray-100">Chinese Herbal Medicine</Link>
                            <Link href="/constitutional-facial" className="block px-4 py-2 hover:bg-gray-100">Constitutional Facial Acupuncture</Link>
                            <Link href="/acupuncture" className="block px-4 py-2 hover:bg-gray-100">Acupuncture</Link>
                            <Link href="/women-health" className="block px-4 py-2 hover:bg-gray-100">Women’s Health</Link>
                            <Link href="/fertility" className="block px-4 py-2 hover:bg-gray-100">Fertility & IVF Support</Link>
                            <Link href="/pain-management" className="block px-4 py-2 hover:bg-gray-100">Musculoskeletal Pain Management</Link>
                            <Link href="/massage" className="block px-4 py-2 hover:bg-gray-100">Massage & Cupping</Link>
                            <Link href="/sound-therapy" className="block px-4 py-2 hover:bg-gray-100">Sound Therapy</Link>
                        </div>
                    </div>

                    <Link href="/gallery">Gallery</Link>
                    <Link href="/faq">FAQ</Link>
                    <Link href="/contact">Contact Us</Link>

                    <Link
                        href="/courses"
                        className="bg-[#0B3D91] text-white px-5 py-2 rounded-md hover:bg-[#072e75] transition"
                    >
                        Book An Appointment
                    </Link>
                </nav>
            </header>

            {/* MOBILE DRAWER */}
            <aside
                className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl p-6 z-[300] transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <Link href="/about" onClick={closeMobile} className="block py-3 text-[#0B3D91] font-semibold">
                    About Us
                </Link>

                {/* Mobile Dropdown */}
                <button
                    onClick={toggleTreatments}
                    className="w-full flex justify-between items-center py-3 text-[#0B3D91] font-semibold"
                >
                    Our Treatments
                    <svg width="16" height="16" fill="#0B3D91" viewBox="0 0 24 24">
                        <path d={treatmentsOpen ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
                    </svg>
                </button>

                {treatmentsOpen && (
                    <div className="pl-3 mb-2">
                        <Link href="/chinese-herbal" onClick={closeMobile} className="block py-2">Chinese Herbal Medicine</Link>
                        <Link href="/constitutional-facial" onClick={closeMobile} className="block py-2">Constitutional Facial Acupuncture</Link>
                        <Link href="/acupuncture" onClick={closeMobile} className="block py-2">Acupuncture</Link>
                        <Link href="/women-health" onClick={closeMobile} className="block py-2">Women’s Health</Link>
                        <Link href="/fertility" onClick={closeMobile} className="block py-2">Fertility & IVF Support</Link>
                        <Link href="/pain-management" onClick={closeMobile} className="block py-2">Musculoskeletal Pain Management</Link>
                        <Link href="/massage" onClick={closeMobile} className="block py-2">Massage & Cupping</Link>
                        <Link href="/sound-therapy" onClick={closeMobile} className="block py-2">Sound Therapy</Link>
                    </div>
                )}

                <Link href="/gallery" onClick={closeMobile} className="block py-3">Gallery</Link>
                <Link href="/faq" onClick={closeMobile} className="block py-3">FAQ</Link>
                <Link href="/contact" onClick={closeMobile} className="block py-3">Contact Us</Link>

                <Link
                    href="/courses"
                    onClick={closeMobile}
                    className="block mt-4 bg-[#0B3D91] text-white text-center py-2 rounded-md"
                >
                    Book An Appointment
                </Link>
            </aside>

            {/* OVERLAY */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-[250]"
                    onClick={closeMobile}>
                </div>
            )}
        </div>
    );
};

export default Nav;
