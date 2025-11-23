"use client";
import React, { useState } from "react";

const Faq = ({ showHeader = true }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What can I expect during my first visit?",
            answer:
                "During your initial appointment, our practitioner will conduct a comprehensive health assessment, reviewing your concerns, medical history, lifestyle factors, and wellness goals. This helps us understand your overall constitution and design a treatment plan that best supports your needs.",
        },
        {
            question: "How does acupuncture work?",
            answer:
                "Acupuncture uses fine, sterile needles to stimulate specific points on the body. This supports circulation, encourages balance within the body's systems, and promotes natural healing responses. Most clients find treatment deeply relaxing and restorative.",
        },
        {
            question: "Are the treatments painful?",
            answer:
                "Acupuncture needles are extremely thin, and sensations are generally minimal. Many people feel a gentle warmth, light pressure, or a mild tingling sensation during treatment. Constitutional Facial Acupuncture and body acupuncture are designed to be comfortable and soothing.",
        },
        {
            question: "What is Chinese Herbal Medicine?",
            answer:
                "Chinese Herbal Medicine uses carefully selected herbal formulations to support the body’s natural healing processes. Herbs are customized to your health patterns and may be used alongside acupuncture for enhanced effectiveness. All herbs at our clinic are quality-controlled and sourced from trusted suppliers.",
        },
        {
            question: "How many treatments will I need?",
            answer:
                "The number of sessions depends on your health condition, goals, and how your body responds. Some clients feel improvements within a few sessions, while others benefit from a longer treatment plan. We regularly evaluate progress and adjust as needed.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-[#f9f7f6]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-15">
                {/* Header (conditionally rendered) */}
                {showHeader && (
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                        Frequently Asked Questions
                    </h2>
                )}

                {/* FAQ Content */}
                <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start md:items-center pt-5">
                    {/* FAQ Section */}
                    <div className="w-full md:w-1/2">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b-[1.6px] border-[#0b3d91] pb-3 cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex justify-between items-center p-4 sm:p-6">
                                        <div className="text-[20px] sm:text-[24px] md:text-[28px] font-ppneuemontreal">
                                            {faq.question}
                                        </div>
                                        <span className="text-gray-500 text-xl sm:text-2xl leading-none">
                                            {openIndex === index ? "−" : "+"}
                                        </span>
                                    </div>

                                    {/* Animated answer */}
                                    <div
                                        className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ${openIndex === index
                                            ? "max-h-40 mt-1 sm:mt-2"
                                            : "max-h-0"
                                            }`}
                                    >
                                        <p className="text-justify text-[14px] sm:text-[16px] md:text-[18px] text-gray-600 leading-6 sm:leading-7 md:leading-8 tracking-wide">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
                        <div className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-md">
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
