// components/Marquee.js
"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  const items = [
    "Stamp Duty",
    "Refinancing",
    "Borrowing Capacity",
    "Repayment",
    "Loan Comparison",
    "Budget Planner",
  ];

  return (
    <section className="section_marquee" style={{ background: "#0b3d91", color: "white", padding: "1rem 0" }}>
      <Marquee gradient={false} speed={50}>
        {items.map((item, index) => (
          <span
            key={index}
            style={{
              marginRight: "3rem",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
