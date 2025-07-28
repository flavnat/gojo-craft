import { useDispatch } from "react-redux";
import { Link } from "react-router"; // Fix import
import { addToCart } from "../features/cart/cartSlice";
import { toggleDrawer } from "../features/cart/cartSlice";

function ProductCard({ image, description, name, price, product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        price: parseFloat(product.price), // Ensure price is number
      })
    );
  };

  return (
    <div className="flex flex-col shadow-sm rounded-lg overflow-hidden h-full min-h-[340px]">
      {/* image */}
      <Link to={`/shop/${product.slug}`}>
        <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </Link>

      {/* content */}
      <div className="flex flex-col flex-grow justify-between p-4">
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-xs text-gray-600 mt-1">{description}</p>
        </div>

        {/* price & button */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </p>
          <button
            onClick={() => {
              handleAddToCart();
              dispatch(toggleDrawer());
            }}
            className="border px-3 py-1 text-xs cursor-pointer uppercase rounded-2xl hover:bg-black hover:text-white transition"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
