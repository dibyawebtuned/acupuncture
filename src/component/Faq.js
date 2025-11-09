"use client";
import React, { useState } from "react";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is acupuncture?",
            answer:
                "Acupuncture is a traditional Chinese medicine practice that involves inserting thin needles into specific points on the body to restore balance and promote healing.",
        },
        {
            question: "Is it safe?",
            answer:
                "Yes, when performed by a licensed practitioner using sterile needles, acupuncture is safe and has minimal side effects.",
        },
        {
            question: "How many sessions will I need?",
            answer:
                "The number of sessions varies depending on your condition. Some people feel results after one session, while others may need several treatments for lasting benefits.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-[#f9f7f6]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-16">
                {/* Header */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
                    Frequently Asked Questions
                </h2>

                {/* FAQ Content */}
                <div className="flex flex-col md:flex-row gap-10 mt-15">
                    {/* FAQ Section */}
                    <div className="w-full md:w-1/2">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b border-gray-300 pb-3 cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-medium text-lg">{faq.question}</h4>
                                        <span className="text-gray-500 text-2xl leading-none">
                                            {openIndex === index ? "−" : "+"}
                                        </span>
                                    </div>

                                    {/* Animated answer */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                                            }`}
                                    >
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
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
