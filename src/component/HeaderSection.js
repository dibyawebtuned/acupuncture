"use client";

import React from "react";

const HeaderSection = ({ 
  title = "Page Title", 
  subtitle = "", 
  backgroundImage = "/default-bg.jpg", 
  heightClass = "h-[400px] sm:h-[500px]" 
}) => {
  return (
    <header
      className={`relative bg-cover bg-center ${heightClass} flex items-center justify-center text-center text-white`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 pt-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">{title}</h1>
        {subtitle && <p className="text-lg italic">{subtitle}</p>}
      </div>
    </header>
  );
};

export default HeaderSection;
