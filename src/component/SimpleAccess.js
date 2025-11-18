"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const steps = [
    { number: 1, title: "Listen – Your story, health history, and preferences." },
    { number: 2, title: "Explain – Options, consent, and what a session involves." },
    { number: 3, title: "Agree & Proceed – A plan you can pause or change anytime." },
];

const SimpleAccess = () => {
    return (
        <section className="relative text-white rounded-2xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/assets/img/two.jpg"
                    alt="TCM Treatment"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 py-16 sm:py-20 md:py-28 max-w-[1440px] mx-auto px-4 sm:px-6">
                <div className="w-full sm:w-[90%] md:w-[80%]">

                    {/* Header */}
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-10 sm:mb-12 leading-snug sm:leading-normal">
                        What to Expect With Us? A calm, step-by-step approach guided by your goals.
                    </h2>

                    {/* Steps */}
                    <div className="space-y-5 sm:space-y-6 mt-6 sm:mt-10">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="flex items-start sm:items-center gap-3 sm:gap-4 rounded-md"
                            >
                                {/* Number Circle */}
                                <div className="shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-[#0B3D91] flex items-center justify-center text-white text-xs sm:text-sm md:text-base">
                                    {step.number}
                                </div>

                                {/* Text */}
                                <span className="text-lg sm:text-xl md:text-[28px] font-normal leading-snug text-left">
                                    {step.title}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="mt-10 sm:mt-12">
                        <Link
                            href="/book"
                            className="inline-flex items-center px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 no-underline! border border-white rounded-full hover:bg-white text-white transition"
                        >
                            <span className="text-base sm:text-lg md:text-[20px] text-white underline-none!">Book an Appointment</span>
                            <span className="ml-2 text-white">
                                <svg
                                    width="18"
                                    height="8"
                                    viewBox="0 0 14 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.192 4.49004C10.372 4.10604 10.546 3.77004 10.714 3.48204C10.894 3.19404 11.068 2.95404 11.236 2.76204H0.742001V2.00604H11.236C11.068 1.80204 10.894 1.55604 10.714 1.26804C10.546 0.980039 10.372 0.650039 10.192 0.278039H10.822C11.578 1.15404 12.37 1.80204 13.198 2.22204V2.54604C12.37 2.95404 11.578 3.60204 10.822 4.49004H10.192Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SimpleAccess;
