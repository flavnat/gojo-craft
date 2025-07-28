import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Star } from "lucide-react";
import { useParams } from "react-router";
import QuantitySelector from "../components/QuantitySelector";
import { addToCart, toggleDrawer } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import Breadcrumb from "../components/BreadCrumb";
import { products } from "../../mock/mockProducts";

function ShopDetailPage() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find((product) => product.slug == slug);
    setProduct(found);
  }, [slug]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        price: parseFloat(product.price),
      })
    );
  };

  return (
    <div className="mt-10 w-[90%] md:w-[80%] mx-auto">
      <Breadcrumb />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Image Section */}
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 md:h-[500px] object-cover rounded-xl"
          />
        </div>

        {/* Description Section */}
        <div className="p-2 md:p-4 space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold">{product.name}</h1>
          <p className="text-zinc-600 text-sm md:text-base">{product.description}</p>

          <div className="flex items-center gap-x-1 text-xs">
            {[...Array(4)].map((_, i) => (
              <Star key={i} strokeWidth={0.6} size={16} />
            ))}
            <span className="text-zinc-500">(125 reviews)</span>
          </div>

          <hr className="text-zinc-400" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h2 className="text-2xl md:text-3xl font-semibold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(product.price)}
            </h2>
            <button className="text-sm border px-2 py-1 rounded-lg hover:bg-zinc-100 transition">
              Save 15% with discounts
            </button>
          </div>

          <div className="pt-4">
            <button
              className="w-full bg-black text-white rounded-3xl py-2 text-lg hover:opacity-90 transition"
              onClick={() => {
                handleAddToCart();
                dispatch(toggleDrawer());
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopDetailPage;
