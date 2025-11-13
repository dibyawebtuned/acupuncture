"use client";

import React, { useEffect, useCallback, useState } from "react";
import Script from "next/script";
import Link from "next/link";

const WEBFLOW_SRC =
    "https://cdn.prod.website-files.com/6508af1b0b60370d434c9417/js/webflow.da86215c7.js";

const DoYouKnow = () => {
    // Initialize Webflow interactions
    const initWebflow = useCallback(() => {
        if (typeof window === "undefined") return;
        const W = window;
        if (!W.Webflow) return;

        try {
            if (typeof W.Webflow.destroy === "function") W.Webflow.destroy();
        } catch { }

        try {
            if (typeof W.Webflow.ready === "function") W.Webflow.ready();
        } catch { }

        try {
            if (W.Webflow?.require) {
                const ix2 = W.Webflow.require("ix2");
                ix2?.init?.();
            }
        } catch { }
    }, []);

    useEffect(() => {
        const t = setTimeout(() => initWebflow(), 100);
        return () => {
            clearTimeout(t);
            if (window.Webflow?.destroy) {
                try {
                    window.Webflow.destroy();
                } catch { }
            }
        };
    }, [initWebflow]);

    // Parallax scroll effect with initial upper offset
    useEffect(() => {
        const elements = document.querySelectorAll(".header80_image-wrapper");
        const initialOffset = 30; // px, adjust how high images start

        // Apply initial offset when component mounts
        elements.forEach((el) => {
            el.style.transform = `translateY(-${initialOffset}px)`;
        });

        const handleScroll = () => {
            const scrollY = window.scrollY;
            elements.forEach((el, index) => {
                const movement = -(scrollY * (index + 1)) * 0.03;
                el.style.transform = `translateY(${-initialOffset + movement}px)`;
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (

        <header className="section_header80 background-color-whitesmoke">
            <Script
                src={WEBFLOW_SRC}
                strategy="afterInteractive"
                onLoad={() => setTimeout(initWebflow, 50)}
            />

            <div className="header80_component">
                <div className="header80_content-wrapper">

                    {/* LEFT IMAGE LIST */}
                    <div className="header80_images-wrapper">
                        <div className="header80_image-list">
                            <div className="header80_image-wrapper is-image-1">
                                <img src="/assets/img/one.jpeg" alt="Did you know 1" className="header80_image" />
                            </div>
                            <div className="header80_image-wrapper is-image-2">
                                <img src="/assets/img/one.jpeg" alt="Did you know 2" className="header80_image" />
                            </div>
                            <div className="header80_image-wrapper is-image-3">
                                <img src="/assets/img/one.jpeg" alt="Did you know 3" className="header80_image" />
                            </div>
                            <div className="header80_image-wrapper is-image-4">
                                <img src="/assets/img/one.jpeg" alt="Did you know 4" className="header80_image" />
                            </div>
                            {/* NEW LEFT IMAGE */}
                            <div className="header80_image-wrapper is-image-9">
                                <img src="/assets/img/left-new.jpeg" alt="Did you know 9" className="header80_image" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE LIST */}
                    <div className="header80_images-wrapper images-wrapper-right">
                        <div className="header80_image-list image-list-right">
                            <div className="header80_image-wrapper is-image-5">
                                <img src="/assets/img/one.jpeg" alt="Did you know 5" className="header80_image" />
                            </div>
                            <div className="header80_image-wrapper is-image-6">
                                <img src="/assets/img/one.jpeg" alt="Did you know 6" className="header80_image" />
                            </div>
                            {/* NEW RIGHT IMAGE */}
                            <div className="header80_image-wrapper is-image-10">
                                <img src="/assets/img/right-new.jpeg" alt="Did you know 10" className="header80_image" />
                            </div>
                        </div>
                    </div>

                    {/* LEFT IMAGE LIST AGAIN */}
                    <div className="header80_images-wrapper images-wrapper-right">
                        <div className="header80_image-list image-list-left">
                            <div className="header80_image-wrapper is-image-7">
                                <img src="/assets/img/one.jpeg" alt="Did you know 7" className="header80_image" />
                            </div>
                            <div className="header80_image-wrapper is-image-8">
                                <img src="/assets/img/one.jpeg" alt="Did you know 8" className="header80_image" />
                            </div>
                        </div>
                    </div>

                    {/* CONTENT SECTION */}
                    <div className="header80_content">
                        <div className="text-align-center max-width-small align-center">
                            <p className="heading-style-h3">Did You Know?</p>
                            <h2 className="heading-style-h5">
                                Cupping marks are temporary and usually fade over several days.
                            </h2>
                            <Link
                                href="/book"
                                className="button is-tertiary is-icon w-inline-block make-an-appointment">
                                <div>Make an Appointment</div>
                            </Link>
                        </div>
                    </div>

                    {/* Webflow trigger */}
                    <div data-w-id="trigger" className="header80_ix-trigger"></div>

                </div>
            </div>
        </header>
    );
};

export default DoYouKnow;
