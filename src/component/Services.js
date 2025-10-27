// components/Services.js
"use client";

import React from "react";
import { FaLeaf, FaSpa, FaGem, FaCircleNotch } from "react-icons/fa";

const servicesData = [
    {
        icon: <FaLeaf size={32} />,
        title: "Acupuncture",
        description: "A gentle approach that uses fine, single-use sterile needles.",
        features: ["Fine, sterile needles", "Comfort-first approach"],
        link: "/signature-facials",
    },
    {
        icon: <FaSpa size={32} />,
        title: "Chinese Herbal Medicine",
        description:
            "Individually selected herbal formulations may be used to support general health.",
        features: ["Individually selected herbs", "Safety-checked with meds"],
        link: "/body-scrubs",
    },
    {
        icon: <FaGem size={32} />,
        title: "Facial Acupuncture",
        description:
            "A whole-person approach that includes facial points alongside body points.",
        features: ["Needle-only (no fillers)", "Whole-person focus"],
        link: "/body-scrubs",
    },
    {
        icon: <FaCircleNotch size={32} />,
        title: "Massage & Cupping",
        description:
            "Manual techniques that many people use for relaxation and short-term relief of muscle tightness.",
        features: ["Relaxation-focused options", "Clear consent & aftercare"],
        link: "/reflexology",
    },
];

const Services = () => {
    return (
        <section className="section_services bg-[#ebe9e4] py-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Our <em>Treatments</em>
                    </h2>
                </div>

                <div className="flex flex-wrap -mx-4">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="w-full xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
                        >
                            <div className="service_card group bg-white p-6 rounded-lg shadow hover:shadow-lg transition h-full flex flex-col justify-between">
                                <div>
                                    <div className="service_icon mb-4 text-blue-700 group-hover:text-white transition-colors">
                                        {service.icon}
                                    </div>

                                    <div className="service-title-subtitle mb-4">
                                        <h3 className="service_title text-lg sm:text-xl font-semibold group-hover:text-white transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="service_desc text-sm sm:text-base text-gray-600 group-hover:text-white transition-colors">
                                            {service.description}
                                        </p>
                                    </div>

                                    <ul className="service_features list-disc pl-5 mb-4 text-gray-700 space-y-1">
                                        {service.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="group-hover:text-white transition-colors text-sm sm:text-base"
                                            >
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="service-viewmore mt-auto">
                                    <a
                                        href={service.link}
                                        className="service_link text-blue-700 font-semibold group-hover:text-white transition-colors text-sm sm:text-base"
                                    >
                                        View More →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
