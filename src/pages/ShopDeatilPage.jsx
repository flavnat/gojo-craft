import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Star } from "lucide-react";
import { useParams } from "react-router";
import QuantitySelector from "../components/QuantitySelector";
import { addToCart, toggleDrawer } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import Breadcrumb from "../components/BreadCrumb";

const products = [
  {
    id: 1,
    slug: "genuine-leather-shoulder-bag",
    image: "../public/./products/product-3.jpg",
    name: "Genuine Leather Shoulder Bag",
    description: "Hand-stitched in Addis Ababa using locally sourced leather.",
    price: 960.99,
    category: "clothing_textiles",
    inStock: true,
  },
  {
    id: 2,
    slug: "ethiopian-coffee-beans",
    image: "../public/./products/product-1.avif",
    name: "Ethiopian Coffee Beans",
    description: "Premium organic coffee beans from the highlands of Ethiopia.",
    price: 24.99,
    category: "food_beverages",
    inStock: true,
  },
  {
    id: 3,
    slug: "handwoven-traditional-scarf",
    image: "../public/./products/product-2.avif",
    name: "Handwoven Traditional Scarf",
    description:
      "Beautifully crafted scarf with traditional Ethiopian patterns.",
    price: 89.99,
    category: "clothing_textiles",
    inStock: false,
  },
  {
    id: 4,
    slug: "silver-tribal-necklace",
    image: "../public/./products/product-3.jpg",
    name: "Silver Tribal Necklace",
    description:
      "Authentic Ethiopian silver jewelry with cultural significance.",
    price: 156.5,
    category: "jewelry_accessories",
    inStock: true,
  },
  {
    id: 5,
    slug: "handcrafted-wooden-bowl",
    image: "../public/./products/product-3.jpg",
    name: "Handcrafted Wooden Bowl",
    description: "Traditional wooden bowl carved by Ethiopian artisans.",
    price: 45.0,
    category: "woodcraft",
    inStock: true,
  },
  {
    id: 6,
    slug: "ceramic-coffee-pot",
    image: "../public/./products/product-3.jpg",
    name: "Ceramic Coffee Pot",
    description:
      "Traditional Ethiopian coffee pot (jebena) made from local clay.",
    price: 32.99,
    category: "pottery",
    inStock: true,
  },
  {
    id: 7,
    slug: "ethiopian-art-painting",
    image: "../public/./products/product-3.jpg",
    name: "Ethiopian Art Painting",
    description: "Beautiful landscape painting by local Ethiopian artist.",
    price: 299.99,
    category: "paintings_artwork",
    inStock: true,
  },
  {
    id: 8,
    slug: "handmade-cushion-cover",
    image: "../public/./products/product-3.jpg",
    name: "Handmade Cushion Cover",
    description: "Colorful cushion cover with traditional Ethiopian designs.",
    price: 39.99,
    category: "home_decor",
    inStock: false,
  },
];

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
        price: parseFloat(product.price), // Ensure price is number
      })
    );
  };

  return (
    <>
      <div className="mt-10 w-[80%] m-auto">
        <Breadcrumb />
        <div className="grid grid-cols-2 gap-x-2 mt-8">
          {/* image */}
          <div className="overflow-hidden">
            <img
              src={product.image}
              alt="Genuine Leather Shoulder Bag"
              className="w-full h-96 md:h-[500px] object-cover"
            />
          </div>
          {/* description */}
          <div className="p-4">
            <h1 className="text-2xl font-semibold">{product.name}</h1>
            <p className="text-zinc-500 text-sm">{product.description}</p>
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
              <h2 className="text-3xl font-semibold">{product.price}</h2>
              <button className="text-sm border px-2 py-1">
                save 15% with discounts
              </button>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div></div>

              <div>
                <button
                  className="bg-amber-600 text-white px-4 text-lg w-full rounded-3xl py-1"
                  onClick={() => { handleAddToCart(); dispatch(toggleDrawer())}}
                >
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

export default ShopDetailPage
