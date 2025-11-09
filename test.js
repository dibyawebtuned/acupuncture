<div
    ref={containerRef}
    className="flex justify-center flex-wrap gap-8 relative" // increased gap slightly for spacing
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => {
        setHovered(false);
        setMousePos({ x: 0, y: 0 });
    }}
    onMouseMove={handleMouseMove}
>
    {instagramImages.map((img, idx) => {
        // Increased sizes
        const width = 280;
        const height = idx % 2 === 0 ? 260 : 220;

        return (
            <div
                key={idx}
                className="relative transform transition-transform duration-300 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg"
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    transform: `rotate(${hovered ? 0 : rotations[idx]}deg)
            translateX(${hovered ? mousePos.x : 0}px)
            translateY(${hovered ? mousePos.y : 0}px)`,
                }}
            >
                {/* Decorative line behind image */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center">
                    <div
                        className="w-full h-1 bg-gray-300"
                        style={{
                            transform: `rotate(${rotations[idx]}deg)`,
                            opacity: 0.4,
                        }}
                    />
                </div>

                <a
                    href="https://www.instagram.com/vantagepointacupuncture/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={img}
                        alt={`Instagram ${idx + 1}`}
                        width={width}
                        height={height}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </a>
            </div>
        );
    })}
</div>
