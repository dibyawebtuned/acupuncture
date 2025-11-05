"use client";
import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GalleryComponent = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const lastUpdated = "October 26, 2025";
    const headerBgImage = "/assets/img/five.jpeg";

    const galleryImages = [
        { id: 1, src: "/assets/img/one.jpeg", alt: "Spa setup with candles and flowers" },
        { id: 2, src: "/assets/img/tow.jpeg", alt: "Aromatherapy oils and herbal compress" },
        { id: 3, src: "/assets/img/three.jpg", alt: "Woman applying facial mask" },
        { id: 4, src: "/assets/img/footer_one.jpg", alt: "Woman getting a relaxing massage" },
        { id: 5, src: "/public/assets/img/", alt: "Woman getting a relaxing massage" },
        { id: 6, src: "/assets/img/footer_one.jpg", alt: "Woman getting a relaxing massage" },
        { id: 7, src: "/assets/img/footer_one.jpg", alt: "Woman getting a relaxing massage" },
        { id: 8, src: "/assets/img/footer_one.jpg", alt: "Woman getting a relaxing massage" },
    ];

    return (
        <>
            {/* Header Section */}
            <header
                className="relative bg-cover bg-center h-[400px] sm:h-[500px] flex items-center justify-center text-center text-white"
                style={{ backgroundImage: `url(${headerBgImage})` }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 px-4 md:px-8 pt-10 flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Gallery</h1>
                    <p className="text-lg italic">Last Updated: {lastUpdated}</p>
                </div>
            </header>

            {/* Gallery Section */}
            <div className="container mx-auto mt-[100px] px-4 flex flex-wrap justify-center items-center gap-6">
                {galleryImages.map((image, i) => (
                    <div
                        key={i}
                        className="overflow-hidden rounded-[20px] shadow-lg shrink-0 cursor-pointer"
                        style={{ flex: "0 0 calc(25% - 1.5rem)", height: i % 2 === 0 ? 250 : 400 }}
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
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                            priority
                        />
                    </div>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={galleryImages.map((img) => ({ src: img.src, alt: img.alt }))}
                index={index}
                onIndexChange={setIndex}
            />
        </>
    );
};

export default GalleryComponent;
