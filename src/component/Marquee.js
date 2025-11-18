"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  const items = [
    "Chinese Herbal Medicine",
    "Constitutional Facial Acupuncture",
    "Acupuncture",
    "Women’s Health Support",
    "Fertility & IVF Support",
    "Musculoskeletal Pain Relief",
    "Massage Therapy",
    "Cupping Therapy",
    "Sound Therapy",
    "Holistic Wellness",
    "Stress Reduction",
    "Natural Healing",
    "Personalized Treatment Plans",
    "Quality Herbal Formulations",
    "Professional, Safe Care",
  ];

  return (
    <section
      className="section_marquee"
      style={{ background: "#0b3d91", color: "white", padding: "1rem 0" }}
    >
      <Marquee gradient={false} speed={50}>
        {items.map((item, index) => (
          <span
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: 600,
              whiteSpace: "nowrap",
              letterSpacing: "0.3px",
            }}
          >
            <span
              style={{
                margin: "0 1.5rem",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {item}
            </span>

            {/* Divider except after last item */}
            {index !== items.length - 1 && (
              <span
                style={{
                  margin: "0 1.5rem",
                  opacity: 0.4,
                  fontSize: "0.9rem",
                }}
              >
                |
              </span>
            )}
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
