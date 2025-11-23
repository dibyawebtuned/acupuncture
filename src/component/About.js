"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <div className='flex flex-col gap-[50px] '>
            {/* LOGO & Paragraph */}
            <div className='overflow-hidden'>
                {/* LOGO */}
                <div className="flex items-center w-full">
                    <span className="grow border-t border-gray-400"
                        data-aos="fade-right"
                        data-aos-delay="400">
                    </span>

                    <div className="relative w-24 h-24 mx-4"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <Image src="/assets/img/logoo.png" alt="Logo" fill className="object-contain" />
                    </div>

                    <span className="grow border-t border-gray-400"
                        data-aos="fade-left"
                        data-aos-delay="400">
                    </span>
                </div>

                {/* Paragraph */}
                <div>
                    <div className="text-center mx-auto font-ppNeueMontreal text-xl md:text-2xl lg:text-[28px] w-full xl:w-2/3 px-4"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                    >
                        At Vantage Point Acupuncture, we believe that true wellness begins with understanding the whole person—body,
                        mind, and spirit. Our clinic offers a calm, supportive environment.
                    </div>
                </div>
            </div>

            {/* About Us Card */}
            <section className="bg-white">
                <div className="flex flex-col lg:flex-row items-center gap-2.5 overflow-hidden">
                    {/* LEFT TEXT CONTENT */}
                    <div className="flex-1 flex justify-center">
                        <div className="w-full max-w-[600px] px-6 md:px-8 lg:px-10 flex flex-col gap-5 mt-10 lg:mt-0">
                            <p className="text-sm tracking-wide text-gray-500 font-ppNeueMontreal mb-4"
                                data-aos="fade-up"
                                data-aos-duration="1000">
                                ABOUT US
                            </p>

                            <div className="font-ppNeueMontreal text-[36px] lg:text-[42px] font-medium leading-tight"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="200">
                                Where wellness meets tranquility
                            </div>

                            <p className="text-gray-600 font-ppNeueMontreal text-lg leading-relaxed mb-6 text-justify"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="400">
                                Our practitioners take a personalized approach, focusing on your unique constitution and health patterns.
                                Every treatment plan is thoughtfully curated to support the body’s natural healing processes while ensuring safety,
                                comfort, and clarity at every step. With a commitment to holistic care, we strive to empower individuals to
                                reconnect with their health and feel supported throughout their wellness journey.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex-1 w-full"
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        data-aos-delay="400">
                        <div className="relative w-full h-[450px] overflow-hidden">
                            <Image
                                src="/assets/img/469209709_17879239428197064_3445656581431711502_n.jpg"
                                alt="Facial treatment"
                                fill
                                className="object-cover rounded-none!"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About
