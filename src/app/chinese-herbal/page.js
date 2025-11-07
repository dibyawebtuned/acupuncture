import React from "react";
import Image from "next/image";
import CustomButton from "@/component/Button";

export default function Page() {
    return (
        <section className="pt-[130px] bg-[#EAF0F0] pb-15">
            <div className="max-w-[1440px] mx-auto px-5 sm:px-10 flex flex-col gap-[50px]">

                {/* Wrapper */}
                {/* <div className="flex flex-col lg:flex-row items-center gap-10 pt-15 ">
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

                    <div className="w-full lg:w-1/2 text-[#2D2D2D] flex flex-col gap-5">
                        <div className="flex flex-col gap-[7px]">
                            <div className="text-3xl lg:text-5xl font-medium mb-6 font-ppneuemontreal">
                                Chinese Herbal Medicine
                            </div>

                            <div className="text-base lg:text-lg leading-relaxed opacity-80 font-ppneuemontreal">
                                Chinese Herbal Medicine is an ancient healing practice that uses natural plant, mineral, and sometimes
                                animal-based ingredients to restore balance and promote wellness.
                                Each formula is carefully tailored to support your body’s unique needs, helping to strengthen immunity,
                                improve digestion, and enhance overall vitality.
                            </div>
                        </div>

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
                </div> */}

                {/* Responsivenss */}
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pt-8 lg:pt-16">
                    {/* LEFT IMAGE */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[500px] overflow-hidden shadow-lg rounded-none!">
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
                        <div className="flex flex-col gap-2 sm:gap-3">
                            <div className="text-2xl sm:text-3xl lg:text-5xl font-medium font-ppneuemontreal">
                                Chinese Herbal Medicine
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


                {/* Content */}
                {/* <div className="flex gap-5">
                    <div className="w-8/12">
                        <div>
                            <div className="text-[32px] text-[#2B2B2B] font-ppneuemontreal font-medium sm:leading-14">
                                How It Works:
                            </div>

                            <ul className="list-disc pl-6 space-y-3">
                                <li className="font-ppneuemontreal">
                                    <span className="font-ppneuemontreal font-semibold">Consultation:</span>{" "}
                                    Begin your session with a detailed consultation to understand your health, lifestyle, and wellness goals.
                                    Our licensed practitioners carefully evaluate your symptoms to create a personalized herbal plan tailored to your body’s needs.
                                </li>

                                <li className="font-ppneuemontreal">
                                    <span className="font-ppneuemontreal font-semibold">Custom Herbal Formula:</span>{" "}
                                    Receive a unique herbal blend prepared specifically for you. Depending on your condition, the formula may include teas,
                                    powders, capsules, or tinctures designed to restore balance, boost immunity, and enhance overall vitality.
                                </li>

                                <li className="font-ppneuemontreal">
                                    <span className="font-ppneuemontreal font-semibold">Personalized Treatment:</span>{" "}
                                    Each formula targets specific imbalances in your body, supporting digestion, reducing stress, and improving
                                    energy levels. The treatment plan is adjusted over time to ensure the best results for your long-term wellness.
                                </li>

                                <li className="font-ppneuemontreal">
                                    <span className="font-ppneuemontreal font-semibold">Safe & Natural Ingredients:</span>{" "}
                                    All herbal ingredients are carefully selected for their safety and efficacy. We combine centuries-old
                                    Chinese medicine knowledge with modern understanding to provide treatments that are gentle, natural,
                                    and effective.
                                </li>

                                <li className="font-ppneuemontreal">
                                    <span className="font-ppneuemontreal font-semibold">Follow-Up & Adjustment:</span>{" "}
                                    Regular follow-ups help track your progress and fine-tune your herbal formula. This ensures
                                    your body continues to heal and maintain balance, promoting sustainable health and vitality.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="text-[32px] text-[#2B2B2B] font-ppneuemontreal font-medium sm:leading-14">
                                Why Choose Us:
                            </div>

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

                    <div className="w-full lg:w-4/12">
                        <div className="sticky top-20">
                            <div className="bg-[#0B3D91] text-white rounded-xl p-8 relative overflow-hidden shadow-md">
                                <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
                                    <img
                                        src="/assets/img/leaf.png"
                                        alt=""
                                        className="w-32 invert brightness-90 -scale-x-100"
                                    />
                                </div>

                                <div className="text-3xl mb-4">
                                    Service Details
                                </div>

                                <div className="text-sm leading-relaxed mb-6 opacity-90">
                                    Our Revitalizing Facial restores a youthful glow and nourishes your skin with the finest products.
                                </div>

                                <div className="mb-6">
                                    <div className="text-lg">Duration</div>
                                    <div className="mt-1 text-sm opacity-90">50 min</div>
                                </div>

                                <div className="mb-6">
                                    <div className="text-lg">Price</div>
                                    <div className="mt-1 text-sm opacity-90">from $100 per person</div>
                                </div>

                                <div className="mb-8">
                                    <div className="text-lg">Schedule</div>
                                    <div className="mt-1 text-sm opacity-90">Mon - Sat: &nbsp; 8:00 AM – 10:00 PM</div>
                                    <div className="text-sm opacity-90">Sun: &nbsp; 9:00 AM – 8:00 PM</div>
                                </div>


                                <a
                                    href="/appointment"
                                    className="block no-underline! text-center bg-white! text-black py-3 rounded-full font-medium hover:bg-gray-200 transition"
                                >
                                    Book an appointment
                                </a>

                            </div>
                        </div>
                    </div>
                </div> */}


                {/* Responsivenss */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 pt-10">
                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-8/12 flex flex-col gap-12">
                        {/* How It Works */}
                        <div>
                            <div className="text-2xl sm:text-3xl lg:text-[32px] text-[#2B2B2B] font-ppneuemontreal font-medium mb-4">
                                How It Works:
                            </div>

                            <ul className="list-disc pl-6 space-y-4 text-sm sm:text-base leading-relaxed text-[#2B2B2B]">
                                <li>
                                    <span className="font-semibold">Consultation:</span>{" "}
                                    Begin your session with a detailed consultation to understand your health, lifestyle, and wellness goals.
                                    Our licensed practitioners carefully evaluate your symptoms to create a personalized herbal plan tailored to your body’s needs.
                                </li>

                                <li>
                                    <span className="font-semibold">Custom Herbal Formula:</span>{" "}
                                    Receive a unique herbal blend prepared specifically for you. Depending on your condition, the formula may include teas,
                                    powders, capsules, or tinctures designed to restore balance, boost immunity, and enhance overall vitality.
                                </li>

                                <li>
                                    <span className="font-semibold">Personalized Treatment:</span>{" "}
                                    Each formula targets specific imbalances in your body, supporting digestion, reducing stress, and improving
                                    energy levels. The treatment plan is adjusted over time to ensure the best results for your long-term wellness.
                                </li>

                                <li>
                                    <span className="font-semibold">Safe & Natural Ingredients:</span>{" "}
                                    All herbal ingredients are carefully selected for their safety and efficacy. We combine centuries-old
                                    Chinese medicine knowledge with modern understanding to provide treatments that are gentle, natural,
                                    and effective.
                                </li>

                                <li>
                                    <span className="font-semibold">Follow-Up & Adjustment:</span>{" "}
                                    Regular follow-ups help track your progress and fine-tune your herbal formula. This ensures
                                    your body continues to heal and maintain balance, promoting sustainable health and vitality.
                                </li>
                            </ul>
                        </div>

                        {/* Why Choose Us */}
                        <div>
                            <div className="text-2xl sm:text-3xl lg:text-[32px] text-[#2B2B2B] font-ppneuemontreal font-medium mb-4">
                                Why Choose Us:
                            </div>

                            <ul className="list-disc pl-6 space-y-4 text-sm sm:text-base leading-relaxed text-[#2B2B2B]">
                                <li>
                                    <span className="font-semibold">Personalized Consultation:</span>{" "}
                                    Begin your session with an in-depth consultation to uncover your preferences,
                                    whether it's relieving muscle tension, easing stress, or enhancing overall relaxation.
                                </li>

                                <li>
                                    <span className="font-semibold">Custom Aromatherapy Experience:</span>{" "}
                                    Choose from our curated selection of essential oils to complement your treatment,
                                    whether you desire calming lavender, invigorating citrus, or balancing eucalyptus blends.
                                </li>

                                <li>
                                    <span className="font-semibold">Masterful Techniques:</span>{" "}
                                    Our skilled therapists combine Swedish, deep tissue, and therapeutic strokes with precision
                                    and care, targeting tension points while improving circulation and releasing built-up stress.
                                </li>

                                <li>
                                    <span className="font-semibold">Warm Towel Therapy:</span>{" "}
                                    Indulge in the soothing application of heated towels, which promote muscle relaxation and
                                    provide a comforting touch during your treatment.
                                </li>

                                <li>
                                    <span className="font-semibold">Gentle Scalp and Foot Care:</span>{" "}
                                    Complete your experience with optional scalp and foot massages, focusing on often-overlooked
                                    areas to leave you fully restored.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="w-full lg:w-4/12">
                        <div className="lg:sticky lg:top-20">
                            <div className="bg-[#0B3D91] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-md">
                                {/* Decorative Leaf */}
                                <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
                                    <img
                                        src="/assets/img/leaf.png"
                                        alt=""
                                        className="w-24 sm:w-32 invert brightness-90 -scale-x-100"
                                    />
                                </div>

                                <div className="text-2xl sm:text-3xl mb-4 font-ppneuemontreal font-medium">
                                    Service Details
                                </div>

                                <div className="text-sm sm:text-base leading-relaxed mb-6 opacity-90">
                                    Our Revitalizing Facial restores a youthful glow and nourishes your skin with the finest products.
                                </div>

                                {/* Duration */}
                                <div className="mb-5">
                                    <div className="text-lg sm:text-xl font-medium">Duration</div>
                                    <div className="mt-1 text-sm sm:text-base opacity-90">50 min</div>
                                </div>

                                {/* Price */}
                                <div className="mb-5">
                                    <div className="text-lg sm:text-xl font-medium">Price</div>
                                    <div className="mt-1 text-sm sm:text-base opacity-90">from $100 per person</div>
                                </div>

                                {/* Schedule */}
                                <div className="mb-8">
                                    <div className="text-lg sm:text-xl font-medium">Schedule</div>
                                    <div className="mt-1 text-sm sm:text-base opacity-90">Mon - Sat: &nbsp; 8:00 AM – 10:00 PM</div>
                                    <div className="text-sm sm:text-base opacity-90">Sun: &nbsp; 9:00 AM – 8:00 PM</div>
                                </div>

                                {/* Button */}
                                <a
                                    href="/appointment"
                                    className="block text-center bg-white! text-white py-3 rounded-full font-medium hover:bg-gray-200 transition no-underline!"
                                >
                                    Book an appointment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}