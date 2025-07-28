import React from "react";

function Fabrics() {
  return (
    <div className="relative m-auto md:mb-10 px-6 md:px-20 py-20 text-white overflow-hidden shadow-lg">
      <img
        src="/fabric1.jpg"
        alt="Fabric"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80 z-10" />

      <div className="relative z-20 space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold uppercase">
          Our Fabrics
        </h1>
        <p className="text-xs md:text-sm leading-6 md:w-8/12">
          All of our handcrafted products are meticulously crafted in Ethiopia.
          We take pride in weaving and dyeing our own fabrics to meet the
          highest quality standards, ensuring each piece in our collection
          reflects exceptional craftsmanship and cultural heritage.
        </p>
      </div>
    </div>
  );
}

export default Fabrics;
