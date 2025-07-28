import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../features/cart/cartSlice";

function QuantitySelector({product}) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(product.id));
  };

  return (
    <div>
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
    </div>
  );
}

export default QuantitySelector;
