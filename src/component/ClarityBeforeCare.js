// components/ClarityBeforeCare.js
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ClarityBeforeCare = () => {
    return (
        <header className="section_header84">
            <div className="padding-global-card-ext">
                <div className="padding-global">
                    <div className="padding-section-card">
                        <div className="w-layout-grid header84_component">
                            <div className="w-layout-grid header84_card">
                                {/* Card Content */}
                                <div className="header84_card-content">
                                    <div className="header84_card-content-top">
                                        <h2 className="heading-style-h4">Clarity Before Care</h2>
                                        <div className="button-group hide-mobile-portrait">
                                            <a
                                                href="/courses"
                                                className="button is-icon w-inline-block find-a-course"
                                            >
                                                <div>
                                                    <Link href="/book" className="text-white! no-underline!">Book an Appointment</Link>
                                                </div>
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

                                    <div>
                                        <p className="text-size-medium">
                                            We take a calm, step-by-step approach guided by what
                                            matters to you. Before we begin, we explain the
                                            process, answer questions, and make sure it’s
                                            appropriate for you. If helpful, we can coordinate
                                            with your GP or other providers.
                                        </p>
                                        <ul className="list-disc text-size-medium" role="list">
                                            <li>AHPRA-registered practitioner</li>
                                            <li>Single-use, sterile needles & clinic hygiene</li>
                                            <li>Time for questions, always</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Card Image */}
                                {/* <div className="header84_image-wrapper" style={{ position: "relative", width: "100%", height: "600px" }}>
                                    <Image
                                        src="/assets/img/clarity.jpg"
                                        alt="Clarity Before Care Visual"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div> */}

                                <div className="header84_image-wrapper relative w-full h-[300px] md:h-[600px] sm:h-[600px]">
                                    <Image src="/assets/img/clarity.jpg" alt="Clarity" fill className="object-cover" />
                                    {/* <div className="absolute inset-0 bg-black/40"></div>  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background overlay */}
            <div className="header84_card-background-color">
                <div className="header84_card-color"></div>
            </div>
        </header>
    );
};

export default ClarityBeforeCare;
