"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const rotations = [-3, 2, -1, 1];

    const handleMouseMove = (e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
        setMousePos({ x, y });
    };

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <div className="footer-wrapper">
            {/* --- Instagram Section --- */}
            <section
                className="section_gallery4 text-color-darkteal bg-[#F9F5EE] py-16"
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => {
                    setMousePos({ x: 0, y: 0 });
                    setHoveredIndex(null);
                }}
            >
                <div className="padding-global text-center">
                    <h2 className="heading-style-h3 text-balance mb-4">
                        Welcome to the Vantage Point Acupuncture Community
                    </h2>
                    <p className="text-size-medium text-gray-600 mb-10">
                        So nice to have you here — tag us{" "}
                        <a
                            href="https://www.instagram.com/vantagepointacupuncture/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0b3d91] underline"
                        >
                            @vantagepointacupuncture
                        </a>{" "}
                        &amp;{" "}
                        <a
                            href="https://www.facebook.com/p/Vantage-Point-Acupuncture-100068241406234/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0b3d91] underline"
                        >
                            @Facebook
                        </a>
                    </p>

                    {/* --- Interactive Image Grid --- */}
                    <div
                        className="flex flex-wrap justify-center gap-8 transition-transform duration-300"
                        style={{
                            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                        }}
                    >
                        {[
                            "/assets/img/trauma-informed-therapist,-somatic-trauma-coaching-and-speaker-abi-blake-9.webp",
                            "/assets/img/moxibustion-cones-moxa-treatment-points-top-needles.webp",
                            "/assets/img/ImageForNews_765936_1701383544529230.webp",
                            "/assets/img/facial+acu+copy+3.webp",
                        ].map((src, idx) => {
                            const isEven = (idx + 1) % 2 === 0;
                            const cardHeight = isEven ? 320 : 260; // taller for even-numbered images

                            return (
                                <div
                                    key={idx}
                                    onMouseEnter={() => setHoveredIndex(idx)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="relative rounded-[24px] overflow-hidden cursor-pointer transition-transform duration-500 shadow-[0_6px_18px_rgba(0,0,0,0.1)] hover:scale-[1.02]"
                                    style={{
                                        width: "280px",
                                        height: `${cardHeight}px`,
                                        transform: `rotate(${hoveredIndex === idx ? 0 : rotations[idx]}deg)`,
                                        transition: "transform 0.4s ease, height 0.4s ease",
                                    }}
                                >
                                    <a
                                        href="https://www.instagram.com/vantagepointacupuncture/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            src={src}
                                            alt={`Instagram ${idx + 1}`}
                                            width={400}
                                            height={cardHeight}
                                            className="w-full h-full object-cover rounded-[24px] transition-transform duration-500"
                                        />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>



            {/* --- Main Footer --- */}
            <footer className="footer2_component">
                <div className="padding-global">
                    <div className="container-extended">
                        <div className="padding-vertical padding-footer">
                            <div className="container-large">
                                <div className="padding-bottom padding-xxlarge">
                                    <div className="w-layout-grid footer2_top-wrapper">
                                        {/* Newsletter */}
                                        <div className="footer2_right-wrapper">
                                            <div className="margin-bottom margin-large">
                                                <div className="text-size-xxlarge text-balance">
                                                    Expert advice, updates, and perks for your inbox.
                                                </div>
                                            </div>
                                            <div className="footer2_form-block">
                                                <form className="footer2_form w-node-form">
                                                    <input
                                                        className="form-input is-footer w-input"
                                                        maxLength={256}
                                                        name="email"
                                                        placeholder="Enter your email"
                                                        type="email"
                                                        required
                                                    />
                                                    <input
                                                        type="submit"
                                                        className="button is-footer w-button"
                                                        value="Subscribe"
                                                    />
                                                </form>
                                            </div>
                                            <div className="tablet-divider-line">
                                                <div className="line-divider"></div>
                                            </div>
                                        </div>

                                        {/* Footer Links */}
                                        <div className="w-layout-grid footer2_left-wrapper">
                                            {/* Treatments */}
                                            <div className="footer2_link-list">
                                                <div className="margin-bottom margin-xsmall">
                                                    <div className="text-size-regular">Treatments</div>
                                                </div>
                                                <Link href="/time-to-talk" className="footer2_link">
                                                    Acupuncture
                                                </Link>
                                                <Link href="/talk-on-track" className="footer2_link">
                                                    Chinese Herbal Medicine
                                                </Link>
                                                <Link href="/tiny-articulators" className="footer2_link">
                                                    Facial Acupuncture
                                                </Link>
                                                <Link href="/courses" className="footer2_link">
                                                    Women’s Health
                                                </Link>
                                            </div>

                                            {/* About */}
                                            <div className="footer2_link-list">
                                                <div className="margin-bottom margin-xsmall">
                                                    <div className="text-size-regular">About</div>
                                                </div>
                                                <Link href="/about-us" className="footer2_link">
                                                    Our Story
                                                </Link>
                                                <Link href="/therapy" className="footer2_link">
                                                    Why Choose Us
                                                </Link>
                                            </div>

                                            {/* Help */}
                                            <div className="footer2_link-list">
                                                <div className="margin-bottom margin-xsmall">
                                                    <div className="text-size-regular">Help</div>
                                                </div>
                                                <Link href="/faq" className="footer2_link">
                                                    Help & FAQs
                                                </Link>
                                                <Link href="/speech-sound-screener" className="footer2_link">
                                                    Appointment
                                                </Link>
                                                <Link href="/free-resources" className="footer2_link">
                                                    Free Resources
                                                </Link>
                                                <Link href="/blog" className="footer2_link">
                                                    Blog
                                                </Link>
                                            </div>

                                            {/* Social */}
                                            <div className="footer2_link-list">
                                                <div className="margin-bottom margin-xsmall">
                                                    <div className="text-size-regular">Social</div>
                                                </div>
                                                <a href="#" target="_blank" className="footer2_link">
                                                    Instagram
                                                </a>
                                                <a href="#" target="_blank" className="footer2_link">
                                                    Facebook
                                                </a>
                                                <a href="#" target="_blank" className="footer2_link">
                                                    Pinterest
                                                </a>
                                                <a href="#" target="_blank" className="footer2_link">
                                                    About Marney
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="divider-line-animation-wrapper">
                                    <div className="line-divider-vertical"></div>
                                    <div className="line-divider"></div>
                                </div>

                                {/* Logo */}
                                <div style={{ paddingTop: "15px" }}>
                                    <div className="footer-logo-wrapper flex justify-center">
                                        <Link href="/" className="footer2_logo-link">
                                            <Image
                                                src="/assets/img/logoo.png"
                                                alt="Vantage Point Acupuncture Logo"
                                                width={240}
                                                height={120}
                                                className="object-contain"
                                            />
                                        </Link>
                                    </div>
                                </div>

                                {/* Bottom Legal Section */}
                                <div style={{ paddingBottom: "15px" }}>
                                    <div className="footer2_bottom-wrapper">
                                        <div className="w-layout-grid footer2_legal-list">
                                            <div className="footer2_credit-text">
                                                © {year} Vantage Point Acupuncture
                                            </div>
                                            <div className="footer2_legal-link-wrapper">
                                                <Link href="/privacypolicy" className="footer2_legal-link">
                                                    Privacy Policy
                                                </Link>
                                                <Link href="/termsconditions" className="footer2_legal-link">
                                                    Terms of Service
                                                </Link>
                                                <a href="#" className="footer2_legal-link">
                                                    Site Credit
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
