"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { CheckCircle, Heart, Leaf, ArrowRight } from "lucide-react";
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
    }, []);

    return (
        <div className="pt-[130px] bg-[#EAF0F0]">
            {/* Top Section */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-15">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
                    {/* Left Image */}
                    <div className="flex-1 w-full">
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
                            <div className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[56px] font-medium mb-3 font-ppneuemontreal leading-tight">
                                Musculoskeletal Pain Management
                            </div>
                            <div className="font-ppNeueMontreal text-gray-500 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                                Rather than simply masking symptoms, Chinese Herbal Medicine targets the root causes of imbalance — helping your body return to a natural state of wellness. Each herbal formula is carefully crafted and customized to your individual constitution, lifestyle, and condition using pure, natural ingredients such as roots, bark, flowers, leaves, and minerals.
                            </div>
                        </div>

                        <ul className="mt-6 pl-0!">
                            {[
                                "Balances internal body systems naturally",
                                "Supports digestion and circulation",
                                "Improves sleep and reduces stress",
                                "Enhances immune function",
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 font-ppNeueMontreal text-gray-500 text-[15px] sm:text-[16px] pl-0!"
                                >
                                    <CheckCircle
                                        size={18}
                                        className="text-[#0B3D91] mt-0.5 shrink-0"
                                    />
                                    <span className="max-w-[90%]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
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
                                    className="text-[32px] md:text-[38px] lg:text-[38px] font-ppneuemontreal font-medium leading-snug"
                                    data-aos="fade-up"
                                    data-aos-delay="150"
                                >
                                    What to expect?
                                </div>
                                <div>
                                    <div className="text-gray-500 font-ppNeueMontreal text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                                        Rediscover your natural glow with our Signature Facials, expertly designed to cleanse, hydrate, and rejuvenate your skin.
                                        Each facial is tailored to your unique skin type and concerns, combining high-performance skincare with gentle, therapeutic techniques.
                                        From deep pore cleansing to collagen-boosting serums, we bring out your skin's healthiest, most radiant version.
                                        Our experienced estheticians use only premium, skin-friendly products, ensuring a soothing and effective treatment with visible results.
                                        Whether you are seeking age-defying care, hydration, or a calming reset, our Signature Facials offer a deeply relaxing experience
                                    </div>

                                    <ul className="pl-0!">
                                        {[
                                            "Deep cleansing to remove impurities and unclog pores",
                                            "Hydration boost for smoother, plumper skin",
                                            "Customized mask treatment based on your skin type",
                                            "Gentle facial massage to improve circulation and glow",
                                            "Use of premium, skin-safe herbal and natural products",
                                            "Visible results — refreshed, balanced, and radiant skin",
                                        ].map((item, index) => (
                                            <li
                                                key={index}
                                                className="pl-0! flex items-start gap-3 font-ppNeueMontreal text-gray-500 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed"
                                            >
                                                <div className="flex items-center justify-center w-7 h-7 rounded-full mt-0.5 shrink-0">
                                                    <CheckCircle size={18} className="text-[#0B3D91]" />
                                                </div>
                                                <span className="max-w-[90%] leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-md shadow-md">
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
                                {/* <p
                                    className="text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest"
                                    data-aos="fade-up"
                                >
                                    WHY CHOOSE HERBAL MEDICINE
                                </p> */}
                                <div
                                    className="text-[32px] md:text-[38px] lg:text-[38px] font-ppneuemontreal font-medium leading-snug"
                                    data-aos="fade-up"
                                    data-aos-delay="150"
                                >
                                    Why Chinese Herbal Medicine?
                                </div>
                                <div className="text-gray-500 font-ppNeueMontreal text-justify text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                                    Our formulas use pure herbs, roots, and minerals — each selected for their natural healing properties and prepared with traditional care.
                                    Rediscover your natural glow with our Signature Facials, expertly designed to cleanse, hydrate, and rejuvenate your skin.
                                    Each facial is tailored to your unique skin type and concerns, combining high-performance skincare with gentle, therapeutic techniques.
                                    From deep pore cleansing to collagen-boosting serums, we bring out your skin is healthiest, most radiant version.
                                </div>
                            </div>

                            {/* Features */}
                            <div className="flex flex-col gap-[20px]">
                                {/* Item 1 */}
                                <div
                                    className="flex flex-col items-center justify-between gap-8 bg-gray-50 py-7 px-6 rounded-lg"
                                    data-aos="zoom-out"
                                >
                                    <div className="flex items-start gap-5">
                                        {/* Icon Circle */}
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3D91] flex-shrink-0">
                                            <Leaf className="w-5 h-5 text-white" />
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <div className="text-[20px] mb-2 font-ppneuemontreal font-semibold text-[#0B3D91]">
                                                Natural Ingredients
                                            </div>
                                            <div className="text-gray-500 font-ppNeueMontreal text-[16px] leading-relaxed">
                                                Our formulas use pure herbs, roots, and minerals — each selected for their natural healing properties and prepared with traditional care.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div
                                    className="flex flex-col items-center justify-between gap-8 bg-gray-50 py-7 px-6 rounded-lg"
                                    data-aos="zoom-out"
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3D91] flex-shrink-0">
                                            <Heart className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-[20px] mb-2 font-ppneuemontreal font-semibold text-[#0B3D91]">
                                                Holistic Healing
                                            </div>
                                            <div className="text-gray-500 font-ppNeueMontreal text-[16px]">
                                                Rather than treating symptoms, our approach addresses the root causes of imbalance, helping the body heal from within.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 3 */}
                                <div
                                    className="flex flex-col items-center justify-between gap-8 bg-gray-50 py-7 px-6 rounded-lg"
                                    data-aos="zoom-out"
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3D91] flex-shrink-0">
                                            <Heart className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-[20px] mb-2 font-ppneuemontreal font-semibold text-[#0B3D91]">
                                                Holistic Healing
                                            </div>
                                            <div className="text-gray-500 font-ppNeueMontreal text-[16px]">
                                                Rather than treating symptoms, our approach addresses the root causes of imbalance, helping the body heal from within.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right (4/12 on large screens) */}
                <div className="w-full lg:w-4/12 flex items-center justify-center">
                    {/* Sticky Sidebar with Hover Animation */}
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
    );
};

export default Page;
