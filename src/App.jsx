import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import AboutusPage from "./pages/AboutusPage";
import Contactpage from "./pages/Contactpage";
import HomePage from "./pages/HomePage";
import ShopDetailPage from "./pages/ShopDeatilPage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:slug" element={<ShopDetailPage />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/contact" element={<Contactpage />} /> 
      </Routes>
    </>
  );
}

export default App;
