"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const BookAppointment = () => {
    const router = useRouter();

    return (
        <div className="pt-[130px] bg-[#EAF0F0]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-15 flex flex-col">
                {/* Header Section */}
                <div className="flex flex-col gap-3 text-left mb-10 md:mb-6">
                    <div
                        className="text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Book now
                    </div>
                    <div className="font-ppNeueMontreal text-[40px] sm:text-[40px] md:text-[64px] lg:text-[80px] text-[#2B2B2B] leading-[1.15] sm:leading-[1.1] md:leading-[1.2] tracking-normal">
                        Book an Appointment
                    </div>
                    {/* <p className="text-gray-600 mt-2 text-[15px]">
                        Fill in the form below and our team will contact you shortly.
                    </p> */}
                </div>

                <div className="flex flex-col lg:flex-row gap-[30px] items-stretch">

                    {/* Image */}
                    <div className="flex-1 relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
                        <Image
                            src="/assets/img/469245827_17879239419197064_4235272167280555836_n.jpg"
                            alt="Book Appointment"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </div>

                    {/* Booking Form */}
                    <div className="flex-1 bg-white p-6 sm:p-8 lg:p-12 rounded-2xl">
                        <form className="space-y-5">

                            {/* Name & Email */}
                            <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[30px]">
                                {/* Name */}
                                <div className="flex-1">
                                    <label className="block text-gray-700 mb-1 text-[15px] sm:text-[16px] font-medium font-ppNeueMontreal">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="font-ppNeueMontreal w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[15px] focus:ring-2 focus:ring-[#0B3D91] focus:outline-none"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex-1">
                                    <label className="block text-gray-700 mb-1 text-[15px] sm:text-[16px] font-medium font-ppNeueMontreal">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="font-ppNeueMontreal w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[15px] focus:ring-2 focus:ring-[#0B3D91] focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Phone & Preferred Date */}
                            <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[30px]">
                                {/* Phone */}
                                <div className="flex-1">
                                    <label className="block text-gray-700 mb-1 text-[15px] sm:text-[16px] font-medium font-ppNeueMontreal">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="font-ppNeueMontreal w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[15px] focus:ring-2 focus:ring-[#0B3D91] focus:outline-none"
                                    />
                                </div>

                                {/* Preferred Date */}
                                <div className="flex-1">
                                    <label className="block text-gray-700 mb-1 text-[15px] sm:text-[16px] font-medium font-ppNeueMontreal">
                                        Preferred Date
                                    </label>
                                    <input
                                        type="date"
                                        className="font-ppNeueMontreal w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[15px] text-gray-700 focus:ring-2 focus:ring-[#0B3D91] focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-gray-700 mb-1 text-[15px] sm:text-[16px] font-medium font-ppNeueMontreal">
                                    Message / Notes
                                </label>
                                <textarea
                                    placeholder="Tell us about your concern or request..."
                                    rows={4}
                                    className="font-ppNeueMontreal w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[15px] focus:ring-2 focus:ring-[#0B3D91] focus:outline-none resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="font-ppNeueMontreal w-full bg-[#0B3D91] text-white! py-3 rounded-lg font-medium text-[16px] transition duration-300"
                            >
                                Submit Appointment
                            </button>

                        </form>
                    </div>

                </div>

                {/* Contact Info Footer */}
                <div className="mt-8 text-center text-gray-600 text-sm">
                    <p>Need help? Call us at <span className="text-[#0B3D91] font-semibold">0417 794 279</span></p>
                    <p>Email: <span className="text-[#0B3D91] font-semibold">vantage@gmail.com</span></p>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;
