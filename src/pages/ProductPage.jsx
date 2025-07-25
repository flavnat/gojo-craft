import React from "react";
import NavBar from "../components/NavBar";
import { Star } from "lucide-react";

function ProductPage() {
  return (
    <>
      <NavBar />
      <div className="mt-10 w-[80%] m-auto">
        <div className="grid grid-cols-2 gap-x-2">
          {/* image */}
          <div className="overflow-hidden">
            <img
              src="/products/product-2.avif"
              alt="Genuine Leather Shoulder Bag"
              className="w-full h-96 md:h-[500px] object-cover"
            />
          </div>
          {/* description */}
          <div className="p-4">
            <h1 className="text-2xl font-semibold">
              Genuine Leather Shoulder Bag
            </h1>
            <p className="text-zinc-500 text-sm">
              Hand-stitched in Addis Ababa using locally sourced leather.
            </p>
            <div className="mt-4">
              <div className="flex items-center gap-x-1 text-xs">
                <Star strokeWidth={0.6} size={16} />
                <Star strokeWidth={0.6} size={16} />
                <Star strokeWidth={0.6} size={16} />
                <Star strokeWidth={0.6} size={16} />
                <span className="">(125 reviews)</span>
              </div>
            </div>
            <hr className="text-zinc-400 mb-6 mt-2" />
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold">$960.99</h2>
              <button className="text-sm border px-2 py-1">
                save 15% with discounts
              </button>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-sm text-zinc-600">quantity</p>
                <div className="flex items-center justify-center border rounded-xl border-zinc-400 gap-2 max-w-[120px] mx-auto">
                  <button className="w-8 h-8 rounded-full  flex items-center justify-center text-lg font-medium transition-colors duration-200 focus:outline-none">
                    -
                  </button>

                  <input
                    type="number"
                    min="1"
                    className="size-8 text-center  rounded-md focus:outline-none "
                  />

                  <button className="w-8 h-8 rounded-full flex items-center justify-center text-lg font-medium transition-colors duration-200 focus:outline-none">
                    +
                  </button>
                </div>
              </div>

              <div>
                <button className="bg-amber-600 text-white px-4 text-lg w-full rounded-3xl py-1">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
