import React from "react";
import { Link } from "react-router";
function Hero() {
  return (
    <div className="relative w-full md:h-[90vh] md:py-0 py-20 overflow-hidden shadow-lg">
      {/* Background Image */}
      <img
        src="/hero01.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/70 to-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 items-center h-full px-6 md:px-20 text-white">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Authentic Ethiopian Handmade Crafts
          </h1>
          <h2 className="text-zinc-200 text-base md:text-lg">
            Discover the artistry and tradition of Ethiopia. Support local
            artisans and help preserve cultural craftsmanship.
          </h2>
          <button className="bg-white text-black text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:bg-zinc-200 transition-all duration-300">
            <Link to={"/shop"}>Shop Now</Link>
          </button>
        </div>
        <div className="hidden md:block" />
      </div>
    </div>
  );
}

export default Hero;
