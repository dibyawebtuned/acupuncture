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
        <>
            {/* Header */}
            <header className="relative bg-cover bg-center h-[400px] sm:h-[500px] flex items-center justify-center text-center text-white" style={{ backgroundImage: `url(${headerBgImage})` }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 px-4 md:px-8 pt-10 flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Privacy Policy</h1>
                    <p className="text-lg italic">Last Updated: {lastUpdated}</p>
                </div>
            </header>

            {/* Main Content */}
            <div className="p-6 md:p-8 bg-[#f6f0e8] rounded-lg shadow-lg text-gray-800">
                <div className="container mx-auto">
                    <div className="policy-content space-y-10">

                        {/* Introduction */}
                        <section className="text-lg leading-relaxed">
                            <p className="font-ppNeueMontreal text-[#234041]">
                                This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use the Service and tells you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        {/* Dynamic Sections */}
                        {sections.map((section, index) => (
                            <section key={index} className="mb-8">
                                <div className={`text-2xl md:text-3xl text-[#0b3d91] pb-2 border-b border-gray-300 mb-4 mt-6 font-ppNeueMontreal`}>
                                    {section.title}
                                </div>

                                {section.description && (
                                    <p className="leading-relaxed mb-4 font-ppNeueMontreal">{section.description}</p>
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
                                        <p key={i} className="leading-relaxed mb-4 font-ppNeueMontreal">
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
                                            <span className="text-xl md:text-2xl font-medium text-[#0b3d91] mb-3 mt-5">
                                                {sub.subtitle}
                                            </span>

                                            {sub.content.map((item, ci) => (
                                                <div key={ci} className="mb-4">
                                                    <span className="text-lg md:text-xl font-medium text-[#0b3d91] mb-2 mt-4">
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
        </>
    );
};

export default PrivacyPolicyComponent;
