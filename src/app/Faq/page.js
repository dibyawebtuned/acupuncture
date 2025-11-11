import React from 'react';
import Image from 'next/image';
import FaqFooter from '@/component/FaqFooter';
import Faq from '@/component/Faq';
import Banner from '@/component/Banner';

const page = () => {
    return (
        <div className='pt-[130px] bg-[#EAF0F0]'>
            {/*  */}
            {/* <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-15 flex flex-col gap-[50px]'>
                <div className='flex flex-col gap-2.5 text-center md:text-left'>
                    <div className='text-[#6D6A5F] font-testsignifier uppercase text-sm tracking-widest'>faq</div>
                    <div className='font-ppNeueMontreal text-[28px] md:text-[36px] text-[#2B2B2B]'>Customers frequently ask</div>
                </div>

                <div className='flex flex-col gap-[50px]'>
                    <div className="w-full h-[60vh] overflow-hidden rounded-lg shadow-lg">
                        <video
                            src="/assets/video/keep it somewhere autoplay.mp4"
                            controls
                            className="w-full h-auto"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>


                    <div>
                        <FaqFooter showHeader={false} />
                    </div>
                </div>
            </div> */}
            <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-15'>
                {/* Heading */}
                <div className="flex flex-col gap-3 text-left">
                    {/* Section Label */}
                    <div className="text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest">
                        faq
                    </div>

                    {/* Heading */}
                    <div className="font-ppNeueMontreal text-[40px] sm:text-[40px] md:text-[64px] lg:text-[80px] text-[#2B2B2B] leading-[1.15] sm:leading-[1.1] md:leading-[1.2] tracking-normal">
                        Customers Queries
                    </div>
                </div>

                <Faq showHeader={false} />
            </div>

            {/* Banner */}
            <Banner />
        </div>
    )
}

export default page