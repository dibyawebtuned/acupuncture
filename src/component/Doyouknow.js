"use client";

import React, { useEffect } from "react";
import Script from "next/script";

const WEBFLOW_JS =
    "https://cdn.prod.website-files.com/6508af1b0b60370d434c9417/js/webflow.da86215c7.js";

export default function DoYouKnowSection() {
    useEffect(() => {
        const elements = document.querySelectorAll(".header80_image-wrapper");

        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    elements.forEach((el, index) => {
                        const speed = 0.05 + index * 0.02;
                        el.style.transform = `translateY(${-scrollY * speed}px)`;
                    });
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className="section_header80 background-color-whitesmoke"
            style={{
                position: "relative",
                height: "100vh", // ✅ Prevent section from exceeding screen height
                overflow: "hidden", // ✅ Prevent scroll spill from moving content
            }}
        >
            <Script src={WEBFLOW_JS} strategy="afterInteractive" />

            <div className="header80_component" style={{ height: "100%", position: "relative" }}>
                <div className="header80_content-wrapper" style={{ height: "100%" }}>

                    {/* LEFT STACK */}
                    <div className="header80_images-wrapper" style={{ position: "absolute", left: 0, top: 0, height: "100%" }}>
                        <div className="header80_image-list">
                            <div className="header80_image-wrapper is-image-1">
                                <img src="/assets/img/469209709_17879239428197064_3445656581431711502_n.jpg" className="header80_image" alt="" />
                            </div>
                            <div className="header80_image-wrapper is-image-2">
                                <img src="/assets/img/469245827_17879239419197064_4235272167280555836_n.jpg" className="header80_image" alt="" />
                            </div>
                            <div className="header80_image-wrapper is-image-3">
                                <img src="/assets/img/7515-1-Tuning-Forks.jpg" className="header80_image" alt="" />
                            </div>
                            <div className="header80_image-wrapper is-image-4">
                                <img src="/assets/img/clarity.jpg" className="header80_image" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT STACK 1 */}
                    <div className="header80_images-wrapper images-wrapper-right" style={{ position: "absolute", right: 0, top: 0, height: "100%" }}>
                        <div className="header80_image-list image-list-right">
                            <div className="header80_image-wrapper is-image-5">
                                <img src="/assets/img/facial+acu+copy+3.webp" className="header80_image" alt="" />
                            </div>
                            <div className="header80_image-wrapper is-image-6">
                                <img src="/assets/img/GettyImages-146788068 (1).jpg" className="header80_image" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT STACK 2 */}
                    <div className="header80_images-wrapper images-wrapper-right" style={{ position: "absolute", right: "10%", top: 0, height: "100%" }}>
                        <div className="header80_image-list image-list-left">
                            <div className="header80_image-wrapper is-image-7">
                                <img src="/assets/img/trauma-informed-therapist,-somatic-trauma-coaching-and-speaker-abi-blake-9.webp" className="header80_image" alt="" />
                            </div>
                            <div className="header80_image-wrapper is-image-8">
                                <img src="/assets/img/Traditional-Chinese-Medicine-is-diagnosing-women's-pulse-.webp" className="header80_image" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* CONTENT SECTION */}
                    <div
                        className="header80_content"
                        style={{
                            position: "relative",
                            zIndex: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                        }}
                    >
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
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Webflow IX Trigger */}
                    <div
                        data-w-id="c1e95d59-826e-5b17-4b4a-0e5bccac428f"
                        className="header80_ix-trigger"
                    ></div>
                </div>
            </div>
        </header>
    );
}
