import NavBar from "./components/NavBar";
import { Route } from "react-router";
import ShopPage from "./pages/ShopPage";
import ShopDetailPage from "./pages/ShopDeatilPage";
import HomePage from "./pages/HomePage";
import { Routes } from "react-router";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:slug" element={<ShopDetailPage />} />
        {/* <Route path='/about' element={<AbouttPage />}/> */}
      </Routes>
    </>
  );
}

export default App;
