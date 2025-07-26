import React, { useState } from "react";
import Drawer from "./Drawer";
import { ShoppingCart } from "lucide-react";

function CartDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <button
        className="border border-zinc-300 px-2.5 py-1.5 pe-4 relative"
        onClick={() => setIsDrawerOpen(true)}
      >
        <span className="absolute -top-0 right-0 bg-orange-500 p-0.5 px-1 text-xs text-white">
          1
        </span>
        <ShoppingCart strokeWidth={1} />
      </button>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Cart"
        position="right"
      ></Drawer>
    </>
  );
}

export default CartDrawer;
