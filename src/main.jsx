import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import "./index.css";
import ShopDetailPage from "./pages/ShopDeatilPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import { store } from "./store.js";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/shop", element: <ShopPage /> },
  { path: "/shop/:slug", element: <ShopDetailPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
