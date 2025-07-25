import { Funnel } from "lucide-react";
import NavBar from "../NavBar";
import ProductCard from "../ProductCard";
import { Link } from "react-router";
const products = [
  {
    image: "../public/./products/product-3.jpg",
    name: "Genuine Leather Shoulder Bag",
    description: "Hand-stitched in Addis Ababa using locally sourced leather.",
    price: "$960.99",
  },
  {
    image: "../public/./products/product-1.avif",
    name: "Genuine Leather Shoulder Bag",
    description: "Hand-stitched in Addis Ababa using locally sourced leather.",
    price: "$960.99",
  },
  {
    image: "../public/./products/product-2.avif",
    name: "Genuine Leather Shoulder Bag",
    description: "Hand-stitched in Addis Ababa using locally sourced leather.",
    price: "$960.99",
  },
  {
    image: "../public/./products/product-3.jpg",
    name: "Genuine Leather Shoulder Bag",
    description: "Hand-stitched in Addis Ababa using locally sourced leather.",
    price: "$960.99",
  },
  {
    image: "../public/./products/product-3.jpg",
    name: "Genuine Leather Shoulder Bag",
    description: "Hand-stitched in Addis Ababa using locally sourced leather.",
    price: "$960.99",
  },
  {
    image: "../public/./products/product-3.jpg",
    name: "Genuine Leather Shoulder Bag",
    description: "Hand-stitched in Addis Ababa using locally sourced leather.",
    price: "$960.99",
  },
];
export default function ProductsPage() {
  return (
    <>
      <NavBar />

      <div className="mt-10">
        <div className="flex justify-between mt-10 items-center px-2">
          <h1 className="text-2xl font-semibold uppercase">All Crafts</h1>

          <div>
            <button className="flex items-center gap-x-2 capitalize">
              <span>filter</span>
              <span>
                <Funnel strokeWidth={1.2} size={20} />
              </span>
            </button>
          </div>
        </div>

        {/* Product Grid */}

        <div className="grid grid-cols-4 gap-x-6 gap-y-10 mt-5">
          {products.map((product) => (
            <Link to={"/product/1"}>
              <ProductCard
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
