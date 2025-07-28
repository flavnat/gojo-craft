import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

function CartProductCard({ image, name, price, product }) {
  const dispatch = useDispatch();

  console.log("product", product);

  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(product.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="grid grid-cols-3 space-x-4 items-center px-2 border-t border-b py-2">
      {/* image */}
      <div className="overflow-hidden p-3">
        <img src={image} alt={name} className="h-20 w-44 object-cover" />
      </div>

      {/* description */}
      <div className="flex flex-col capitalize col-span-2">
        <div className="space-y-0.5">
          <h1 className="hover:underline cursor-pointer">{name}</h1>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price * product.quantity)}{" "}
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDecrease}
              className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-lg font-bold hover:bg-gray-100"
            >
              -
            </button>
            <span className="text-sm">{product.quantity}</span>
            <button
              onClick={handleIncrease}
              className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-lg font-bold hover:bg-gray-100"
            >
              +
            </button>
          </div>
          <button
            onClick={handleRemove}
            className="text-sm cursor-pointer text-red-700 hover:text-red-500"
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
