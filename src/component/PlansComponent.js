import Image from "next/image";
import TestimonialSlider from "./Testimonial";

export default function TailoredPlansSection() {
    return (
        <section className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">

            {/* FULL BACKGROUND IMAGE */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/assets/img/footer_one.jpg"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* TOP COLOR OVERLAY */}
            <div className="absolute top-0 left-0 w-full h-[300px] bg-[#EFF4EC]/90"></div>

            {/* BOTTOM COLOR OVERLAY */}
            <div className="absolute bottom-0 left-0 w-full h-[400px] bg-[#0B3D91]/90"></div>

            {/* FLOATING CARD CONTENT */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 container flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-2xl">
                {/* LEFT IMAGE */}
                <div className="relative w-full lg:w-1/2 h-auto">
                    <Image
                        src="/assets/img/7515-1-Tuning-Forks.jpg"
                        alt="Spa relaxation"
                        fill
                        className="object-cover rounded-none!"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="w-full lg:w-1/2 bg-black/40 backdrop-blur-md text-white p-8 lg:p-12 flex flex-col justify-center">
                    <div className="text-3xl lg:text-4xl font-semibold mb-6 leading-snug font-testsignifier">
                        Tailored plans for <br /> every need
                    </div>

                    <div className="space-y-6 font-testsignifier">

                        <div data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="300"
                        >
                            <div className="text-lg font-medium border-b border-white/40 pb-2">
                                Essential retreat
                            </div>
                            <p className="text-sm opacity-90 mt-2">
                                A refreshing, short revitalizing treatment to reset your body and mind.
                            </p>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="200"
                        >
                            <div className="text-lg font-medium border-b border-white/40 pb-2">
                                Serenity package
                            </div>
                            <p className="text-sm opacity-90 mt-2">
                                A soothing blend of massages and facial therapy for deep relaxation.
                            </p>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="300"
                        >
                            <div className="text-lg font-medium border-b border-white/40 pb-2">
                                Luxe experience
                            </div>
                            <p className="text-sm opacity-90 mt-2">
                                A premium body wrap, scrub, and massage for the ultimate spa indulgence.
                            </p>
                        </div>

                    </div>

                    <div className="mt-7" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B3D91] text-black hover:bg-gray-300 transition">
                            View all →
                        </button>
                    </div>
                </div>
            </div>


        </section>
    );
}
