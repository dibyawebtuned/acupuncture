// components/Footer.js
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const instagramImages = [
    "/assets/img/clarity.jpg",
    "/assets/img/clarity.jpg",
    "/assets/img/clarity.jpg",
    "/assets/img/clarity.jpg",
];

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <div className="footer-wrapper">
            {/* Instagram Section */}
            <section className="section_gallery4 text-teal-900 py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                            Welcome to the Vantage Point Acupuncture Community
                        </h2>
                        <p className="text-md">
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
                    </div>

                    {/* Instagram Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {instagramImages.map((img, idx) => (
                            <a
                                key={idx}
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block overflow-hidden rounded-lg"
                            >
                                <Image
                                    src={img}
                                    alt={`Instagram ${idx + 1}`}
                                    className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                                    loading="lazy"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-900 text-gray-200 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Newsletter */}
                        <div>
                            <div className="mb-4 text-xl font-semibold">
                                Expert advice, updates, and perks for your inbox.
                            </div>
                            <form
                                className="flex flex-col sm:flex-row gap-2"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="p-2 rounded text-gray-900 flex-1"
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-700 text-white p-2 rounded hover:bg-blue-800 transition"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        {/* Footer Links */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <div className="font-semibold mb-2">Treatments</div>
                                <a href="/time-to-talk" className="block hover:underline">
                                    Acupuncture
                                </a>
                                <a href="/talk-on-track" className="block hover:underline">
                                    Chinese Herbal Medicine
                                </a>
                                <a href="/tiny-articulators" className="block hover:underline">
                                    Facial Acupuncture
                                </a>
                                <a href="/courses" className="block hover:underline">
                                    Women’s Health
                                </a>
                            </div>
                            <div>
                                <div className="font-semibold mb-2">About</div>
                                <a href="/about-us" className="block hover:underline">
                                    Our Story
                                </a>
                                <a href="/therapy" className="block hover:underline">
                                    Why Choose Us
                                </a>
                            </div>
                            <div>
                                <div className="font-semibold mb-2">Help</div>
                                <a href="/faq" className="block hover:underline">
                                    Help & FAQs
                                </a>
                                <a href="/speech-sound-screener" className="block hover:underline">
                                    Appointment
                                </a>
                                <a href="/free-resources" className="block hover:underline">
                                    Free Resources
                                </a>
                                <a href="/blog" className="block hover:underline">
                                    Blog
                                </a>
                            </div>
                            <div>
                                <div className="font-semibold mb-2">Social</div>
                                <a href="#" target="_blank" className="block hover:underline">
                                    Instagram
                                </a>
                                <a href="#" target="_blank" className="block hover:underline">
                                    Facebook
                                </a>
                                <a href="#" target="_blank" className="block hover:underline">
                                    Pinterest
                                </a>
                                <a href="#" target="_blank" className="block hover:underline">
                                    About Marney
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Logo + Bottom */}
                    <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
                        <a>
                            <Image
                                src="/assets/img/logoo.png"
                                alt="Vantage Point Logo"
                                className="h-12 md:h-16"
                                width={20}
                                height={20}
                            />
                        </a>
                        <div className="text-gray-400 text-sm mt-4 md:mt-0">
                            © {year} Vantage Point Acupuncture.{" "}
                            <Link href="/privacypolicy" className="hover:underline">
                                Privacy Policy
                            </Link>{" "}
                            |{" "}
                            <Link href="/termsconditions" className="hover:underline">
                                Terms of Service
                            </Link>{" "}
                            |{" "}
                            <a href="#" className="hover:underline">
                                Site Credit
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
