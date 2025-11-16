"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ServiceGallery = () => {
  const images = [
    "/assets/img/469209709_17879239428197064_3445656581431711502_n.jpg",
    "/assets/img/trauma-informed-therapist,-somatic-trauma-coaching-and-speaker-abi-blake-9.webp",
    "/assets/img/Traditional-Chinese-Medicine-is-diagnosing-women's-pulse-.webp",
    "/assets/img/TCM article visual_.renditionimage.1700.850.jpg",
    "/assets/img/moxibustion-cones-moxa-treatment-points-top-needles.webp",
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-[#EAF0F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-12">
          {images.map((src, idx) => (
            <div
              key={idx}
              onClick={() => {
                setIndex(idx);
                setOpen(true);
              }}
              className="overflow-hidden rounded-[7px]! shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <img
                src={src}
                alt={`Service ${idx + 1}`}
                className="w-full h-[250px] rounded-[7px]! object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={images.map((src) => ({ src }))}
            carousel={{ finite: false }}
            animation={{ fade: 300, swipe: 400 }}
            styles={{
              container: {
                backgroundColor: "rgba(0,0,0,0.9)",
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ServiceGallery;
