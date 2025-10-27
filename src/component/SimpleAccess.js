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
        <div className="bg-gray-100 relative">
            <section className="section_cta37 text-white relative min-h-[500px]">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/assets/img/clarity.jpg"
                        alt="TCM Treatment"
                        className="object-cover object-center"
                        fill
                        priority
                    />
                    {/* Optional overlay for readability */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="px-4 py-28 max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-semibold">
                            What to Expect With Us? A calm, step-by-step approach guided by your goals.
                        </h2>
                    </div>

                    {/* Steps */}
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="cta37_link-block p-4 bg-white bg-opacity-10 rounded-md"
                            >
                                <div className="cta37_number mb-2 text-2xl font-bold">{step.number}</div>
                                <h3 className="text-lg md:text-xl font-medium">{step.title}</h3>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="mt-12 text-center">
                        <a
                            href="/courses"
                            className="inline-flex items-center px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-teal-900 transition"
                        >
                            Find a Course
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
            </section>
        </div>
    );
};

export default SimpleAccess;
