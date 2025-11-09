import React from "react";
import Image from "next/image";
import CustomButton from "@/component/Button";

const page = () => {
    return (
        <section className="pt-[130px] bg-[#EAF0F0] pb-15">
            <div className="max-w-[1440px] mx-auto px-5 sm:px-10 flex flex-col gap-[50px]">
                {/* Responsivenss */}
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pt-8 lg:pt-16">
                    {/* LEFT IMAGE */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[500px] overflow-hidden shadow-lg rounded-none!">
                            <Image
                                src="/assets/img/facial+acu+copy+3.webp"
                                alt="Chinese Herbal Medicine"
                                fill
                                className="object-cover rounded-none!"
                                priority
                            />
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="w-full lg:w-1/2 text-[#2D2D2D] flex flex-col gap-5">
                        <div className="flex flex-col gap-2 sm:gap-3">
                            <div className="text-2xl sm:text-3xl lg:text-5xl font-medium font-ppneuemontreal">
                                Constitutional Facial Acupuncture
                            </div>

                            <div className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-7 opacity-80 font-ppneuemontreal">
                                Chinese Herbal Medicine is an ancient healing practice that uses natural plant, mineral, and sometimes
                                animal-based ingredients to restore balance and promote wellness. Each formula is carefully tailored to
                                support your body’s unique needs, helping to strengthen immunity, improve digestion, and enhance overall vitality.
                            </div>
                        </div>

                        {/* Button */}
                        <div className="mt-4">
                            <CustomButton
                                href="tel:0417794279"
                                label="0417 794 279"
                                bg="#0b3d91"
                                text="#ffffff"
                                hoverBg="#0a316f"
                                hoverText="#ffffff"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page