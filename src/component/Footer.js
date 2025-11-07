// components/Footer.js
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

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
        setMousePos({ x, y });
    };

    const rotations = [-3, 2, -1, 1];

    return (
        <footer className="bg-white text-gray-700">
            {/* Instagram Section */}
            <section className="py-16 bg-[#F9F5EE] text-center relative">
                <div className="container mx-auto px-6 md:px-12">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4">
                        Welcome to the Vantage Point Acupuncture Community
                    </h2>
                    <p className="text-md mb-12">
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
                    </p>

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
                                        transform: `rotate(${hovered ? 0 : rotations[idx]}deg) translateX(${hovered ? mousePos.x : 0
                                            }px) translateY(${hovered ? mousePos.y : 0}px)`,
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

                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
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

            {/* Top section: Newsletter + Links */}
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 py-16">
                    {/* Newsletter */}
                    <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-serif mb-6">
                            Expert advice, updates, and perks for your inbox.
                        </h3>
                        <form className="flex w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="flex-1 p-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 rounded-r-full hover:bg-blue-700 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
                        <div>
                            <h4 className="font-semibold mb-4">Treatments</h4>
                            <Link href="/time-to-talk" className="block mb-2 hover:underline">
                                Acupuncture
                            </Link>
                            <Link href="/talk-on-track" className="block mb-2 hover:underline">
                                Chinese Herbal Medicine
                            </Link>
                            <Link href="/tiny-articulators" className="block mb-2 hover:underline">
                                Facial Acupuncture
                            </Link>
                            <Link href="/courses" className="block mb-2 hover:underline">
                                Women’s Health
                            </Link>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">About</h4>
                            <Link href="/about-us" className="block mb-2 hover:underline">
                                Our Story
                            </Link>
                            <Link href="/therapy" className="block mb-2 hover:underline">
                                Why Choose Us
                            </Link>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Help</h4>
                            <Link href="/faq" className="block mb-2 hover:underline">
                                Help & FAQs
                            </Link>
                            <Link href="/speech-sound-screener" className="block mb-2 hover:underline">
                                Appointment
                            </Link>
                            <Link href="/free-resources" className="block mb-2 hover:underline">
                                Free Resources
                            </Link>
                            <Link href="/blog" className="block mb-2 hover:underline">
                                Blog
                            </Link>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Social</h4>
                            <a href="#" target="_blank" className="block mb-2 hover:underline">
                                Instagram
                            </a>
                            <a href="#" target="_blank" className="block mb-2 hover:underline">
                                Facebook
                            </a>
                            <a href="#" target="_blank" className="block mb-2 hover:underline">
                                Pinterest
                            </a>
                            <a href="#" target="_blank" className="block mb-2 hover:underline">
                                About Marney
                            </a>
                        </div>
                    </div>
                </div>

                {/* Centered logo */}
                <div className="flex justify-center my-12">
                    <Link href="/">
                        <Image
                            src="/assets/img/logoo.png"
                            alt="Vantage Point Logo"
                            width={200}
                            height={80}
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Bottom row: copyright + links */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 py-6 text-sm text-gray-500">
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
