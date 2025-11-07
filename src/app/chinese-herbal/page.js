import React from "react";
import Image from "next/image";
import CustomButton from "@/component/Button";

export default function Page() {
    return (
        <section className="pt-[130px] bg-[#EAF0EA] pb-16">
            <div className="max-w-[1440px] mx-auto px-10 flex flex-col gap-[50px]">

                {/* Wrapper */}
                <div className="flex flex-col lg:flex-row items-center gap-10 pt-15 ">

                    {/* LEFT IMAGE */}
                    <div className="lg:w-1/2">
                        <div className="relative w-full h-[350px] lg:h-[500px] overflow-hidden shadow-lg">
                            <Image
                                src="/assets/img/three.jpg"
                                alt="Chinese Herbal Medicine"
                                fill
                                className="object-cover rounded-none!"
                                priority
                            />
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="w-full lg:w-1/2 text-[#2D2D2D] flex flex-col gap-5">
                        <div className="flex flex-col gap-[7px]">
                            <h1 className="text-3xl lg:text-5xl font-semibold mb-6">
                                Chinese Herbal Medicine
                            </h1>

                            <p className="text-base lg:text-lg leading-relaxed opacity-80">
                                Immerse yourself in an extraordinary relaxation journey with our
                                Signature Massage, a fully personalized treatment crafted to
                                rejuvenate your body, mind, and spirit. This exclusive service
                                blends expert techniques, luxurious enhancements, and thoughtful
                                details to create an unparalleled spa experience tailored just for
                                you.
                            </p>
                        </div>

                        {/* Button */}
                        <div>
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

                {/* Content */}
                <div className="flex gap-5">
                    {/* Left Content */}
                    <div className="w-8/12">
                        {/* What awaits you */}
                        <div>
                            <h3>What awaits you:</h3>
                            <ul className="list-disc pl-6 space-y-3">
                                <li className="font-ppneuemontreal">
                                    <span className="font-ppneuemontreal font-semibold">Personalized Consultation:</span>{" "}
                                    Begin your session with an in-depth consultation to uncover your preferences,
                                    whether it's relieving muscle tension, easing stress, or enhancing overall relaxation.
                                </li>

                                <li className="font-ppneuemontreal">
                                    <span className="font-ppneuemontreal font-semibold">Custom Aromatherapy Experience:</span>{" "}
                                    Choose from our curated selection of essential oils to complement your treatment,
                                    whether you desire calming lavender, invigorating citrus, or balancing eucalyptus blends.
                                </li>

                                <li className="font-ppneuemontreal">
                                    <span className="font-ppneuemontreal font-semibold">Masterful Techniques:</span>{" "}
                                    Our skilled therapists combine Swedish, deep tissue, and therapeutic strokes with precision
                                    and care, targeting tension points while improving circulation and releasing built-up stress.
                                </li>

                                <li className="font-ppneuemontreal">
                                    <span className="font-ppneuemontreal font-semibold">Warm Towel Therapy:</span>{" "}
                                    Indulge in the soothing application of heated towels, which promote muscle relaxation and
                                    provide a comforting touch during your treatment.
                                </li>

                                <li className="font-ppneuemontreal">
                                    <span className="font-ppneuemontreal font-semibold">Gentle Scalp and Foot Care:</span>{" "}
                                    Complete your experience with optional scalp and foot massages, focusing on often-overlooked
                                    areas to leave you fully restored.
                                </li>
                            </ul>
                        </div>

                        {/*  */}
                        <div>
                            <h3>What awaits you:</h3>
                            <ul className="list-disc pl-6 space-y-3">
                                <li className="font-ppneuemontreal">
                                    <span className="font-ppneuemontreal font-semibold">Personalized Consultation:</span>{" "}
                                    Begin your session with an in-depth consultation to uncover your preferences,
                                    whether it's relieving muscle tension, easing stress, or enhancing overall relaxation.
                                </li>

                                <li className="font-ppneuemontreal">
                                    <span className="font-ppneuemontreal font-semibold">Custom Aromatherapy Experience:</span>{" "}
                                    Choose from our curated selection of essential oils to complement your treatment,
                                    whether you desire calming lavender, invigorating citrus, or balancing eucalyptus blends.
                                </li>

                                <li className="font-ppneuemontreal">
                                    <span className="font-ppneuemontreal font-semibold">Masterful Techniques:</span>{" "}
                                    Our skilled therapists combine Swedish, deep tissue, and therapeutic strokes with precision
                                    and care, targeting tension points while improving circulation and releasing built-up stress.
                                </li>

                                <li className="font-ppneuemontreal">
                                    <span className="font-ppneuemontreal font-semibold">Warm Towel Therapy:</span>{" "}
                                    Indulge in the soothing application of heated towels, which promote muscle relaxation and
                                    provide a comforting touch during your treatment.
                                </li>

                                <li className="font-ppneuemontreal">
                                    <span className="font-ppneuemontreal font-semibold">Gentle Scalp and Foot Care:</span>{" "}
                                    Complete your experience with optional scalp and foot massages, focusing on often-overlooked
                                    areas to leave you fully restored.
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Right Content */}
                    <div className="w-4/12">
                        <div className="bg-[#0B3D91] text-white rounded-xl p-8 relative overflow-hidden shadow-md">

                            {/* Decorative Leaf (optional, remove if not needed) */}
                            <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
                                <img
                                    src="/assets/img/leaf.png"
                                    alt=""
                                    className="w-32 invert brightness-90 -scale-x-100"
                                />
                            </div>

                            <h3 className="text-3xl font-semibold mb-4">Service Details</h3>

                            <p className="text-sm leading-relaxed mb-6 opacity-90">
                                Our Revitalizing Facial restores a youthful glow and nourishes your skin with the finest products.
                            </p>

                            {/* Duration */}
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold">Duration</h4>
                                <p className="mt-1 text-sm opacity-90">50 min</p>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold">Price</h4>
                                <p className="mt-1 text-sm opacity-90">from $100 per person</p>
                            </div>

                            {/* Schedule */}
                            <div className="mb-8">
                                <h4 className="text-lg font-semibold">Schedule</h4>
                                <p className="mt-1 text-sm opacity-90">Mon - Sat: &nbsp; 8:00 AM – 10:00 PM</p>
                                <p className="text-sm opacity-90">Sun: &nbsp; 9:00 AM – 8:00 PM</p>
                            </div>

                            {/* Button */}
                            <a
                                href="/appointment"
                                className="block text-center bg-white text-black py-3 rounded-full font-medium hover:bg-gray-200 transition"
                            >
                                Book an appointment
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}