"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import FaqFooter from "@/component/FaqFooter";
import Banner from "@/component/Banner";

const Page = ({ showHeader = true }) => {
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

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className="pt-[130px] bg-[#EAF0F0]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-15">

                <div className="flex flex-col gap-3 text-left">
                    <div
                        className="text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        faq
                    </div>

                    <div
                        className="font-ppNeueMontreal text-[40px] sm:text-[40px] md:text-[64px] lg:text-[80px] text-[#2B2B2B] leading-[1.15]"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Customers Queries
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-10 pt-4">
                    <div className="w-full md:w-1/2" data-aos="fade-right">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b-[1.6px] border-[#0b3d91] pb-3 cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex justify-between items-center py-6 px-3">
                                        <div className="text-[20px] sm:text-[24px] md:text-[28px] font-ppneuemontreal">
                                            {faq.question}
                                        </div>
                                        <span className="text-gray-500 text-xl sm:text-2xl leading-none">
                                            {openIndex === index ? "−" : "+"}
                                        </span>
                                    </div>

                                    <div
                                        className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                                            }`}
                                    >
                                        <p className="text-[16px] sm:text-[18px] text-gray-600 leading-8 tracking-wide text-justify">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className="w-full md:w-1/2 flex justify-center items-center"
                        data-aos="fade-left"
                    >
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

export default Page;
