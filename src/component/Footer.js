"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const instagramImages = [
    "/assets/img/469209709_17879239428197064_3445656581431711502_n.jpg",
    "/assets/img/469245827_17879239419197064_4235272167280555836_n.jpg",
    "/assets/img/7515-1-Tuning-Forks.jpg",
    "/assets/img/trauma-informed-therapist,-somatic-trauma-coaching-and-speaker-abi-blake-9.webp",
];

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [hovered, setHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const rotations = [-3, 2, -1, 1];

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
        setMousePos({ x, y });
    };

    return (
        <footer className="bg-white text-gray-700">
            {/* Instagram Section */}
            <section className="py-16 bg-[#F9F5EE] text-center relative">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-15 flex flex-col items-center">
                    <div className="flex text-[48px] mb-4 font-testSignifier w-[50%]">
                        Welcome to the Vantage Point Acupuncture Community
                    </div>

                    <div className="text-md mb-12">
                        So nice to have you here—tag us{" "}
                        <a
                            href="https://www.instagram.com/vantagepointacupuncture/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 underline"
                        >
                            @vantagepointacupuncture
                        </a>{" "}
                        &{" "}
                        <a
                            href="https://www.facebook.com/p/Vantage-Point-Acupuncture-100068241406234/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 underline"
                        >
                            @Facebook
                        </a>
                    </div>

                    <div
                        ref={containerRef}
                        className="flex justify-center flex-wrap gap-6 relative"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => {
                            setHovered(false);
                            setMousePos({ x: 0, y: 0 });
                        }}
                        onMouseMove={handleMouseMove}
                    >
                        {instagramImages.map((img, idx) => {
                            const height = idx % 2 === 0 ? 220 : 180;
                            return (
                                <div
                                    key={idx}
                                    className="relative transform transition-transform duration-300 rounded-xl overflow-hidden cursor-pointer"
                                    style={{
                                        width: "220px",
                                        height: `${height}px`,
                                        transform: `rotate(${hovered ? 0 : rotations[idx]}deg)
                      translateX(${hovered ? mousePos.x : 0}px)
                      translateY(${hovered ? mousePos.y : 0}px)`,
                                    }}
                                >
                                    {/* Decorative line behind image */}
                                    <div className="absolute inset-0 -z-10 flex items-center justify-center">
                                        <div
                                            className="w-full h-1 bg-gray-300"
                                            style={{
                                                transform: `rotate(${rotations[idx]}deg)`,
                                                opacity: 0.4,
                                            }}
                                        />
                                    </div>

                                    <a
                                        href="https://www.instagram.com/vantagepointacupuncture/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            src={img}
                                            alt={`Instagram ${idx + 1}`}
                                            width={220}
                                            height={height}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Newsletter + Links Section */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 py-16 border-t border-b border-gray-200">
                    {/* Newsletter (Left Half) */}
                    <div className="w-full md:w-1/2">
                        <div className="text-[28px] md:text-[34px] mb-6 font-ppneuemontreal leading-snug">
                            Expert advice, updates, <br /> and perks for your inbox.
                        </div>
                        <form className="flex w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="flex-1 p-3 border border-gray-300 rounded-l-full"
                            />

                            <button
                                type="submit"
                                className="px-6 rounded-r-full! border! border-l-0! border-gray-300! text-white"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Footer Links (Right Half) */}
                    <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-8">
                        {/* Treatments */}
                        <div className="min-w-[120px] flex-1">
                            {/* Title */}
                            <div className="mb-4 text-[16px] font-ppneuemontreal font-normal">Treatments</div>

                            <div className="flex flex-col gap-[7px]">
                                <Link href="/time-to-talk" className="font-ppneuemontreal text-[14px] block mb-2 no-underline!">
                                    Acupuncture
                                </Link>
                                <Link href="/talk-on-track" className="font-ppneuemontreal text-[14px] block mb-2 no-underline!">
                                    Chinese Herbal Medicine
                                </Link>
                                <Link href="/tiny-articulators" className="font-ppneuemontreal text-[14px] block mb-2 no-underline!">
                                    Facial Acupuncture
                                </Link>
                                <Link href="/courses" className="font-ppneuemontreal text-[14px] block mb-2 no-underline!">
                                    Women’s Health
                                </Link>
                            </div>
                        </div>

                        {/* About */}
                        <div className="min-w-[120px] flex-1">
                            {/* Title */}
                            <div className="mb-4 text-[16px] font-ppneuemontreal font-normal">About</div>

                            <div className="flex flex-col gap-[7px]">
                                <Link href="/about-us" className="font-ppneuemontreal text-[14px] block mb-2 no-underline!">
                                    Our Story
                                </Link>
                                <Link href="/therapy" className="font-ppneuemontreal text-[14px] block mb-2 no-underline!">
                                    Why Choose Us
                                </Link>
                            </div>
                        </div>

                        {/* Help */}
                        <div className="min-w-[120px] flex-1">
                            {/* Title */}
                            <div className="mb-4 text-[16px] font-ppneuemontreal font-normal">Help</div>

                            <div className="flex flex-col gap-[7px]">
                                <Link href="/faq" className="font-ppneuemontreal text-[14px] block mb-2 no-underline!">
                                    Help & FAQs
                                </Link>
                                <Link href="/speech-sound-screener" className="font-ppneuemontreal text-[14px] block mb-2 no-underline!">
                                    Appointment
                                </Link>
                                <Link href="/free-resources" className="font-ppneuemontreal text-[14px] block mb-2 no-underline!">
                                    Free Resources
                                </Link>
                                <Link href="/blog" className="font-ppneuemontreal text-[14px] block mb-2 no-underline!">
                                    Blog
                                </Link>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="min-w-[120px] flex-1">
                            {/* Title */}
                            <div className="mb-4 text-[16px] font-ppneuemontreal font-normal">Social</div>

                            <div className="flex flex-col gap-[7px]">
                                <a href="#" target="_blank" className="font-ppneuemontreal text-[14px] block mb-2 no-underline!">
                                    Instagram
                                </a>
                                <a href="#" target="_blank" className="font-ppneuemontreal text-[14px] block mb-2 no-underline!">
                                    Facebook
                                </a>
                                <a href="#" target="_blank" className="font-ppneuemontreal text-[14px] block mb-2 no-underline!">
                                    Pinterest
                                </a>
                                <a href="#" target="_blank" className="font-ppneuemontreal text-[14px] block mb-2 no-underline!">
                                    About Marney
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Centered Logo */}
                <div className="flex justify-center mt-3 mb-0">
                    <Link href="/">
                        <Image
                            src="/assets/img/logoo.png"
                            alt="Vantage Point Logo"
                            width={256}
                            height={120}
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Bottom Copyright Row */}
                <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-500">
                    <div>© {year} Vantage Point Acupuncture</div>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <Link href="/privacypolicy" className="hover:underline">
                            Privacy Policy
                        </Link>
                        <Link href="/termsconditions" className="hover:underline">
                            Terms of Service
                        </Link>
                        <a href="#" className="hover:underline">
                            Site Credit
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
