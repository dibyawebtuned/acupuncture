import React from "react";
import Image from "next/image";

const Banner = () => {
    return (
        <div className="relative w-full h-[200px] sm:h-[150px] md:h-[200px] lg:h-[250px] overflow-hidden">
            {/* Background Image */}
            <Image
                src="/assets/img/Footer_three.webp"
                alt="Banner"
                fill
                className="w-full h-full object-cover rounded-none!"
            />

            {/* Overlay for darkening image */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col md:flex-row items-center md:justify-between px-4 sm:px-10 md:px-20 text-center md:text-left">
                {/* Heading */}
                <h1 className="text-white text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold max-w-xl leading-snug mb-4 md:mb-0">
                    Contact us for more information.
                </h1>

                {/* Button */}
                <button className="bg-white text-gray-800 font-medium px-5 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
                    Contact us
                </button>
            </div>
        </div>
    );
};

export default Banner;
