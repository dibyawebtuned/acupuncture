"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import MarqueeSection from "@/component/Marquee";
import { CheckCircle, BadgeCheck, Heart, Leaf, ArrowRight, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceGallery from "@/component/ServiceGallery";

const Page = () => {


    useEffect(() => {
        const dot = document.querySelector(".cursor-dot");

        let x = 0;
        let y = 0;
        let targetX = 0;
        let targetY = 0;
        let ease = 0.12; // Adjust to control the smoothness (0.08–0.2 recommended)

        const updateCursor = () => {
            // Lerp (linear interpolation)
            x += (targetX - x) * ease;
            y += (targetY - y) * ease;

            dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            requestAnimationFrame(updateCursor);
        };

        const handleMouseMove = (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);
        updateCursor();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);



    useEffect(() => {
        const dot = document.querySelector(".cursor-dot");

        const grow = () => dot.style.transform += " scale(2)";
        const shrink = () => dot.style.transform = dot.style.transform.replace(" scale(2)", "");

        document.querySelectorAll("a, button").forEach((el) => {
            el.addEventListener("mouseenter", grow);
            el.addEventListener("mouseleave", shrink);
        });

        return () => {
            document.querySelectorAll("a, button").forEach((el) => {
                el.removeEventListener("mouseenter", grow);
                el.removeEventListener("mouseleave", shrink);
            });
        };
    }, []);



    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <div>
            <div className="pt-[130px] bg-[#EAF0F0]">
                {/* Top Section */}
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-15">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
                        {/* Left Image */}
                        <div className="flex-1 w-full"
                            data-aos="fade-right"
                        >
                            <div className="relative w-full min-h-[280px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-md shadow-md">
                                <Image
                                    src="/assets/img/facial+acu+copy+3.webp"
                                    alt="Facial Acupuncture"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="flex-1 w-full text-left">
                            <div>
                                <div
                                    className="text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    services
                                </div>
                                <div className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[56px] text-gray-700 font-medium mb-3 font-ppneuemontreal leading-tight"
                                    data-aos="fade-up"
                                    data-aos-delay="150"
                                >
                                    Chinese Herbal <span className="font-testSignifier"> Medicine </span>
                                </div>
                                <div className="font-ppNeueMontreal text-gray-500 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    Rather than simply masking symptoms, Chinese Herbal Medicine targets the root causes of imbalance — helping your body return to a natural state of wellness. Each herbal formula is carefully crafted and customized to your individual constitution, lifestyle, and condition using pure, natural ingredients such as roots, bark, flowers, leaves, and minerals.
                                </div>
                            </div>

                            <div className="w-full flex flex-wrap mt-6 -mx-5">
                                {[
                                    {
                                        icon: <Leaf size={20} className="text-white" />,
                                        title: "Balance",
                                        text: "Balances internal body systems naturally",
                                    },
                                    {
                                        icon: <Heart size={20} className="text-white" />,
                                        title: "Digestion",
                                        text: "Supports digestion and circulation",
                                    },
                                    {
                                        icon: <CheckCircle size={20} className="text-white" />,
                                        title: "Sleep",
                                        text: "Improves sleep and reduces stress",
                                    },
                                    {
                                        icon: <Star size={20} className="text-white" />,
                                        title: "Immunity",
                                        text: "Enhances immune function",
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="w-full sm:w-1/2 px-5 mb-5 flex gap-4"
                                        data-aos="fade-up"
                                        data-aos-delay={250 + index * 100}
                                    >
                                        {/* Square icon */}
                                        <div className="w-10 h-10 flex items-center justify-center rounded-md shrink-0 bg-[#0B3D91]">
                                            {item.icon}
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="text-[22px] font-testSignifier font-semibold text-gray-700">{item.title}</span>
                                            <span className="font-ppNeueMontreal text-gray-500 text-[15px] sm:text-[16px] md:text-[17px]">{item.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>

                <div className="pb-15">
                    <MarqueeSection />
                </div>

                {/* Two */}
                <div className="flex flex-col lg:flex-row gap-[40px] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pb-15">
                    {/* Left (8/12 on large screens) */}
                    <div className="w-full lg:w-8/12 flex flex-col gap-15">
                        {/* What to expect */}
                        <div className="">
                            <div className="flex flex-col gap-[20px]">
                                {/* Heading */}
                                <div className="flex flex-col gap-[15px]">
                                    <div
                                        className="text-[32px] md:text-[38px] lg:text-[38px] text-gray-700 font-ppNeueMontreal font-medium leading-snug"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        What to expect your <span className="font-testSignifier "> Chinese Herbal </span>
                                    </div>

                                    <div>
                                        <div className="text-gray-500 font-ppNeueMontreal text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed"
                                            data-aos="fade-up"
                                            data-aos-delay="150"
                                        >
                                            Rediscover your natural glow with our Signature Facials, expertly designed to cleanse, hydrate, and rejuvenate your skin.
                                            Each facial is tailored to your unique skin type and concerns, combining high-performance skincare with gentle, therapeutic techniques.
                                            From deep pore cleansing to collagen-boosting serums, we bring out your skin's healthiest, most radiant version.
                                            Our experienced estheticians use only premium, skin-friendly products, ensuring a soothing and effective treatment with visible results.
                                            Whether you are seeking age-defying care, hydration, or a calming reset, our Signature Facials offer a deeply relaxing experience
                                        </div>

                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pl-0!">
                                            {[
                                                "Deep cleansing to remove impurities and unclog pores",
                                                "Hydration boost for smoother, plumper skin",
                                                "Customized mask treatment based on your skin type",
                                                // "Gentle facial massage to improve circulation and glow",
                                                // "Use of premium, skin-safe herbal and natural products",
                                                // "Visible results — refreshed, balanced, and radiant skin",
                                            ].map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-3 font-ppNeueMontreal text-gray-500 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed pl-0!"
                                                    data-aos="fade-up"
                                                    data-aos-delay={200 + index * 100}
                                                >
                                                    <div className="flex items-center justify-center w-7 h-7 rounded-full mt-0.5 shrink-0">
                                                        <BadgeCheck size={20} className="text-[#0B3D91]" />
                                                    </div>
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>


                                        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-md shadow-md"
                                            data-aos="fade-up"
                                            data-aos-delay="400"
                                        >
                                            <Image
                                                src="/assets/img/469245827_17879239419197064_4235272167280555836_n.jpg"
                                                alt="Chinese Herbal Medicine"
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Why Choose */}
                        <div className="">
                            <div className="flex flex-col gap-[20px]">
                                {/* Heading */}
                                <div className="flex flex-col gap-[15px]">
                                    <div
                                        className="text-[32px] md:text-[38px] lg:text-[38px] text-gray-700 font-ppneuemontreal font-medium leading-snug"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        Why Chinese <span className="font-testSignifier"> Herbal Medicine</span>
                                    </div>
                                    <div className="text-gray-500 font-ppNeueMontreal text-justify text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed"
                                        data-aos="fade-up"
                                        data-aos-delay="150"
                                    >
                                        Our formulas use pure herbs, roots, and minerals — each selected for their natural healing properties and prepared with traditional care.
                                        Rediscover your natural glow with our Signature Facials, expertly designed to cleanse, hydrate, and rejuvenate your skin.
                                        Each facial is tailored to your unique skin type and concerns, combining high-performance skincare with gentle, therapeutic techniques.
                                        From deep pore cleansing to collagen-boosting serums, we bring out your skin is healthiest, most radiant version.
                                    </div>
                                </div>


                                {/* Features */}
                                <div className="flex flex-col gap-[20px]">
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className="flex flex-col items-center justify-between gap-8 bg-gray-50 py-7 px-6 rounded-lg"
                                            data-aos="zoom-out"
                                            data-aos-delay={200 + i * 150} // staggered zoom-out
                                        >
                                            <div className="flex items-start gap-5">
                                                {/* Icon Circle */}
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3D91] flex-shrink-0">
                                                    {i % 2 === 0 ? <Leaf className="w-5 h-5 text-white" /> : <Heart className="h-5 w-5 text-white" />}
                                                </div>

                                                {/* Text */}
                                                <div>
                                                    <div className="text-[22px] mb-2 font-testSignifier font-semibold text-gray-600">
                                                        {i === 1 ? "Natural Ingredients" : "Holistic Healing"}
                                                    </div>
                                                    <div className="text-gray-500 font-ppNeueMontreal text-[16px] leading-relaxed">
                                                        {i === 1
                                                            ? "Our formulas use pure herbs, roots, and minerals — each selected for their natural healing properties and prepared with traditional care."
                                                            : "Rather than treating symptoms, our approach addresses the root causes of imbalance, helping the body heal from within."}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right (4/12 on large screens) wewe */}
                    <div className="w-full lg:w-4/12 flex items-center justify-center">
                        {/* Sticky Sidebar with Hover Animations */}
                        <div className="lg:sticky lg:top-28 self-start transition-transform duration-300 ease-out">
                            <div className="bg-[#0B3D91] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                                {/* Decorative Leaf */}
                                <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
                                    <img
                                        src="/assets/img/leaf.png"
                                        alt=""
                                        className="w-24 sm:w-32 invert brightness-90 -scale-x-100"
                                    />
                                </div>

                                {/* Heading */}
                                <div className="text-2xl sm:text-3xl mb-4 font-ppneuemontreal font-medium">
                                    Service Details
                                </div>

                                {/* Description */}
                                <div className="text-sm sm:text-base leading-relaxed mb-6 opacity-90">
                                    Discover the healing power of traditional Chinese herbal medicine, designed to
                                    restore balance and promote overall well-being.
                                </div>

                                {/* Duration */}
                                <div className="mb-5">
                                    <div className="text-lg sm:text-xl font-medium">Duration</div>
                                    <div className="mt-1 text-sm sm:text-base opacity-90">45–60 minutes per session</div>
                                </div>

                                {/* Price */}
                                <div className="mb-5">
                                    <div className="text-lg sm:text-xl font-medium">Price</div>
                                    <div className="mt-1 text-sm sm:text-base opacity-90">$80 per session</div>
                                </div>

                                {/* Schedule */}
                                <div className="mb-8">
                                    <div className="text-lg sm:text-xl font-medium">Schedule</div>
                                    <div className="mt-1 text-sm sm:text-base opacity-90">
                                        Monday – Friday: 9:00 AM – 6:00 PM
                                    </div>
                                    <div className="text-sm sm:text-base opacity-90">
                                        Saturday: 9:00 AM – 2:00 PM
                                    </div>
                                    <div className="text-sm sm:text-base opacity-90">
                                        Sunday: Closed
                                    </div>
                                </div>

                                {/* Button */}
                                <a
                                    href="/appointment"
                                    className="block text-center no-underline! bg-white! text-[#0B3D91] py-3 rounded-full font-medium hover:bg-gray-200 transition"
                                >
                                    Book an Appointment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cursor-dot fixed top-0 left-0 w-3 h-3 bg-[#0B3D91] rounded-full pointer-events-none mix-blend-difference z-[9999]"></div>


            {/* ServiceGallery */}
            <ServiceGallery />
        </div>
    );
};

export default Page;
