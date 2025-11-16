"use client";

import React from "react";

const PrivacyPolicyComponent = () => {
    const lastUpdated = "October 26, 2025";
    const headerBgImage = "/assets/img/five.jpeg";

    // --- Dynamic Content Structure ---
    const sections = [
        {
            title: "1. Information Collection and Use",
            description:
                "We collect several different types of information for various purposes to provide and improve Our Service to You.",
            subSections: [
                {
                    subtitle: "Types of Data Collected",
                    content: [
                        {
                            subtitle: "Personal Data",
                            text: `While using Our Service, we may ask you to provide certain personally identifiable information that can be used to contact or identify you.`,
                            list: [
                                "Email address",
                                "First name and last name",
                                "Usage Data (e.g., pages visited, time spent)",
                            ],
                        },
                        {
                            subtitle: "Usage Data",
                            text: `Usage Data is collected automatically when using the Service. This may include information such as your device’s IP address, browser type, version, pages visited, and time spent.`,
                        },
                    ],
                },
            ],
        },
        {
            title: "2. Use of Your Personal Data",
            description: "The Company may use Personal Data for the following purposes:",
            list: [
                {
                    label: "To provide and maintain our Service:",
                    detail: "including to monitor the usage of our Service.",
                },
                {
                    label: "To manage Your Account:",
                    detail: "to manage Your registration as a user of the Service.",
                },
                {
                    label: "For marketing purposes:",
                    detail:
                        "to provide You with news, special offers and general information about our services.",
                },
                {
                    label: "To manage Your requests:",
                    detail: "to attend and manage Your requests to us.",
                },
            ],
        },
        {
            title: "3. Tracking Technologies and Cookies",
            paragraphs: [
                `We use Cookies and similar tracking technologies to track activity and store certain information. Tracking technologies include beacons, tags, and scripts to collect and analyze data.`,
                `You can instruct your browser to refuse all Cookies or indicate when a Cookie is sent. However, if you do not accept Cookies, you may not be able to use some parts of our Service.`,
            ],
        },
        {
            title: "4. Contact Us",
            paragraphs: [
                `If you have any questions about this Privacy Policy, You can contact us:`,
            ],
            links: [
                { label: "privacy@example.com", href: "mailto:privacy@example.com" },
                { label: "/contact", href: "/contact" },
            ],
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
                        Simple & transparent
                    </div>

                    {/* Heading (AOS) */}
                    <div
                        className="font-ppNeueMontreal text-[40px] sm:text-[40px] md:text-[64px] lg:text-[80px] text-[#2B2B2B] leading-[1.15] sm:leading-[1.1] md:leading-[1.2] tracking-normal"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Privacy Policy
                    </div>
                </div>

                {/* Main Content */}
                <div className="">
                    <div className="policy-content space-y-10">

                        {/* Introduction */}
                        <section className="text-lg leading-relaxed">
                            <p className="text-gray-600 font-ppNeueMontreal text-[16px]">
                                This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use the Service and tells you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        {/* Dynamic Sections */}
                        {sections.map((section, index) => (
                            <section key={index} className="mb-8">
                                <div className={`text-2xl md:text-3xl text-gray-700 pb-2 border-b border-gray-300 mb-4 mt-6 font-ppneuemontreal font-medium`}>
                                    {section.title}
                                </div>

                                {section.description && (
                                    <p className="leading-relaxed mb-4 font-ppNeueMontreal text-gray-700">{section.description}</p>
                                )}

                                {/* List Items */}
                                {section.list && (
                                    <ul className="list-disc ml-6 space-y-2 mb-4 font-ppNeueMontreal">
                                        {section.list.map((item, i) => (
                                            <li key={i} className="leading-relaxed">
                                                <strong>{item.label}</strong> {item.detail}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Paragraphs */}
                                {section.paragraphs &&
                                    section.paragraphs.map((para, i) => (
                                        <p key={i} className="leading-relaxed mb-4 font-ppNeueMontreal text-gray-600">
                                            {para}
                                        </p>
                                    ))}

                                {/* Links */}
                                {section.links && (
                                    <ul className="list-disc ml-6 space-y-2">
                                        {section.links.map((link, i) => (
                                            <li key={i}>
                                                <a
                                                    href={link.href}
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Subsections */}
                                {section.subSections &&
                                    section.subSections.map((sub, si) => (
                                        <div key={si}>
                                            <span className="text-xl md:text-2xl font-medium text-gray-700 mb-3 mt-5 font-testSignifier">
                                                {sub.subtitle}
                                            </span>

                                            {sub.content.map((item, ci) => (
                                                <div key={ci} className="mb-4 px-9">
                                                    <span className="text-lg md:text-xl font-medium text-gray-700 mb-2 mt-4 font-testSignifier">
                                                        {item.subtitle}
                                                    </span>
                                                    <p className="leading-relaxed mb-2 font-ppNeueMontreal">{item.text}</p>
                                                    {item.list && (
                                                        <ul className="list-disc ml-6 space-y-1">
                                                            {item.list.map((li, liIndex) => (
                                                                <li key={liIndex} className="leading-relaxed font-ppNeueMontreal">
                                                                    {li}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyComponent;
