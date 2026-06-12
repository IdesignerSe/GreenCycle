import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import TakeAway from "./pages/TakeAway";
import SecondHand from "./pages/SecondHand";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "24px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/takeaway" element={<TakeAway />} />
          <Route path="/secondhand" element={<SecondHand />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
