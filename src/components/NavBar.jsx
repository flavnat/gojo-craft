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
      <ul className="flex md:gap-x-8 gap-x-5 uppercase items-center justify-center flex-wrap space-y-4">
        {navLinks.map((item) => {
          const isActive = location.pathname === item.link;
          return (
            <li key={item.name}>
              <Link
                to={item.link}
                className={`hover:underline md:text-base text-sm  transition ${
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
