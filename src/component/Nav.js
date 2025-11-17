"use client";
import React, { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const Nav = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);


  return (
    <header className="w-full fixed top-0 left-0 z-[9999]">

      {/* Top Banner (Dismissible) */}
      {showBanner && (
        <div className="bg-[#0b3d91] font-ppNeueMontreal flex items-center justify-center py-3 relative transition-all duration-300">
          <span className="text-center text-white text-[11px] sm:text-[12px] md:text-[14px] leading-tight">
            Acupuncture in Gold Coast |{" "}
            <span className="text-[#ffcdb2]">Vantage Point Acupuncture</span>
          </span>

          {/* Close Button */}
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 text-white! hover:text-[#ffcdb2] transition"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <nav className="hidden lg:block! w-full min-h-18 h-[90px] bg-white/25 border border-[#e5e3d580] backdrop-blur-md rounded-[10px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex h-full">
          {/* 3-column layout */}
          <div className="grid grid-cols-3 items-center h-full">

            {/* LEFT NAV */}
            <div className="flex items-center">
              <ul className="flex flex-nowrap space-x-4 whitespace-nowrap my-0! font-ppNeueMontreal">
                <li><a href="/about" className="no-underline! text-[#0b3d91]!">About Us</a></li>

                {/* DROPDOWN */}
                <li className="relative group">
                  <button className="text-[#0b3d91]! flex items-center gap-1">
                    Our Treatments
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <ul className="absolute pl-0! left-0 mt-2 w-72 bg-white text-[#0b3d91] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <li className="pl-0!"><a href="/chinese-herbal" className="no-underline! block px-4 py-2 hover:bg-blue-50">Chinese Herbal Medicine</a></li>
                    <li className="pl-0!"><a href="/constitutional-facial" className="no-underline! block px-4 py-2 hover:bg-blue-50">Constitutional Facial Acupuncture</a></li>
                    <li className="pl-0!"><a href="/acupuncture" className="no-underline! block px-4 py-2 hover:bg-blue-50">Acupuncture</a></li>
                    <li className="pl-0!"><a href="/women-health" className="no-underline! block px-4 py-2 hover:bg-blue-50">Women’s Health</a></li>
                    <li className="pl-0!"><a href="/Fertility" className="no-underline! block px-4 py-2 hover:bg-blue-50">Fertility & IVF Support</a></li>
                    <li className="pl-0!"><a href="/pain-management" className="no-underline! block px-4 py-2 hover:bg-blue-50">Musculoskeletal Pain Management</a></li>
                    <li className="pl-0!"><a href="/massage" className="no-underline! block px-4 py-2 hover:bg-blue-50">Massage & Cupping</a></li>
                    <li className="pl-0!"><a href="/sound-therapy" className="no-underline! block px-4 py-2 hover:bg-blue-50">Sound Therapy</a></li>
                  </ul>
                </li>

                <li><a href="#" className="no-underline! text-[#0b3d91]!">Gallery</a></li>
                <li><a href="#" className="no-underline! text-[#0b3d91]!">FAQ</a></li>
                <li><a href="#" className="no-underline! text-[#0b3d91]!">Contact Us</a></li>
              </ul>
            </div>

            {/* CENTER LOGO */}
            <Link href="/" className="flex justify-center">
              <img
                src="/assets/img/logoo.png"
                alt="Vantage Point Acupuncture Logo"
                className="w-[280px] h-auto"
              />
            </Link>

            {/* RIGHT BUTTON */}
            <div className="flex justify-end">
              <Link href="/book"
                className="bg-[#0b3d91]! text-white! text-[14px] py-2.5 px-14 rounded-full font-medium no-underline!">
                Book an Appointment
              </Link>
            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE + TABLET NAV */}
      <nav className="lg:hidden! w-full bg-white/25 border border-[#e5e3d580] backdrop-blur-md px-4 py-3 flex justify-between items-center">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <img src="/assets/img/logoo.png" alt="Vantage Point Acupuncture Logo" className="w-[180px] h-auto" />
          </Link>

          <button onClick={() => setMobileOpen(true)}
            className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#0b3d91]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m0 6H4" />
            </svg>
          </button>
        </div>

        <div className="w-7" />
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[99999] lg:hidden transition-opacity duration-300 
  ${mobileOpen ? "opacity-100 bg-black/50" : "opacity-0 pointer-events-none"}`}
      >
        {/* SLIDE-IN SIDEBAR */}
        <div
          className={`absolute left-0 top-0 w-[80%] h-full bg-white p-6 shadow-xl 
    transition-transform duration-300 
    ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Close button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute right-4 top-4 text-[#0b3d91]"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Menu items */}
          <ul className="mt-10 space-y-4! text-[#0b3d91]! text-lg font-ppNeueMontreal pl-0!">
            <li><a href="/about" className="no-underline! text-[#0b3d91]!">About Us</a></li>

            {/* Mobile dropdown */}
            <li>
              <button
                onClick={() => setMobileDropdown(!mobileDropdown)}
                className="flex justify-between w-full items-center"
              >
                <span>Our Treatments</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 transition-transform duration-300 
            ${mobileDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* DROPDOWN ANIMATION */}
              <div
                className={`overflow-hidden transition-all duration-300 
          ${mobileDropdown ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
              >
                <ul className="ml-4 space-y-2! text-md pl-0!">
                  <li className="pl-0!"><a href="/chinese-herbal" className="no-underline! text-[#0b3d91]!">Chinese Herbal Medicine</a></li>
                  <li className="pl-0!"><a href="/constitutional-facial" className="no-underline! text-[#0b3d91]!">Constitutional Facial Acupuncture</a></li>
                  <li className="pl-0!"><a href="/acupuncture" className="no-underline! text-[#0b3d91]!">Acupuncture</a></li>
                  <li className="pl-0!"><a href="/women-health" className="no-underline! text-[#0b3d91]!">Women’s Health</a></li>
                  <li className="pl-0!"><a href="/Fertility" className="no-underline! text-[#0b3d91]!">Fertility & IVF Support</a></li>
                  <li className="pl-0!"><a href="/pain-management" className="no-underline! text-[#0b3d91]!">Musculoskeletal Pain Management</a></li>
                  <li className="pl-0!"><a href="/massage" className="no-underline! text-[#0b3d91]!">Massage & Cupping</a></li>
                  <li className="pl-0!"><a href="/sound-therapy" className="no-underline! text-[#0b3d91]!">Sound Therapy</a></li>
                </ul>
              </div>
            </li>

            <li><a href="#" className="no-underline! text-[#0b3d91]!">Gallery</a></li>
            <li><a href="#" className="no-underline! text-[#0b3d91]!">FAQ</a></li>
            <li><a href="#" className="no-underline! text-[#0b3d91]!">Contact Us</a></li>
          </ul>

          <button className="mt-6 w-full bg-[#0b3d91] text-white! py-2 rounded font-medium">
            Book an Appointment
          </button>
        </div>
      </div>

    </header>
  );
};

export default Nav;




// "use client";

// import React, { useEffect, useState, useCallback } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Nav = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [treatmentsOpen, setTreatmentsOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "auto";
//   }, [mobileOpen]);


//   useEffect(() => {
//     setMobileOpen(false);
//     setTreatmentsOpen(false);
//   }, [pathname]);

//   const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);
//   const closeMobile = useCallback(() => setMobileOpen(false), []);
//   const toggleTreatments = useCallback(() => setTreatmentsOpen((v) => !v), []);

//   return (
//     <div className="nav-wrapper relative z-[3000]">
//       <div className="global-styles w-embed">

//         <style>
//           {`
//           html { font-size: 1.125rem; }
//           @media screen and (max-width: 1920px) { html { font-size: calc(0.625rem + 0.41666666666666674vw); } }
//           @media screen and (max-width: 1440px) { html { font-size: calc(0.8126951092611863rem + 0.20811654526534862vw); } }
//           @media screen and (max-width: 479px)  { html { font-size: calc(0.7494769874476988rem + 0.8368200836820083vw); } }

//           * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; -o-font-smoothing: antialiased; }

//           *[tabindex]:focus-visible,
//           input[type="file"]:focus-visible { outline: 0.125rem solid #4d65ff; outline-offset: 0.125rem; }

//           .w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child { margin-top: 0 !important; }
//           .w-richtext > :last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child { margin-bottom: 0 !important; }

//           .pointer-events-off { pointer-events: none; } .pointer-events-on { pointer-events: auto; }

//           .div-square::after { content: ""; display: block; padding-bottom: 100%; }

//           .container-medium, .container-small, .container-large { margin-right: auto !important; margin-left: auto !important; }

//           .text-style-5lines, .text-style-4lines, .text-style-3lines, .text-style-2lines {
//             display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical;
//           }
//           .text-style-5lines { -webkit-line-clamp: 5; }
//           .text-style-4lines { -webkit-line-clamp: 4; }
//           .text-style-3lines { -webkit-line-clamp: 3; }
//           .text-style-2lines { -webkit-line-clamp: 2; }

//           .display-inlineflex { display: inline-flex; }
//           .hide { display: none !important; }

//           @media screen and (max-width: 991px) { .hide, .hide-tablet { display: none !important; } }
//           @media screen and (max-width: 767px) { .hide-mobile-landscape { display: none !important; } }
//           @media screen and (max-width: 479px) { .hide-mobile { display: none !important; } }

//           .margin-0 { margin: 0rem !important; }
//           .padding-0 { padding: 0rem !important; }
//           .spacing-clean { padding: 0rem !important; margin: 0rem !important; }
//           .truncate-width { width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
//           .no-scrollbar { -ms-overflow-style: none; overflow: -moz-scrollbars-none; }
//           .no-scrollbar::-webkit-scrollbar { display: none; }
//           .text-balance { text-wrap: balance; }
//           em { font-family: Test Signifier; font-weight: 300; }

//           /* A11y helper */
//           .sr-only {
//             position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
//             overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
//           }

//           /* ===== Mobile / Tablet (≤ 991px): Hamburger + Drawer ===== */
//           @media screen and (max-width: 991px) {
//             .navbar3_container { position: relative; }

//             .navbar3_hamburger {
//               display: inline-flex; align-items: center; justify-content: center;
//               width: 2.5rem; height: 2.5rem;
//               border: 1px solid rgba(0,0,0,.12); border-radius: .5rem;
//               background: #fff; cursor: pointer; color: #0B3D91;
//             }

//             /* Force the menu visible as a drawer (override Webflow defaults) */
//             .navbar3_menu {
//               position: fixed; top: 0; left: 0;
//               height: 100dvh; width: min(86vw, 22rem);
//               background: #ffffff;
//               transform: translateX(-100%);
//               transition: transform .3s ease;
//               z-index: 1001;
//               padding: 1rem 1rem 2rem;
//               display: flex !important;             /* <-- important to override 'display:none' */
//               flex-direction: column; gap: .25rem;
//               box-shadow: rgba(0, 0, 0, 0.1) 2px 0 16px;
//             }
//             .navbar3_menu.is-open { transform: translateX(0); }

//             .mobile-nav-overlay {
//               position: fixed; inset: 0;
//               background: rgba(0,0,0,.4);
//               opacity: 0; pointer-events: none;
//               transition: opacity .3s ease;
//               z-index: 1000;
//             }
//             .mobile-nav-overlay.is-open { opacity: 1; pointer-events: auto; }

//             .navbar3_close-drawer {
//               margin-left: auto;
//               display: inline-flex; align-items: center; justify-content: center;
//               width: 2.5rem; height: 2.5rem;
//               border: 1px solid rgba(0,0,0,.12);
//               border-radius: .5rem; background: #fff; margin-bottom: .5rem;
//             }

//             /* Touch-friendly items */
//             .navbar3_menu .w-nav-link,
//             .navbar3_menu .w-dropdown-toggle,
//             .navbar3_menu .w-dropdown-link {
//               padding: .875rem 0;
//               border-bottom: 1px solid rgba(0,0,0,.06);
//             }

//             /* Dropdown inside drawer uses click-to-toggle */
//             .navbar3_menu .w-dropdown { position: static; }
//             .navbar3_menu .w-dropdown-list { display: none; padding-left: .5rem; }
//             .navbar3_menu .w-dropdown-list.is-open { display: block; }

//             /* If an external stylesheet hides it, unhide inside the drawer only */
//             .navbar3_menu .hide-mobile-portrait { display: block !important; }
//           }

//           /* ===== Desktop (≥ 992px): standard bar + hover dropdown ===== */
//           @media screen and (min-width: 992px) {
//             .navbar3_hamburger,
//             .mobile-nav-overlay,
//             .navbar3_close-drawer { display: none !important; }

//             /* Make desktop dropdown appear on hover/focus even without Webflow JS */
//             .navbar3_menu .w-dropdown { position: relative; }
//             .navbar3_menu .w-dropdown-list {
//               position: absolute; left: 0; top: 100%;
//               min-width: 14rem;
//               background: #fff;
//               box-shadow: 0 8px 24px rgba(0,0,0,.08);
//               border: 1px solid rgba(0,0,0,.06);
//               display: none;
//               z-index: 1002;
//             }
//             .navbar3_menu .w-dropdown:hover > .w-dropdown-list,
//             .navbar3_menu .w-dropdown:focus-within > .w-dropdown-list {
//               display: block;
//             }
//             .navbar3_menu .w-dropdown-link {
//               display: block; white-space: nowrap; padding: .6rem 1rem;
//             }
//           }
//         `}
//         </style>

//       </div>

//       <div className="site-notification-banner">
//         <div className="banner10_content-wrapper">

//           <a href="/functional-words" className="banner10_content w-inline-block py-2">
//             <div className="banner10-text">
//               Acupuncture in Gold Coast | <span className="text-span-16">Vantage Point Acupuncture</span>
//               <span className="text-span-15"></span>
//             </div>
//           </a>
//         </div>
//       </div>

//       <div
//         data-animation="over-left"
//         className="navbar3_component w-nav  bg-white shadow-sm sticky top-0 z-[3000]"
//         data-easing2="ease"
//         fs-scrolldisable-element="smart-nav"
//         data-easing="ease"
//         data-collapse="medium"
//         data-w-id="faa13c98-fd3f-2e52-c5d1-270e9e23b273"
//         role="banner"
//         data-duration="400"
//       >
//         <div className="container-large">
//           <div className="navbar3_containe flex items-center justify-between py-3">
//             <button
//               aria-label="Menu"
//               aria-expanded={mobileOpen}
//               onClick={toggleMobile}
//               className="lg:hidden flex flex-col justify-between w-7 h-5 focus:outline-none"
//             >
//               <span
//                 className={`block h-[2px] w-full bg-[#0B3D91] transition-all duration-300 ${mobileOpen ? "translate-y-[6px] rotate-45" : ""
//                   }`}
//               ></span>

//               <span
//                 className={`block h-[2px] w-full bg-[#0B3D91] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
//                   }`}
//               ></span>

//               <span
//                 className={`block h-[2px] w-full bg-[#0B3D91] transition-all duration-300 ${mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
//                   }`}
//               ></span>
//             </button>

//             <nav
//               role="navigation"
//               aria-label="Primary navigation"
//               id="primary-navigation"
//               className={`navbar3_menu w-nav-menu ${mobileOpen ? "is-open" : ""}`}
//             >
//               <button
//                 type="button"
//                 className="navbar3_close-drawer"
//                 onClick={closeMobile}
//                 aria-label="Close menu"
//               >
//                 <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 </svg>
//                 <span className="sr-only">Close</span>
//               </button>

//               <a href="/about" className="navbar3_link dark-on-mobile w-nav-link text-[#0B3D91]!">About Us</a>

//               <div
//                 data-hover="false"
//                 data-delay="0"
//                 className="navbar3_link dark-on-mobile hide-mobile-portrait w-dropdown"
//               >
//                 <div
//                   className="dropdown-toggle navbar3_link w-dropdown-toggle text-[#0B3D91]!"
//                   role="button"
//                   tabIndex={0}
//                   aria-haspopup="true"
//                   aria-expanded={treatmentsOpen ? "true" : "false"}
//                   aria-controls="treatments-menu"
//                   onClick={toggleTreatments}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" || e.key === " ") {
//                       e.preventDefault();
//                       toggleTreatments();
//                     }
//                   }}
//                 >
//                   <div className="icon w-icon-dropdown-toggle"></div>
//                   <div className="text-block-3 navbar3_link text-[#0B3D91]!">Our Treatments</div>
//                 </div>

//                 <nav
//                   id="treatments-menu"
//                   className={`w-dropdown-list text-[#0B3D91] ${treatmentsOpen ? "is-open" : ""}`}
//                 >
//                   <a href="/chinese-herbal" className="w-dropdown-link text-[#0B3D91]!">Chinese Herbal Medicine</a>
//                   <a href="/constitutional-facial" className="w-dropdown-link">Constitutional Facial Acupuncture</a>
//                   <a href="/acupuncture" className="w-dropdown-link">Acupuncture</a>
//                   <a href="/women-health" className="w-dropdown-link">Women’s Health</a>
//                   <a href="/Fertility" className="w-dropdown-link">Fertility & IVF Support</a>
//                   <a href="/pain-management" className="w-dropdown-link">Musculoskeletal Pain Management</a>
//                   <a href="/massage" className="w-dropdown-link">Massage & Cupping</a>
//                   <a href="/sound-therapy" className="w-dropdown-link">Sound Therapy</a>
//                 </nav>
//               </div>

//               <Link href="/gallery" className="navbar3_link dark-on-mobile w-nav-link text-[#0B3D91]!">Gallery</Link>
//               <a href="/faq" className="navbar3_link dark-on-mobile w-nav-link text-[#0B3D91]!">FAQ</a>
//               <a href="/contact" className="navbar3_link dark-on-mobile w-nav-link text-[#0B3D91]!">Contact Us</a>
//             </nav>

//             <Link href="/" aria-current="page" className="navbar3_logo-link w-nav-brand w--current">
//               <Image src="/assets/img/logoo.png" alt="" style={{ width: "280px", height: "auto" }} width={280} height={10} />
//             </Link>


//             <div className="navbar3_mobile lg:hidden">
//               <button
//                 aria-label="Toggle menu"
//                 aria-expanded={mobileOpen}
//                 onClick={toggleMobile}
//                 className="navbar3_hamburger"
//               >
//                 <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
//                   {mobileOpen ? (
//                     <path
//                       d="M6 6L18 18M6 18L18 6"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                     />
//                   ) : (
//                     <path
//                       d="M3 6h18M3 12h18M3 18h18"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                     />
//                   )}
//                 </svg>
//               </button>

//               <nav
//                 role="navigation"
//                 className={`navbar3_menu w-nav-menu ${mobileOpen ? "is-open" : ""}`}
//               >
//                 <button
//                   type="button"
//                   className="navbar3_close-drawer"
//                   onClick={closeMobile}
//                   aria-label="Close menu"
//                 >
//                   ✕
//                 </button>

//                 <Link href="/about" onClick={closeMobile} className="w-nav-link text-[#0B3D91]">
//                   About Us
//                 </Link>

//                 <div className="w-dropdown">
//                   <button
//                     className="w-dropdown-toggle text-[#0B3D91] flex justify-between items-center w-full"
//                     onClick={toggleTreatments}
//                   >
//                     Our Treatments
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className={`h-4 w-4 transition-transform ${treatmentsOpen ? "rotate-180" : ""
//                         }`}
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>

//                   <div
//                     className={`w-dropdown-list ${treatmentsOpen ? "is-open" : ""
//                       } pl-2 flex flex-col`}
//                   >
//                     <Link href="/chinese-herbal" onClick={closeMobile} className="w-dropdown-link">
//                       Chinese Herbal Medicine
//                     </Link>
//                     <Link href="/constitutional-facial" onClick={closeMobile} className="w-dropdown-link">
//                       Constitutional Facial Acupuncture
//                     </Link>
//                     <Link href="/acupuncture" onClick={closeMobile} className="w-dropdown-link">
//                       Acupuncture
//                     </Link>
//                     <Link href="/women-health" onClick={closeMobile} className="w-dropdown-link">
//                       Women’s Health
//                     </Link>
//                     <Link href="/Fertility" onClick={closeMobile} className="w-dropdown-link">
//                       Fertility & IVF Support
//                     </Link>
//                     <Link href="/pain-management" onClick={closeMobile} className="w-dropdown-link">
//                       Musculoskeletal Pain Management
//                     </Link>
//                     <Link href="/massage" onClick={closeMobile} className="w-dropdown-link">
//                       Massage & Cupping
//                     </Link>
//                     <Link href="/sound-therapy" onClick={closeMobile} className="w-dropdown-link">
//                       Sound Therapy
//                     </Link>
//                   </div>
//                 </div>

//                 <Link href="/gallery" onClick={closeMobile} className="w-nav-link text-[#0B3D91]">
//                   Gallery
//                 </Link>
//                 <Link href="/faq" onClick={closeMobile} className="w-nav-link text-[#0B3D91]">
//                   FAQ
//                 </Link>
//                 <Link href="/contact" onClick={closeMobile} className="w-nav-link text-[#0B3D91]">
//                   Contact Us
//                 </Link>

//                 <Link
//                   href="/book"
//                   onClick={closeMobile}
//                   className="button is-navbar3-button w-button mt-4"
//                 >
//                   Book An Appointment
//                 </Link>
//               </nav>

//               <div
//                 className={`mobile-nav-overlay ${mobileOpen ? "is-open" : ""}`}
//                 onClick={closeMobile}
//               />
//             </div>


//             <Link
//               id="w-node-faa13c98-fd3f-2e52-c5d1-270e9e23b296-9e23b273"
//               href="/book"
//               className="button is-navbar3-button w-button"
//             >
//               Book An Appointment
//             </Link>

//             <div className="navbar3_menu-background">
//               <Image
//                 src="https://cdn.prod.website-files.com/6508af1b0b60370d434c9417/6508af1b0b60370d434c946d_icon_plus.svg"
//                 loading="lazy"
//                 alt=""
//                 className="navbar3_close-image"
//                 width={10}
//                 height={10}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`mobile-nav-overlay ${mobileOpen ? "is-open" : ""}`}
//         onClick={closeMobile}
//         aria-hidden={mobileOpen ? "false" : "true"}
//       />

//       <div
//         style={{
//           transform:
//             "translate3d(0, -8rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//         }}
//         className="nav-island-wrapper">

//       </div>
//     </div>
//   );
// };

// export default Nav;
