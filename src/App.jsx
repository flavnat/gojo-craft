// src/App.jsx
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import ShopPage from "./pages/ShopPage";
import ShopDetailPage from "./pages/ShopDeatilPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage"; // ✅ import the contact page

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:slug" element={<ShopDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> {/* ✅ contact route */}
      </Routes>
    </>
  );
}

export default App;
