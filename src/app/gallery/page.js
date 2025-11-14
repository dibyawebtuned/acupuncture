"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

// -------------------- Desktop Gallery --------------------
const GalleryDesktop = ({ galleryImages }) => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <section className="pt-[130px] bg-[#EAF0F0]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-15 flex flex-col">
                {/* Heading */}
                <div className="flex flex-col gap-3 text-left mb-10 md:mb-6">
                    <div className="text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest"
                        data-aos="fade-up"
                        data-aos-delay="100">
                        gallery
                    </div>

                    <div className="font-ppNeueMontreal text-[40px] sm:text-[40px] md:text-[64px] lg:text-[80px] text-[#2B2B2B] leading-[1.15] sm:leading-[1.1] md:leading-[1.2] tracking-normal"
                        data-aos="fade-up"
                        data-aos-delay="300">
                        Holistic Health <br /> Journey
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {galleryImages.map((image, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden shadow-lg shrink-0 cursor-pointer group"
                            style={{
                                flex: "0 0 calc(25% - 1.5rem)",
                                height: i % 3 === 0 ? 400 : 250,
                            }}
                            data-aos="zoom-in"
                            data-aos-duration="900"
                            data-aos-delay={i * 50}
                            onClick={() => {
                                setIndex(i);
                                setOpen(true);
                            }}
                        >
                            {/* Image */}
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={600}
                                height={400}
                                className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110 rounded-none!"
                                priority
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                            {/* Soft light reflection (spa-like effect) */}
                            <div className="absolute inset-0 bg-linear-to-t from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                            {/* Border glow */}
                            <div className="absolute inset-0 border border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={galleryImages.map((img) => ({
                        src: img.src,
                        alt: img.alt,
                    }))}
                    index={index}
                    onIndexChange={setIndex}
                />
            </div>
        </section>
    );
};

// -------------------- Mobile Gallery --------------------
const GalleryMobile = ({ galleryImages }) => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <section className="pt-[100px] bg-[#EAF0F0] px-5 pb-12">
            {/* Heading */}
            <div className="flex flex-col gap-2 mt-15">
                <div className="text-[#6D6A5F] uppercase text-xs tracking-widest"
                    data-aos="fade-right"
                    data-aos-duration="900">
                    gallery
                </div>
                <h2 className="font-ppNeueMontreal text-[28px] sm:text-[32px] text-[#2B2B2B] leading-[1.2]"
                    data-aos="fade-up"
                    data-aos-duration="1000">
                    Holistic Health Journey
                </h2>
            </div>

            {/* 2-Column Grid for Mobile */}
            <div className="grid grid-cols-2 gap-4 mt-6">
                {galleryImages.map((image, i) => (
                    <div
                        key={i}
                        className="relative overflow-hidden rounded-md shadow-md cursor-pointer group"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay={i * 60}
                        onClick={() => {
                            setIndex(i);
                            setOpen(true);
                        }}
                    >
                        {/* Image */}
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={500}
                            height={400}
                            className="object-cover w-full h-[180px] transition-transform duration-700 ease-in-out group-hover:scale-110"
                            priority
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                        {/* Soft reflection */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                        {/* Border glow */}
                        <div className="absolute inset-0 border border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={galleryImages.map((img) => ({
                    src: img.src,
                    alt: img.alt,
                }))}
                index={index}
                onIndexChange={setIndex}
            />
        </section>
    );
};

// -------------------- Main Component --------------------
const GalleryComponent = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    // Detect screen width
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // Run on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const galleryImages = [
        { src: "/assets/img/469209709_17879239428197064_3445656581431711502_n.jpg", alt: "Bed" },
        { src: "/assets/img/469245827_17879239419197064_4235272167280555836_n.jpg", alt: "Kitchen" },
        { src: "/assets/img/7515-1-Tuning-Forks.jpg", alt: "Sink" },
        { src: "/assets/img/clarity.jpg", alt: "Books" },
        { src: "/assets/img/facial+acu+copy+3.webp", alt: "Chairs" },
        { src: "/assets/img/GettyImages-146788068 (1).jpg", alt: "Candle" },
        { src: "/assets/img/ImageForNews_765936_1701383544529230.webp", alt: "Laptop" },
        { src: "/assets/img/moxibustion-cones-moxa-treatment-points-top-needles.webp", alt: "Doors" },
        { src: "/assets/img/Traditional-Chinese-Medicine-is-diagnosing-women's-pulse-.webp", alt: "Coffee" },
        { src: "/assets/img/trauma-informed-therapist,-somatic-trauma-coaching-and-speaker-abi-blake-9.webp", alt: "Storage" },
        { src: "/assets/img/TCM article visual_.renditionimage.1700.850.jpg", alt: "Coffee table" },
        { src: "/assets/img/two.jpg", alt: "Blinds" },
    ];

    return isMobile ? (
        <GalleryMobile galleryImages={galleryImages} />
    ) : (
        <GalleryDesktop galleryImages={galleryImages} />
    );
};

export default GalleryComponent;
