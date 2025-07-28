import { ShoppingCart } from "lucide-react";
import React from "react";
import CartDrawer from "./CartDrawer";
import { Link, useLocation } from "react-router";

export default function NavBar() {
  const location = useLocation();

  const navLinks = [
    { name: "home", link: "/" },
    { name: "shop", link: "/shop" },
    { name: "about", link: "/about" },
    { name: "contact", link: "/contact" },
  ];

  return (
    <nav className="flex justify-center w-full py-4">
      <ul className="flex gap-x-8 uppercase items-center justify-center">
        {navLinks.map((item) => {
          const isActive = location.pathname === item.link;
          return (
            <li key={item.name}>
              <Link
                to={item.link}
                className={`hover:underline transition ${
                  isActive ? "underline font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <CartDrawer />
      </ul>
    </nav>
  );
}
