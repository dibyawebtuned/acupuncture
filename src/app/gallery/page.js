"use client";

import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import HeaderSection from "@/component/HeaderSection";

const GalleryComponent = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const lastUpdated = "October 26, 2025";
    const headerBgImage = "/assets/img/five.jpeg";

    // Local gallery images
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

    return (
        <section className="pt-[130px] bg-[#EAF0F0]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-15 flex flex-col">
                {/* Heading */}
                <div className="flex flex-col gap-3 text-left mb-10 md:mb-6">
                    {/* Section Label */}
                    <div className="text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest">
                        gallery
                    </div>

                    {/* Heading */}
                    <div className="font-ppNeueMontreal text-[40px] sm:text-[40px] md:text-[64px] lg:text-[80px] text-[#2B2B2B] leading-[1.15] sm:leading-[1.1] md:leading-[1.2] tracking-normal">
                        Holistic Health <br /> Journey
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {galleryImages.map((image, i) => (
                        <div
                            key={i}
                            className="overflow-hidden shadow-lg shrink-0 cursor-pointer"
                            style={{ flex: "0 0 calc(25% - 1.5rem)", height: i % 3 === 0 ? 400 : 250 }}
                            onClick={() => {
                                setIndex(i);
                                setOpen(true);
                            }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={600}
                                height={400}
                                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 rounded-none!"
                                priority
                            />
                        </div>
                    ))}
                </div>

                <div>

                </div>

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={galleryImages.map((img) => ({ src: img.src, alt: img.alt }))}
                    index={index}
                    onIndexChange={setIndex}
                />
            </div>
        </section>
    );
};

export default GalleryComponent;
