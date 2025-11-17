"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [treatmentsOpen, setTreatmentsOpen] = useState(false);
    const pathname = usePathname();

    // Lock scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    }, [mobileOpen]);

    // Close menus on route change
    useEffect(() => {
        setMobileOpen(false);
        setTreatmentsOpen(false);
    }, [pathname]);

    const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);
    const closeMobile = useCallback(() => setMobileOpen(false), []);
    const toggleTreatments = useCallback(() => setTreatmentsOpen((v) => !v), []);

    return (
        <div className="nav-wrapper relative z-[3000]">
            <div className="global-styles w-embed">
                <style>
                    {`
          /* ===== MOBILE FIX: HIGHER Z-INDEX ===== */
          @media screen and (max-width: 991px) {
            .navbar3_menu {
              position: fixed;
              top: 0; left: 0;
              height: 100dvh;
              width: min(86vw, 22rem);
              background: #ffffff;
              transform: translateX(-100%);
              transition: transform .3s ease;
              z-index: 3001 !important;
              padding: 1.25rem 1.25rem 2rem;
              display: flex !important;
              flex-direction: column;
              box-shadow: rgba(0, 0, 0, 0.25) 3px 0 20px;
            }
            .navbar3_menu.is-open { transform: translateX(0); }

            .mobile-nav-overlay {
              position: fixed; inset: 0;
              background: rgba(0, 0, 0, 0.5);
              opacity: 0;
              pointer-events: none;
              transition: opacity .3s ease;
              z-index: 3000 !important;
            }
            .mobile-nav-overlay.is-open {
              opacity: 1;
              pointer-events: auto;
            }

            .navbar3_close-drawer {
              z-index: 3002;
              position: relative;
              display: inline-flex; align-items: center; justify-content: center;
              width: 2.5rem; height: 2.5rem;
              border: 1px solid rgba(0,0,0,.12);
              border-radius: .5rem; background: #fff;
              margin-left: auto; margin-bottom: .5rem;
            }

            .navbar3_hamburger {
              z-index: 3003 !important;
              display: inline-flex; align-items: center; justify-content: center;
              width: 2.5rem; height: 2.5rem;
              border: 1px solid rgba(0,0,0,.12); border-radius: .5rem;
              background: #fff; cursor: pointer; color: #0B3D91;
            }

            .navbar3_menu .w-dropdown-list { display: none; padding-left: .75rem; }
            .navbar3_menu .w-dropdown-list.is-open { display: block; }
          }
          `}
                </style>
            </div>

            {/* Top Nav Banner */}
            <div className="site-notification-banner bg-[#0B3D91]/10 text-center py-2 text-sm text-[#0B3D91]">
                Acupuncture in Gold Coast |{" "}
                <span className="font-semibold">Vantage Point Acupuncture</span>
            </div>

            {/* Main Navbar */}
            <div
                data-animation="over-left"
                className="navbar3_component w-nav bg-white shadow-sm sticky top-0 z-[3000]"
                role="banner"
            >
                <div className="container-large">
                    <div className="navbar3_container flex items-center justify-between py-3">
                        {/* Hamburger (mobile only) */}
                        <button
                            aria-label="Menu"
                            aria-expanded={mobileOpen}
                            onClick={toggleMobile}
                            className="navbar3_hamburger lg:hidden"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                {mobileOpen ? (
                                    <path
                                        d="M6 6L18 18M6 18L18 6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                ) : (
                                    <path
                                        d="M3 6h18M3 12h18M3 18h18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                )}
                            </svg>
                        </button>

                        {/* Logo */}
                        <Link href="/" aria-current="page" className="navbar3_logo-link w-nav-brand">
                            <Image
                                src="/assets/img/logoo.png"
                                alt="Vantage Point Acupuncture"
                                width={280}
                                height={40}
                                className="h-auto"
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-6">
                            <Link href="/about" className="text-[#0B3D91] hover:underline">
                                About Us
                            </Link>

                            <div className="relative group">
                                <button className="text-[#0B3D91] flex items-center gap-1 hover:underline">
                                    Our Treatments
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 transition-transform group-hover:rotate-180"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                <div className="absolute hidden group-hover:block bg-white border rounded-md shadow-lg mt-2 z-[3001]">
                                    <Link href="/chinese-herbal" className="block px-4 py-2 hover:bg-gray-50">
                                        Chinese Herbal Medicine
                                    </Link>
                                    <Link href="/constitutional-facial" className="block px-4 py-2 hover:bg-gray-50">
                                        Constitutional Facial Acupuncture
                                    </Link>
                                    <Link href="/acupuncture" className="block px-4 py-2 hover:bg-gray-50">
                                        Acupuncture
                                    </Link>
                                    <Link href="/women-health" className="block px-4 py-2 hover:bg-gray-50">
                                        Women’s Health
                                    </Link>
                                    <Link href="/Fertility" className="block px-4 py-2 hover:bg-gray-50">
                                        Fertility & IVF Support
                                    </Link>
                                    <Link href="/pain-management" className="block px-4 py-2 hover:bg-gray-50">
                                        Musculoskeletal Pain Management
                                    </Link>
                                    <Link href="/massage" className="block px-4 py-2 hover:bg-gray-50">
                                        Massage & Cupping
                                    </Link>
                                    <Link href="/sound-therapy" className="block px-4 py-2 hover:bg-gray-50">
                                        Sound Therapy
                                    </Link>
                                </div>
                            </div>

                            <Link href="/gallery" className="text-[#0B3D91] hover:underline">
                                Gallery
                            </Link>
                            <Link href="/faq" className="text-[#0B3D91] hover:underline">
                                FAQ
                            </Link>
                            <Link href="/contact" className="text-[#0B3D91] hover:underline">
                                Contact Us
                            </Link>

                            <Link
                                href="/book"
                                className="ml-4 bg-[#0B3D91] text-white px-5 py-2 rounded-md hover:bg-blue-800 transition"
                            >
                                Book An Appointment
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* === Mobile Drawer === */}
                <nav className={`navbar3_menu w-nav-menu ${mobileOpen ? "is-open" : ""}`}>
                    <button type="button" className="navbar3_close-drawer" onClick={closeMobile}>
                        ✕
                    </button>

                    <Link href="/about" onClick={closeMobile} className="w-nav-link text-[#0B3D91] py-3 border-b">
                        About Us
                    </Link>

                    <div className="w-dropdown">
                        <button
                            onClick={toggleTreatments}
                            className="w-dropdown-toggle text-[#0B3D91] flex justify-between items-center w-full py-3 border-b"
                        >
                            Our Treatments
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 transform transition-transform ${treatmentsOpen ? "rotate-180" : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div className={`w-dropdown-list ${treatmentsOpen ? "is-open" : ""} pl-4`}>
                            <Link href="/chinese-herbal" onClick={closeMobile} className="block py-2">
                                Chinese Herbal Medicine
                            </Link>
                            <Link href="/constitutional-facial" onClick={closeMobile} className="block py-2">
                                Constitutional Facial Acupuncture
                            </Link>
                            <Link href="/acupuncture" onClick={closeMobile} className="block py-2">
                                Acupuncture
                            </Link>
                            <Link href="/women-health" onClick={closeMobile} className="block py-2">
                                Women’s Health
                            </Link>
                            <Link href="/Fertility" onClick={closeMobile} className="block py-2">
                                Fertility & IVF Support
                            </Link>
                            <Link href="/pain-management" onClick={closeMobile} className="block py-2">
                                Musculoskeletal Pain Management
                            </Link>
                            <Link href="/massage" onClick={closeMobile} className="block py-2">
                                Massage & Cupping
                            </Link>
                            <Link href="/sound-therapy" onClick={closeMobile} className="block py-2">
                                Sound Therapy
                            </Link>
                        </div>
                    </div>

                    <Link href="/gallery" onClick={closeMobile} className="w-nav-link text-[#0B3D91] py-3 border-b">
                        Gallery
                    </Link>
                    <Link href="/faq" onClick={closeMobile} className="w-nav-link text-[#0B3D91] py-3 border-b">
                        FAQ
                    </Link>
                    <Link href="/contact" onClick={closeMobile} className="w-nav-link text-[#0B3D91] py-3 border-b">
                        Contact Us
                    </Link>

                    <Link href="/book" onClick={closeMobile} className="mt-5 bg-[#0B3D91] text-white text-center py-3 rounded-md">
                        Book An Appointment
                    </Link>
                </nav>

                {/* Overlay */}
                <div className={`mobile-nav-overlay ${mobileOpen ? "is-open" : ""}`} onClick={closeMobile}></div>
            </div>
        </div>
    );
};

export default Nav;
