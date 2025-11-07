<section className="bg-white">
    <div className="flex flex-col lg:flex-row items-center gap-6 px-4 sm:px-6 md:px-8">
        {/* LEFT TEXT CONTENT */}
        <div className="flex-1 flex justify-center">
            <div className="w-full max-w-[600px] flex flex-col gap-5 mt-10 lg:mt-0">
                <p className="text-sm tracking-wide text-gray-500 font-ppNeueMontreal mb-2 sm:mb-4">
                    ABOUT US
                </p>

                <h2 className="font-ppNeueMontreal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-snug sm:leading-tight mb-4 sm:mb-8">
                    Where wellness meets tranquility
                </h2>

                <p className="text-gray-600 font-ppNeueMontreal text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-justify">
                    At our spa, we are dedicated to creating an oasis of peace and relaxation
                    where you can truly unwind. With a passion for wellness and self-care, our
                    team of skilled therapists and specialists are committed to offering you the
                    highest quality treatments, tailored to meet your individual needs.
                </p>
            </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 w-full mt-6 lg:mt-0">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] overflow-hidden rounded-lg">
                <Image
                    src="/assets/img/469209709_17879239428197064_3445656581431711502_n.jpg"
                    alt="Facial treatment"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    </div>
</section>
