"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WhyChooseUs from "@/component/Whychooseus";
import About from "@/component/About";
import Services from "@/component/Services";
import Banner from "@/component/Banner";
import TailoredPlansSection from "@/component/PlansComponent";
// import SmoothScrollWrapper from "@/component/SmoothScrollWrapper";

import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            offset: 100,
        });

        setTimeout(() => AOS.refresh(), 500);
    }, []);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // refs for the three images
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    // in-view detection (once: true ensures it only runs first time)
    const inView1 = useInView(ref1, { once: true, margin: "-80px" });
    const inView2 = useInView(ref2, { once: true, margin: "-80px" });
    const inView3 = useInView(ref3, { once: true, margin: "-80px" });

    // base animation props
    const initial = { opacity: 0, y: 100 };
    const getAnimate = (inView, delay = 0) =>
        inView
            ? { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay } }
            : {};

    return (
        <div className="pt-[130px] bg-[#EAF0F0]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-15 flex flex-col">
                {/* Heading */}
                <div data-scroll-section className="flex flex-col gap-3 text-left mb-10 md:mb-6">
                    {/* Section Label (AOS) */}
                    <div
                        className="text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        about us
                    </div>

                    {/* Heading (AOS) */}
                    <div
                        className="font-ppNeueMontreal text-[40px] sm:text-[40px] md:text-[64px] lg:text-[80px] text-[#2B2B2B] leading-[1.15] sm:leading-[1.1] md:leading-[1.2] tracking-normal"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Experience true <br /> relaxation
                    </div>
                </div>

                {/* Main Content: Images */}
                <div className="flex flex-col gap-[60px]">
                    {/* Images */}
                    <div data-scroll-section className="flex flex-col lg:flex-row gap-6">
                        {/* First Image (bottom -> top) */}
                        <div
                            ref={ref1}
                            className="flex-1 w-full h-64 sm:h-80 md:h-96 lg:h-[400px] relative overflow-hidden"
                            data-aos="reveal-up"
                        >
                            <Image
                                src="/assets/img/469209709_17879239428197064_3445656581431711502_n.jpg"
                                alt="About 1"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105 rounded-none!"
                            />
                        </div>

                        {/* Second and Third Images */}
                        <div className="flex flex-1 flex-col sm:flex-row gap-6">
                            <div
                                ref={ref2}
                                className="flex-1 h-64 sm:h-80 md:h-96 lg:h-[400px] relative overflow-hidden"
                                data-aos="reveal-up"
                            >
                                <Image
                                    src="/assets/img/469245827_17879239419197064_4235272167280555836_n.jpg"
                                    alt="About 2"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105 rounded-none!"
                                />
                            </div>

                            <div
                                ref={ref3}
                                className="flex-1 h-64 sm:h-80 md:h-96 lg:h-[400px] relative overflow-hidden"
                                data-aos="reveal-up"
                            >
                                <Image
                                    src="/assets/img/7515-1-Tuning-Forks.jpg"
                                    alt="About 3"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105 rounded-none!"
                                />
                            </div>
                        </div>
                    </div>

                    {/* WhyChooseUs */}
                    <section data-scroll-section>
                        <WhyChooseUs />
                    </section>

                    <section>
                        <About />
                    </section>
                </div>
            </div>

            {/* Services */}
            <section>
                <div data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200">
                    {/* Services */}
                    <Services
                        bgClass="bg-[#e8f2ec]"
                        cardTheme={{
                            baseBg: "bg-white",
                            baseText: "text-[#355342]",
                            icon: "text-[#5b8a6e]",
                            hoverBg: "hover:bg-[#5b8a6e]",
                            hoverText: "group-hover:text-white",
                        }}
                    />
                </div>
            </section>

            {/* TailoredPlansSection */}
            <section>
                {/* TailoredPlansSection */}
                <TailoredPlansSection />
            </section>

            {/* Banner */}
            {/* <Banner /> */}
        </div>
    );
};

export default Page;
