"use client";

import React, { useEffect } from "react";
import Script from "next/script";

const WEBFLOW_JS =
    "https://cdn.prod.website-files.com/6508af1b0b60370d434c9417/js/webflow.da86215c7.js";

export default function DoYouKnow() {
    useEffect(() => {
        const elements = document.querySelectorAll(".header80_image-wrapper");
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    elements.forEach((el, i) => {
                        const speed = 0.05 + i * 0.02;
                        el.style.transform = `translateY(${-scrollY * speed}px)`;
                    });
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const imageGroups = [
        [
            "/assets/img/trauma-informed-therapist,-somatic-trauma-coaching-and-speaker-abi-blake-9.webp",
            "/assets/img/469245827_17879239419197064_4235272167280555836_n.jpg",
            "/assets/img/Traditional-Chinese-Medicine-is-diagnosing-women's-pulse-.webp",
            "/assets/img/TCM article visual_.renditionimage.1700.850.jpg",
        ],
        [
            "/assets/img/moxibustion-cones-moxa-treatment-points-top-needles.webp",
            "/assets/img/ImageForNews_765936_1701383544529230.webp",
        ],
        [
            "/assets/img/facial+acu+copy+3.webp",
            "/assets/img/clarity.jpg",
        ],
    ];

    return (
        <header
            className="section_header80 background-color-whitesmoke"
            style={{
                margin: 0,
                padding: "4rem 0", // reduce top/bottom spacing
                overflow: "hidden",
            }}
        >
            <Script src={WEBFLOW_JS} strategy="afterInteractive" />

            <div
                className="header80_component"
                style={{
                    marginBottom: 0,
                    paddingBottom: 0,
                }}
            >
                <div
                    className="header80_content-wrapper"
                    style={{ marginBottom: 0, paddingBottom: 0 }}
                >
                    {/* LEFT COLUMN */}
                    <div className="header80_images-wrapper">
                        <div className="header80_image-list">
                            {imageGroups[0].map((src, i) => (
                                <div
                                    key={i}
                                    className={`header80_image-wrapper is-image-${i + 1}`}
                                >
                                    <img
                                        src={src}
                                        alt={`Acupuncture visual ${i + 1}`}
                                        className="header80_image"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN 1 */}
                    <div className="header80_images-wrapper images-wrapper-right">
                        <div className="header80_image-list image-list-right">
                            {imageGroups[1].map((src, i) => (
                                <div
                                    key={i + 5}
                                    className={`header80_image-wrapper is-image-${i + 5}`}
                                >
                                    <img
                                        src={src}
                                        alt={`Treatment image ${i + 5}`}
                                        className="header80_image"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN 2 */}
                    <div className="header80_images-wrapper images-wrapper-right">
                        <div className="header80_image-list image-list-left">
                            {imageGroups[2].map((src, i) => (
                                <div
                                    key={i + 7}
                                    className={`header80_image-wrapper is-image-${i + 7}`}
                                >
                                    <img
                                        src={src}
                                        alt={`Cupping photo ${i + 7}`}
                                        className="header80_image"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TEXT CONTENT */}
                    <div
                        className="header80_content"
                        style={{
                            marginBottom: 0,
                            paddingBottom: 0,
                        }}
                    >
                        <div className="text-align-center max-width-small align-center">
                            <div className="section_gallery6-content">
                                <p className="heading-style-h3">Did You Know?</p>
                                <h2 className="heading-style-h5">
                                    Cupping marks are temporary and usually fade over several
                                    days.
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
                                                d="M10.192 4.49C10.372 4.106 10.546 3.77 10.714 3.482C10.894 3.194 11.068 2.954 11.236 2.762H0.742V2.006H11.236C11.068 1.802 10.894 1.556 10.714 1.268C10.546 0.98 10.372 0.65 10.192 0.278H10.822C11.578 1.154 12.37 1.802 13.198 2.222V2.546C12.37 2.954 11.578 3.602 10.822 4.49H10.192Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* IX Trigger for Webflow */}
                    <div
                        data-w-id="c1e95d59-826e-5b17-4b4a-0e5bccac428f"
                        className="header80_ix-trigger"
                        style={{ display: "none" }}
                    ></div>
                </div>
            </div>
        </header>
    );
}
