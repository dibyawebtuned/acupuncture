"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
    return (
        <div className="nav-wrapper">
            <div className="global-styles w-embed">
                <style>{`
          html {
            font-size: 1.125rem;
          }

          @media screen and (max-width: 1920px) {
            html {
              font-size: calc(0.625rem + 0.41666666666666674vw);
            }
          }

          @media screen and (max-width: 1440px) {
            html {
              font-size: calc(0.8126951092611863rem + 0.20811654526534862vw);
            }
          }

          @media screen and (max-width: 479px) {
            html {
              font-size: calc(0.7494769874476988rem + 0.8368200836820083vw);
            }
          }

          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -o-font-smoothing: antialiased;
          }

          *[tabindex]:focus-visible,
          input[type="file"]:focus-visible {
            outline: 0.125rem solid #4d65ff;
            outline-offset: 0.125rem;
          }

          .w-richtext > :not(div):first-child,
          .w-richtext > div:first-child > :first-child {
            margin-top: 0 !important;
          }

          .w-richtext > :last-child,
          .w-richtext ol li:last-child,
          .w-richtext ul li:last-child {
            margin-bottom: 0 !important;
          }

          .pointer-events-off {
            pointer-events: none;
          }

          .pointer-events-on {
            pointer-events: auto;
          }

          .div-square::after {
            content: "";
            display: block;
            padding-bottom: 100%;
          }

          .container-medium,
          .container-small,
          .container-large {
            margin-right: auto !important;
            margin-left: auto !important;
          }

          .text-style-5lines {
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
          }
          .text-style-4lines {
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
          }
          .text-style-3lines {
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          .text-style-2lines {
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .display-inlineflex {
            display: inline-flex;
          }

          .hide {
            display: none !important;
          }

          @media screen and (max-width: 991px) {
            .hide,
            .hide-tablet {
              display: none !important;
            }
          }

          @media screen and (max-width: 767px) {
            .hide-mobile-landscape {
              display: none !important;
            }
          }

          @media screen and (max-width: 479px) {
            .hide-mobile {
              display: none !important;
            }
          }

          .margin-0 { margin: 0rem !important; }
          .padding-0 { padding: 0rem !important; }
          .spacing-clean { padding: 0rem !important; margin: 0rem !important; }
          .truncate-width { width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .no-scrollbar { -ms-overflow-style: none; overflow: -moz-scrollbars-none; }
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .text-balance { text-wrap: balance; }
          em { font-family: Test Signifier; font-weight: 300; }
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
                    <a
                        data-w-id="806e85be-9c57-a40c-eb51-68a25033def0"
                        href="#"
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
                    </a>
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
                        {/* Nav Links */}
                        <nav role="navigation" className="navbar3_menu w-nav-menu">
                            <a href="/about-us" className="navbar3_link dark-on-mobile w-nav-link">About Us</a>

                            <div
                                data-hover="false"
                                data-delay="0"
                                className="navbar3_link dark-on-mobile hide-mobile-portrait w-dropdown"
                            >
                                <div className="dropdown-toggle navbar3_link w-dropdown-toggle">
                                    <div className="icon w-icon-dropdown-toggle"></div>
                                    <div className="text-block-3 navbar3_link">Our Treatments</div>
                                </div>
                                <nav className="w-dropdown-list">
                                    <a href="/talk-on-track" className="w-dropdown-link">Chinese Herbal Medicine</a>
                                    <a href="/time-to-talk" className="w-dropdown-link">Constitutional Facial Acupuncture</a>
                                    <a href="/tiny-articulators" className="w-dropdown-link">Acupuncture</a>
                                    <a href="/tiny-articulators" className="w-dropdown-link">Women’s Health</a>
                                    <a href="/tiny-articulators" className="w-dropdown-link">Fertility & IVF Support</a>
                                    <a href="/tiny-articulators" className="w-dropdown-link">Musculoskeletal Pain Management</a>
                                    <a href="/tiny-articulators" className="w-dropdown-link">Massage & Cupping</a>
                                    <a href="/tiny-articulators" className="w-dropdown-link">Sound Therapy</a>
                                </nav>
                            </div>

                            <Link href="/gallery" className="navbar3_link dark-on-mobile w-nav-link">Gallery</Link>
                            <a href="/therapy" className="navbar3_link dark-on-mobile w-nav-link">FAQ</a>
                            <a href="/therapy" className="navbar3_link dark-on-mobile w-nav-link">Contact Us</a>
                        </nav>

                        {/* Logo */}
                        <Link href="/" aria-current="page" className="navbar3_logo-link w-nav-brand w--current">
                            <Image src="/assets/img/logoo.png" alt="" style={{ width: "280px", height: "auto" }} width={280} height={10} />
                        </Link>

                        {/* Book Online Button */}
                        <a id="w-node-faa13c98-fd3f-2e52-c5d1-270e9e23b296-9e23b273" href="/courses" className="button is-navbar3-button w-button">
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
