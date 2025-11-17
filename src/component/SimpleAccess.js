"use client";

import React from "react";
import Image from "next/image";

const steps = [
    { number: 1, title: "Listen – Your story, health history, and preferences." },
    { number: 2, title: "Explain – Options, consent, and what a session involves." },
    { number: 3, title: "Agree & Proceed – A plan you can pause or change anytime." },
];

const SimpleAccess = () => {
    return (
        <section className="relative text-white">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/assets/img/two.jpg"
                    alt="TCM Treatment"
                    fill
                    priority
                    className="object-cover object-center rounded-none!"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 py-24 md:py-28 max-w-[1440px] mx-auto px-4 sm:px-6">
                <div className="w-[80%]">
                    {/* Header */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12 leading-20!">
                        What to Expect With Us? A calm, step-by-step approach guided by your goals.
                    </h2>

                    {/* Steps - Styled like screenshot */}
                    <div className="space-y-6 mt-10">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="flex items-center gap-4 rounded-md"
                            >
                                {/* Blue Circle Number */}
                                <div className="shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#0B3D91] flex items-center justify-center text-white text-sm md:text-base font-normal">
                                    {step.number}
                                </div>

                                {/* Text */}
                                <span className="text-[28px] font-normal leading-snug text-left">
                                    {step.title}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="mt-12">
                        <a
                            href="/courses"
                            className="inline-flex items-center px-6 py-3 border border-white rounded-full hover:bg-white text-white transition"
                        >
                            <span className="text-white">Find a Course</span>
                            <span className="ml-2">
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
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SimpleAccess;
