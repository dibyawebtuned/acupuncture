"use client";

import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const testimonials = [
    {
        name: "Tanja Kosanovic",
        initials: "TK",
        color: "#655d64",
        date: "December 30, 2024",
        text: "Dr Marney is exceptional at what she does and helped both my teenage son with overcoming chronic asthma and me with a multitude of pain over the last 7 years. A very wise soul and wonderful caring being.",
    },
    {
        name: "Amy Farrow",
        initials: "AF",
        color: "#cab8a9",
        date: "December 7, 2024",
        text: "I’ve had a long history of chronic pain and general health issues. Marney took the time to listen to my concerns and address them one at a time. She has helped me so much and her knowledge of the human body is amazing!",
    },
    {
        name: "Simon Stoddard",
        initials: "SS",
        color: "#dc745d",
        date: "June 20, 2025",
        text: "Bells Palsy — doctor said 3 months recovery! From the first visit with Marney I had substantial improvements and a full recovery within weeks! Lovely soul and brilliant at her craft.",
    },
    {
        name: "Karen Millers",
        initials: "KM",
        color: "#dc745d",
        date: "March 21, 2023",
        text: "What a beautiful soul Marney is as well as an expert in her field! She is kind, considerate, patient and knows her stuff! Highly recommend this extraordinary woman.",
    },
    {
        name: "Andrew Conder",
        initials: "AC",
        color: "#655d64",
        date: "April 3, 2023",
        text: "Marney is so professional, knowledgeable, friendly and caring. I can not recommend her highly enough. You will not be disappointed!",
    },
    {
        name: "Gerry Neustatl",
        initials: "GN",
        color: "#655d64",
        date: "December 11, 2022",
        text: "I never knew how helpful acupuncture could be until now. Marney is so thoughtful. She listened closely to my needs and somehow managed to relieve my pain entirely. I cannot recommend her highly enough. Thank you!!",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setIndex((index + 1) % testimonials.length);
    const prev = () =>
        setIndex((index - 1 + testimonials.length) % testimonials.length);

    const testimonial = testimonials[index];

    return (
        <section className="bg-white py-24 text-[#0b3d91]">
            <div className="max-w-6xl mx-auto px-6">
                {/* Title */}
                <h2 className="text-center text-4xl font-light mb-16">
                    Why People Choose <em className="italic font-serif">Vantage Point.</em>
                </h2>

                {/* Card */}
                <div className="relative flex justify-center items-center">
                    <div className="bg-white border border-gray-200 rounded-xl p-10 w-full sm:w-3/4 md:w-2/3 shadow-sm">
                        {/* Stars */}
                        <div className="flex mb-6 text-[#0b3d91]">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className="w-6 h-6"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.19 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.126 2.27a1 1 0 00-.364 1.118l1.19 3.674c.3.921-.755 1.688-1.54 1.118l-3.126-2.27a1 1 0 00-1.175 0l-3.126 2.27c-.784.57-1.838-.197-1.54-1.118l1.19-3.674a1 1 0 00-.364-1.118L2.26 9.101c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.19-3.674z" />
                                </svg>
                            ))}
                        </div>

                        {/* Text */}
                        <p className="text-gray-700 text-lg leading-relaxed mb-10">
                            {testimonial.text}
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-semibold"
                                style={{ backgroundColor: testimonial.color }}
                            >
                                {testimonial.initials}
                            </div>
                            <div>
                                <p className="font-semibold text-black">
                                    {testimonial.name}
                                </p>
                                <p className="text-gray-500 text-sm">{testimonial.date}</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="absolute bottom-[-4rem] right-1/2 translate-x-1/2 flex gap-6">
                        <button
                            onClick={prev}
                            className="p-3 border border-[#0b3d91] rounded-full text-[#0b3d91] hover:bg-[#0b3d91] hover:text-white transition"
                            aria-label="Previous testimonial"
                        >
                            <FiArrowLeft />
                        </button>
                        <button
                            onClick={next}
                            className="p-3 border border-[#0b3d91] rounded-full text-[#0b3d91] hover:bg-[#0b3d91] hover:text-white transition"
                            aria-label="Next testimonial"
                        >
                            <FiArrowRight />
                        </button>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-16 space-x-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all ${index === i ? "bg-[#0b3d91]" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
