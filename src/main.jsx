import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import ProductPage from "./components/pages/ProductPage.jsx";
import ProductsPage from "./components/pages/ProductsPage.jsx";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/product", element: <ProductsPage /> },
  { path: "/product/:productId", element: <ProductPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
