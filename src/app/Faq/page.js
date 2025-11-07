import React from 'react';
import Image from 'next/image';
import FaqFooter from '@/component/FaqFooter';
import Banner from '@/component/Banner';

const page = () => {
    return (
        <div className='pt-[130px] bg-[#EAF0EA]'>
            <div className='container mx-auto py-15 flex flex-col gap-[50px]'>
                {/* Heading */}
                <div className='flex flex-col gap-2.5 text-center md:text-left'>
                    <div className='text-[#6D6A5F] font-testsignifier uppercase text-sm tracking-widest'>faq</div>
                    <div className='font-ppNeueMontreal text-[28px] md:text-[36px] text-[#2B2B2B]'>Customers frequently ask</div>
                </div>

                {/* Main Content */}
                <div className='flex flex-col gap-[50px]'>
                    {/* Video */}
                    <div className="w-full h-[60vh] overflow-hidden rounded-lg shadow-lg">
                        <video
                            src="/assets/video/keep it somewhere autoplay.mp4"
                            controls
                            className="w-full h-auto"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>


                    {/*  */}
                    <div>
                        <FaqFooter showHeader={false} />
                    </div>
                </div>

            </div>

            {/* Banner */}
            <Banner />
        </div>
    )
}

export default page