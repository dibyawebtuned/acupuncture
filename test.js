// components/Services.js
"use client";

import React from "react";
import { FaLeaf, FaSpa, FaGem, FaCircleNotch } from "react-icons/fa";
import clsx from "clsx"; // ✅ Helps safely combine Tailwind classes

const servicesData = [
  {
    icon: <FaLeaf size={32} />,
    title: "Acupuncture",
    description: "A gentle approach that uses fine, single-use sterile needles.",
    features: ["Fine, sterile needles", "Comfort-first approach"],
    link: "/signature-facials",
  },
  {
    icon: <FaSpa size={32} />,
    title: "Chinese Herbal Medicine",
    description:
      "Individually selected herbal formulations may be used to support general health.",
    features: ["Individually selected herbs", "Safety-checked with meds"],
    link: "/body-scrubs",
  },
  {
    icon: <FaGem size={32} />,
    title: "Facial Acupuncture",
    description:
      "A whole-person approach that includes facial points alongside body points.",
    features: ["Needle-only (no fillers)", "Whole-person focus"],
    link: "/body-scrubs",
  },
  {
    icon: <FaCircleNotch size={32} />,
    title: "Massage & Cupping",
    description:
      "Manual techniques that many people use for relaxation and short-term relief of muscle tightness.",
    features: ["Relaxation-focused options", "Clear consent & aftercare"],
    link: "/reflexology",
  },
];

const Services = ({
  bgClass = "bg-[#ebe9e4]", 
  cardTheme = {
    baseBg: "bg-white",
    baseText: "text-gray-700",
    icon: "text-blue-700",
    hoverBg: "hover:bg-blue-700",
    hoverText: "group-hover:text-white",
  },
}) => {
  return (
    <section className={clsx("section_services py-10", bgClass)}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Our <em>Treatments</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap -mx-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="w-full xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
            >
              <div
                className={clsx(
                  "service_card group p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full cursor-pointer",
                  cardTheme.baseBg,
                  cardTheme.baseText,
                  cardTheme.hoverBg
                )}
              >
                {/* Card Body */}
                <div className="flex flex-col grow">
                  {/* Icon */}
                  <div
                    className={clsx(
                      "mb-4 transition-colors duration-300",
                      cardTheme.icon,
                      cardTheme.hoverText
                    )}
                  >
                    {service.icon}
                  </div>

                  {/* Title + Description */}
                  <h3
                    className={clsx(
                      "text-lg sm:text-xl font-semibold mb-2 transition-colors duration-300",
                      cardTheme.hoverText
                    )}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={clsx(
                      "text-sm sm:text-base text-gray-600 transition-colors duration-300",
                      cardTheme.hoverText
                    )}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul
                    className={clsx(
                      "list-disc pl-5 my-4 space-y-1 text-gray-700 transition-colors duration-300",
                      cardTheme.hoverText
                    )}
                  >
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={clsx(
                          "transition-colors duration-300",
                          cardTheme.hoverText
                        )}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View More Link */}
                <a
                  href={service.link}
                  className={clsx(
                    "mt-auto font-semibold text-sm sm:text-base transition-colors duration-300",
                    cardTheme.icon,
                    cardTheme.hoverText
                  )}
                >
                  View More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
