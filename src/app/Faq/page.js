"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import FaqFooter from '@/component/FaqFooter';
import Faq from '@/component/Faq';
import Banner from '@/component/Banner';

const page = ({ showHeader = true }) => {
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

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className='pt-[130px] bg-[#EAF0F0]'>
            <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-15'>
                {/* Heading */}
                <div className="flex flex-col gap-3 text-left">
                    {/* Section Label */}
                    <div className="text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        faq
                    </div>

                    {/* Heading */}
                    <div className="font-ppNeueMontreal text-[40px] sm:text-[40px] md:text-[64px] lg:text-[80px] text-[#2B2B2B] leading-[1.15] sm:leading-[1.1] md:leading-[1.2] tracking-normal"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Customers Queries
                    </div>
                </div>

                {/* <Faq showHeader={false} /> */}

                {/* FAQ Content */}
                <div className="flex flex-col md:flex-row gap-10 pt-7 sm:pt-15">
                    {/* FAQ Section */}
                    <div className="w-full md:w-1/2" data-aos="fade-right">
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
                    <div className="w-full md:w-1/2 flex justify-center items-center" data-aos="fade-left">
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

            {/* Banner */}
            {/* <Banner /> */}
        </div>
    )
}

export default page