import React from 'react';
import { Leaf, Droplet, Flower2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FaqFooter from '@/component/FaqFooter';

// Card data array
const contactCards = [
    {
        icon: <Droplet className='text-[#0B3D91] w-10 h-10 md:w-12 md:h-12' />,
        title: 'Contact Info',
        content: (
            <span className='text-gray-700 font-ppneuemontreal flex flex-col gap-1'>
                <div><span className='font-bold'>Phone :</span>{" "}8:00 AM - 10:00 PM</div>
                <div><span className='font-bold'>Email :</span>{" "}9:00 AM - 8:00 PM</div>
            </span>
        )
    },
    {
        icon: <Leaf className='text-[#0B3D91] w-10 h-10 md:w-12 md:h-12' />,
        title: 'Address',
        content: (
            <Link href="" className='font-ppneuemontreal text-gray-700 no-underline hover:no-underline'>
                Perth 123, Australia
            </Link>
        )
    },
    {
        icon: <Flower2 className='text-[#0B3D91] w-10 h-10 md:w-12 md:h-12' />,
        title: 'Opening Hours',
        content: (
            <span className='text-gray-700 font-ppneuemontreal flex flex-col gap-1'>
                <div><span className='font-bold'>Mon - Sat :</span>{" "}8:00 AM - 10:00 PM</div>
                <div><span className='font-bold'>Sun :</span>{" "}9:00 AM - 8:00 PM</div>
            </span>
        )
    },
];

const Page = () => {
    return (
        <div className='pt-[130px] bg-[#EAF0F0]'>
            <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-15'>

                {/* Heading */}
                <div className='flex flex-col gap-2.5 text-left'>
                    <div className='text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest'>Location</div>
                    <div className='font-ppNeueMontreal text-[40px] sm:text-[40px] md:text-[64px] lg:text-[80px] text-[#2B2B2B] leading-[1.15] sm:leading-[1.1] md:leading-[1.2] tracking-normal'>
                        Contact us
                    </div>
                </div>

                {/* Cards */}
                <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10'>
                    {contactCards.map((card, index) => (
                        <div
                            key={index}
                            className='flex flex-col items-start gap-[15px] sm:gap-10 px-5 py-10 bg-white transition-shadow duration-300'
                        >
                            <span>{card.icon}</span>
                            <div className='flex flex-col gap-2'>
                                <div className='font-medium text-[20px] sm:text-[22px] md:text-[24px] text-[#2B2B2B]'>{card.title}</div>
                                <div className='text-gray-700 text-[14px] md:text-[16px]'>{card.content}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Map & Image */}
                <div className='mt-16 flex flex-col md:flex-row gap-10'>
                    {/* Image */}
                    <div className='md:w-1/2 h-[280px] sm:h-[350px] md:h-[420px] relative overflow-hidden !rounded-none'>
                        <Image
                            src="/assets/img/facial+acu+copy+3.webp"
                            alt="Spa Contact"
                            fill
                            className='object-cover rounded-none!'
                        />
                    </div>

                    {/* Map */}
                    <div className='md:w-1/2 h-[280px] sm:h-[350px] md:h-[420px] overflow-hidden'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2681.566498796769!2d115.86045767606682!3d-31.95052672438786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a52d3b22311f%3A0xadcd76062f46f5a!2sPerth%20WA%2C%20Australia!5e0!3m2!1sen!2snp!4v1700000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className='mt-16 flex flex-col md:flex-row gap-10'>
                    {/* Left Text */}
                    <div className='md:w-1/2 flex flex-col gap-6'>
                        <div className='text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest'>Get in touch</div>
                        <div className='text-[36px] lg:text-[42px] text-[#2B2B2B] font-ppneuemontreal font-medium sm:leading-14'>Send us a message</div>
                        <div className='text-gray-600 text-[14px] md:text-[16px] font-ppneuemontreal'>
                            If you have any questions, need assistance, or would like more information about our services, don’t hesitate to reach out. We’re here to make your experience as smooth and enjoyable as possible.
                        </div>
                        <div className='text-gray-700 text-[14px] md:text-[16px] font-ppneuemontreal'>Here’s how we can assist you:</div>

                        <ul className='flex flex-col gap-3 text-gray-700 text-[14px] md:text-[16px] font-ppneuemontreal pl-0!'>
                            <li className='flex items-center gap-2 pl-0!'><Leaf className='w-5 h-5 text-[#0B3D91]' /> Provide detailed information about our treatments</li>
                            <li className='flex items-center gap-2 pl-0!'><Droplet className='w-5 h-5 text-[#0B3D91]' /> Help you schedule or modify appointments</li>
                            <li className='flex items-center gap-2 pl-0!'><Flower2 className='w-5 h-5 text-[#0B3D91]' /> Address any specific requests or concerns you may have</li>
                        </ul>
                    </div>

                    {/* Right Form */}
                    <div className='md:w-1/2 bg-white p-6 md:p-8'>
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

                {/* FaqFooter */}
                <div className="">
                    <FaqFooter />
                </div>
            </div>
        </div>
    );
};

export default Page;