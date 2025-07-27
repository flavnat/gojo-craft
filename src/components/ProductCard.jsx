import { useDispatch } from "react-redux";
import { Link } from "react-router"; // Fix import
import { addToCart } from "../features/cart/cartSlice";

function ProductCard({ image, description, name, price, product }) {
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart({
      ...product,
      price: parseFloat(product.price) // Ensure price is number
    }));
  };

  return (
    <div className="space-y-2">
      {/* image */}
      <Link to={`/product/${product.id}`}> {/* Use dynamic ID */}
        <div className="overflow-hidden bg-zinc-100 p-5">
          <img src={image} alt={name} className="w-full h-40 object-cover" />
        </div>
      </Link>
      {/* description */}
      <div className="space-y-1 p-2">
        <p className="text-lg font-semibold">{name}</p> {/* Fix class */}
        <p className="text-xs">{description}</p>

        <div className="flex justify-between mt-4">
          <p className="text-lg font-semibold">${parseFloat(price).toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className="border px-2 py-1 text-xs uppercase rounded-2xl"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;