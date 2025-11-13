"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "@/component/Button";

export default function ServiceSection({
    title,
    description,
    image,
    phone = "0417 794 279",
    howItWorks = [],
    whyChooseUs = [],
    details = {},
}) {
    return (
        <section className="pt-[130px] bg-[#EAF0F0] pb-15">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-15 flex flex-col gap-[50px]">
                {/* Top Section */}
                <div
                    className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    {/* LEFT IMAGE */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[500px] overflow-hidden shadow-lg">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover rounded-none!"
                                priority
                            />
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div
                        className="w-full lg:w-1/2 text-[#2D2D2D] flex flex-col gap-5"
                        data-aos="zoom-out"
                        data-aos-duration="800"
                    >
                        <div className="flex flex-col gap-2 sm:gap-3">
                            <div className="text-2xl sm:text-3xl lg:text-5xl font-medium font-ppneuemontreal">
                                {title}
                            </div>

                            <div className="text-[16px] leading-relaxed sm:leading-6 opacity-80 font-ppneuemontreal">
                                {description}
                            </div>
                        </div>

                        <div className="mt-4">
                            <CustomButton
                                href={`tel:${phone}`}
                                label={phone}
                                bg="#0b3d91"
                                text="#ffffff"
                                hoverBg="#0a316f"
                                hoverText="#ffffff"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-8 pt-10">
                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-8/12 flex flex-col gap-12">
                        {/* How It Works */}
                        <div data-aos="fade-up" data-aos-delay="100">
                            <div className="text-2xl sm:text-3xl lg:text-[32px] text-[#2B2B2B] font-ppneuemontreal font-medium mb-4">
                                How It Works:
                            </div>
                            <ul className="list-disc pl-6 space-y-4 text-sm sm:text-base leading-relaxed text-[#2B2B2B]">
                                {howItWorks.map((item, index) => (
                                    <li key={index}>
                                        <span className="font-semibold">{item.title}:</span>{" "}
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Why Choose Us */}
                        <div className="" data-aos="fade-up" data-aos-delay="200">
                            <div className="text-2xl sm:text-3xl lg:text-[32px] text-[#2B2B2B] font-ppneuemontreal font-medium mb-4">
                                Why Choose Us:
                            </div>
                            <ul className="list-disc pl-6 space-y-4 text-sm sm:text-base leading-relaxed text-[#2B2B2B]">
                                {whyChooseUs.map((item, index) => (
                                    <li key={index}>
                                        <span className="font-semibold">{item.title}:</span>{" "}
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div
                        className="w-full lg:w-4/12"
                        data-aos="zoom-out"
                        data-aos-delay="200"
                    >
                        {/* Sticky Sidebar with Hover Animation */}
                        <div className="lg:sticky lg:top-28 self-start transition-transform duration-300 ease-out">
                            <div className="bg-[#0B3D91] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
                                    <img
                                        src="/assets/img/leaf.png"
                                        alt=""
                                        className="w-24 sm:w-32 invert brightness-90 -scale-x-100"
                                    />
                                </div>

                                <div className="text-2xl sm:text-3xl mb-4 font-ppneuemontreal font-medium">
                                    Service Details
                                </div>

                                <div className="text-sm sm:text-base leading-relaxed mb-6 opacity-90">
                                    {details.description}
                                </div>

                                <div className="mb-5">
                                    <div className="text-lg sm:text-xl font-medium">Duration</div>
                                    <div className="mt-1 text-sm sm:text-base opacity-90">
                                        {details.duration}
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="text-lg sm:text-xl font-medium">Price</div>
                                    <div className="mt-1 text-sm sm:text-base opacity-90">
                                        {details.price}
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <div className="text-lg sm:text-xl font-medium">Schedule</div>
                                    <div className="mt-1 text-sm sm:text-base opacity-90">
                                        {details.schedule?.weekday}
                                    </div>
                                    <div className="text-sm sm:text-base opacity-90">
                                        {details.schedule?.weekend}
                                    </div>
                                </div>

                                <a
                                    href="/appointment"
                                    className="block text-center bg-white! text-[#0B3D91] py-3 no-underline! rounded-full font-medium hover:bg-gray-200 transition"
                                >
                                    Book an appointment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
