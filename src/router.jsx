import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TakeAway from "./pages/TakeAway";
import SecondHand from "./pages/SecondHand";
import ProductDetails from "./pages/ProductDetails";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const base = import.meta.env.DEV ? "/" : "/GreenCycle/";

export default function AppRouter() {
  return (
    <BrowserRouter basename={base}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/takeaway" element={<TakeAway />} />
        <Route path="/secondhand" element={<SecondHand />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/checkout/:id" element={<Checkout />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
