import { ShoppingCart } from "lucide-react";
import React from "react";
import CartDrawer from "./CartDrawer";

export default function NavBar() {
  return (
    <nav className="flex justify-center w-full">
      <ul className="flex gap-x-8 uppercase items-center justify-center">
        <li>shop</li>
        <li>about</li>
        <li className="">contact</li>
        <CartDrawer />
      </ul>
    </nav>
  );
}
