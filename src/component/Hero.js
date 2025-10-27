// components/Hero.js
"use client";

import React from "react";

const Hero = () => {
    return (
        <header className="section_header5">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="header5_content text-color-white">
                            <div>
                                <div className="max-width-large">
                                    <div className="margin-bottom">
                                        <h1 className="heading-style-h2 text-balance">
                                            Acupuncture & Chinese Medicine in <em>Gold Coast.</em> Book an appointment today
                                        </h1>
                                        <h2 className="text-size-mostly-regular">
                                            Evidence-informed, patient-centred care for your wellbeing
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="div-block-2">
                                <div className="margin-top margin-medium">
                                    <div className="button-group">
                                        {/* Meet Marney Button */}
                                        <a href="/about-us" className="button is-link is-icon w-inline-block">
                                            <div className="text-color-white text-style-lowercase">
                                                Meet Marney
                                            </div>
                                            {/* Arrow */}
                                            <div
                                                className="button is-small is-icon-only"
                                                style={{ backgroundColor: "#0b3d91", color: "white" }}
                                            >
                                                <div className="icon-embed-xsmall w-embed">
                                                    <svg
                                                        width="22"
                                                        height="22"
                                                        viewBox="0 0 22 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M4.51088 17.8182L16.7813 5.54786M16.7813 5.54786L9.7102 5.54786M16.7813 5.54786L16.7813 12.6189"
                                                            stroke="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>

                                        {/* Phone Button */}
                                        <a
                                            href="/courses"
                                            className="button is-tertiary is-icon is-small w-inline-block"
                                            style={{ backgroundColor: "#0b3d91", color: "white" }}
                                        >
                                            <div>0417 794 279</div>
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
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Video */}
            <div className="header5_background-image-wrapper">
                <div className="header5_video-overlay-layer"></div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="header5_background-video"
                >
                    <source src="/assets/video/banner video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </header>
    );
};

export default Hero;
