"use client";
import React, { useState } from "react";

const Faq = ({ showHeader = true }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
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

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-[#EAF0F0]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-15">
                {/* Header (conditionally rendered) */}
                {showHeader && (
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                        Frequently Asked Questions
                    </h2>
                )}

                {/* FAQ Content */}
                <div className="flex flex-col md:flex-row gap-10">
                    {/* FAQ Section */}
                    <div className="w-full md:w-1/2">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b-[1.6px] border-[#0b3d91] pb-3 cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex justify-between items-center p-6">
                                        <div className="text-[28px] font-ppneuemontreal">
                                            {faq.question}
                                        </div>
                                        <span className="text-gray-500 text-2xl leading-none">
                                            {openIndex === index ? "−" : "+"}
                                        </span>
                                    </div>

                                    {/* Animated answer */}
                                    <div
                                        className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index
                                            ? "max-h-40 mt-2"
                                            : "max-h-0"
                                            }`}
                                    >
                                        <p className="text-[18px] text-gray-600 leading-8 tracking-wide">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-md">
                            <video
                                src="/assets/video/keep it somewhere autoplay.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls={false}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
