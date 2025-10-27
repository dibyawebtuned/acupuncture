"use client";

import React, { useEffect, useCallback } from "react";
import Script from "next/script";

const WEBFLOW_SRC =
    "https://cdn.prod.website-files.com/6508af1b0b60370d434c9417/js/webflow.da86215c7.js";

const DoYouKnow = () => {
    // init function to (re)initialize Webflow once the script + DOM are ready
    const initWebflow = useCallback(() => {
        if (typeof window === "undefined") return;
        const W = window /** as any **/;
        if (!W.Webflow) return;

        try {
            // If Webflow has an IX2 instance, try to re-init it safely.
            if (typeof W.Webflow.destroy === "function") {
                // destroy previous instances (helps on client navigation)
                W.Webflow.destroy();
            }
        } catch (e) {
            // ignore
        }

        try {
            // run Webflow ready handlers
            if (typeof W.Webflow.ready === "function") {
                W.Webflow.ready();
            }
        } catch (e) { }

        try {
            // re-initialize interactions (IX2)
            if (
                W.Webflow &&
                W.Webflow.require &&
                typeof W.Webflow.require === "function"
            ) {
                const ix2 = W.Webflow.require("ix2");
                if (ix2 && typeof ix2.init === "function") {
                    ix2.init();
                }
            }
        } catch (e) { }
    }, []);

    // call init once component mounts (in case script loaded earlier)
    useEffect(() => {
        // small delay ensures DOM imgs are present before init
        const t = setTimeout(() => initWebflow(), 100);
        return () => {
            clearTimeout(t);
            // optional cleanup on unmount:
            if (typeof window !== "undefined" && window.Webflow?.destroy) {
                try {
                    window.Webflow.destroy();
                } catch (e) { }
            }
        };
    }, [initWebflow]);

    return (
        <header className="section_header80 background-color-whitesmoke">
            {/* Load Webflow script and call init when loaded */}
            <Script
                src={WEBFLOW_SRC}
                strategy="afterInteractive"
                onLoad={() => {
                    // ensure interactions initialize once script is ready
                    setTimeout(() => {
                        initWebflow();
                    }, 50);
                }}
                onError={() => {
                    console.warn("Webflow script failed to load:", WEBFLOW_SRC);
                }}
            />

            <div>
                <div className="header80_component">
                    <div className="header80_content-wrapper">
                        {/* Left Image List (plain <img> for Webflow compatibility) */}
                        <div className="header80_images-wrapper">
                            <div className="header80_image-list">
                                <div className="header80_image-wrapper is-image-1">
                                    <img
                                        src="/assets/img/one.jpeg"
                                        loading="lazy"
                                        id="w-node-c1e95d59-826e-5b17-4b4a-0e5bccac426f-58294b32"
                                        sizes="(max-width: 767px) 30vw, (max-width: 991px) 28vw, 22vw"
                                        alt="Did you know 1"
                                        className="header80_image"
                                    />
                                </div>

                                <div className="header80_image-wrapper is-image-2">
                                    <img
                                        src="/assets/img/one.jpeg"
                                        loading="lazy"
                                        id="w-node-c1e95d59-826e-5b17-4b4a-0e5bccac4271-58294b32"
                                        sizes="(max-width: 767px) 30vw, (max-width: 991px) 28vw, 22vw"
                                        alt="Did you know 2"
                                        className="header80_image"
                                    />
                                </div>

                                <div className="header80_image-wrapper is-image-3">
                                    <img
                                        src="/assets/img/one.jpeg"
                                        loading="lazy"
                                        id="w-node-c1e95d59-826e-5b17-4b4a-0e5bccac4273-58294b32"
                                        sizes="(max-width: 767px) 28vw, (max-width: 991px) 26vw, 20vw"
                                        alt="Did you know 3"
                                        className="header80_image"
                                    />
                                </div>

                                <div className="header80_image-wrapper is-image-4">
                                    <img
                                        src="/assets/img/one.jpeg"
                                        loading="lazy"
                                        id="w-node-c1e95d59-826e-5b17-4b4a-0e5bccac4275-58294b32"
                                        sizes="(max-width: 767px) 26vw, (max-width: 991px) 24vw, 18vw"
                                        alt="Did you know 4"
                                        className="header80_image"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Image List */}
                        <div className="header80_images-wrapper images-wrapper-right">
                            <div className="header80_image-list image-list-right">
                                <div className="header80_image-wrapper is-image-5">
                                    <img
                                        src="/assets/img/one.jpeg"
                                        loading="lazy"
                                        id="w-node-c1e95d59-826e-5b17-4b4a-0e5bccac4279-58294b32"
                                        sizes="(max-width: 767px) 28vw, (max-width: 991px) 26vw, 20vw"
                                        alt="Did you know 5"
                                        className="header80_image"
                                    />
                                </div>

                                <div className="header80_image-wrapper is-image-6">
                                    <img
                                        src="/assets/img/one.jpeg"
                                        loading="lazy"
                                        id="w-node-c1e95d59-826e-5b17-4b4a-0e5bccac427b-58294b32"
                                        alt="Did you know 6"
                                        className="header80_image"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Left Image List Again */}
                        <div className="header80_images-wrapper images-wrapper-right">
                            <div className="header80_image-list image-list-left">
                                <div className="header80_image-wrapper is-image-7">
                                    <img
                                        src="/assets/img/one.jpeg"
                                        loading="lazy"
                                        id="w-node-c1e95d59-826e-5b17-4b4a-0e5bccac427f-58294b32"
                                        sizes="(max-width: 767px) 28vw, (max-width: 991px) 26vw, 20vw"
                                        alt="Did you know 7"
                                        className="header80_image"
                                    />
                                </div>

                                <div className="header80_image-wrapper is-image-8">
                                    <img
                                        src="/assets/img/one.jpeg"
                                        loading="lazy"
                                        id="w-node-c1e95d59-826e-5b17-4b4a-0e5bccac4281-58294b32"
                                        alt="Did you know 8"
                                        className="header80_image"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="header80_content">
                            <div className="text-align-center max-width-small align-center">
                                <div className="section_gallery6-content">
                                    <p className="heading-style-h3">Did You Know?</p>
                                    <h2 className="heading-style-h5">
                                        Cupping marks are temporary and usually fade over several days.
                                    </h2>
                                    <a
                                        href="/courses"
                                        className="button is-tertiary is-icon w-inline-block make-an-appointment"
                                    >
                                        <div>Make an Appointment</div>
                                        <div className="icon-embed-xsmall w-embed">
                                            <svg
                                                width="14"
                                                height="5"
                                                viewBox="0 0 14 5"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10.192 4.49004C10.372 4.10604 10.546 3.77004 10.714 3.48204C10.894 3.19404 11.068 2.95404 11.236 2.76204H0.742001V2.00604H11.236C11.068 1.80204 10.894 1.55604 10.714 1.26804C10.546 0.980039 10.372 0.650039 10.192 0.278039H10.822C11.578 1.15404 12.37 1.80204 13.198 2.22204V2.54604C12.37 2.95404 11.578 3.60204 10.822 4.49004H10.192Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Webflow trigger element (keep data-w-id if Webflow interactions reference it) */}
                        <div
                            data-w-id="c1e95d59-826e-5b17-4b4a-0e5bccac428f"
                            className="header80_ix-trigger"
                        ></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DoYouKnow;
