"use client";

import React, { useState } from "react";

const faqsData = [
    {
        question: "Is acupuncture safe?",
        answer:
            "When performed by a registered practitioner using sterile, single-use needles, acupuncture is generally considered safe. We’ll discuss benefits and risks for you before any treatment.",
    },
    {
        question: "How should I prepare for my appointment?",
        answer:
            "Have a light snack, wear comfortable clothing, and bring a list of medicines, supplements, and allergies.",
    },
    {
        question: "What if I’m pregnant or planning pregnancy?",
        answer:
            "Please tell us. Techniques and point choices are adjusted, and we’ll check suitability for you. Always follow your maternity care team’s advice.",
    },
    {
        question: "Do you offer Chinese herbal medicine?",
        answer:
            "Yes, where appropriate. Formulas are selected individually. Always tell us about medicines and supplements so we can check for potential interactions.",
    },
];

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section_faq11 text-teal-900 ss-therapy py-16 bg-white">
            <div className="faq11_component max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
                {/* Left Column (FAQs) */}
                <div className="faq11_left flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Frequently Asked Questions
                    </h2>

                    <div className="faq11_list space-y-4">
                        {faqsData.map((faq, index) => (
                            <div
                                key={index}
                                className="faq11_accordion border-b border-gray-300 pb-4"
                            >
                                <div
                                    className="faq11_question flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span className="text-lg font-medium">{faq.question}</span>
                                    <span className="faq11_icon text-2xl">
                                        {activeIndex === index ? "−" : "+"}
                                    </span>
                                </div>
                                {activeIndex === index && (
                                    <div className="faq11_answer mt-2 text-gray-700">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column (Video) */}
                <div className="faq11_right flex-1">
                    <div className="faq11_video-wrapper relative">
                        <video
                            className="faq11_video w-full h-auto rounded-lg shadow-lg"
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            poster="/assets/img/extra/trauma-informed-therapist,-somatic-trauma-coaching-and-speaker-abi-blake-9.webp"
                        >
                            <source src="/assets/video/banner-video.mp4" type="video/mp4" />
                            Sorry, your browser doesn’t support embedded videos.
                        </video>
                    </div>
                </div>  
            </div>
        </section>
    );
};

export default FAQs;
