"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What should I bring to my sauna session?",
        answer:
            "We recommend bringing a towel, a reusable water bottle, comfortable clothing for after the session, and any personal care items you may need. We provide robes and slippers upon request.",
    },
    {
        question: "How long can I stay in the sauna?",
        answer:
            "Most sauna sessions range from 20–45 minutes depending on your comfort and experience. Beginners are advised to start with 15–20 minutes and gradually increase the duration.",
    },
    {
        question: "Are there health restrictions for using the sauna?",
        answer:
            "Individuals who are pregnant, have heart conditions, high blood pressure, or are on certain medications should consult a healthcare professional before using the sauna.",
    },
    {
        question: "Can I book a private sauna room?",
        answer:
            "Yes, we offer private sauna rooms for individuals, couples, and small groups. You can book through our website, by phone, or at the reception desk.",
    },
];

const FaqFooter = ({ showHeader = true, title = "Customers frequently ask", subtitle = "FAQ" }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Split FAQs into two halves
    const mid = Math.ceil(faqs.length / 2);
    const leftFaqs = faqs.slice(0, mid);
    const rightFaqs = faqs.slice(mid);

    return (
        <section className="">
            <div className="container mx-auto flex flex-col gap-[30px]">

                {/* Optional Header */}
                {showHeader && (
                    <div>
                        <div className="text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest">
                            {subtitle}
                        </div>
                        <div className="text-[36px] lg:text-[42px] text-[#2B2B2B] font-ppneuemontreal font-medium sm:leading-14">
                            {title}
                        </div>
                    </div>
                )}

                {/* FAQ Flex Layout */}
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Left Column */}
                    <div className="md:flex-1 flex flex-col gap-7">
                        {leftFaqs.map((item, index) => (
                            <div key={index} className="border-b border-gray-300 pb-4">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center text-left"
                                >
                                    <span className="font-ppneuemontreal text-gray-800 text-[16px] sm:text-[24px] leading-tight">
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {openIndex === index && (
                                    <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="md:flex-1 flex flex-col gap-7">
                        {rightFaqs.map((item, index) => (
                            <div key={index + mid} className="border-b border-gray-300 pb-4">
                                <button
                                    onClick={() => toggleFAQ(index + mid)}
                                    className="w-full flex justify-between items-center text-left"
                                >
                                    <span className="font-ppneuemontreal text-gray-800 text-[16px] sm:text-[24px] leading-tight">
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform duration-300 ${openIndex === index + mid ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {openIndex === index + mid && (
                                    <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqFooter;
