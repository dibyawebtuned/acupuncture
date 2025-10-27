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
                    <p className="leading-relaxed text-lg">
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
                    <p className="leading-relaxed mb-4">
                        You agree to use the Service only for lawful purposes and in a way
                        that does not infringe upon the rights of, restrict, or inhibit
                        anyone else use of the Service.
                    </p>
                    <ul className="list-disc ml-6 space-y-2 text-lg">
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
                <p className="leading-relaxed text-lg">
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
                <p className="leading-relaxed text-lg">
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
                <p className="leading-relaxed text-lg">
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
                    <p className="leading-relaxed mb-4 text-lg">
                        If you have any questions about these Terms and Conditions, please
                        contact us:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 text-lg">
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
        <>
            {/* Header Section */}
            <header
                className="relative bg-cover bg-center h-[400px] sm:h-[500px] flex items-center justify-center text-center text-white"
                style={{ backgroundImage: `url(${headerBgImage})` }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 px-4 md:px-8 flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
                        Terms & Conditions
                    </h1>
                    <p className="text-lg italic">Last Updated: {lastUpdated}</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="p-6 md:p-10 bg-[#f6f0e8] rounded-lg shadow-lg text-gray-800 font-ppNeueMontreal">
                <div className="container mx-auto">
                    {sections.map((section) => (
                        <section key={section.id} className="mb-10">
                            <div className="text-2xl md:text-3xl text-[#0b3d91] border-b border-gray-300 pb-2 mb-4 mt-6 font-ppNeueMontreal">
                                {section.title}
                            </div>
                            <div className="font-ppNeueMontreal">{section.content}</div>
                        </section>
                    ))}
                </div>
            </main>
        </>
    );
};

export default TermsConditionsComponent;
