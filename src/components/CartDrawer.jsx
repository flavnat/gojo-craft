import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Drawer from "./Drawer";
import CartProducrCard from "./CartProducrCard";

function CartDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  console.log(cart.items);
  
  return (
    <>
      <button
        className="border border-zinc-300 px-2.5 py-1.5 pe-4 relative"
        onClick={() => setIsDrawerOpen(true)}
      >
        <span className="absolute -top-0 right-0 bg-orange-500 p-0.5 px-1 text-xs text-white">
          {cart.items?.length || 0}
        </span>
        <ShoppingCart strokeWidth={1} />
      </button>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={`cart ${cart.items?.length > 0 ? `(${cart.items.length})` : ""}`}
        position="right"
      >
        {cart.items && cart.items.length > 0 ? (
          cart.items.map((item) => (
            <CartProducrCard
              key={item.id} 
              image={item.image}
              name={item.name}
              price={item.price}
              product={item}
            />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </Drawer>
    </>
  );
}

export default CartDrawer;