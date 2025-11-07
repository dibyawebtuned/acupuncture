import React from "react";
import Image from "next/image";


// Example icons as inline SVG
const icons = {
    treatment: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mx-auto mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 014 0l1.414 1.414a4 4 0 010 5.656l-5.657 5.657-5.657-5.657a4 4 0 010-5.656L8 4.354a4 4 0 014 0z"
            />
        </svg>
    ),
    environment: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mx-auto mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-2 0-4 1.5-4 3.5S10 15 12 15s4-1.5 4-3.5S14 8 12 8z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v7m0-7H8m4 0h4"
            />
        </svg>
    ),
    therapist: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mx-auto mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
            />
        </svg>
    ),
};

const WhyChooseUs = () => {
    return (
        <section className="bg-white pt-15">
            <div className="container mx-auto text-center">
                <div className="flex flex-col gap-[80px]">
                    <div>
                        <p className="text-sm text-gray-500 uppercase mb-2 tracking-widest">
                            THE REASONS WHY CHOOSE US
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
                            Why our SPA center stands out
                        </h2>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        <div className="flex flex-col items-center text-center">
                            {icons.treatment}
                            <h3 className="text-xl font-semibold mb-2">Personalized Treatments</h3>
                            <p className="text-gray-600">
                                Each guest receives a custom experience designed to meet their specific needs, ensuring you get the most effective and relaxing treatments.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            {icons.environment}
                            <h3 className="text-xl font-semibold mb-2">Tranquil Environment</h3>
                            <p className="text-gray-600">
                                Our spa is a peaceful oasis designed to help you unwind, with soothing surroundings and a calming atmosphere that ensures you feel relaxed from the moment you step inside.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            {icons.therapist}
                            <h3 className="text-xl font-semibold mb-2">Expert Therapists</h3>
                            <p className="text-gray-600">
                                Our team of highly trained professionals is dedicated to your wellness, using the latest techniques and the finest products to provide exceptional care.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="w-full h-64 relative">
                        <Image
                            src="/assets/img/469209709_17879239428197064_3445656581431711502_n.jpg"
                            alt="Spa Treatment"
                            fill
                            className="object-cover rounded-none!"
                        />
                    </div>
                    <div className="w-full h-64 relative">
                        <Image
                            src="/assets/img/469209709_17879239428197064_3445656581431711502_n.jpg"
                            alt="Spa Environment"
                            fill
                            className="object-cover rounded-none!"
                        />
                    </div>
                    <div className="w-full h-64 relative">
                        <Image
                            src="/assets/img/469209709_17879239428197064_3445656581431711502_n.jpg"
                            alt="Expert Therapist"
                            fill
                            className="object-cover rounded-none!"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
