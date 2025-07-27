import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.js";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/product", element: <ProductsPage /> },
  { path: "/product/:productId", element: <ProductPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
