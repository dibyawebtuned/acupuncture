import React from "react";
import Image from "next/image";
import WhyChooseUs from "@/component/Whychooseus";
import About from "@/component/About";
import Services from "@/component/Services";
import Banner from "@/component/Banner";
import TailoredPlansSection from "@/component/PlansComponent";


const page = () => {
    return (
        <div className="pt-[130px] bg-[#EAF0EA]">
            <div className="container mx-auto py-15 flex flex-col">
                {/* Heading */}
                <div className="flex flex-col gap-2.5 text-center md:text-left mb-10">
                    <div className="text-[#6D6A5F] font-testsignifier uppercase text-sm tracking-widest">
                        about us
                    </div>
                    <div className="font-ppNeueMontreal text-[28px] md:text-[36px] text-[#2B2B2B]">
                        Experience true relaxation
                    </div>
                </div>

                {/* Main Content: Images */}
                <div className="flex flex-col gap-[60px]">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* First Image: flex-1 */}
                        <div className="flex-1 h-[400px] relative">
                            <Image
                                src="/assets/img/469209709_17879239428197064_3445656581431711502_n.jpg"
                                alt="About 1"
                                fill
                                className="object-cover rounded-none!"
                            />
                        </div>

                        {/* Second and Third Images stacked */}
                        <div className="flex flex-1  gap-6">
                            <div className="flex-1 h-[400px] relative">
                                <Image
                                    src="/assets/img/469245827_17879239419197064_4235272167280555836_n.jpg"
                                    alt="About 2"
                                    fill
                                    className="object-cover rounded-none!"
                                />
                            </div>
                            <div className="flex-1 h-[400px] relative">
                                <Image
                                    src="/assets/img/7515-1-Tuning-Forks.jpg"
                                    alt="About 3"
                                    fill
                                    className="object-cover rounded-none!"
                                />
                            </div>
                        </div>
                    </div>

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
