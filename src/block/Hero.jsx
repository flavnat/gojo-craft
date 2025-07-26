import React from "react";
function Hero() {
  return (
    <div className="w-full max-h-dvh mt-10 grid grid-cols-2 items-center">
      {/* text */}
      <div className="space-y-2 text-center">
        <h1 className="text-6xl font-semibold">
          Authentic Ethiopian Handmade Crafts
        </h1>
        <h2 className="text-zinc-500 text-base">
          Discover the artistry and tradition of Ethiopian and Support local
          artisans also preserve traditional craftsmanship
        </h2>
        <button className="border text-2xl px-7 py-1 rounded-4xl mt-5">shop</button>
      </div>
      {/* image */}
      <div>
        <img src="../public/./hero.jpg" alt="" />
      </div>
    </div>
  );
}

export default Hero;
