import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import CartCheckoutCard from "./CartCheckoutCard";
import CartProducrCard from "./CartProducrCard";
import Drawer from "./Drawer";
import { toggleDrawer } from "../features/cart/cartSlice";

function CartDrawer() {
  const dispatch = useDispatch()
  const isDrawerOpen = useSelector((state) => state.cart.cartDrawer)
  const cart = useSelector((state) => state.cart);
  const subTotal = useSelector((state) => state.cart.totalAmount);
  console.log("isDrawerOpen", isDrawerOpen)
  return (
    <>
      <button
        className="border border-zinc-300 px-2.5 py-1.5 pe-4 relative"
        onClick={() => dispatch(toggleDrawer())}
      >
        <span className="absolute -top-0 right-0 bg-orange-500 p-0.5 px-1 text-xs text-white">
          {cart.items?.length || 0}
        </span>
        <ShoppingCart strokeWidth={1} />
      </button>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => dispatch(toggleDrawer())}
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

        {cart.items && cart.items.length > 0 ? (
          <CartCheckoutCard subTotal={subTotal}/>
        ) : null}
      </Drawer>
    </>
  );
}

export default CartDrawer;
