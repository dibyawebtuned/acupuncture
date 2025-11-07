"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialSlider() {
    return (
        <section className="w-full py-16 bg-[#EFF4EC]">
            <div className="max-w-5xl mx-auto px-6">

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{ delay: 4000 }}
                    loop={false}
                    slidesPerView={1}
                    className="relative"
                >

                    {/* SLIDE 1 */}
                    <SwiperSlide>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">

                            {/* Star Rating */}
                            <div className="flex gap-1 text-[#234041] mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="20" viewBox="0 0 18 17" fill="currentColor">
                                        <path d="M8.16 0.55c...Z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-gray-700 text-lg mb-6">
                                These testimonials will populate from the CMS.
                            </p>

                            {/* Client Info */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 overflow-hidden rounded-full bg-gray-200">
                                    <Image
                                        src="https://cdn.prod.website-files.com/6508af1b0b60370d434c9417/6508af1b0b60370d434c945d_placeholder-image.svg"
                                        alt="Client"
                                        width={60}
                                        height={60}
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <p className="font-semibold text-gray-900">Name</p>
                                    <p className="text-sm text-gray-500">Date of Review</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Duplicate SwiperSlide blocks for more testimonials */}

                </Swiper>
            </div>
        </section>
    );
}
