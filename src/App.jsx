import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
// import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ShopDetailPage from "./pages/ShopDeatilPage";
import ShopPage from "./pages/ShopPage";
import Contactpage from "./pages/Contactpage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:slug" element={<ShopDetailPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/contact" element={<Contactpage />} /> 
      </Routes>
    </>
  );
}

export default App;
