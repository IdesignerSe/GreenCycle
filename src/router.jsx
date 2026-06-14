import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import TakeAway from "./pages/TakeAway";
import SecondHand from "./pages/SecondHand";
import ProductDetails from "./pages/ProductDetails";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

const base = import.meta.env.DEV ? "/" : "/GreenCycle/";

export default function AppRouter() {
  return (
    <BrowserRouter basename={base}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="takeaway" element={<TakeAway />} />
          <Route path="secondhand" element={<SecondHand />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:id" element={<ArticleDetail />} />
          <Route path="checkout/:id" element={<Checkout />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
