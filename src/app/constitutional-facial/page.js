"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import MarqueeSection from "@/component/Marquee";
import { CheckCircle, BadgeCheck, Heart, Leaf, ArrowRight, Star, Stethoscope, FlaskRound, RefreshCw } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import ServiceGallery from "@/component/ServiceGallery";

const Page = () => {


    useEffect(() => {
        const dot = document.querySelector(".cursor-dot");

        let x = 0;
        let y = 0;
        let targetX = 0;
        let targetY = 0;
        let ease = 0.12;

        const updateCursor = () => {
            // Lerp (linear interpolation)
            x += (targetX - x) * ease;
            y += (targetY - y) * ease;

            dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            requestAnimationFrame(updateCursor);
        };

        const handleMouseMove = (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);
        updateCursor();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);



    useEffect(() => {
        const dot = document.querySelector(".cursor-dot");

        const grow = () => dot.style.transform += " scale(2)";
        const shrink = () => dot.style.transform = dot.style.transform.replace(" scale(2)", "");

        document.querySelectorAll("a, button").forEach((el) => {
            el.addEventListener("mouseenter", grow);
            el.addEventListener("mouseleave", shrink);
        });

        return () => {
            document.querySelectorAll("a, button").forEach((el) => {
                el.removeEventListener("mouseenter", grow);
                el.removeEventListener("mouseleave", shrink);
            });
        };
    }, []);



    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <div>
            <div className="pt-[130px] bg-[#EAF0F0]">
                {/* Top Section */}
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-15">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
                        {/* Left Image */}
                        <div className="flex-1 w-full"
                            data-aos="fade-right"
                        >
                            <div className="relative w-full min-h-[280px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-md shadow-md">
                                <Image
                                    src="/assets/img/facial+acu+copy+3.webp"
                                    alt="Facial Acupuncture"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="flex-1 w-full text-left">
                            <div>
                                <div
                                    className="text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    services
                                </div>
                                <div className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[56px] text-gray-700 font-medium mb-3 font-ppneuemontreal leading-tight"
                                    data-aos="fade-up"
                                    data-aos-delay="150"
                                >
                                    Constitutional Facial <span className="font-testSignifier"> Acupuncture </span>
                                </div>
                                <div className="font-ppNeueMontreal text-justify text-gray-500 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    Constitutional Facial Acupuncture is a gentle, non-invasive treatment
                                    that combines traditional Chinese medicine with modern holistic
                                    skincare. It works by stimulating specific acupuncture points
                                    on the face and body to support natural rejuvenation, improve
                                    energy flow, and enhance overall wellness.
                                </div>
                            </div>


                            <div className="flex pt-5 sm:pt-10">
                                <Link href="/book"
                                    className="bg-[#0b3d91]! text-white! text-[14px] py-2.5 px-14 rounded-full font-medium no-underline!">
                                    Book an Appointment
                                </Link>
                            </div>

                            {/* <div className="w-full flex flex-wrap mt-6 -mx-5">
                                {[
                                    {
                                        icon: <Leaf size={20} className="text-white" />,
                                        title: "Balance",
                                        text: "Encourage collagen production",
                                    },
                                    {
                                        icon: <Heart size={20} className="text-white" />,
                                        title: "Digestion",
                                        text: "Improve blood circulation",
                                    },
                                    {
                                        icon: <CheckCircle size={20} className="text-white" />,
                                        title: "Sleep",
                                        text: "Lift and tone facial muscles",
                                    },
                                    {
                                        icon: <Star size={20} className="text-white" />,
                                        title: "Immunity",
                                        text: "Reduce the appearance of fine lines",
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="w-full sm:w-1/2 px-5 mb-5 flex gap-4"
                                        data-aos="fade-up"
                                        data-aos-delay={250 + index * 100}
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center rounded-md shrink-0 bg-[#0B3D91]">
                                            {item.icon}
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="text-[22px] font-testSignifier font-semibold text-gray-700">{item.title}</span>
                                            <span className="font-ppNeueMontreal text-gray-500 text-[15px] sm:text-[16px] md:text-[17px]">{item.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </div> */}

                        </div>
                    </div>
                </div>

                {/* MarqueeSection */}
                <div className="pb-15">
                    <MarqueeSection />
                </div>

                {/* Two */}
                <div className="flex flex-col lg:flex-row gap-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pb-15">
                    {/* Left (8/12 on large screens) */}
                    <div className="w-full lg:w-8/12 flex flex-col gap-15">
                        {/* What to expect */}
                        <div className="">
                            <div className="flex flex-col gap-[20px]">
                                {/* Heading */}
                                <div className="flex flex-col gap-[15px]">
                                    <div
                                        className="text-[32px] md:text-[38px] lg:text-[38px] text-gray-700 font-ppNeueMontreal font-medium leading-snug"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        What to expect your <span className="font-testSignifier "> Constitutional Facial </span>
                                    </div>

                                    <div>
                                        <div className="text-gray-500 text-justify font-ppNeueMontreal text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed"
                                            data-aos="fade-up"
                                            data-aos-delay="150"
                                        >
                                            This approach focuses on your overall constitutional health as well as facial concerns,
                                            working to enhance balance and relaxation. Treatments are tailored to your personal
                                            health status and goals, supporting natural radiance without the use of invasive
                                            procedures.
                                        </div>

                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pl-0!">
                                            {[
                                                "Gentle insertion of fine needles on face and body points",
                                                "Calming, tailored sessions responding to health and aesthetic goals",
                                                "Focus on constitutional health beyond cosmetic effects",
                                            ].map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-3 font-ppNeueMontreal text-gray-500 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed pl-0!"
                                                    data-aos="fade-up"
                                                    data-aos-delay={200 + index * 100}
                                                >
                                                    <div className="flex items-center justify-center w-7 h-7 rounded-full mt-0.5 shrink-0">
                                                        <BadgeCheck size={20} className="text-[#0B3D91]" />
                                                    </div>
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>


                                        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-md"
                                            data-aos="fade-up"
                                            data-aos-delay="400"
                                        >
                                            <Image
                                                src="/assets/img/four.webp"
                                                alt="Chinese Herbal Medicine"
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        {/* Feature Section */}
                        {/* <div className="w-full flex flex-col gap-10 justify-center rounded-lg">
                            <div className="text-[32px] md:text-[38px] lg:text-[38px] text-gray-700 font-ppNeueMontreal font-medium leading-snug">
                                Process <span className=""> Overview </span>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-24">
                                <div className="text-center w-48">
                                    <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center shadow-md">
                                        <span className="">
                                            <Stethoscope size={40} className="text-[#0B3D91]" />
                                        </span>
                                    </div>

                                    <div className="text-[24px] font-semibold mt-4 text-gray-700">01</div>
                                    <p className="text-[16px] text-gray-500 mt-2 font-ppNeueMontreal">
                                        Initial consultation to understand your health background
                                    </p>
                                </div>

                                <div className="text-center w-48 relative">
                                    <div className="absolute -left-20 top-10 w-20 h-8 border-dashed border-b-2 border-gray-300"></div>
                                    <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center shadow-md">
                                        <span className="">
                                            <FlaskRound size={40} className="text-[#0B3D91]" />
                                        </span>
                                    </div>

                                    <div className="text-[24px] font-semibold mt-4 text-gray-700">02</div>
                                    <p className="text-[16px] text-gray-500 mt-2 font-ppNeueMontreal">
                                        Series of scheduled treatment sessions scheduled
                                    </p>
                                </div>

                                <div className="text-center w-48 relative">
                                    <div className="absolute -left-20 top-10 w-20 h-8 border-dashed border-b-2 border-gray-300"></div>
                                    <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center shadow-md">
                                        <span className="">
                                            <RefreshCw size={40} className="text-[#0B3D91]" />
                                        </span>
                                    </div>

                                    <div className="text-[24px] font-semibold mt-4 text-gray-700">03</div>
                                    <p className="text-[16px] text-gray-500 mt-2 font-ppNeueMontreal">
                                        Regular assessment of results with adjustments as appropriate
                                    </p>
                                </div>
                            </div>
                        </div> */}

                        <div className="w-full flex flex-col gap-10 justify-center bg-gray-50 py-10 rounded-lg">
                            <div className="text-[32px] md:text-[38px] lg:text-[38px] text-gray-700 font-ppNeueMontreal font-medium leading-snug px-10">
                                Process <span className="font-testSignifier"> Overview </span>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-24">
                                <div className="text-center w-48">
                                    <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center shadow-md">
                                        <span className="">
                                            <Stethoscope size={40} className="text-[#0B3D91]" />
                                        </span>
                                    </div>

                                    <div className="text-[24px] font-semibold mt-4 text-gray-700">01</div>
                                    <p className="text-[16px] text-gray-500 mt-2 font-ppNeueMontreal">
                                        Initial consultation to understand your health background
                                    </p>
                                </div>

                                <div className="text-center w-48 relative">
                                    <div className="absolute -left-20 top-10 w-20 h-8 border-dashed border-b-2 border-gray-300"></div>
                                    <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center shadow-md">
                                        <span className="">
                                            <FlaskRound size={40} className="text-[#0B3D91]" />
                                        </span>
                                    </div>

                                    <div className="text-[24px] font-semibold mt-4 text-gray-700">02</div>
                                    <p className="text-[16px] text-gray-500 mt-2 font-ppNeueMontreal">
                                        Series of scheduled treatment sessions
                                    </p>
                                </div>

                                <div className="text-center w-48 relative">
                                    <div className="absolute -left-20 top-10 w-20 h-8 border-dashed border-b-2 border-gray-300"></div>
                                    <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center shadow-md">
                                        <span className="">
                                            <RefreshCw size={40} className="text-[#0B3D91]" />
                                        </span>
                                    </div>

                                    <div className="text-[24px] font-semibold mt-4 text-gray-700">03</div>
                                    <p className="text-[16px] text-gray-500 mt-2 font-ppNeueMontreal">
                                        Regular assessment of results with adjustments as appropriate
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Why Choose */}
                        <div className="">
                            <div className="flex flex-col gap-[20px]">
                                {/* Heading */}
                                <div className="flex flex-col gap-[15px]">
                                    <div
                                        className="text-[32px] md:text-[38px] lg:text-[38px] text-gray-700 font-ppneuemontreal font-medium leading-snug"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        Why Chinese <span className="font-testSignifier"> Constitutional Facial</span>
                                    </div>
                                    <div className="text-gray-500 font-ppNeueMontreal text-justify text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed"
                                        data-aos="fade-up"
                                        data-aos-delay="150"
                                    >
                                        Our formulas use pure herbs, roots, and minerals — each selected for their natural healing properties and prepared with traditional care.
                                        Rediscover your natural glow with our Signature Facials, expertly designed to cleanse, hydrate, and rejuvenate your skin.
                                    </div>
                                </div>


                                {/* Features */}
                                <div className="flex flex-col gap-10 bg-gray-50 px-6 py-10 rounded-lg">
                                    {[
                                        {
                                            icon: <Leaf className="w-5 h-5 text-white" />,
                                            title: "Natural Ingredients",
                                            text: "Enhances skin vitality and facial rejuvenation naturally",
                                        },
                                        {
                                            icon: <Heart className="w-5 h-5 text-white" />,
                                            title: "Holistic Healing",
                                            text: "Promotes overall body balance and relaxation",
                                        },
                                        {
                                            icon: <CheckCircle className="w-5 h-5 text-white" />,
                                            title: "Deep Fertility Support",
                                            text: "Non-invasive treatment promoting healthy circulation",
                                        },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="group flex flex-col items-start justify-between gap-8 bg-gray-50 rounded-lg"
                                            data-aos="zoom-out"
                                            data-aos-delay={200 + index * 150}
                                        >
                                            <div className="flex items-center gap-5">
                                                {/* Icon Circle */}
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3D91] shrink-0 transition-all duration-300 group-hover:bg-[#062B6A] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(11,61,145,0.5)]">
                                                    {item.icon}
                                                </div>


                                                {/* Text */}
                                                <div className="flex flex-col -gap-1">
                                                    <div className="text-[22px] font-testSignifier font-semibold text-gray-600">
                                                        {item.title}
                                                    </div>
                                                    <div className="text-gray-500 font-ppNeueMontreal text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[16px] leading-relaxed">
                                                        {item.text}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Right (4/12 on large screens) wewe */}
                    <div className="w-full lg:w-4/12 flex items-center justify-center">
                        {/* Sticky Sidebar with Hover Animations */}
                        <div className="lg:sticky lg:top-28 self-start transition-transform duration-300 ease-out">
                            <div className="bg-[#0B3D91] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                                {/* Decorative Leaf */}
                                <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
                                    <img
                                        src="/assets/img/leaf.png"
                                        alt=""
                                        className="w-24 sm:w-32 invert brightness-90 -scale-x-100"
                                    />
                                </div>

                                {/* Heading */}
                                <div className="text-2xl sm:text-3xl mb-4 font-ppneuemontreal font-medium">
                                    Service Details
                                </div>

                                {/* Description */}
                                <div className="text-sm sm:text-base leading-relaxed mb-6 opacity-90">
                                    Discover the healing power of traditional Chinese herbal medicine, designed to
                                    restore balance and promote overall well-being.
                                </div>

                                {/* Duration */}
                                <div className="mb-5">
                                    <div className="text-lg sm:text-xl font-medium">Duration</div>
                                    <div className="mt-1 text-sm sm:text-base opacity-90">45–60 minutes per session</div>
                                </div>

                                {/* Price */}
                                <div className="mb-5">
                                    <div className="text-lg sm:text-xl font-medium">Price</div>
                                    <div className="mt-1 text-sm sm:text-base opacity-90">$80 per session</div>
                                </div>

                                {/* Schedule */}
                                <div className="mb-8">
                                    <div className="text-lg sm:text-xl font-medium">Schedule</div>
                                    <div className="mt-1 text-sm sm:text-base opacity-90">
                                        Monday – Friday: 9:00 AM – 6:00 PM
                                    </div>
                                    <div className="text-sm sm:text-base opacity-90">
                                        Saturday: 9:00 AM – 2:00 PM
                                    </div>
                                    <div className="text-sm sm:text-base opacity-90">
                                        Sunday: Closed
                                    </div>
                                </div>

                                {/* Button */}
                                <a
                                    href="/appointment"
                                    className="block text-center no-underline! bg-white! text-[#0B3D91] py-3 rounded-full font-medium hover:bg-gray-200 transition"
                                >
                                    Book an Appointment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cursor-dot fixed top-0 left-0 w-3 h-3 bg-[#0B3D91] rounded-full pointer-events-none mix-blend-difference z-[9999]"></div>


            {/* ServiceGallery */}
            <ServiceGallery />
        </div>
    );
};

export default Page;





// "use client";
// import React, { useEffect } from "react";
// import Image from "next/image";
// import { CheckCircle, Heart, Leaf, ArrowRight } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Page = () => {
//     useEffect(() => {
//         AOS.init({
//             duration: 1000,
//             easing: "ease-in-out",
//             once: true,
//             offset: 100,
//         });
//     }, []);

//     return (
//         <div className="pt-[130px] bg-[#EAF0F0]">
//             <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-15">
//                 <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
//                     <div className="flex-1 w-full">
//                         <div className="relative w-full min-h-[280px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-md shadow-md">
//                             <Image
//                                 src="/assets/img/facial+acu+copy+3.webp"
//                                 alt="Facial Acupuncture"
//                                 fill
//                                 className="object-cover"
//                                 priority
//                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
//                             />
//                         </div>
//                     </div>

//                     <div className="flex-1 w-full text-left">
//                         <div>
//                             <div
//                                 className="text-[#6D6A5F] font-testsignifier uppercase text-xs sm:text-sm tracking-widest"
//                                 data-aos="fade-up"
//                                 data-aos-delay="100"
//                             >
//                                 services
//                             </div>
//                             <div className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[56px] font-medium mb-3 font-ppneuemontreal leading-tight">
//                                 Constitutional Facial Acupuncture
//                             </div>
//                             <div className="font-ppNeueMontreal text-gray-500 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
//                                 Rather than simply masking symptoms, Chinese Herbal Medicine targets the root causes of imbalance — helping your body return to a natural state of wellness. Each herbal formula is carefully crafted and customized to your individual constitution, lifestyle, and condition using pure, natural ingredients such as roots, bark, flowers, leaves, and minerals.
//                             </div>
//                         </div>

//                         <ul className="mt-6 pl-0!">
//                             {[
//                                 "Balances internal body systems naturally",
//                                 "Supports digestion and circulation",
//                                 "Improves sleep and reduces stress",
//                                 "Enhances immune function",
//                             ].map((item, index) => (
//                                 <li
//                                     key={index}
//                                     className="flex items-start gap-3 font-ppNeueMontreal text-gray-500 text-[15px] sm:text-[16px] pl-0!"
//                                 >
//                                     <CheckCircle
//                                         size={18}
//                                         className="text-[#0B3D91] mt-0.5 shrink-0"
//                                     />
//                                     <span className="max-w-[90%]">{item}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex flex-col lg:flex-row gap-[40px] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pb-15">

//                 <div className="w-full lg:w-8/12 flex flex-col gap-15">

//                     <div className="">
//                         <div className="flex flex-col gap-[20px]">

//                             <div className="flex flex-col gap-[15px]">
//                                 <div
//                                     className="text-[32px] md:text-[38px] lg:text-[38px] font-ppneuemontreal font-medium leading-snug"
//                                     data-aos="fade-up"
//                                     data-aos-delay="150"
//                                 >
//                                     What to expect?
//                                 </div>
//                                 <div>
//                                     <div className="text-gray-500 font-ppNeueMontreal text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
//                                         Rediscover your natural glow with our Signature Facials, expertly designed to cleanse, hydrate, and rejuvenate your skin.
//                                         Each facial is tailored to your unique skin type and concerns, combining high-performance skincare with gentle, therapeutic techniques.
//                                         From deep pore cleansing to collagen-boosting serums, we bring out your skin's healthiest, most radiant version.
//                                         Our experienced estheticians use only premium, skin-friendly products, ensuring a soothing and effective treatment with visible results.
//                                         Whether you are seeking age-defying care, hydration, or a calming reset, our Signature Facials offer a deeply relaxing experience
//                                     </div>

//                                     <ul className="pl-0!">
//                                         {[
//                                             "Deep cleansing to remove impurities and unclog pores",
//                                             "Hydration boost for smoother, plumper skin",
//                                             "Customized mask treatment based on your skin type",
//                                             "Gentle facial massage to improve circulation and glow",
//                                             "Use of premium, skin-safe herbal and natural products",
//                                             "Visible results — refreshed, balanced, and radiant skin",
//                                         ].map((item, index) => (
//                                             <li
//                                                 key={index}
//                                                 className="pl-0! flex items-start gap-3 font-ppNeueMontreal text-gray-500 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed"
//                                             >
//                                                 <div className="flex items-center justify-center w-7 h-7 rounded-full mt-0.5 shrink-0">
//                                                     <CheckCircle size={18} className="text-[#0B3D91]" />
//                                                 </div>
//                                                 <span className="max-w-[90%] leading-relaxed">{item}</span>
//                                             </li>
//                                         ))}
//                                     </ul>

//                                     <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-md shadow-md">
//                                         <Image
//                                             src="/assets/img/469245827_17879239419197064_4235272167280555836_n.jpg"
//                                             alt="Chinese Herbal Medicine"
//                                             fill
//                                             className="object-cover"
//                                             priority
//                                         />
//                                     </div>

//                                 </div>

//                             </div>
//                         </div>
//                     </div>


//                     <div className="">
//                         <div className="flex flex-col gap-[20px]">

//                             <div className="flex flex-col gap-[15px]">

//                                 <div
//                                     className="text-[32px] md:text-[38px] lg:text-[38px] font-ppneuemontreal font-medium leading-snug"
//                                     data-aos="fade-up"
//                                     data-aos-delay="150"
//                                 >
//                                     Why Chinese Herbal Medicine?
//                                 </div>
//                                 <div className="text-gray-500 font-ppNeueMontreal text-justify text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
//                                     Our formulas use pure herbs, roots, and minerals — each selected for their natural healing properties and prepared with traditional care.
//                                     Rediscover your natural glow with our Signature Facials, expertly designed to cleanse, hydrate, and rejuvenate your skin.
//                                     Each facial is tailored to your unique skin type and concerns, combining high-performance skincare with gentle, therapeutic techniques.
//                                     From deep pore cleansing to collagen-boosting serums, we bring out your skin is healthiest, most radiant version.
//                                 </div>
//                             </div>


//                             <div className="flex flex-col gap-[20px]">

//                                 <div
//                                     className="flex flex-col items-center justify-between gap-8 bg-gray-50 py-7 px-6 rounded-lg"
//                                     data-aos="zoom-out"
//                                 >
//                                     <div className="flex items-start gap-5">

//                                         <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3D91] flex-shrink-0">
//                                             <Leaf className="w-5 h-5 text-white" />
//                                         </div>


//                                         <div>
//                                             <div className="text-[20px] mb-2 font-ppneuemontreal font-semibold text-[#0B3D91]">
//                                                 Natural Ingredients
//                                             </div>
//                                             <div className="text-gray-500 font-ppNeueMontreal text-[16px] leading-relaxed">
//                                                 Our formulas use pure herbs, roots, and minerals — each selected for their natural healing properties and prepared with traditional care.
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>


//                                 <div
//                                     className="flex flex-col items-center justify-between gap-8 bg-gray-50 py-7 px-6 rounded-lg"
//                                     data-aos="zoom-out"
//                                 >
//                                     <div className="flex items-start gap-5">
//                                         <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3D91] flex-shrink-0">
//                                             <Heart className="h-5 w-5 text-white" />
//                                         </div>
//                                         <div>
//                                             <div className="text-[20px] mb-2 font-ppneuemontreal font-semibold text-[#0B3D91]">
//                                                 Holistic Healing
//                                             </div>
//                                             <div className="text-gray-500 font-ppNeueMontreal text-[16px]">
//                                                 Rather than treating symptoms, our approach addresses the root causes of imbalance, helping the body heal from within.
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>


//                                 <div
//                                     className="flex flex-col items-center justify-between gap-8 bg-gray-50 py-7 px-6 rounded-lg"
//                                     data-aos="zoom-out"
//                                 >
//                                     <div className="flex items-start gap-5">
//                                         <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3D91] flex-shrink-0">
//                                             <Heart className="h-5 w-5 text-white" />
//                                         </div>
//                                         <div>
//                                             <div className="text-[20px] mb-2 font-ppneuemontreal font-semibold text-[#0B3D91]">
//                                                 Holistic Healing
//                                             </div>
//                                             <div className="text-gray-500 font-ppNeueMontreal text-[16px]">
//                                                 Rather than treating symptoms, our approach addresses the root causes of imbalance, helping the body heal from within.
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>


//                 <div className="w-full lg:w-4/12 flex items-center justify-center">

//                     <div className="lg:sticky lg:top-28 self-start transition-transform duration-300 ease-out">
//                         <div className="bg-[#0B3D91] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">

//                             <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
//                                 <img
//                                     src="/assets/img/leaf.png"
//                                     alt=""
//                                     className="w-24 sm:w-32 invert brightness-90 -scale-x-100"
//                                 />
//                             </div>


//                             <div className="text-2xl sm:text-3xl mb-4 font-ppneuemontreal font-medium">
//                                 Service Details
//                             </div>


//                             <div className="text-sm sm:text-base leading-relaxed mb-6 opacity-90">
//                                 Discover the healing power of traditional Chinese herbal medicine, designed to
//                                 restore balance and promote overall well-being.
//                             </div>


//                             <div className="mb-5">
//                                 <div className="text-lg sm:text-xl font-medium">Duration</div>
//                                 <div className="mt-1 text-sm sm:text-base opacity-90">45–60 minutes per session</div>
//                             </div>


//                             <div className="mb-5">
//                                 <div className="text-lg sm:text-xl font-medium">Price</div>
//                                 <div className="mt-1 text-sm sm:text-base opacity-90">$80 per session</div>
//                             </div>


//                             <div className="mb-8">
//                                 <div className="text-lg sm:text-xl font-medium">Schedule</div>
//                                 <div className="mt-1 text-sm sm:text-base opacity-90">
//                                     Monday – Friday: 9:00 AM – 6:00 PM
//                                 </div>
//                                 <div className="text-sm sm:text-base opacity-90">
//                                     Saturday: 9:00 AM – 2:00 PM
//                                 </div>
//                                 <div className="text-sm sm:text-base opacity-90">
//                                     Sunday: Closed
//                                 </div>
//                             </div>


//                             <a
//                                 href="/appointment"
//                                 className="block text-center no-underline! bg-white! text-[#0B3D91] py-3 rounded-full font-medium hover:bg-gray-200 transition"
//                             >
//                                 Book an Appointment
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;
