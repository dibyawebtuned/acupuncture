"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [treatmentsOpen, setTreatmentsOpen] = useState(false);
    const [showBanner, setShowBanner] = useState(true);
    const pathname = usePathname();

    // Close menus on route change
    useEffect(() => {
        setMobileOpen(false);
        setTreatmentsOpen(false);
    }, [pathname]);

    const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);
    const closeMobile = useCallback(() => setMobileOpen(false), []);
    const toggleTreatments = useCallback(() => setTreatmentsOpen((v) => !v), []);
    const handleCloseBanner = useCallback(() => setShowBanner(false), []);

    return (
        <div className="nav-wrapper">
            {/* ===== Top Notification Banner ===== */}
            {showBanner && (
                <div
                    className={`site-notification-banner bg-[#0B3D91] text-white transition-all duration-500 ease-in-out ${showBanner ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                        }`}
                >
                    <div className="banner10_content-wrapper flex items-center justify-between px-6 py-2">
                        <a href="/functional-words" className="banner10_content w-inline-block">
                            <div className="banner10-text text-sm sm:text-base font-ppNeueMontreal">
                                Acupuncture in Gold Coast |{" "}
                                <span className="text-[#FFCDB2] font-semibold">
                                    Vantage Point Acupuncture
                                </span>
                            </div>
                        </a>

                        {/* Close Button */}
                        <button
                            onClick={handleCloseBanner}
                            className="banner10_close-button p-2 rounded-md hover:bg-[#ffffff20] transition-colors duration-300"
                            aria-label="Close notification banner"
                        >
                            <Image
                                src="https://cdn.prod.website-files.com/624380709031623bfe4aee60/6243807090316246b84aee82_icon_close-banner.svg"
                                alt="Close banner"
                                width={18}
                                height={18}
                                className="invert"
                            />
                        </button>
                    </div>
                </div>
            )}

            {/* ===== Main Navigation ===== */}
            <div
                data-animation="over-left"
                className="navbar3_component w-nav bg-white shadow-sm"
                role="banner"
            >
                <div className="container-large">
                    <div className="navbar3_container flex justify-between items-center py-4 px-6 lg:px-10">
                        {/* Hamburger Icon (Mobile) */}
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

                        {/* ===== Logo ===== */}
                        <Link href="/" className="navbar3_logo-link w-nav-brand">
                            <Image
                                src="/assets/img/logoo.png"
                                alt="Vantage Point Logo"
                                width={220}
                                height={80}
                                className="object-contain"
                            />
                        </Link>

                        {/* ===== Desktop Nav Links ===== */}
                        <nav
                            role="navigation"
                            aria-label="Primary navigation"
                            id="primary-navigation"
                            className={`navbar3_menu w-nav-menu flex-col lg:flex-row gap-4 lg:gap-8 ${mobileOpen
                                ? "fixed top-0 left-0 w-3/4 h-screen bg-white p-8 flex flex-col z-50 transition-transform duration-300 translate-x-0"
                                : "hidden lg:flex"
                                }`}
                        >
                            {/* Mobile Close */}
                            {mobileOpen && (
                                <button
                                    type="button"
                                    className="self-end mb-6"
                                    onClick={closeMobile}
                                    aria-label="Close menu"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            d="M6 6l12 12M18 6L6 18"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </button>
                            )}

                            <Link href="/about" className="navbar3_link text-[#0B3D91] hover:underline">
                                About Us
                            </Link>

                            {/* Dropdown for Treatments */}
                            <div className="relative">
                                <button
                                    onClick={toggleTreatments}
                                    className="navbar3_link text-[#0B3D91] hover:underline flex items-center gap-1"
                                >
                                    Our Treatments
                                    <svg
                                        className={`w-4 h-4 transition-transform ${treatmentsOpen ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {treatmentsOpen && (
                                    <div className="absolute left-0 top-full mt-2 bg-white shadow-lg border border-gray-200 rounded-lg p-3 w-56 z-40">
                                        <Link href="/chinese-herbal" className="block py-2 hover:text-[#0B3D91]">
                                            Chinese Herbal Medicine
                                        </Link>
                                        <Link href="/constitutional-facial" className="block py-2 hover:text-[#0B3D91]">
                                            Constitutional Facial Acupuncture
                                        </Link>
                                        <Link href="/acupuncture" className="block py-2 hover:text-[#0B3D91]">
                                            Acupuncture
                                        </Link>
                                        <Link href="/women-health" className="block py-2 hover:text-[#0B3D91]">
                                            Women’s Health
                                        </Link>
                                        <Link href="/Fertility" className="block py-2 hover:text-[#0B3D91]">
                                            Fertility & IVF Support
                                        </Link>
                                        <Link href="/pain-management" className="block py-2 hover:text-[#0B3D91]">
                                            Musculoskeletal Pain Management
                                        </Link>
                                        <Link href="/massage" className="block py-2 hover:text-[#0B3D91]">
                                            Massage & Cupping
                                        </Link>
                                        <Link href="/sound-therapy" className="block py-2 hover:text-[#0B3D91]">
                                            Sound Therapy
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link href="/gallery" className="navbar3_link text-[#0B3D91] hover:underline">
                                Gallery
                            </Link>
                            <Link href="/faq" className="navbar3_link text-[#0B3D91] hover:underline">
                                FAQ
                            </Link>
                            <Link href="/contact" className="navbar3_link text-[#0B3D91] hover:underline">
                                Contact Us
                            </Link>
                        </nav>

                        {/* ===== Book Appointment Button ===== */}
                        <a
                            href="/courses"
                            className="button is-navbar3-button bg-[#0B3D91] text-white px-6 py-3 rounded-full text-sm hover:bg-[#092e73] transition"
                        >
                            Book An Appointment
                        </a>
                    </div>
                </div>
            </div>

            {/* ===== Mobile Overlay ===== */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    onClick={closeMobile}
                ></div>
            )}
        </div>
    );
};

export default Nav;
