"use client";

import React, { useEffect } from 'react';
import { Leaf, Droplet, Flower2, Phone, MapPin, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FaqFooter from '@/component/FaqFooter';
import AOS from "aos";
import "aos/dist/aos.css";


// Card data array
// const contactCards = [
//     {
//         icon: <Droplet className='text-[#0B3D91] w-10 h-10 md:w-12 md:h-12' />,
//         title: 'Contact Info',
//         content: (
//             <span className='text-gray-700 font-ppneuemontreal flex flex-col gap-1'>
//                 <div><span className='font-bold'>Phone :</span>{" "}8:00 AM - 10:00 PM</div>
//                 <div><span className='font-bold'>Email :</span>{" "}9:00 AM - 8:00 PM</div>
//             </span>
//         )
//     },
//     {
//         icon: <Leaf className='text-[#0B3D91] w-10 h-10 md:w-12 md:h-12' />,
//         title: 'Address',
//         content: (
//             <Link href="" className='font-ppneuemontreal text-gray-700 no-underline hover:no-underline'>
//                 Perth 123, Australia
//             </Link>
//         )
//     },
//     {
//         icon: <Flower2 className='text-[#0B3D91] w-10 h-10 md:w-12 md:h-12' />,
//         title: 'Opening Hours',
//         content: (
//             <span className='text-gray-700 font-ppneuemontreal flex flex-col gap-1'>
//                 <div><span className='font-bold'>Mon - Sat :</span>{" "}8:00 AM - 10:00 PM</div>
//                 <div><span className='font-bold'>Sun :</span>{" "}9:00 AM - 8:00 PM</div>
//             </span>
//         )
//     },
// ];

const Page = () => {

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: true
        });
    }, []);

    return (
        <div className='pt-[130px] bg-[#EAF0F0]'>
            <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-15 flex flex-col gap-5'>

                {/* Heading */}
                <div className='flex flex-col gap-2.5 text-left'>
                    <div className='text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest'
                        data-aos="fade-up"
                        data-aos-delay="100">
                        Location
                    </div>
                    <div className='font-ppNeueMontreal text-[40px] sm:text-[40px] md:text-[64px] lg:text-[80px] text-[#2B2B2B] leading-[1.15] sm:leading-[1.1] md:leading-[1.2] tracking-normal'
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Contact us
                    </div>
                </div>

                <div className='flex flex-col gap-[50px]'>
                    {/* Contact Form Section */}
                    <div className='flex flex-col md:flex-row gap-10'>
                        {/* Left Text */}
                        <div className="md:w-1/2 flex flex-col gap-6"
                            data-aos="fade-right" data-aos-delay="100"
                        >
                            {/* Intro Text */}
                            <div className="text-gray-600 text-[16px] font-ppNeueMontreal"
                                data-aos="fade-up">
                                If you have any questions, need assistance, or would like more information about our services, don’t hesitate to reach out. We’re here to make your experience as smooth and enjoyable as possible.
                            </div>

                            <div className="text-gray-600 text-[16px] font-ppNeueMontreal" data-aos="fade-up" data-aos-delay="100">
                                Here’s how we can assist you:
                            </div>

                            {/* Contact Info */}
                            <div className="flex flex-col gap-8">
                                {/* Row 1 */}
                                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                                    {/* Location */}
                                    <div className="flex flex-1 items-start gap-4 sm:gap-5" data-aos="fade-up" data-aos-delay="150">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3D91]/10 text-[#0B3D91] shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[17px] sm:text-[18px] font-ppNeueMontreal font-medium">
                                                Location
                                            </span>
                                            <span className="text-gray-600 font-ppNeueMontreal text-[14px] sm:text-[16px]">
                                                Australia
                                            </span>
                                        </div>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="flex flex-1 items-start gap-4 sm:gap-5" data-aos="fade-up" data-aos-delay="200">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3D91]/10 text-[#0B3D91] shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[17px] sm:text-[18px] font-ppNeueMontreal font-medium">
                                                Contact Info
                                            </span>
                                            <span className="text-gray-600 font-ppNeueMontreal text-[14px] sm:text-[16px]">
                                                0417 794 279
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                                    {/* Email */}
                                    <div className="flex flex-1 items-start gap-4 sm:gap-5" data-aos="fade-up" data-aos-delay="250">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3D91]/10 text-[#0B3D91] shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[17px] sm:text-[18px] font-ppNeueMontreal font-medium">
                                                Email
                                            </span>
                                            <span className="text-gray-600 font-ppNeueMontreal text-[14px] sm:text-[16px]">
                                                vantage@gmail.com
                                            </span>
                                        </div>
                                    </div>

                                    {/* Opening Hours */}
                                    <div className="flex flex-1 items-start gap-4 sm:gap-5" data-aos="fade-up" data-aos-delay="300">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3D91]/10 text-[#0B3D91] shrink-0">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[17px] sm:text-[18px] font-ppNeueMontreal font-medium">
                                                Opening Hours
                                            </span>
                                            <span className="text-gray-600 font-ppNeueMontreal text-[14px] sm:text-[16px]">
                                                10:00 A.M - 9:00 P.M
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Right Form */}
                        <div className='md:w-1/2 bg-white p-6 md:p-8 rounded-md'
                            data-aos="fade-left"
                            data-aos-delay="150"
                        >
                            <form className='flex flex-col gap-4'>
                                <input type="text" placeholder="Your name" className='border-b border-gray-300 focus:outline-none py-2 font-testsignifier' />
                                <input type="email" placeholder="Your email" className='border-b border-gray-300 focus:outline-none py-2 font-testsignifier' />
                                <textarea placeholder="Message" rows={5} className='border-b border-gray-300 focus:outline-none py-2 font-testsignifier'></textarea>
                                <button type='submit' className='mt-5! bg-[#0B3D91] text-white! py-3 rounded-full hover:bg-[#082D6B] transition-colors duration-300 font-testsignifier'>
                                    Send message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Maps */}
                    <div className="w-full h-[300px] sm:h-[350px] md:h-[380px] lg:h-[400px] rounded-xl overflow-hidden"
                        data-aos="zoom-in"
                        data-aos-delay="200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2681.566498796769!2d115.86045767606682!3d-31.95052672438786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a52d3b22311f%3A0xadcd76062f46f5a!2sPerth%20WA%2C%20Australia!5e0!3m2!1sen!2snp!4v1700000000000"
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;