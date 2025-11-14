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
    <div className="nav-wrapper">
      <div className="global-styles w-embed">
        <style>{`
          html { font-size: 1.125rem; }
          @media screen and (max-width: 1920px) { html { font-size: calc(0.625rem + 0.41666666666666674vw); } }
          @media screen and (max-width: 1440px) { html { font-size: calc(0.8126951092611863rem + 0.20811654526534862vw); } }
          @media screen and (max-width: 479px)  { html { font-size: calc(0.7494769874476988rem + 0.8368200836820083vw); } }

          * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; -o-font-smoothing: antialiased; }

          *[tabindex]:focus-visible,
          input[type="file"]:focus-visible { outline: 0.125rem solid #4d65ff; outline-offset: 0.125rem; }

          .w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child { margin-top: 0 !important; }
          .w-richtext > :last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child { margin-bottom: 0 !important; }

          .pointer-events-off { pointer-events: none; } .pointer-events-on { pointer-events: auto; }

          .div-square::after { content: ""; display: block; padding-bottom: 100%; }

          .container-medium, .container-small, .container-large { margin-right: auto !important; margin-left: auto !important; }

          .text-style-5lines, .text-style-4lines, .text-style-3lines, .text-style-2lines {
            display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical;
          }
          .text-style-5lines { -webkit-line-clamp: 5; }
          .text-style-4lines { -webkit-line-clamp: 4; }
          .text-style-3lines { -webkit-line-clamp: 3; }
          .text-style-2lines { -webkit-line-clamp: 2; }

          .display-inlineflex { display: inline-flex; }
          .hide { display: none !important; }

          @media screen and (max-width: 991px) { .hide, .hide-tablet { display: none !important; } }
          @media screen and (max-width: 767px) { .hide-mobile-landscape { display: none !important; } }
          @media screen and (max-width: 479px) { .hide-mobile { display: none !important; } }

          .margin-0 { margin: 0rem !important; }
          .padding-0 { padding: 0rem !important; }
          .spacing-clean { padding: 0rem !important; margin: 0rem !important; }
          .truncate-width { width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .no-scrollbar { -ms-overflow-style: none; overflow: -moz-scrollbars-none; }
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .text-balance { text-wrap: balance; }
          em { font-family: Test Signifier; font-weight: 300; }

          /* A11y helper */
          .sr-only {
            position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
            overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
          }

          /* ===== Mobile / Tablet (≤ 991px): Hamburger + Drawer ===== */
          @media screen and (max-width: 991px) {
            .navbar3_container { position: relative; }

            .navbar3_hamburger {
              display: inline-flex; align-items: center; justify-content: center;
              width: 2.5rem; height: 2.5rem;
              border: 1px solid rgba(0,0,0,.12); border-radius: .5rem;
              background: #fff; cursor: pointer; color: #0B3D91;
            }

            /* Force the menu visible as a drawer (override Webflow defaults) */
            .navbar3_menu {
              position: fixed; top: 0; left: 0;
              height: 100dvh; width: min(86vw, 22rem);
              background: #ffffff;
              transform: translateX(-100%);
              transition: transform .3s ease;
              z-index: 1001;
              padding: 1rem 1rem 2rem;
              display: flex !important;             /* <-- important to override 'display:none' */
              flex-direction: column; gap: .25rem;
              box-shadow: rgba(0, 0, 0, 0.1) 2px 0 16px;
            }
            .navbar3_menu.is-open { transform: translateX(0); }

            .mobile-nav-overlay {
              position: fixed; inset: 0;
              background: rgba(0,0,0,.4);
              opacity: 0; pointer-events: none;
              transition: opacity .3s ease;
              z-index: 1000;
            }
            .mobile-nav-overlay.is-open { opacity: 1; pointer-events: auto; }

            .navbar3_close-drawer {
              margin-left: auto;
              display: inline-flex; align-items: center; justify-content: center;
              width: 2.5rem; height: 2.5rem;
              border: 1px solid rgba(0,0,0,.12);
              border-radius: .5rem; background: #fff; margin-bottom: .5rem;
            }

            /* Touch-friendly items */
            .navbar3_menu .w-nav-link,
            .navbar3_menu .w-dropdown-toggle,
            .navbar3_menu .w-dropdown-link {
              padding: .875rem 0;
              border-bottom: 1px solid rgba(0,0,0,.06);
            }

            /* Dropdown inside drawer uses click-to-toggle */
            .navbar3_menu .w-dropdown { position: static; }
            .navbar3_menu .w-dropdown-list { display: none; padding-left: .5rem; }
            .navbar3_menu .w-dropdown-list.is-open { display: block; }

            /* If an external stylesheet hides it, unhide inside the drawer only */
            .navbar3_menu .hide-mobile-portrait { display: block !important; }
          }

          /* ===== Desktop (≥ 992px): standard bar + hover dropdown ===== */
          @media screen and (min-width: 992px) {
            .navbar3_hamburger,
            .mobile-nav-overlay,
            .navbar3_close-drawer { display: none !important; }

            /* Make desktop dropdown appear on hover/focus even without Webflow JS */
            .navbar3_menu .w-dropdown { position: relative; }
            .navbar3_menu .w-dropdown-list {
              position: absolute; left: 0; top: 100%;
              min-width: 14rem;
              background: #fff;
              box-shadow: 0 8px 24px rgba(0,0,0,.08);
              border: 1px solid rgba(0,0,0,.06);
              display: none;
              z-index: 1002;
            }
            .navbar3_menu .w-dropdown:hover > .w-dropdown-list,
            .navbar3_menu .w-dropdown:focus-within > .w-dropdown-list {
              display: block;
            }
            .navbar3_menu .w-dropdown-link {
              display: block; white-space: nowrap; padding: .6rem 1rem;
            }
          }
        `}</style>
      </div>

      {/* Top Nav Banner */}
      <div className="site-notification-banner">
        <div className="banner10_content-wrapper">

          <a href="/functional-words" className="banner10_content w-inline-block">
            <div className="banner10-text">
              Acupuncture in Gold Coast | <span className="text-span-16">Vantage Point Acupuncture</span>
              <span className="text-span-15"></span>
            </div>
          </a>

          {/* LOGO */}
          <Link
            data-w-id="806e85be-9c57-a40c-eb51-68a25033def0"
            href="/"
            className="banner10_close-button w-inline-block"
          >
            <Image
              src="https://cdn.prod.website-files.com/624380709031623bfe4aee60/6243807090316246b84aee82_icon_close-banner.svg"
              loading="lazy"
              alt=""
              className="invert"
              width={10}
              height={10}
            />
          </Link>
        </div>
      </div>

      {/* Nav Menus */}
      <div
        data-animation="over-left"
        className="navbar3_component w-nav"
        data-easing2="ease"
        fs-scrolldisable-element="smart-nav"
        data-easing="ease"
        data-collapse="medium"
        data-w-id="faa13c98-fd3f-2e52-c5d1-270e9e23b273"
        role="banner"
        data-duration="400"
      >
        <div className="container-large">
          <div className="navbar3_container">
            {/* Hamburger (mobile/tablet only) */}
            {/* <button
              type="button"
              className="navbar3_hamburger"
              aria-controls="primary-navigation"
              aria-expanded={mobileOpen ? "true" : "false"}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={toggleMobile}
            >
              {!mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button> */}

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

            {/* Nav Links */}
            <nav
              role="navigation"
              aria-label="Primary navigation"
              id="primary-navigation"
              className={`navbar3_menu w-nav-menu ${mobileOpen ? "is-open" : ""}`}
            >
              {/* Close button (mobile only) */}
              <button
                type="button"
                className="navbar3_close-drawer"
                onClick={closeMobile}
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="sr-only">Close</span>
              </button>

              <a href="/about" className="navbar3_link dark-on-mobile w-nav-link text-[#0B3D91]!">About Us</a>

              <div
                data-hover="false"
                data-delay="0"
                className="navbar3_link dark-on-mobile hide-mobile-portrait w-dropdown"
              >
                {/* Toggle the treatments dropdown (mobile/tablet via click, desktop via hover CSS) */}
                <div
                  className="dropdown-toggle navbar3_link w-dropdown-toggle text-[#0B3D91]!"
                  role="button"
                  tabIndex={0}
                  aria-haspopup="true"
                  aria-expanded={treatmentsOpen ? "true" : "false"}
                  aria-controls="treatments-menu"
                  onClick={toggleTreatments}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleTreatments();
                    }
                  }}
                >
                  <div className="icon w-icon-dropdown-toggle"></div>
                  <div className="text-block-3 navbar3_link text-[#0B3D91]!">Our Treatments</div>
                </div>

                <nav
                  id="treatments-menu"
                  className={`w-dropdown-list text-[#0B3D91] ${treatmentsOpen ? "is-open" : ""}`}
                >
                  <a href="/chinese-herbal" className="w-dropdown-link text-[#0B3D91]!">Chinese Herbal Medicine</a>
                  <a href="/constitutional-facial" className="w-dropdown-link">Constitutional Facial Acupuncture</a>
                  <a href="/acupuncture" className="w-dropdown-link">Acupuncture</a>
                  <a href="/women-health" className="w-dropdown-link">Women’s Health</a>
                  <a href="/Fertility" className="w-dropdown-link">Fertility & IVF Support</a>
                  <a href="/pain-management" className="w-dropdown-link">Musculoskeletal Pain Management</a>
                  <a href="/massage" className="w-dropdown-link">Massage & Cupping</a>
                  <a href="/sound-therapy" className="w-dropdown-link">Sound Therapy</a>
                </nav>
              </div>

              <Link href="/gallery" className="navbar3_link dark-on-mobile w-nav-link text-[#0B3D91]!">Gallery</Link>
              <a href="/faq" className="navbar3_link dark-on-mobile w-nav-link text-[#0B3D91]!">FAQ</a>
              <a href="/contact" className="navbar3_link dark-on-mobile w-nav-link text-[#0B3D91]!">Contact Us</a>
            </nav>

            {/* Logo */}
            <Link href="/" aria-current="page" className="navbar3_logo-link w-nav-brand w--current">
              <Image src="/assets/img/logoo.png" alt="" style={{ width: "280px", height: "auto" }} width={280} height={10} />
            </Link>

            {/* Book Online Button */}
            <a
              id="w-node-faa13c98-fd3f-2e52-c5d1-270e9e23b296-9e23b273"
              href="/courses"
              className="button is-navbar3-button w-button"
            >
              Book An Appointment
            </a>

            <div className="navbar3_menu-background">
              <Image
                src="https://cdn.prod.website-files.com/6508af1b0b60370d434c9417/6508af1b0b60370d434c946d_icon_plus.svg"
                loading="lazy"
                alt=""
                className="navbar3_close-image"
                width={10}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Click‑to‑close overlay (mobile/tablet) */}
      <div
        className={`mobile-nav-overlay ${mobileOpen ? "is-open" : ""}`}
        onClick={closeMobile}
        aria-hidden={mobileOpen ? "false" : "true"}
      />

      <div
        style={{
          transform:
            "translate3d(0, -8rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        }}
        className="nav-island-wrapper"
      ></div>
    </div>
  );
};

export default Nav;
