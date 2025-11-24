// components/Services.js
"use client";

import React from "react";
import { FaLeaf, FaSpa, FaGem, FaCircleNotch } from "react-icons/fa";

const servicesData = [
    {
        icon: <FaLeaf size={32} />,
        title: "Acupuncture",
        description: "Acupuncture is an ancient practice that stimulates specific points on the body using fine, sterile needles to promote natural healing and restore balance.",
        features: ["Fine, sterile needles", "Comfort-first approach"],
        link: "/acupuncture",
    },
    {
        icon: <FaSpa size={32} />,
        title: "Chinese Herbal Medicine",
        description:
            "Individually selected herbal formulations may be used to support general health.",
        features: ["Individually selected herbs", "Safety-checked with meds"],
        link: "/chinese-herbal",
    },
    {
        icon: <FaGem size={32} />,
        title: "Sound Therapy",
        description:
            "Sound Therapy employs vibrations and tones to harmonize the body and mind, reduce stress, and support emotional and physical well-being.",
        features: ["Uses tuning forks", "bowls for therapy"],
        link: "/sound-therapy",
    },
    {
        icon: <FaCircleNotch size={32} />,
        title: "Massage & Cupping",
        description:
            "Massage & Cupping uses hands-on techniques and suction therapy to relieve muscle tension, improve circulation, and promote deep relaxation.",
        features: ["Relieves muscle tension and soreness", "Cupping therapy for deep tissue support"],
        link: "/massage",
    },
];

const Services = ({
    bgClass = "bg-[#ebe9e4]",
    cardTheme = {
        base: "bg-white text-gray-700",
        icon: "text-blue-700",
        hoverBg: "bg-blue-700",
        hoverText: "text-white",
    },
}) => {
    return (
        <section className={`${bgClass}`}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
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
                            <div
                                className={`service_card group bg-white p-6 rounded-lg shadow transition-all duration-300 flex flex-col justify-between h-full w-full cursor-pointer 
                                hover:shadow-lg 
                                hover:${cardTheme.hoverBg} 
                                active:${cardTheme.hoverBg}
                                focus:${cardTheme.hoverBg}
                                `}
                                tabIndex={0} // enables focus on mobile & keyboard
                            >
                                <div className="flex flex-col grow">

                                    {/* ICON */}
                                    <div
                                        className={`service_icon mb-4 
                                        ${cardTheme.icon}
                                        transition-colors duration-300
                                        group-hover:${cardTheme.hoverText}
                                        group-active:${cardTheme.hoverText}
                                        group-focus:${cardTheme.hoverText}
                                    `}
                                    >
                                        {service.icon}
                                    </div>

                                    {/* TITLE + DESC */}
                                    <div className="service-title-subtitle mb-4 flex flex-col grow">
                                        <h3
                                            className={`service_title text-lg sm:text-xl font-semibold transition-colors duration-300
                                            group-hover:${cardTheme.hoverText}
                                            group-active:${cardTheme.hoverText}
                                            group-focus:${cardTheme.hoverText}
                                        `}
                                        >
                                            {service.title}
                                        </h3>

                                        <p
                                            className={`service_desc text-sm sm:text-base text-gray-600 transition-colors duration-300
                                            group-hover:${cardTheme.hoverText}
                                            group-active:${cardTheme.hoverText}
                                            group-focus:${cardTheme.hoverText}
                                        `}
                                        >
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* FEATURES */}
                                    <ul
                                        className="service_features list-disc pl-5 mb-4 space-y-1 grow transition-colors duration-300
                                        group-hover:text-white
                                        group-active:text-white
                                        group-focus:text-white"
                                    >
                                        {service.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className={`text-sm sm:text-base transition-colors duration-300
                                                group-hover:${cardTheme.hoverText}
                                                group-active:${cardTheme.hoverText}
                                                group-focus:${cardTheme.hoverText}
                                            `}
                                            >
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* VIEW MORE */}
                                <div className="service-viewmore mt-auto">
                                    <a
                                        href={service.link}
                                        className={`service_link font-semibold text-sm sm:text-base transition-colors duration-300
                                        ${cardTheme.icon}
                                        group-hover:${cardTheme.hoverText}
                                        group-active:${cardTheme.hoverText}
                                        group-focus:${cardTheme.hoverText}
                                    `}
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
