import React from "react";
import Image from "next/image";
import WhyChooseUs from "@/component/Whychooseus";
import About from "@/component/About";
import Services from "@/component/Services";
import Banner from "@/component/Banner";
import TailoredPlansSection from "@/component/PlansComponent";


const page = () => {
    return (
        <div className="pt-[130px] bg-[#EAF0F0]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-15 flex flex-col">
                {/* Heading */}
                <div className="flex flex-col gap-3 text-left mb-10 md:mb-6">
                    {/* Section Label */}
                    <div className="text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest">
                        about us
                    </div>

                    {/* Heading */}
                    <div className="font-ppNeueMontreal text-[40px] sm:text-[40px] md:text-[64px] lg:text-[80px] text-[#2B2B2B] leading-[1.15] sm:leading-[1.1] md:leading-[1.2] tracking-normal">
                        Experience true <br /> relaxation
                    </div>
                </div>

                {/* Main Content: Images */}
                <div className="flex flex-col gap-[60px]">

                    {/* Images */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* First Image */}
                        <div className="flex-1 h-64 sm:h-80 md:h-96 lg:h-[400px] relative">
                            <Image
                                src="/assets/img/469209709_17879239428197064_3445656581431711502_n.jpg"
                                alt="About 1"
                                fill
                                className="object-cover rounded-none!"
                            />
                        </div>

                        {/* Second and Third Images */}
                        <div className="flex flex-1 flex-col sm:flex-row gap-6">
                            <div className="flex-1 h-64 sm:h-80 md:h-96 lg:h-[400px] relative">
                                <Image
                                    src="/assets/img/469245827_17879239419197064_4235272167280555836_n.jpg"
                                    alt="About 2"
                                    fill
                                    className="object-cover rounded-none!"
                                />
                            </div>
                            <div className="flex-1 h-64 sm:h-80 md:h-96 lg:h-[400px] relative">
                                <Image
                                    src="/assets/img/7515-1-Tuning-Forks.jpg"
                                    alt="About 3"
                                    fill
                                    className="object-cover rounded-none!"
                                />
                            </div>
                        </div>
                    </div>

                    {/* WhyChooseUs */}
                    <WhyChooseUs />

                    <About />
                </div>
            </div>

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

            {/* TailoredPlansSection */}
            <TailoredPlansSection />

            {/* Banner */}
            {/* <Banner /> */}
        </div>
    );
};

export default page;
