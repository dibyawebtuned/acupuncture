"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Heart, Leaf, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";


// Example icons as inline SVG
const icons = {
    treatment: <Heart className="h-8 w-8 mx-auto mb-3 text-current" />,
    environment: <Leaf className="h-8 w-8 mx-auto mb-3 text-current" />,
    therapist: <ArrowRight className="h-8 w-8 mx-auto mb-3 text-current" />,
};

const WhyChooseUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <section className="bg-white pt-15">
            <div className="text-center">
                <div className="flex flex-col gap-[60px]">
                    {/* Heading */}
                    <div className="flex flex-col gap-[15px]">
                        <p className="text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-easing="ease-out-sine"
                            data-aos-offset="80"
                        >
                            THE REASONS WHY CHOOSE US
                        </p>
                        <div className="text-[36px] lg:text-[42px] text-[#2B2B2B] font-ppneuemontreal font-medium sm:leading-14"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="700"
                            data-aos-easing="ease-out-sine"
                            data-aos-offset="100"
                        >
                            Why our SPA <br />center stands out
                        </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] sm:gap-5">
                        <div className="flex flex-col items-center justify-between gap-[30px] sm:gap-20">
                            <div className="text-center px-[25px]"
                                data-aos="zoom-out"
                                data-aos-duration="600"
                                data-aos-easing="ease-out-cubic"
                                data-aos-offset="100"
                            >
                                {icons.treatment}
                                <div className="text-[22px] mb-2 font-ppneuemontreal font-medium">Personalized Treatments</div>
                                <div className="text-gray-500 font-ppNeueMontreal text-[16px]">
                                    Each guest receives a custom experience designed to meet their specific needs, ensuring you get the most effective and relaxing treatments.
                                </div>
                            </div>

                            <div className="w-full h-64 relative"
                                data-aos="reveal-up"
                            >
                                <Image
                                    src="/assets/img/clarity.jpg"
                                    alt="Spa Treatment"
                                    fill
                                    className="object-cover rounded-none!"
                                />
                            </div>
                        </div>


                        <div className="flex flex-col items-center justify-between gap-[30px] sm:gap-20">
                            <div className="text-center px-[25px]"
                                data-aos="zoom-out"
                                data-aos-duration="600"
                                data-aos-easing="ease-out-cubic"
                                data-aos-offset="100"
                            >
                                {icons.environment}
                                <div className="text-[22px] mb-2 font-ppneuemontreal font-medium">Tranquil Environment</div>
                                <div className="text-gray-500 font-ppNeueMontreal text-[16px]">
                                    Our spa is a peaceful oasis designed to help you unwind, with soothing surroundings and a calming atmosphere that ensures you feel relaxed from the moment you step inside.
                                </div>
                            </div>

                            <div className="w-full h-64 relative"
                                data-aos="reveal-up"
                            >
                                <Image
                                    src="/assets/img/facial+acu+copy+3.webp"
                                    alt="Spa Environment"
                                    fill
                                    className="object-cover rounded-none!"
                                />
                            </div>
                        </div>


                        <div className="flex flex-col items-center justify-between gap-[30px] sm:gap-20">
                            <div className="text-center px-[25px]"
                                data-aos="zoom-out"
                                data-aos-duration="600"
                                data-aos-easing="ease-out-cubic"
                                data-aos-offset="100"
                            >
                                {icons.therapist}
                                <div className="text-[22px] mb-2 font-ppneuemontreal font-medium">Expert Therapists</div>
                                <div className="text-gray-500 font-ppNeueMontreal text-[16px]">
                                    Our team of highly trained professionals is dedicated to your wellness, using the latest techniques and the finest products to provide exceptional care.
                                </div>
                            </div>

                            <div className="w-full h-64 relative"
                                data-aos="reveal-up"
                            >
                                <Image
                                    src="/assets/img/469245827_17879239419197064_4235272167280555836_n.jpg"
                                    alt="Expert Therapist"
                                    fill
                                    className="object-cover rounded-none!"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
