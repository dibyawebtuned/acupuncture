"use client";

import React from "react";

const TermsConditionsComponent = () => {
    const lastUpdated = "October 26, 2025";
    const headerBgImage = "/assets/img/five.jpeg";

    const sections = [
        {
            id: 1,
            title: "1. Introduction",
            content: (
                <>
                    <p className="leading-relaxed text-[16px]">
                        Welcome to our website. By accessing or using our Service, you agree
                        to be bound by these Terms and Conditions. Please read them
                        carefully before using the Service.
                    </p>
                </>
            ),
        },

        {
            id: 2,
            title: "2. Use of Service",
            content: (
                <>
                    <p className="leading-relaxed mb-4 text-[16px]">
                        You agree to use the Service only for lawful purposes and in a way
                        that does not infringe upon the rights of, restrict, or inhibit
                        anyone else use of the Service.
                    </p>
                    <ul className="list-disc ml-6 space-y-2 text-[16px]">
                        <li>Do not attempt to gain unauthorized access to our systems.</li>
                        <li>
                            Do not engage in activities that may damage or disrupt the Service.
                        </li>
                        <li>
                            Do not upload or share harmful or malicious content (e.g., viruses,
                            spam).
                        </li>
                    </ul>
                </>
            ),
        },

        {
            id: 3,
            title: "3. Intellectual Property",
            content: (
                <p className="leading-relaxed text-[16px]">
                    All content, trademarks, logos, and materials provided on the Service
                    are the property of the Company or its licensors. You may not reuse,
                    reproduce, or distribute this content without permission.
                </p>
            ),
        },

        {
            id: 4,
            title: "4. Limitation of Liability",
            content: (
                <p className="leading-relaxed text-[16px]">
                    We are not liable for any damages resulting from your use or inability
                    to use the Service. The Service is provided on an “as is” and “as
                    available” basis without any warranties of any kind.
                </p>
            ),
        },

        {
            id: 5,
            title: "5. Governing Law",
            content: (
                <p className="leading-relaxed text-[16px]">
                    These Terms shall be governed by and construed in accordance with the
                    laws of your jurisdiction. Any disputes arising under these Terms will
                    be subject to the exclusive jurisdiction of the courts located in your
                    region.
                </p>
            ),
        },

        {
            id: 6,
            title: "6. Contact Us",
            content: (
                <>
                    <p className="leading-relaxed mb-4 text-[16px]">
                        If you have any questions about these Terms and Conditions, please
                        contact us:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>
                            By email:{" "}
                            <a
                                href="mailto:legal@example.com"
                                className="text-blue-600 hover:underline"
                            >
                                legal@example.com
                            </a>
                        </li>
                        <li>
                            By visiting this page:{" "}
                            <a href="/contact" className="text-blue-600 hover:underline">
                                /contact
                            </a>
                        </li>
                    </ul>
                </>
            ),
        },
    ];

    return (
        <div className="pt-[130px] bg-[#EAF0F0]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-15 flex flex-col">
                {/* Heading */}
                <div data-scroll-section className="flex flex-col gap-3 text-left mb-10 md:mb-6">
                    {/* Section Label (AOS) */}
                    <div
                        className="text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Terms & Conditions
                    </div>

                    {/* Heading (AOS) */}
                    <div
                        className="font-ppNeueMontreal text-[40px] sm:text-[40px] md:text-[64px] lg:text-[80px] text-[#2B2B2B] leading-[1.15] sm:leading-[1.1] md:leading-[1.2] tracking-normal"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Terms & Conditions
                    </div>
                </div>

                {/* Main Content */}
                <main className="text-gray-800 font-ppNeueMontreal">
                    {sections.map((section) => (
                        <section key={section.id} className="mb-10">
                            <div className="text-2xl md:text-3xl text-gray-700 border-b border-gray-300 pb-2 mb-4 mt-6 font-testSignifier font-medium">
                                {section.title}
                            </div>
                            <div className="font-ppNeueMontreal text-gray-600 ">{section.content}</div>
                        </section>
                    ))}
                </main>
            </div>
        </div>
    );
};

export default TermsConditionsComponent;
